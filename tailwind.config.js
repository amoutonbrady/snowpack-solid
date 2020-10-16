module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: 'all',
  purge: ['src/**/*.tsx', 'public/index.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
