import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lemon from '@souche-ui/lemon'
import store from './store'

Vue.use(lemon);
// compiler
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app")

// runtime
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})