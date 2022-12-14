import { createStore } from 'vuex';
import productModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule
  },
  state() {
    return {
      showMobileNav: false
    }
  },
  mutations: {
    toggleMobileNavigation(state) {
      state.showMobileNav = !state.showMobileNav;
    }
  },
  getters: {
    showMobileNav(state) {
      return state.showMobileNav;
    }
  }
})

store.subscribe((mutation, state) => {
  const timeNow = new Date();
  if (mutation.type.startsWith("cart")) {
    localStorage.setItem('productsInCart',
      JSON.stringify(state.cart.productsInCart),
    );
    //update 30 minute cart expiry 
    localStorage.setItem('cartExpiry', timeNow.getTime() + 1800000);
  }
})

export default store
