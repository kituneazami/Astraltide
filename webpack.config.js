const path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  output: {
    path: path.resolve(__dirname, './static/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  }
};
