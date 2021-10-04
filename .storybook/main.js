const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: '/',
          loader: 'default',
        }),
      })
    );

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ];

    return config;
  },
  stories: ['../components/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
