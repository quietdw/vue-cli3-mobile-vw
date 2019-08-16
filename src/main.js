import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
