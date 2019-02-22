/**
 * @param {string} baseUrl 公共路径
 * @param {string} outputDir 输出目录
 * @param {string} assetsDir 用于嵌套生成静态资产的目录
 * @param {string} productionSourceMap 是否构建map文件
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const productionGzipExtensions = ['js', 'css'];
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://192.168.10.217:8282/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
    overlay: {
      warnings: true,
      errors: true,
    }, // 浏览器 overlay 同时显示警告和错误：
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
          sourceMap: false,
          parallel: true,
        }),
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // eslint-disable-line
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }
  },
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {}, // css预设器配置项
    modules: false, // 启用 CSS modules for all css / pre-processor files.
  },
  pwa: {
    name: 'WQ-PWA',
    themeColor: '#e03131',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js',
      // ...other Workbox options...
    },
  },
};
