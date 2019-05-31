const path = require('path');

module.exports = {
  entry: './src/main-electron.ts',
  target: 'electron-main',
  node: {
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }, 
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'main-electron.js'
  }
};