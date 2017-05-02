<template>
    <div>
        <headTop :shop-info="shopInfo"></headTop>
        <section class="content">
            <section class="breadcrumb">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/order' }">订单管理</el-breadcrumb-item>
                  <el-breadcrumb-item >{{title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </section>
            <section style="background:#ededed" >
                <div class="detail">
                    <p class="status p">当前订单状态：{{orderDetail.orderStatus}}</p>
                    <p class="">订单备注：</p>
                    <div class="buyer-info">
                        <div class="info-left ">
                            <p class="title p">买家信息：</p>
                            <div >姓名：{{orderDetail.buyerName}}
                                <br>联系方式：{{orderDetail.buyerPhone}}
                                <br>收货人地址：{{orderDetail.province}} {{orderDetail.city}} {{orderDetail.area}} {{orderDetail.address}}
                                <br>订单号：{{orderDetail.orderCode}}
                                <br>买家留言：{{orderDetail.buyerRemark}}
                                <br>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-info">
                    <tabs  :detail="orderDetail.orderGoods"/>
                </div>  
            </section>
        </section>
        
    </div>
</template>


<script>
import {mapState, mapActions} from 'vuex'
import httpHelper from "../../../util/httpHelper"
import utils from '../../../util'
import headTop from '../../../components/header/head.vue'
import tabs from '../coms/tabs.vue'
export default {
  data () {
    return {
        title:'订单详情页',
        orderDetail:{
            orderStatus:''
        }
    }
  },
   computed: {
    //映射State
    ...mapState([
        'shopInfo'
    ])
    },
 components: { headTop,tabs },
       
 mounted(){
    let _self=this;
    let obj={
        component:_self,
        readCache:true
    }
    this.$nextTick(function(){
        let {id}= this.$route.params
        this.getOrderDetail(id)
        this.getShop({obj,callback:(data)=>{
          }
        });
    })

 },
 methods:{
    ...mapActions({
        getShop:'getShop'
    }),
    getOrderDetail(id){         
        let _self = this; 
        let params = {};  
        let _params="?shopId=1&id="+id
        httpHelper.get(_self,utils.url.sellerOrderDetail+_params,params,(data)=>{
          
          let _detail=data.result.orderGoods;
          for(var i=0;i<_detail.length;i++){
            _detail[i].img='<img src="'+ _detail[i].imgUrl+'" />'
          }
          data.result.orderGoods=_detail
          this.orderDetail=data.result;
          }, (err)=>{
              console.log('shi bai')
          })

    },
 }


 
}
</script>
<style type="text/css" scoped>
.content{
    width: 1200px;
    margin:0 auto;
    border:1px solid #ddd;
}
.breadcrumb {
    text-indent: 20px;
    color: #404040;
    border-bottom: 1px solid #dcdcdc;
    font-size: 14px;
    background: #fff;
    padding: 20px 0;
}
.detail{
    width: 1088px;
    margin: 0px auto 0;
    padding: 0px 36px 0;
    border: 1px solid #ededed;
    color: #666;
    position: relative;
    background: #fff;
}
.detail  .buyer-info {
    margin-top: 35px;
    padding-top: 38px;
    border-top: 1px dashed #dcdcdc;
}
.detail  .buyer-info .info-left {
    width: 500px;
    margin-bottom: 32px;
    border-right: 1px solid #ededed;
}
.detail .p {
    font-size: 20px;
    padding-bottom: 20px;
}
.order-info {
    width: 1160px;
    margin: 30px auto 0;
    background: #fff;
}
</style>