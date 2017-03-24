
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
  app.post(['/SibuXwsApiJson/*'],function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsApiJson')
    if(index >-1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var body = ''
    // res.json({errorCode:99999,errorMsg:""})
    req.on('data',function(chunk){
      body+=chunk
    })
    req.on('end',function(){
      console.log(body)
      var options = lib.getJsonOptions(url,req,body);
      // console.log(options)
      // res.json({})
      // return
      function callback(error, response, body) {
        var token = response.headers['wesale-token']
        if (!error && response.statusCode == 200) {
          console.log(body)
          // var info = JSON.parse(body);
          // console.log(info)
          if(token) res.setHeader('wesale-token',token)
          res.json(body)
        }
      }
      request(options, callback); 
    })   
  })
  app.post(['/SibuXwsCmsApi/*'],function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsCmsApi')
    if(index >-1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var options = lib.getCmsOptions(url,'POST',req);
    function callback(error, response, body) {
      var token = response.headers['wesale-token']
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info)
        if(token) res.setHeader('wesale-token',token)
        res.json(info)
      }
    }
    request(options, callback);    
  })
}

