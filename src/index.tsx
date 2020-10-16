import './tailwind.css'

import { App } from './app';
import { createApp } from './utils/bootstrap';

const app = createApp(App)
app.mount("#app");

/**
 * This bits of code is tree-shaken during build
 * It handles HMR by accepting the incomming changes
 * and removing the existing app in place.
 */
if (import.meta.env.MODE === 'development') {
  import.meta.hot.accept()
  import.meta.hot.dispose(app.dispose)
}
