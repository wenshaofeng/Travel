// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false;
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, //相当于 {App（局部组件）:App} ES6写法
  template: '<App/>'
})

//路由就是根据网址的不同，
// 返回不同的内容给用户
