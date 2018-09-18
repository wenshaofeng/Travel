// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastclick'
import 'styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // 相当于 {App（局部组件）:App} ES6写法
  template: '<App/>'
})

// 路由就是根据网址的不同，
// 返回不同的内容给用户
