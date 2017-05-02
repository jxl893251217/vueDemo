<template>
	<section>
		<order-table :table-list="orderList" v-on:changePage="getOrderList" v-on:fdelete="deleteOrder"></order-table>
	</section>
</template>

<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import orderTable from './coms/table.vue'
	import httpHelper from "../../util/httpHelper"
	import utils from '../../util'
	export default {
		data(){
			return{
				orderList:{},
				page:{
					pageSize:1,
					currentPage:1
				}
			}
		},
		methods:{
			getOrderList(currentPage){
					currentPage=currentPage==undefined?this.page.currentPage:currentPage;
	        let _self = this; 
	        let params = {};  
	        let _params="?shopId=1&orderCode=&orderStatus=0&page.pageSize="+ this.page.pageSize+"&page.currentPage="+currentPage
	        httpHelper.get(_self,utils.url.sellerOrder+_params,params,(data)=>{

	          let _orderList=data.result.data;
	          for(var i=0;i<_orderList.length;i++){
	          	_orderList[i]._address=_orderList[i].city+"  "+_orderList[i].area+"  "+_orderList[i].address;
	          	
	          }
	          data.result.data=_orderList
	          this.orderList=data.result
	               
	          }, (err)=>{
	              console.log('shi bai')
	          })

	    	},
	    	//删除订单
	    	deleteOrder(obj){
	    			console.log(obj.id)
	    			this.$message({
								message: '删除成功',
								type: 'success'
							});
	    	}
		},
		components:{
			orderTable
		},
		mounted() {
				this.$nextTick(function(){
		        this.getOrderList();
		    })

				
		}
	}
</script>