export default {
  updateCart(state, payload) {
    state.productsInCart.push({
      "productName": payload.name,
      "quantity": payload.quantity
    });
  },
  removeAllFromCart(state) {
    state.productsInCart = []
  },
}