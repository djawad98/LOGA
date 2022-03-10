
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

  //todo: add default router or 404

];


const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


router.beforeEach((to, from) => {

  const isAuthenticated = true; // todo: fill this with real value - read from store
  const isAdmin = true; // todo: fill this with real value - read from store

  if(!isAuthenticated && to.name !== "login"){
    return {name: 'login'}
  }

  if( isAuthenticated && !isAdmin && to.name.includes("admin") ) {
    return {name: 'user-panel'}
  }



})


export default router;
