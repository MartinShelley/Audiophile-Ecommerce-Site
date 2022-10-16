
export default {
  getProductsInCart(state, _, rootState) {
    const allProducts = rootState.products.allProducts;
    const cartProducts = state.productsInCart;
    let cartDetails = [];

    Object.getOwnPropertyNames(allProducts).forEach((category) => {
      // console.log(category);
      for (let i = 0; i < allProducts[category].length; i++) {
        for (let j = 0; j < cartProducts.length; j++) {
          // console.log(allProducts[category][i].name);
          if (allProducts[category][i].name === cartProducts[j].productName) {
            console.log("match");
            // console.log(allProducts[category][i].name + "matches" + cartProducts[j]);
            cartDetails.push({
              "productName": allProducts[category][i].name,
              "quantity": cartProducts[j].quantity,
              "cartImage": allProducts[category][i].cartImage,
              "price": allProducts[category][i].price
            })
          }
        }
      }
    })
    return cartDetails;
  },
  cartQuantity(state) {
    return state.cartQuantity;
  }
}