// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueStash from 'vue-stash'

Vue.use(VueStash)
// explicit installation required in module environments
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    store: {
      user: {}
    }
  },
  router,
  template: '<App/>',
  components: { App }
})
