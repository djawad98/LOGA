import store from "./store.js";



import {createRouter, createWebHashHistory } from 'vue-router';

import Login from './views/Login.vue';
import UserPanel from './views/panels/User.vue';
import AdminPanel from './views/panels/Admin.vue';
import NotFound404 from './views/NotFound404.vue';

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

  {
    component: NotFound404,
    path: "/:pathMatch(.*)*",
    name: "not-found-404",
  },


];


const router = createRouter({
  routes,
  history: createWebHashHistory(),
});



router.beforeEach((to, from) => {

  console.log("going to", to)

  // if(!to.hasOwnProperty("name"))
  //   return { name: 'login' };

  const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
  const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));

  if(!isAuthenticated && to.name !== "login"){
    return {name: 'login'}
  }

  if( isAuthenticated && !isAdmin && to.name.includes("admin") ) {
    return {name: 'user-panel'}
  }



})


export {router, store};
