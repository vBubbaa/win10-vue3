import { createStore } from 'vuex';

export default createStore({
  state: {
    showFooterNav: false,
  },
  mutations: {
    setShowFooterNav(state) {
      state.showFooterNav = !state.showFooterNav;
    },
  },
  getters: {
    getShowFooterNav: (state) => state.showFooterNav,
  },
  modules: {
  },
});
