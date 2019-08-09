import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Findme from './views/Findme.vue'
import Dashboard from './views/Dashboard.vue'
import MyBrain from './views/MyBrain.vue'
import Neurogram from './views/Neurogram.vue'
import Help from './views/Help'
import UserCreator from './views/UserCreator.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,neurocli
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/findme',
      name: 'findme',
      component: Findme
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'register',
      component: UserCreator
    },
    {
      path: '/mybrain',
      name: 'mybrain',
      component: MyBrain
    },
    {
      path: '/neurogram',
      name: 'neurogram',
      component: Neurogram
    }
  ]
})
