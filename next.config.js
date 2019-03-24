const withPlugins = require('next-compose-plugins');
const withSASS = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const sass = [
  withSASS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
      camelCase: true,
    },
  },
];

const css = [withCSS, { cssModules: false }];
const plugins = [sass, css];

module.exports = withPlugins(plugins);
