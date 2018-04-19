import Vue from 'vue';
import axios from 'axios';
import VueKonva from 'vue-konva';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(VueKonva);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
