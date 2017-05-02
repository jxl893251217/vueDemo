var config = require('../../config')
var port = process.env.PORT || config.dev.port
const env = process.env.NODE_ENV
const DEBUG = (env === "production")

const local = "http://localhost:"+port+"/"
let path = DEBUG ? '/api':local+'SibuXwsApi'
let json = DEBUG ? '/api':local+'SibuXwsApiJson'
let file = DEBUG ? '/api':local+'SibuXwsApiFile'
let cms  = DEBUG ? '/cms-api':local+'SibuXwsCmsApi/cms-api-uat'

const url =  {
  "sellerOrder": path+"/sellerOrder/page",  //订单列表
  "sellerOrderDetail":path+"/sellerOrder/get",//订单详情

  "categoryList":path+"/category/list",//卖家分类列表
  "categoryAdd":path+"/category/add",//添加卖家分类
  "categoryEdit":path+"/category/edit",//编辑卖家分类
  "categoryDelete":path+"/category/delete",//删除卖家分类

  "goodsAdd":path+"/goods/add",//添加卖家商品
  "goodsEdit":path+"/goods/edit",//编辑卖家商品
  "goodsDelete":path+"/goods/delete",//删除卖家商品
  "goodsGet":path+"/goods/get",//获取卖家商品详情
  "goodsList":path+"/goods/page",//分页商品列表
  "goodsAgent":path+"/goods/agent",//代理商品
  "goodsBatchUpAndDown":path+"/goods/batchUpAndDown",//批量上下架商品【0为上架，1为下架】
  "goodsAdd":path+"/goods/batchAddCategory",//添加卖家商品
  "goodsAddCategory":path+"/goods/add",//批量将商品添加到分类
  "goodsCancelAgent":path+"/goods/cancelAgent",//取消代理商品
  "saveUpdateSku":path+"/sku/saveUpdateSku",//添加卖家商品sku
  "listSkuByGoods":path+"/sku/listSkuByGoods",//获取商品sku
  "photoUpload":file+"/upload/photoUpload",//图片上传


  "attrValueAdd":path+"/attrValue/add",//添加卖家属性值
  "attrValueEdit":path+"/attrValue/edit",//编辑卖家属性值
  "attrValueDelete":path+"/attrValue/delete",//删除卖家属性值
  "attrValueList":path+"/attrValue/list",//某属性的属性值列表


  "attrList":path+"/attr/list",//获取卖家属性
  "attrAdd":path+"/attr/add",//添加卖家属性
  "attrEdit":path+"/attr/edit",//编辑卖家属性
  "attrDelete":path+"/attr/delete",//删除卖家属性
  "selectAttrList":path+"/attrValue/selectAttr",//获取属性及属性值列表


  "shopCreate":path+"/shop/create",//创建店铺
  "switchReductionMode":path+"/shop/switchReductionMode",//店铺库存扣减模式切换
  "switchReversePromise":path+"/shop/switchReversePromise",//店铺退货保障开关
  "switchTransactionPromise":path+"/shop/switchTransactionPromise",//店铺交易担保开关
  "updateAutoConfirm":path+"/shop/updateAutoConfirm",//店铺自动确认收货
  "updateShopName":path+"/shop/updateShopName",//店铺名称修改
  "updateShopImg":path+"/shop/updateShopImg",//店铺头像修改
  "getShop":path+"/shop/getShop",//获取店铺信息
  "updateShopPhone":path+"/shop/updateShopPhone",//店铺客服电话修改
  "getProfitTotal":path+"/profitTotal/get",//总收益信息获取
  "applyWithdrawCash":path+"/withdrawCash/apply",//申请提现
  "haveShop":path+"/shop/haveShop",//主播是否有店铺
  "withdrawCashList":path+"/withdrawCash/page",//提现记录分页



  "qualificationsAdd":path+"/qualifications/physicalStoreAuth/add",//新增实体店认证
  "qualificationsEdit":path+"/qualifications/physicalStoreAuth/edit",//修改实体店认证
  "qualificationsQuery":path+"/qualifications/physicalStoreAuth/query",//查询实体店认证
  "qualificationsQueryByShop":path+"/qualifications/physicalStoreAuth/queryByShop",//根据店铺去查询实体店认证
  "foodManagementAuthAdd":path+"/qualifications/foodManagementAuth/add",//新增食品经营认证
  "foodManagementAuthEdit":path+"/qualifications/foodManagementAuth/edit",//修改食品经营认证
  "foodManagementAuthQuery":path+"/qualifications/foodManagementAuth/query",//查询食品经营认证
  "foodManagementAuthQueryByShop":path+"/qualifications/foodManagementAuth/queryByShop",//根据店铺查询食品经营认证
  "publicationAuthAdd":path+"/qualifications/publicationAuth/add",//新增出版物认证
  "publicationAuthEdit":path+"/qualifications/publicationAuth/edit",//修改出版物认证
  "publicationAuthQuery":path+"/qualifications/publicationAuth/query",//查询出版物认证
  "publicationAuthQueryByShop":path+"/qualifications/publicationAuth/queryByShop",//根据店铺查询出版物认证
  "phonecardAuthAdd":path+"/qualifications/phonecardAuth/add",//新增电话卡审核
  "phonecardAuthEdit":path+"/qualifications/phonecardAuth/edit",//修改电话卡审核
  "phonecardAuthQuery":path+"/qualifications/phonecardAuth/query",//查询电话卡审核
  "phonecardAuthQueryByShop":path+"/qualifications/phonecardAuth/queryByShop",//根据店铺查询电话卡审核
  "physicalStoreAuthDel":path+"/qualifications/physicalStoreAuth/del",//删除实体店认证
  "foodManagementAuthDel":path+"/qualifications/foodManagementAuth/del",//删除食品经营认证
  "publicationAuthDel":path+"/qualifications/publicationAuth/del",//删除出版物认证
  "phonecardAuthDel":path+"/qualifications/phonecardAuth/del",//删除电话卡审核


  
}

module.exports = url
