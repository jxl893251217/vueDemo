
module.exports = function(app){
  require('./update')(app)
  require('./get')(app)
  require('./post')(app)
}