const sharp = require('sharp')
const path = require('path')

const SRC = path.resolve(__dirname, '../public/axivo-logo.png')
const OUT = path.resolve(__dirname, '../public')
const BG  = { r: 10, g: 14, b: 26, alpha: 1 }

// Crop tightly around the "A" chevron (1024x1024 source, transparent bg)
const CROP = { left: 40, top: 245, width: 270, height: 465 }

// Step 1 — build a high-quality 512px master with Lanczos3
async function buildMaster() {
  const inner = Math.round(512 * 0.78)
  const cropped = await sharp(SRC)
    .extract(CROP)
    .resize(inner, inner, {
      fit: 'contain',
      kernel: sharp.kernel.lanczos3,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  return sharp({
    create: { width: 512, height: 512, channels: 4, background: BG },
  })
    .composite([{ input: cropped, gravity: 'centre' }])
    .png()
    .toBuffer()
}

// Step 2 — downsample FROM the 512px master (much better than from raw source)
async function generate(master, size, filename) {
  await sharp(master)
    .resize(size, size, {
      fit: 'cover',
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(path.join(OUT, filename))
  console.log(`✓ ${filename} (${size}x${size})`)
}

;(async () => {
  const master = await buildMaster()
  await sharp(master).toFile(path.join(OUT, 'favicon-512x512.png'))
  console.log('✓ favicon-512x512.png (512x512)')

  await generate(master, 180, 'apple-touch-icon.png')
  await generate(master, 32,  'favicon-32x32.png')
  await generate(master, 16,  'favicon-16x16.png')
  console.log('Done.')
})()
