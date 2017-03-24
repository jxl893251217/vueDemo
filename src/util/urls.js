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
  
  "wechatJssdk"           : path+"/wechat/jssdk", //微信分享签名
  "indexHomePage"         : path+"/homepage/index", //首页
  "login_url"             : path+'/login/dologin', // 用户登录
  "shareRegister"         : path+'/user/shareRegister', // 用户登录
  "registerSms"           : path+'/user/registerSms', // 获取注册短信验证码
  "registerToken"         : path+'/user/getToken/', // 获取注册Token
  "weixinBindLogin"       : path+"/login/weixinBindLogin" , // 微信openid登录
  "removeWechat"          : path+"/member/removeWechat",    // 退出登录
  "serverTime"            : path+"/order/serverTime",  //当前服务器时间
  "resetPasswordSms"      : path+"/user/resetPasswordSms", // 获取重置密码验证短信
  "getTokenForPassword"   : path+"/user/getToken",// 获取token用于
  "checkResetPasswordSms" : path+"/user/checkResetPasswordSms",//验证手机号与验证码
  "resetPassword"         : path+"/user/resetPassword",// 重置密码
  "updateRealInfo"        : json+"/member/updateRealInfo",//修改用户实名信息
  "getParentUser"         : path+"/member/getParentUser", // 获取用户上级信息
  "memberRefresh"         : path+"/member/refresh", // 获取当前用户信息
  "memberCheckIn"         : path+"/member/checkIn", // 签到
  "updateBaseInfo"        : json+"/member/updateBaseInfo", // 修改用户基本信息
  "getBottomButtonIcon"   : path+"/homepage/getBottomButtonIcon", //查询app底部icon图标
  "scan"                  : path+"/anonymous/scan", //防伪认证
  "updateHead"            : file+"/member/updateHead", //修改头像
  "getMyReferrerUser"     : path+"/member/getMyReferrerUser ", //我的推荐人
  "checkUpgrade"          : path+"/member/checkUpgrade ", //上级审核升级
  "updateGender"          : path+"/member/updateGender ", //修改性别
  "updateQQ"              : path+"/member/updateQQ ", //修改qq
  "updateNickName"        : path+"/member/updateNickName ", //修改姓名
  "register"              : path+"/user/register",//快速注册
  "activateMember"        : path+"/member/activate",//激活用户
  "activateTypeList"      : path+"/member/activateTypeList",//激活类型列表
  "getApplyLevel"         : path+"/member/getApplyLevel" ,//查看申请经销商级别
  "listActivateLevel"     : path+"/credit/listActivateLevel" ,//获取可激活经销商列表
  "applyAgency"           : path+"/member/applyAgency",//申请经销商
  "getMyAdvertConfig"     : path+"/app/getMyAdvertConfig",//广告图接口
  "getSaleData"           : path+"/member/getSaleData" , //获取个人销售


  "addressGet"      : path+'/address/get/',// 单个地址
  "addressList"     : path+"/address/list",// 地址列表
  "addressAdd"      : path+"/address/add", // 添加地址
  "addressEdit"     : path+"/address/update/", // 编辑地址
  "addressDelete"   : path+"/address/delete/", // 删除地址
  "addressSearch"   : path+"/address/search/", // 搜索地址
  "addressDefault"  : path+"/address/getdefault/", // 默认地址

  "listProductCategories":path+'/category/listProductCategories', // 产品分类列表
  "productList":path+"/product/list", // 产品列表 、 零售产品列表
  "productGet":path+"/product/get/", // 产品详情
  "productSearch":path+"/product/search", // 产品搜索
  "getCategoryAdvertConfig":path+"/product/getCategoryAdvertConfig",//查询产品分类界面广告配置
  

  "searchRetailProducts"  : path+"/product/searchRetailProducts", //零售产品搜索 
  "retailOrderAdd"        : json+"/retailOrder/newOrder", //我的销售订单录入 
  "retailOrderEdit"       : json+"/retailOrder/update/", //我的销售订单修改
  "retailOrderList"       : path+"/retailOrder/list", //我的销售订单列表
  "retailOrderGet"        : path+"/retailOrder/get/", //我的销售订单详情
  "retailOrderCancel"     : path+"/retailOrder/cancel", //我的销售订单取消


  "listChildUsers"        :path+"/member/listChildUsers", // 合伙人列表
  "getChildUser"          :path+"/member/getChildUser", //合伙人信息
  "getChildUserReport"    :path+"/member/getChildUserReport", //销售对账单
  "getParentUserReport"   :path+"/member/getParentUserReport", //采购对账单
  "getLevelUserCount"     :path+"/credit/getLevelUserCount", // 获取每月的邀请的所有下级（各个级别）的用户数量[OK]
  "listInviteLevel"       :path+"/credit/listInviteLevel", //获取可邀请的等级列表
  "creditList"            :path+"/credit/list",//积分明细列表
  "listReferrerChildUsers":path+"/member/listReferrerChildUsers",//我的邀请列表

    //订单
  "listBuyerWaitingHandle"    :path+"/order/listBuyerWaitingHandle", // [买家]待处理
  "listBuyerWaitingPay"       :path+"/order/listBuyerWaitingPay", // [买家]待付款
  "listBuyerWaitingDeliver"   :path+"/order/listBuyerWaitingDeliver", // [买家]待发货
  "listBuyerDelivered"        :path+"/order/listBuyerDelivered", // [买家]已发货   
  "listBuyerReceived"         :path+"/order/listBuyerReceived", // [买家]已收货
  "listBuyerErrorOrders"      :path+"/order/listBuyerErrorOrders", // [买家]无效订单
  "listBuyerClosedOrders"     :path +"/order/listBuyerClosedOrders", //[买家已关闭订单]
  "orderCancel"               :path+"/order/cancel",//[买家]取消订单
  "cancelErrorOrder"          :path+"/order/cancelErrorOrder/",//[买家]下级会员取消无效订单
  "orderGet"                  :path+"/order/get/",//订单详情
  "confirmReceived2"          :path+"/order/confirmReceived2/",//[买家]确认收货[新]
  "orderSearch"               :path+"/order/search",//搜索订单
  "orderAdd"                  : json+"/order/add",//购物车下单
  "uploadPayImage"            : file+"/order/uploadPayImage/",//为一张订单上传付款凭证图片
  "orderPayImage"             : file+"/order/payImage",//为多张订单上传付款凭证口
  "orderPayOrder"             : json+"/order/payOrder",//为多张订单上传付款凭证
  "deletePayImage"            : path+"/order/deletePayImage",//[买家]为一张订单删除付款凭证图片
  "confirmUploadPay"          : path+"/order/confirmUploadPay",// [买家]为一张订单上传付款金额和备注



  "listSellerWaitingHandle"   :path+"/order/listSellerWaitingHandle", // [卖家]待处理
  "listSellerWaitingPay"      :path+"/order/listSellerWaitingPay", // [卖家]待付款
  "listSellerWaitingDeliver"  :path+"/order/listSellerWaitingDeliver", // [卖家]待发货
  "listSellerDelivered"       :path+"/order/listSellerDelivered", // [卖家]已发货
  "listSellerReceived"        :path+"/order/listSellerReceived", // [卖家]已收货
  "listSellerErrorOrders"     :path+"/order/listSellerErrorOrders", // [卖家]无效订单
  "listSellerClosedOrders"    :path +"/order/listSellerClosedOrders", //[卖家已关闭订单]
  "makeToErrorOrder"          :path+"/order/makeToErrorOrder/",// [卖家]上级会员标识无效订单
  "makeToWaitShip"            :path+"/order/makeToWaitShip/",// [卖家]上级会员取消标识无效订单
  "mergeOrder"                :json+"/order/mergeOrder",// [卖家]确认收款
  "confirmMoney"              :path+"/order/confirmMoney/",// [卖家]确认收款
  "confirmDeliver2"           :json+"/order/confirmDeliver2",// [卖家]确认发货[新]
  "orderConfirm"              :json+"/order/confirm",//[卖家]确认订单

  "messageListNotDo":path+"/message/listNotDo", // 小红点
  "listSystemNotices":path+"/message/listSystemNotices", // 系统通知
  "listSellerWaitCheckNotices":path+"/message/listSellerWaitCheckNotices", // 卖方_确认订单通知
  "listSellerWaitReceiveMoneyNotices":path+"/message/listSellerWaitReceiveMoneyNotices", // 卖方_待收款通知
  "listSellerWaitShipNotices":path+"/message/listSellerWaitShipNotices", // 卖方_待发货通知
  "listBuyerWaitPayNotices":path+"/message/listBuyerWaitPayNotices", // 买方_待付款通知
  "listBuyerHasShipNotices":path+"/message/listBuyerHasShipNotices", // 买方_已发货通知

  "tradeListOtherToMe"      :path+"/trade/listOtherToMe", // 别人返给我列表
  "tradeListMeToOther"      :path+"/trade/listMeToOther", // 我返给别人列表
  "tradeListOtherToMeMoney" :path+"/trade/listOtherToMeMoney", // 别人返给我明细
  "tradeListMeToOtherMoney" :path+"/trade/listMeToOtherMoney", // 我返给别人明细

  "licence"       :path+"/member/licence", //授权证书
  "saveAccount"   :path+"/member/saveAccount",//保存银行账户信息
  "accountInfo"   :path+"/member/accountInfo",//获取银行账户信息
  "supportBanks"  :path+"/member/supportBanks",//支持的银行列表


  "getComplain"       :path+"/feedBack/getComplain/",//产品使用反馈详情
  "feedBackList"      :path+"/feedBack/list", // 投诉上级 
  "feelSupportTypes"  :path+"/feedBack/supportTypes", // 支持的投诉类型
  "feelComList"       :path+"/feedBack/listComplains", // 产品使用反馈列表
  "feelComListType"   :path+"/feedBack/supportComplainTypes", // 产品使用反馈类型
  "feelAdd"           :path+"/feedBack/add", // 投诉建议
  "feedBackGet"       :path+"/feedBack/get/",//投诉建议详情
  "feedAddComplain"   :path+"/feedBack/addComplain",//产品使用反馈添加
  "feelAddImage"      :file+"/feedBack/addImage", // 投诉上级时，上传图片

    

  cmsNewestNotice       : cms+"/article/selectNewestNotice",//首页最新通知
  cmsParentFriendPro    : cms+"/friendCircle/profile",// 合伙人朋友圈配置
  cmsNewestArticleList  : cms+"/article/selectNewestArticleList", //最新发布的数据[type说明:1,课件 2,视频 3,公告 7,老吴朋友圈 8,海报 9,美文分享]
  cmsNoticeList         : cms+"/article/noticeList",// 公告列表
  cmsNoticeDetail       : cms+"/article/noticeDetail",// 公告详情
  cmsGoodList           : cms+"/article/goodArticleList", // 分页查询美文
  cmsGoodDetail         : cms+'/article/goodArticleDetail', // 美文详情
  cmsHotVideoList       : cms+"/article/hotVideoCategoryList",// 查看热门视频
  cmsVideoDetail        : cms+"/article/videoDetail",// 视频详情
  cmsVideoMore          : cms+"/article/videoList",// 查询视频(根据分类分页查询视频列表)
  
  cmsPosterHot          : cms+"/article/hotPosterThreeTop", // 热门海报
  cmsHotPosterList      : cms+"/article/hotPosterTopList", // 热门海报列表
  cmsFirstPosterList    : cms+"/article/posterFirstCategoryList", // 海报一级分类列表
  cmsSecondPoster       : cms+"/article/posterFirstCategoryDetail", // 获取海报一级分类下的二级分类
  cmsSecondDetail       : cms+"/article/posterSecondCategoryDetail", // 二级分类下的所有有海报
  cmsPosterDetail       : cms+"/article/posterDetail", //海报详情
  cmsSearch             : cms+"/article/search",// 搜索

  cmsCoursePro          : cms+"/article/courseProfile",// 培训课配置
  cmsCourseCate         : cms+"/article/courseCategoryList" , //培训课分类列表(不分页)
  cmsCourseList         : cms+"/article/listCourseByCategoryId",// 培训课(根据分类分页查询课程列表)
  cmsCourseDetail       : cms+"/article/courseDetail",// 培训课图片课件详情
  cmsCommentList        : cms+"/anonComment/listArticleComment", // 评论列表
  cmsPraiseList         : cms+"/articlePraise/list", // 点赞列表
  cmsAddCommentPraise   : cms+"/comment/praise", // 为评论点赞
  cmsAddCoursePraise    : cms+"/articlePraise/praise", // 为评论课点赞
  cmsAddCourseComment   : cms+"/comment/addArticleComment", // 发表评论

  cmsServerDate         : cms+"/article/serverDate",//服务器时间
  cmsLwFriendProfile    : cms+'/article/friendCircleProfile', // 朋友圈配置
  cmsLwFriendList       : cms+'/article/friendCircleList', // 朋友圈列表
  cmsLwFriendDetail     : cms+'/article/friendCircleDetail', // 朋友圈详情
  cmsTopFriendList      : cms+"/friendCircle/list",// 合伙人朋友圈列表
  cmsTopFriendDetail    : cms+"/friendCircle/detail",// 合伙人朋友圈详情
  cmsTopFriendComment   : cms+"/friendCircleAnonComment/listArticleComment",// 合伙人朋友圈评论列表
  cmsTopFriendPraise    : cms+"/friendCircleArticlePraise/list",// 合伙人朋友圈点赞列表
  cmsTopAddPraise       : cms+"/friendCircleArticlePraise/praise",// 合伙人朋友圈文章点赞
  cmsTopAddComment      : cms+"/friendCircleComment/addArticleComment",// 合伙人朋友圈文章添加评论


  cmsUseHelp            : cms+"/helpCenter/useHelp",//使用帮助
  cmsPartnerRule        : cms+"/helpCenter/partnerRule",//合伙人规则
  cmsGetInter           : cms+"/helpCenter/earnIntegral",// 如何赚取积分
  cmsUpgradeRule        : cms+"/helpCenter/upgradeRule",//等级升级规则
  xwsServiceAgreement   :cms+"/helpCenter/xwsServiceAgreement" ,//思埠新微商服务规则
  cmsQuestionList       : cms+"/article/questionCategoryList",// 一级问题列表
  cmsQuestionListByCate : cms+"/article/listQuestionByCategoryId",// 二级问题列表
  cmsQusetionDetail     : cms+"/article/questionDetail",// 问题详情


  cmsShortVCList        : cms+"/article/shortVideoCategoryList", // 短视频分类
  cmsShortVideoList     : cms+"/article/shortVideoList", // 短视频列表
  cmsShortVideoDetail   : cms+"/article/shortVideoDetail",// 短视频详情
  
}

module.exports = url
