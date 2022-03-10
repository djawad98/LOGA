import { createStore } from 'vuex';


const store = createStore({
    state: {
        isAuthenticated: false,
    },

    mutations: {
        login(state) {
            state.isAuthenticated = true;
        }
    }
});

export default store;