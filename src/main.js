import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);


import {router, store} from './router.js';
app.use(router);


import store from "./store.js";
app.use(store);




import axios from 'axios';

window.$http = axios.create({
  baseURL: "",
});

$http.interceptors.request.use(
  function(config){

    const token = "a1b2c3d4";
    config.headers['token'] = token;

    return config;

  },
  function(error){
    alert("خطا: "+error.request.data);
    console.log(error, error.request.data);
  }
)

$http.interceptors.response.use(
  function(response){
    return response;
  },
  function(error){
    alert("خطا: "+error.response.data)
    console.log(error, error.response.data)
  }
)






app.mount('#app')
