export default {
  updateCart(state, payload) {
    state.productsInCart.push({
      "productName": payload.name,
      "quantity": payload.quantity,
      "productPriceString": payload.productPriceString,
      "productPrice": payload.productPrice
    });
    console.log(state.productsInCart);
  },
  removeProductFromCart(state, payload) {
    state.productsInCart = state.productsInCart.filter((product) => {
      return product.productName !== payload.productName;
    })
  },
  removeAllFromCart(state) {
    state.productsInCart = [];
    state.quantity = 0;
    state.cartTotal = 0;
  },
  updateProductQuantity(state, payload) {
    state.productsInCart.find(product => {
      if (product.productName == payload.productName) {
        product.quantity = product.quantity + payload.quantity;
      }
    })
  },
  updateCartQuantity(state, payload) {
    state.cartQuantity = state.cartQuantity + payload.quantity;
  },
  updateCartTotal(state, payload) {
    state.cartTotal = payload.newCartTotal;
  }
}