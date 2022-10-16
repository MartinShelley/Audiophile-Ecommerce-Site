export default {
  // getProducts() { },
  addToCart({ commit, state }, payload) {
    const productExists = state.productsInCart.find(product =>
      product.productName == payload.productAdded
    );

    if (!productExists) {
      commit("updateCart", { name: payload.productAdded, quantity: payload.quantity });
    }

    else if (productExists) {
      state.productsInCart.find(product => {
        if (product.productName === payload.productAdded) {
          product.quantity = product.quantity + payload.quantity;
        }
      })
    }
  },
  // removeFromCart() { },
  removeAllFromCart({ commit }) {
    commit("removeAllFromCart");
  }
}