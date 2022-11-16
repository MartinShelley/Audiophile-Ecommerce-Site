export default {
  async getProductDetails({ commit }) {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();
    commit('setProductData', products);
  },
}