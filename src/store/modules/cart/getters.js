
export default {
  getProductsInCart(state, _, rootState) {
    const allProducts = rootState.products.products;
    const cartProducts = state.productsInCart;
    let cartDetails = [];

    Object.getOwnPropertyNames(allProducts).forEach((category) => {
      for (let i = 0; i < allProducts[category].length; i++) {
        for (let j = 0; j < cartProducts.length; j++) {
          if (allProducts[category][i].name === cartProducts[j].productName) {
            cartDetails.push({
              "productName": allProducts[category][i].name,
              "shortName": allProducts[category][i].shortName,
              "quantity": cartProducts[j].quantity,
              "cartImage": allProducts[category][i].cartImage,
              "price": allProducts[category][i].price,
              "productPriceString": cartProducts[j].productPriceString
            })
          }
        }
      }
    })
    return cartDetails;
  },
  cartQuantity(state) {
    return state.cartQuantity;
  },
  cartTotalPrice(state) {
    return state.cartTotal;
  },
  showCart(state) {
    return state.showCart;
  }
}