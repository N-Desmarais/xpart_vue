import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false

Vue.use(SuiVue);
Vue.use(PortalVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
