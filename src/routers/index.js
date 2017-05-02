
import Shop from '../page/shop/shop'
import ShopSet from '../page/shop/children/set'
import ShopMsg from '../page/shop/msg'


import order from '../page/order/order'
import orderDetail from '../page/order/children/detail'

import goodsList from '../page/goods/list'
import goodsClassification from '../page/goods/classification'
import goodsDisCount from '../page/goods/discount'
import goodsAdd from '../page/goods/add'

/* eslint-disable no-new */
let routes = [
{
    path: '/',
    component: Shop,
    name: '',
    children: [
        { path: '/shop/set', component: ShopSet, name: '店铺设置' },
        { path: '/order', component: order, name: '订单管理' },
        { path: '/goods/list', component: goodsList, name: '商品管理' },
        { path: '/goods/classification', component: goodsClassification, name: '分类管理' },
        { path: '/goods/discount', component: goodsDisCount, name: '限时折扣' },
        { path: '/goods/add/:id', component: goodsAdd, name: '添加商品' },
        { path: '/shop/msg', component: ShopMsg, name: '公告消息' },

    ]
},
{
	path:'/order/orderDetail/:id',
	name:'orderDetail',
	component:orderDetail
},

]

export default routes;