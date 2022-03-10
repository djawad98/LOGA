import { createStore } from 'vuex';


const store = createStore({
    state: {
        isLoggedIn: false,
    },

    mutations: {
        doLogin(state) {
            state.isLoggedIn = true;
        }
    }
});

export default store;