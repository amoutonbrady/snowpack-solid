const replace = require('@rollup/plugin-replace');

const mount = {
  src: '/',
};

const proxy = {
  /* ... */
};

const plugins = [
  '@snowpack/plugin-typescript',
  '@snowpack/plugin-babel',
  '@snowpack/plugin-postcss',
  [
    'snowpack-plugin-rollup-bundle',
    {
      emitHtmlFiles: true,
      preserveSourceFiles: false,
      entrypoints: ['build/index.js'],
      extendConfig(config) {
        config.outputOptions.manualChunks = undefined;
        config.inputOptions.plugins.push(
          replace({
            'import.meta.env.MODE': process.env.NODE_ENV === 'production',
          }),
        );
        return config;
      },
    },
  ],
];

const installOptions = {
  installTypes: true,
  NODE_ENV: true,
};

const alias = {
  /* */
};

const devOptions = {
  out: 'build',
  open: 'none',
  bundle: true,
  baseUrl: '',
};

const buildOptions = {
  clean: true,
};

module.exports = {
  mount,
  alias,
  proxy,
  plugins,
  installOptions,
  devOptions,
  buildOptions,
};
