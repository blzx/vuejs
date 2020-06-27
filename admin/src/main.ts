import Vue from 'vue'
import router from '@/router'
import App from '@/pages/App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
