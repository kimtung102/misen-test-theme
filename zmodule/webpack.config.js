const path = require('path');

module.exports = {
  entry: {
    'main': './main.js'
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: 'cw-[name].js'
  }
};
