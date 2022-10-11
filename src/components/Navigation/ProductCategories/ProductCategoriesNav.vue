<template>
  <section id="product-categories-nav">
    <CategoryCard
      v-for="category in productCategories"
      :productCategory="category"
      :key="category"
    />
  </section>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";
export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      productCategories: ["headphones", "speakers", "earphones"],
    };
  },
};
</script>


<style lang="scss" scoped>
#product-categories-nav {
  display: flex;
  padding: 120px 165px 168px;
  width: 1110px;
  margin: 0 auto;
  gap: 30px;
}
</style>