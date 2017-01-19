module.exports = {
  entry: {
    app: './app/app.js',
    // vendor: ['angular']
  },
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
