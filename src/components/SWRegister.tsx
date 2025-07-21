'use client'

import { useEffect } from 'react'
import { registerSW } from '@/utils/registerServiceWorker'

export default function SWRegister() {
  useEffect(() => {
    registerSW()
  }, [])
  return null
}
