import { createStore } from 'vuex';
import productModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule
  }
})

store.subscribe((mutation, state) => {
  if (mutation.type.startsWith("cart")) {
    console.log("cart store subscribe!!");
    console.log(JSON.stringify(state.cart.productsInCart));
    localStorage.setItem('productsInCart',
      JSON.stringify(state.cart.productsInCart),
    );

  }
})

export default store
