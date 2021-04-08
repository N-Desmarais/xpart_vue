import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false

Vue.use(SuiVue);


import { domain, clientId } from "./auth/auth_config.json";
import { Auth0Plugin } from "./auth";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  // onRedirectCallback: appState => {
  //   router.push(
  //     appState && appState.targetUrl
  //       ? appState.targetUrl
  //       : window.location.pathname
  //   );
  //}
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
