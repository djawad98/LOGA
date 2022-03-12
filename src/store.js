import { createStore } from 'vuex';


const store = createStore({
    state: {
        isAuthenticated: false,
        isAdmin: null,
    },

    mutations: {
        login(state) {
            state.isAuthenticated = true;
            sessionStorage.setItem("isAuthenticated", true)
        },

        logout(state) {
            state.isAuthenticated = false;
            state.isAdmin = null;

            sessionStorage.setItem("isAuthenticated", false)
            sessionStorage.setItem("isAdmin", false)
        },

        logInAsAdmin(state){
            state.isAdmin = true;
            sessionStorage.setItem("isAdmin", true)

        }
    }
});

export default store;