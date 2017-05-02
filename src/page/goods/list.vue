<template>
	<section>
		<div class="cpc-item-list">
			<div class="cpc-item-list-title clear">
			    <div style="width:40%">商品描述</div>
			    <div>价格</div>
			    <div>销量</div>
			    <div>库存</div>
			    <div>分类</div>
			    <div>上架时间</div>
			    <div>操作</div>
			</div>
			<div class="cpc-items"  v-for="(item, index) in goodsList">
				<div class="list-content-item">
					<div class="cpc-item-main-con clear">
						<div class="cpc-item-cell" style="width:3%"> <el-checkbox v-model="index"></el-checkbox></div>
						<div class="cpc-item-cell" style="width:37%">
							<a class="cpc-item-image-desc">
								<div class="img">
						        <img :src="item.imageUrl" >
						    </div>
						    <div class="cpc-item-desc">
						        <div class="top">{{item.goodsName}}</div>
						        <div class="item-name ">{{item.brandName}}</div>
						    </div>
							</a>
						</div>
						<div class="cpc-item-cell">{{item.price}}</div>
						<div class="cpc-item-cell">销量</div>
						<div class="cpc-item-cell">{{item.goodsStock}}</div>
						<div class="cpc-item-cell">{{item.categoryId}}</div>
						<div class="cpc-item-cell">{{item.createDt}}</div>
						<div class="cpc-item-cell">
							<el-button type="primary" size="small" @click="handleEdit(index, item)">编辑</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script >
	import {mapState, mapActions} from 'vuex'
	import httpHelper from "../../util/httpHelper"
	import utils from '../../util'
	export default {
		data(){
			return{
				goodsList:[],
				page:{
					pageSize:4,
					currentPage:1
				},
				shopId:window.localStorage.getItem('shopId'),
				categoryId:'',
				checked :true
			}
		},
		methods:{
			getGoodsList(currentPage){
					currentPage=currentPage==undefined?this.page.currentPage:currentPage;
	        let _self = this; 
	        let params = {}; 
	        this.shopId=1 
	        let _params="?shopId="+ this.shopId+"&status=0&categoryId="+ this.categoryId+"&page.pageSize="+ this.page.pageSize+"&page.currentPage="+currentPage
	        httpHelper.get(_self,utils.url.goodsList+_params,params,(data)=>{
		        	if(data.errorCode==0)
		        	{
		        		this.goodsList=data.result.data;
		        		console.log(data)
		        	}
		        	else{
		        		this.$message.error(data.errorMsg);
		        	}   
	          }, (err)=>{
	            console.log('shi bai')
	        })

	    	},
	    	handleEdit:function (index, row){
          this.$router.push("/goods/add/"+row.id)
        }
		},
		components:{

		},
		mounted() {
			this.$nextTick(function(){
	      this.getGoodsList();
	    })
		}
	}
</script>

<style type="text/css" scoped>
.cpc-item-list {
    border: 1px solid #e6e6e6;
    margin-top: -1px;
    border-top-color: #fff;
    padding: 20px 24px;
    min-height: 422px;
}
.cpc-item-list-title {
    background-color: #fafafa;
    overflow: hidden;
    height: 45px;
}
.cpc-item-list-title div {
    float: left;
    line-height: 45px;
    width: 10%;
    position: relative;
    text-align: center;
    font-size: 14px;
}
.cpc-items .cpc-item-cell {
    float: left;
    width: 10%;
    position: relative;
    min-height: 1px;
    text-align: center;
    font-size: 14px;
}
.cpc-items .list-content-item {
    position: relative;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px solid #ededed;
}
.cpc-items .cpc-item-image-desc .img {
    position: absolute;
    left: 30px;
    width: 100px;
    height: 100px;
}
.cpc-items .cpc-item-image-desc .img img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
}
.cpc-items .cpc-item-cell .cpc-item-desc {
    padding: 15px;
    font-size: 14px;
    line-height: 20px;
    display: block;
    text-align: left;
}
.cpc-items .cpc-item-cell .cpc-item-image-desc:first-child {
    min-height: 100px;
    display: block;
    padding-left: 130px;
    padding-top: 0;
}
.cpc-items .cpc-item-cell .cpc-item-desc .top {
    color: #b83126;
    margin-right: 5px;
}
.cpc-items .cpc-item-cell .cpc-item-desc div {
   /*  display: inline-block; */
}
.cpc-items .item-name {
    word-break: break-all;
}
</style>