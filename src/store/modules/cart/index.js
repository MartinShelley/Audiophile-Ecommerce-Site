import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      cartQuantity: 0,
      cartTotal: 0,
      productsInCart: [],
      showCart: false
    }
  },
  mutations,
  actions,
  getters
}

