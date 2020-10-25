import { Workbox } from 'workbox-window';

import { App } from './app';
import { createApp } from './utils/bootstrap';

const dispose = createApp(App).mount('#app');

/**
 * This bits of code is tree-shaken during build
 * It handles HMR by accepting the incomming changes
 * and removing the existing app in place.
 */
if (import.meta.env.MODE === 'development') {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}

// https://developers.google.com/web/tools/workbox/modules/workbox-window
if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');
  wb.register();
}
