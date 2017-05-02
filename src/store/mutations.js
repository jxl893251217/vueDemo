import{
	GET_USER_INFO,
	GET_NAV_MENU,
	GET_SHOP
} from './mutation-types.js'


export default {
//个人信息
	[GET_USER_INFO](state, userInfo) {
		state.userInfo = userInfo;
	},
	[GET_NAV_MENU](state, navMenu) {
		state.navMenu = navMenu;
	},
	[GET_SHOP](state, shopInfo) {
		state.shopInfo = shopInfo;
	}
}