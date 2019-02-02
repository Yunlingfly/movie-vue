import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/',
    component: resolve => require(['../components/common/Index.vue'], resolve),
    meta: {
      title: 'Index'
    },
    children: [{
      path: '/index',
      component: resolve => require(['../components/pages/Home.vue'], resolve),
      meta: {
        title: '系统首页'
      }
    },
    {
      path: '/movie',
      component: resolve => require(['../components/pages/Movie.vue'], resolve),
      meta: {
        title: '视频页'
      }
    }]
  }
  ]
})
