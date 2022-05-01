const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry: './src/web/app.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    devMiddleware: {
      publicPath: "/dist",
      // writeToDist: true,
    },
    hot: true
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },

  plugins: [
    new VueLoaderPlugin(),
  ]
}