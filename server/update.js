
var http = require('http')
var fs = require('fs');
var request = require('request');
var lib  =require('./service')
const formidable = require('formidable')
formidable.encoding = 'utf-8';
var boundaryKey = Math.random().toString(16); // random string

module.exports  = function(app){

  // 上传图片
  app.post('/SibuXwsApiFile/*',function(req,res){
    var paths = req.url.split('/')
    var url = req.url
    var index = paths.indexOf('SibuXwsApiFile')
    if(index >-1){
      paths.splice(index,1)
      paths = paths.join('/')
      url = paths
    }
    var form = new formidable.IncomingForm;
    form.parse(req,function(err, fields, files){
      if(err){
        res.json({code:-1,message:"上传失败"})
        return;
      }
      var file = files.file
      // var options = {
      //   host:'192.168.130.35', 
      //   port: 82,
      //   path: "api"+url,
      //   method: 'POST'
      // } 
      var options = {
        host:'120.24.65.223',
        port: 8081,
        path: url,
        method: 'POST'
      } 
      var reqHttps = http.request(options, function(resHttps) {
        resHttps.on('data', function(body) {

          var info = JSON.parse(body);
          console.log(info);
          res.json(info)
        });
      });

      data = fs.readFileSync(file.path);
      var crlf = "\r\n",
          boundaryKey = Math.random().toString(16),
          boundary = '--'+boundaryKey,
          delimeter = crlf+'--'+boundary,
          headers = [
            'Content-Disposition: form-data; name="file"; filename="'+file.name+'"' + crlf ,
            'Content-Type: '+file.type + crlf,
            // 'Content-Disposition: form-data; name="index"' + crlf + crlf + 0 + crlf,
            // crlf + delimeter + crlf,
          ],
          closeDelimeter = delimeter+"--",
          multipartBody;


      multipartBody = Buffer.concat([
        new Buffer(delimeter + crlf + headers.join('') + crlf),
        data,
        new Buffer(closeDelimeter)]
      );
      // console.log(multipartBody)
      reqHttps.setHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
      reqHttps.setHeader('Content-Length', multipartBody.length);
      reqHttps.setHeader('wesale-token', req.headers['wesale-token']);
      reqHttps.write(multipartBody);
      reqHttps.end();

      return 
      
      var payload = '------WebKitFormBoundary9qwjAJDYfkqPgI4g\r\n'
      + 'Content-Disposition: form-data; name="file"; filename="'+file.name+'"\r\n'
      + 'Content-Type: '+file.type+'\r\n\r\n'
      + '\r\n------WebKitFormBoundary9qwjAJDYfkqPgI4g\r\n'
      + 'Content-Disposition: form-data; name="index" \r\n\r\n0\r\n'
      + '------WebKitFormBoundary9qwjAJDYfkqPgI4g--\r\n'
      + 'Content-Transfer-Encoding: binary\r\n\r\n';

      var enddata  = '\r\n--' + boundaryKey + '--';

      console.log(payload)
      reqHttps.setHeader('Content-Type', 'multipart/form-data; boundary='+boundaryKey+'');
      reqHttps.setHeader('Content-Length', Buffer.byteLength(payload)+Buffer.byteLength(enddata)+file.size);
      reqHttps.write(payload);
      var fileStream = fs.createReadStream(file.path, { bufferSize: 4 * 1024 });
      fileStream.pipe(reqHttps, {end: false});
      fileStream.on('end', function() {
        reqHttps.end(enddata); 
      });
      
      reqHttps.on('error', function(e) {
        console.error("error:"+e);
      });

    })
    
  })
}