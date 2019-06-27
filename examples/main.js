import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/less/index.less'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import yjui from './../packages/index'
// import { Button, Input } from './../packages/index'

// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)

Vue.use(ElementUI)

Vue.use(yjui)
// Vue.use(Button)
// Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
