const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');
const { name } = require('./package');

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  const singleSpaConfig = {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      publicPath: 'http://localhost:7103/' // 此处为子项目的域名+端口
    },
    externals: {
      'zone.js': 'Zone',
    },
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
