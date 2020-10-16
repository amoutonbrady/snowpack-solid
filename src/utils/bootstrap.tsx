import type { Component } from "solid-js";
import { createComponent, render } from "solid-js/dom";

export function createApp(app: Component) {
  const containers: { container: Component; opts?: Record<string, any> }[] = [];
  let root: HTMLElement;
  let dispose: () => void;

  const mergeContainers = () => {
    return containers.reduceRight(
      (a, { container, opts }) => {
        return () =>
          createComponent(container, {
            ...opts,

            get children() {
              return a();
            },
          });
      },
      () => app
    );
  };

  return {
    use(container: Component, opts?: Record<string, any>) {
      containers.push({ container, opts });
    },
    dispose() {
      dispose()
      root.textContent = '';
    },
    mount(
      dom: HTMLElement | string,
    ) {
      const application = mergeContainers();

      root = typeof dom === "string" ? document.querySelector(dom) : dom;
      dispose = render(application, root);

      return dispose
    },
  };
}