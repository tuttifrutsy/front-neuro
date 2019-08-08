import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Help from '@/components/Help'
import UserCreator from '@/components/UserCreator'
import Findme from '@/components/Findme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/register',
      name: 'UserGenerator',
      component: UserCreator
    },
    {
      path: '/findme',
      name: 'Findme',
      component: Findme
    }
  ]
})
