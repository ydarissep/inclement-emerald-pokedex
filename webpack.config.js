const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
