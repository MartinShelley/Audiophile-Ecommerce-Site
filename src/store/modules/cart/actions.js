/* eslint-disable no-unused-vars */
export default {
  addToCart({ commit, state, dispatch }, payload) {
    const productExists = state.productsInCart.find(product =>
      product.productName == payload.productAdded
    );
    const productPriceString = payload.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (!productExists) {
      commit("updateCart", { name: payload.productAdded, quantity: payload.quantity, productPriceString: productPriceString, productPrice: payload.productPrice });
    }

    else if (productExists) {
      state.productsInCart.find(product => {
        if (product.productName === payload.productAdded) {
          product.quantity = product.quantity + payload.quantity;
        }
      })
    }
    commit("updateCartQuantity", { quantity: payload.quantity });
    dispatch("updateCartTotalPrice", { productPrice: payload.productPrice, quantity: payload.quantity })
  },
  decreaseProductQuantity({ commit, state, dispatch }, payload) {
    state.productsInCart.find(product => {
      if (product.productName === payload.productName) {
        if (product.quantity === 1) {
          dispatch("removeProductFromCart", { productName: product.productName });
        }
        dispatch("updateCartTotalPrice", { productPrice: product.productPrice, quantity: -1 });
        commit('updateProductQuantity', { quantity: -1, productName: payload.productName });
        commit("updateCartQuantity", { quantity: -1 });

      }
    })
  },
  increaseProductQuantity({ commit, state, dispatch }, payload) {
    state.productsInCart.find(product => {
      if (product.productName === payload.productName) {
        dispatch("updateCartTotalPrice", { productPrice: product.productPrice, quantity: 1 });
        commit('updateProductQuantity', { quantity: 1, productName: payload.productName });
        commit("updateCartQuantity", { quantity: 1 });
      }
    })
  },
  removeProductFromCart({ commit }, payload) {
    commit("removeProductFromCart", { productName: payload.productName });
  },
  removeAllFromCart({ commit }) {
    commit("removeAllFromCart");
    // commit("resetCartQuantity");
  },
  updateCartTotalPrice({ commit, state }, payload) {
    const cartNewTotal = state.cartTotal + payload.productPrice * payload.quantity;
    commit("updateCartTotal", { newCartTotal: cartNewTotal });
  }
}