'use client'
import { useState, useEffect } from 'react'

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    )
  }, [])
  return isMobile
}
