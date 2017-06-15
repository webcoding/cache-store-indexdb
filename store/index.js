
import { ServiceWorker } from './utils'

// ServiceWorker.register()

export default {
  ServiceWorker,
}


// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
