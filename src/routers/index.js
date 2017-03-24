import Mine from '../components/Mine.vue'
import Role from '../components/Role.vue'


import Shop from '../page/shop/shop.vue'

/* eslint-disable no-new */
export default [
{
	path:'/',
	redirect:'Mine'

},{
	path:'/Mine',
	component:Mine
},
{
	path:'/Role',
	component:Role
},
,
{
	path:'/Shop',
	component:Shop
},
]