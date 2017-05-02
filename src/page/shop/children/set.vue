<template>
	<div ui-view="" id="wrap" class="set-main">
    <div class="shop-set">
        <h2>店铺设置</h2>
        <div class="shopSet-wrapper">
          <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="减库存" name="first">
				    	<div class="shop_setting_container shop-set-stock">
							    <ul class="setting_items">
							        <li>
							            <el-radio class="radio" v-model="radio" label="0">拍下减库存</el-radio>
							            <p>买家拍下商品,库存数量就相应减少,24小时后仍未付款,恢复库存数量。</p>
							            <p>好处：保证买家只要拍下宝贝,就一定能买到</p>
							            <p>坏处：1)在库存紧张时,买家拍下之后不付款,会影响其他买家购买
							                <br>2)可能有人恶意占用库存,给店家造成损失</p>
							            <p>建议：库存充足的店家使用</p>
							        </li>
							        <li>
							             <el-radio class="radio" v-model="radio" label="1">付款减库存</el-radio>
							            <p>买家拍下商品，先预扣库存，如果15分钟内付款则减去库存；如果超过15分钟未付款，则释放库存。</p>
							            <p>好处：库存不会被长时间占用,当库存紧张时,真正想买的客户有更多机会买到宝贝</p>
							            <p>坏处：可能出现超卖,最后一个库存被多个客户同时付款,就需要店家和客户协商解决。微店会通过短信和订单详情页提醒的方式通知店家和客户</p>
							            <p>建议：库存紧张、需要防止被占用的店家使用</p>
							            <p>秒杀、限时折扣等活动商品不生效。</p>
							        </li>
							    </ul><a @click="save()" class="btn_save for_gaq">保存</a>
							</div>
				    </el-tab-pane>
				    <el-tab-pane label="行业模板" name="second">配置管理</el-tab-pane>
				    <el-tab-pane label="授权设置" name="third">角色管理</el-tab-pane>
				    <el-tab-pane label="可配送区域设置" name="fourth">定时任务补偿</el-tab-pane>
				  </el-tabs>
        </div>
    </div>
</div>
</template>

<script>
	import httpHelper from "../../../util/httpHelper"
	import utils from '../../../util'
	export default {
    data() {
      return {
        activeName: 'first',
        radio: window.localStorage.getItem('reductionMode')
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      save(){
      	switch(this.activeName){
      		case "first":
      			this.shopSet()
      		break;

      	}
      },
      shopSet(){
	        let _self = this; 
	        let params = {
	        	shopId:15,
	        	flag:this.radio
	        };  

	        httpHelper.post(_self,utils.url.switchReductionMode,params,(data)=>{
	        	if(data.errorCode==0){
	        	window.localStorage.setItem('reductionMode',this.radio)
	        	 this.$message({
				        message: data.errorMsg,
			          type: 'success'
			        });
	        	}
	        	else{
			         this.$message.error(data.errorMsg);
	        	}
         
	               
	          }, (err)=>{
	              console.log('shi bai')
	        })

	    	},
      
    }
  };
</script>

<style type="text/css" scoped>
.shop-set-stock .setting_items li {
    margin-bottom: 30px;
    padding: 0 30px;
}
.shop-set-stock .setting_items li div {
    margin-bottom: 20px;
}
.shop-set-stock .setting_items p {
    margin-left: 32px;
    padding-bottom: 10px;
}
.shop-set-stock .setting_items {
    padding-bottom: 20px;
    border-bottom: 1px dotted #666;
}

.shop-set-stock .btn_save {
    display: block;
    width: 165px;
    height: 40px;
    border-radius: 3px;
    background: #cd312d;
    margin-top: 30px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    margin-left: 62px;
}
</style>