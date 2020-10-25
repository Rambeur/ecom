import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import vuetify from './plugins/vuetify';
import Cart from './components/Cart.vue';
import Market from './components/Market'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter ({
  routes : [
    { path: '/', component: Market},
    { path: '/cart', component: Cart },
  ],
  mode: 'history'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
