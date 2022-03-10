import { createStore } from 'vuex';


const store = createStore({
    state: {
        isAuthenticated: false,
        isAdmin: null,
    },

    mutations: {
        login(state) {
            state.isAuthenticated = true;
        },

        logout(state) {
            state.isAuthenticated = false;
            state.isAdmin = null;
        },

        logInAsAdmin(state){
            state.isAdmin = true;
        }
    }
});

export default store;