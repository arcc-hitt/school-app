export async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('/service-worker.js')
        console.log('SW registered:', reg)
      } catch (err) {
        console.error('SW registration failed:', err)
      }
    }
  }
  