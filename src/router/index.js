import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import welcome from '@/components/welcome'
import E1 from '@/components/Equipment1'
import E2 from '@/components/Equipment2'
import E3 from '@/components/Equipment3'
import E4 from '@/components/Equipment4'
import E5 from '@/components/Equipment5'
import E6 from '@/components/Equipment6'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/welcome',
      //hidden: true,
      children:[
        {
          path: '/e6',name: 'e6', component: E6,
        },
        {
          path: '/e5',name: 'e5', component: E5,
        },
        {
          path: '/e4',name: 'e4', component: E4,
        },
        {
          path: '/e3',name: 'e3', component: E3,
        },
        {
          path: '/e2',name: 'e2', component: E2,
        },
        {
          path: '/e1',name: 'e1', component: E1,
        },
        {
          path: '/welcome', name: 'we',component: welcome,
        },
     ]
    },
  ]
})
