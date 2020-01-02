import Vue from 'vue';
import App from './App.vue';
import Posts from './components/Post.vue';
import Contactos from './components/Contactos.vue';
//importamos la libreria del modulo de node
import VueRouter from 'vue-router';

//iniciamos el uso de la libreria
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Posts
  },
  {
    path: '/contactos',
    component: Contactos
  },
];

//instanciamos el nuevo rauter
const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');