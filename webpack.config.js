module.exports = {

  entry: './app/lib/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  module: {
    loaders:[
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ],
  }
};
