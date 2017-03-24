
var request = require('request');
var lib  =require('./service')

module.exports = function(app){
  app.get(['/SibuXwsApi/*'],function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsApi')
    if(index > -1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var options = lib.getOptions(url,'GET',req);
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info)
        res.json(info)
      }
    }
    request(options, callback);
  })

  app.get(['/SibuXwsCmsApi/*'],function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsCmsApi')
    if(index > -1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var options = lib.getCmsOptions(url,'GET',req);
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info)
        res.json(info)
      }
    }
    request(options, callback);
  })

  

}

