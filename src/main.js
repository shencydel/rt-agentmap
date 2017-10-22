// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Bootstrap from 'bootstrap'
import Vuex from 'vuex'
import Axios from 'axios'

import font from './assets/lib/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)
// Vue.use(Vuex)
// Vue.use(Bootstrap)
Vue.prototype.$ajax = Axios


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
