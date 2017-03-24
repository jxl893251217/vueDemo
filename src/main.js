import Vue from 'vue'
import 'babel-polyfill'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import routers from './routers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


const router = new VueRouter({
  routes: routers
})
Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(VueResource);


var app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

