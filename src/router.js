import store from "./store.js";



import { createRouter, createWebHashHistory } from 'vue-router';

import Login from './views/Login.vue';
import UserPanel from './views/panels/User.vue';
import AdminPanel from './views/panels/Admin.vue';
import NotFound404 from './views/NotFound404.vue';

const routes = [
  {
    path: "/login", // todo: also should be a match for /login
    component: Login,
    name: "login",
  },

  {
    path: "/",
    redirect: { name: "login" },
  },

  {
    path: "/panel/user",
    component: UserPanel,
    name: "user-panel",
  },

  {
    path: "/panel/admin",
    component: AdminPanel,
    name: "admin-panel",
  },

  {
    path: "/:pathMatch(.*)*",
    component: NotFound404,
    name: "not-found-404",
  },


];


const router = createRouter({
  routes,
  history: createWebHashHistory(),
});



router.beforeEach((to, from) => {

  const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
  const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));

  if (to.name === "login") {
    if (isAuthenticated) {
      if (isAdmin)
        return { name: 'admin-panel' }
      else {
        return { name: 'user-panel' }
      }
    }
  }


  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }

  if (isAuthenticated && !isAdmin && to.name.includes("admin"))
    return { name: "user-panel" }




  //   return

  // if (isAuthenticated) {
  //   if (isAdmin)
  //     return { name: 'admin-panel' }
  //   else{

  //     if( to.name.includes("admin") ){
  //       return false;
  //     }

  //     return { name: 'user-panel' }
  //   }
  // } else {
  //   if (to.name !== "login")
  //     return { name: 'login' }
  // }


  // if (isAuthenticated && !isAdmin && to.name.includes("admin")) {
  //   return false;
  // }

  // if (!isAuthenticated && to.name !== "login")
  //   return { name: 'login' }

  // if (isAuthenticated && to.name === "login")
  //   return false;





})


export { router, store };
