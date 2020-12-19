module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    NODE_ENV: true,
  },
  devOptions: {
    out: 'build',
    open: 'none',
    bundle: true,
  },
  buildOptions: {
    clean: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
    [
      '@intrnl/snowpack-bundle-rollup',
      {
        minify: true,
        modulesDir: false,
      },
    ],
  ],
};
