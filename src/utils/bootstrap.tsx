import type { Component } from 'solid-js';
import { createComponent, render } from 'solid-js/web';

interface Provider {
  provider: Component;
  opts?: Record<string, any>;
}

/**
 * This utils function automatically merge the provider in the order they
 * were provided. It turns the following calls:
 *
 * const app = createApp(App)
 *
 * app.use(RouterProvider)
 * app.use(I18nProvider, { dict })
 * app.use(GlobalStoreProvider)
 *
 * app.mount('#app')
 *
 * into something like that:
 *
 * render(
 *   <RouterProvider>
 *     <I18nProvider dict={dict}>
 *       <GlobalStoreProvider>
 *         <App />
 *       </GlobalStoreProvider>
 *     </I18nProvider>
 *   </RouterProvider>,
 *   document.querySelector('#app')
 *  )
 */
function mergeProviders(app: Element, providers: Provider[]) {
  return providers.reduceRight(
    (application, { provider, opts }) => {
      return () =>
        // Basically creating the provider and nesting the previous
        // state of the App in it.
        createComponent(provider, {
          ...opts,

          get children() {
            return application() as Element;
          },
        });
    },
    () => app,
  );
}

export function createApp(app: unknown) {
  const providers: Provider[] = [];

  return {
    /**
     * Add a Provider to the app. The list of provider will be merged
     * at mount time.
     *
     * @param provider {Component} - The provider to add to the list
     * @param opts {Record<string, any>} - The optional options
     */
    use(provider: Component, opts?: Record<string, any>) {
      providers.push({ provider, opts });
    },
    /**
     * It first merges all the Providers and then uses the `render` function
     * to mount the application.
     *
     * @param dom {HTMLElement | string} - The element to mount your app on
     */
    mount(dom: HTMLElement | string) {
      const application = mergeProviders(app as Element, providers);
      const root = typeof dom === 'string' ? document.querySelector(dom) : dom;
      return render(application, root);
    },
  };
}
