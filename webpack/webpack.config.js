const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin"); // 赋予 webpack 处理 wasm 能力的插件

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  entry: './index.js',
  devServer: {
    port: '8082'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "../fibonacci/pkg")
    }),
    // Have this example work in Edge which doesn't ship `TextEncoder` or
    // `TextDecoder` at this time. 处理浏览器兼容问题
    new webpack.ProvidePlugin({
      TextDecoder: ['text-encoding', 'TextDecoder'],
      TextEncoder: ['text-encoding', 'TextEncoder']
    })
  ],
  mode: 'development',
  experiments: {
    asyncWebAssembly: true // 打开异步 WASM 功能
  }
};
