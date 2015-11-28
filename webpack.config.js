module.exports = {
  entry: {
    app: ['./public/javascripts/main']
  },
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
