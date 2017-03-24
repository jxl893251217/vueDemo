
const serverUrl = 'https://uatapi.sibumbg.cn'
// const cmsUrl = 'https://uatapi.sibumbg.cn'
const cmsUrl = "http://120.76.137.184:8080"

// 
// const serverUrl = "https://napi.sibumbg.cn"
// const cmsUrl = "http://120.76.137.184:8080"

/*
API     :    http://120.24.234.38:8553/
CMS-API : http://120.24.234.38:8553/cms-api/
*/
function getOptions(_path,method,req){
    // console.log(__dirname)
  var options = {
    method: method||'GET',
    url: serverUrl+_path,
    port: 443,
    rejectUnauthorized: false  , // 跳过https验证
    headers: {
      'User-Agent': 'request',
      'wesale-token' : req.headers['wesale-token'],
      'Content-Type': 'application/json',
    },
  }
  if(method === 'POST'){
    options.formData = req.body
  }
  return options
}

function getJsonOptions(_path,req,body){
  var options = {
    method: 'POST',
    url: serverUrl+_path,
    rejectUnauthorized: false  ,
    port: 443,
    headers: {
      'Content-Type': 'application/json',
      'wesale-token' : req.headers['wesale-token']
    },
    json:JSON.parse(body)
  }
  return options
}

function getCmsOptions(_path,method,req){
  var options = {
    method: method||'GET',
    url: cmsUrl+_path,
    headers: {
      'User-Agent': 'request',
      'wesale-token' : req.headers['wesale-token'],
      'Content-Type': 'application/json',
    }
  }
  if(method === 'POST'){
    options.formData = req.body
  }
  return options
}


const lib = {
  url : serverUrl,
  getOptions : getOptions,
  getJsonOptions :getJsonOptions,
  getCmsOptions:getCmsOptions
}

module.exports=lib

