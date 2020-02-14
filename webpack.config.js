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
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
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