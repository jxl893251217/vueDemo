import {hex_md5,b64_md5} from '../util/md5';

var httpHelper = {};
var appSecret = '!Q@W#E$R'
httpHelper.get=function(vueComponent,httpUrl,params,successCallback,errCallback){	
	if(!params){
		params={}
	}
	//params.timestamp = timestamp.toString();
	//var newData = JSON.stringify(params) + "|" + appSecret;
	var options={};
	options.params=params;
	options.headers={'wesale-token':window.localStorage.getItem('token')};	
	
	vueComponent.$http.get(httpUrl,options).then(function(data){
		if(successCallback){
			successCallback(data.body)
		}	
	},function(err){
    console.log("请求失败，请重新操作")
		if(errCallback){
			errCallback(err)
		}
	})
}

httpHelper.post=function(vueComponent,httpUrl,params,successCallback,errCallback){
	vueComponent.$http.post(httpUrl,params).then(function(data){
		if(successCallback){
			successCallback(data.body)
		}	
	},function(err){
		if(errCallback){
			errCallback(err)
		}
	})
}


httpHelper.form=function(vueComponent,httpUrl,params,successCallback,errCallback){
	vueComponent.$http.post(httpUrl,params).then(function(data){
		if(successCallback){
			successCallback(data.body)
		}	
	},function(err){
		if(errCallback){
			errCallback(err)
		}
	})
}

export default httpHelper


