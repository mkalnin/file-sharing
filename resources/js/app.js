require('./bootstrap');

import VueRouter  from 'vue-router';
import Vuelidate  from 'vuelidate';
import {routes}   from './routes';
import MainApp    from './components/MainApp.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes,
  mode : 'history'
});

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'));
  if (to.meta.requiresAuth) {
    if (authUser) next()
    else next({ name: 'login' })
  } else if (to.meta.requiresGuest) {
    if (!authUser) next()
    else next({ name: 'register' })
  } else {
    next()
  }
})

import files   from './files/files';
import errors  from './errors';
import user    from './user';

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    files,
    errors,
    user,
  }
});

const app = new Vue({
    el: '#app',
    store,
    router,
    components: {
      MainApp
    }
});
