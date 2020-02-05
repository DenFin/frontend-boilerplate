const path = require('path');
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'static'),
    compress: true,
    port: 9000,
    hot: true
  },
  mode: "development",
  context: path.join(__dirname, "/"),
  entry: ["./static/src/js/index.js", "./static/src/sass/index.sass"],
  output: {
    path: path.resolve(__dirname, 'static/dist/js'),
    filename: "bundle.js",
    publicPath: './static'
  },
  resolve: {
    extensions: ['.js', ".sass"],
    alias: {
      
    }
  },  
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }, 
        ]
      },
      {
          test: /.sass$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].css',
                outputPath: '../css/'
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
    ]
  },
  plugins: [ new webpack.HotModuleReplacementPlugin()]
}