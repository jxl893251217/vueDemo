<template>
	<div id="shop">
		<headTop :shop-info="shopInfo"></headTop>
		<el-row class="tac">
			<el-col :span="5">
				<aside>
		    <!--导航菜单-->
				  <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
				   	<el-menu-item-group  v-for="(items, index) in navMenu" :index="index+''" :title="items.typeDesc"  >
				   	  <el-menu-item  v-for="(item, i) in items.list" :index="item.path"  >
				   		  		<i class="el-icon-message"></i>{{item.name}}
				   		 </el-menu-item> 
				   	 </el-menu-item-group>
				</el-menu> 
			  </aside>
			</el-col>
			<el-col :span="19" class="content-wrapper">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
			</el-col>
	</el-row>
		
	</div>
</template>
<script>
	import {mapState, mapActions} from 'vuex'
	import headTop from '../../components/header/head.vue'
	
	export default {
  data () {
    return {
   	collapsed:false
    }
  },
  computed: {
  	//映射State
    ...mapState([
    	'navMenu',
    	'shopInfo'
    ])
	},
	mounted() {
		let _self=this;
		let obj={
			component:_self
		}

		this.$nextTick(function(){
        this.getNavMenu(obj);
        this.getShop({obj,callback:(data)=>{
	        window.localStorage.setItem('shopId',data.id)
	        window.localStorage.setItem('reductionMode',data.reductionMode)
	      }
	    });
    })

		
	},
	methods: {
		...mapActions({
	    getNavMenu:'getNavMenu',
	    getShop:'getShop'
	  }),
		

	},
  components: { headTop }
}
</script>

<style  scoped>
.tac{
		width: 1200px;
    margin: 0 auto;
    
	}
	li.el-menu-item {
		margin-left: 20px;
	}
	.content-wrapper{
		padding: 40px 30px;
	}
</style>