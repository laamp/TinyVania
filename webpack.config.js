const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.png$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.txt', '.png', '*']
  }
};
