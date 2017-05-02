
var request = require('request');
var lib  =require('./service')
const formidable = require('formidable')
formidable.encoding = 'utf-8';

module.exports = function(app){
  app.post(['/SibuXwsApi/*'],function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsApi')
    if(index >-1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var options = lib.getOptions(url,'POST',req);
    function callback(error, response, body) {
      var token = response.headers['wesale-token']
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        if(token){ 
          res.setHeader('wesale-token',token)
        }
        res.json(info)
      }
    }
   
    request(options, callback);    
  })
 
 
}

