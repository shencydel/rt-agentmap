// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vuex from 'vuex'
import Axios from 'axios'

import font from './assets/lib/css/font-awesome.css'
import './assets/lib/js/bootstrap.min.js'
import './assets/lib/css/bootstrap.min.css'

Vue.use(Vuex)
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
