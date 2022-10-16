import { createStore } from 'vuex';
import productModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule
  }
})

export default store
