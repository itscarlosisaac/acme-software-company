const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcDir =  path.resolve(__dirname, 'client')
const distDir = path.resolve(__dirname, 'dist');

module.exports = (env) => {

  const MiniCSSExtract = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })

  const CopyWebpack = new CopyWebpackPlugin([
    {from: path.resolve(srcDir, 'assets'), to: 'assets'},
    {from: path.resolve(srcDir, 'index.html'), to: distDir}
  ])

  const HMR = new webpack.HotModuleReplacementPlugin();

  return {
    mode: 'development',
    entry: './client/app.js',
    output: {
      filename: 'app.bundle.js',
      path: distDir
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test:  /\.js$/,
          exclude: /node_modules/
        },{
          test: /\.css/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath:'./'
            }
          }, 'css-loader']
        }
      ]
    },
    plugins: [CopyWebpack, HMR ],
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: distDir,
      watchContentBase: true,
      port: process.env.WEBPACK_SERVER_PORT
    }
  }

}
