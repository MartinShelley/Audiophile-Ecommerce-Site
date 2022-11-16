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
  margin: 120px auto 168px;
  width: 1110px;
  gap: 30px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #product-categories-nav {
    width: unset;
    gap: 10px;
    padding: 0px;
  }
}
</style>