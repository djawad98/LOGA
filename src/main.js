import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);



import {createRouter, createWebHashHistory } from 'vue-router';

import Login from './views/Login.vue';
import UserPanel from './views/panels/User.vue';
import AdminPanel from './views/panels/Admin.vue';

const routes = [

  {
    component: Login,
    path: "/", // todo: also should be a match for /login
    name: "login",
  },

  {
    component: UserPanel,
    path: "/panel/user",
    name: "user-panel",
  },

  {
    component: AdminPanel,
    path: "/panel/admin",
    name: "admin-panel",
  },

];




const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

app.use(router);





app.mount('#app')
