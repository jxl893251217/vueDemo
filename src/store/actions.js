import httpHelper from "../util/httpHelper"
import utils from '../util'
import * as types from './mutation-types.js'
import App from '../App'


export default {
	getUserInfo({commit,state},obj){
		let params = {};
		 httpHelper.get(obj.component,utils.url.indexHomePage,params,(data)=>{
        if(data.errorCode==0){
					commit(types.GET_USER_INFO,data.result);
				}  
          }, (err)=>{
              alert('shi bai')
          })
	},
	 saveName({commit,state}, msg) {
       commit(types.GET_USER_INFO,msg);
   },
   saveName2({commit,state}, msg) {
       commit(types.GET_USER_INFO,msg);
   },
   //获取导航栏
  getNavMenu({commit,state}) {
  	let result=
				[{type: 0, typeDesc: "首页",list:[
					{id:11,name:'店铺设置',path:'/shop/set'},
					{id:12,name:'店铺装修',path:'/shop/decorate'},
					{id:13,name:'个人资料',path:'/account/main'},
					{id:15,name:'子账号管理',path:'/account/manage'},
					{id:12,name:'我的收入',path:'/account/income'},
					]},
				{type: 1, typeDesc: "商品",list:[
					{name:'商品管理',path:'/goods/list'},
					{name:'分类管理',path:'/goods/classification'},
					{name:'限时折扣',path:'/goods/discount'},
					]},
				{type: 2, typeDesc: "订单",list:[{id:16,name:'订单管理',path:'/order'}]},
				{type: 3, typeDesc: "其他",list:[{id:17,name:'公众号管理',path:'/wechat/set'}]}
				]
		 commit(types.GET_NAV_MENU,result);		
  },
   //获取店铺信息
  getShop({commit},config={obj,callback:()=>{}}) {
  	let params = {};
		 httpHelper.get(config.obj.component,utils.url.getShop+'?id=15',params,(data)=>{
        if(data.errorCode==0){
        	if( config.callback!=undefined && typeof(config.callback)=='function')
        	{config.callback(data.result)}
					commit(types.GET_SHOP,data.result);
				}  
          }, (err)=>{
              alert('shi bai')
      })
  }


}