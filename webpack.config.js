const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petgram -- tu app de fotos de mascotas',
      shortname: 'Petgram',
      description: 'Con petgram puede encontrar fotos de mascotas',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('assets/pets.png'),
          size: [92, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
