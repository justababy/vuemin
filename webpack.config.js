module.exports = function() {
  return require('./webpack.config.' + process.env.NODE_ENV + '.js')
}