import Vue from 'vue'
import Router from 'vue-router'
import recording_list from '@/components/route/recording/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: recording_list
    },
    {
      path: '/list',
      component: recording_list,
      alias:'/'
    }
  ]
})
