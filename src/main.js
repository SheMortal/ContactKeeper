import Vue from 'vue'
import App from './App.vue';

// router
import VueRouter from 'vue-router';
import Routes from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// semantic ui
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
Vue.use(SuiVue);

// pop ups
import PortalVue from 'portal-vue'
Vue.use(PortalVue);

// using vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
