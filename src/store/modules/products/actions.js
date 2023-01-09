export default {
  async getProductDetails({ commit }) {
    // const response = await fetch("http://localhost:3000/products");
    const response = await fetch("https://audiophile-ecommerce-web-8fec7-default-rtdb.firebaseio.com/products.json");
    const products = await response.json();
    commit('setProductData', products);
  },
}