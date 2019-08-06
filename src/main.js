// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueCookies)
// Vue.use(require('vue-cookies'))
Vue.config.productionTip = false
Vue.use(BootstrapVue)
/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.KEY,
    libraries: 'places' // necessary for places input
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
