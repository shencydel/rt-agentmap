import Vue from 'vue'
import Router from 'vue-router'
import Recording from '@/components/route/Recording'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recording
    }
  ]
})
