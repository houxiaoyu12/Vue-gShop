//入口文件
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import CartControl from './components/CartControl/CartControl'
import TopHeader from './components/TopHeader/TopHeader.vue'
import Split from './components/Split/Split'

import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer'
import './filters' //全局引用只需这样引用即可
import loading from './common/img/loading.gif'

// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component('CartControl',CartControl)
Vue.component(Button.name,Button)
Vue.component('Split',Split)

Vue.use(VueLazyload, {
  loading,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',

  /* components: { App },
   template: '<App/>'
   */
  /*render: function (createElement) {  // 函数返回的标签会被渲染到el中
    return createElement(App)   // '<App/>'
  }*/
  render: h => h(App),

  router,
  store
})
