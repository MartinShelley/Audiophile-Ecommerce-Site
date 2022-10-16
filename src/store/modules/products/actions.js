export default {
  async allProducts({ commit }) {
    const response = await fetch("http://localhost:3000/products");
    const allProducts = await response.json();
    commit("updateAllProducts", allProducts);
  }
}