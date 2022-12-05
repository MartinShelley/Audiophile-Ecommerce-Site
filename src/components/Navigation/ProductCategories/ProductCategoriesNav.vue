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

@media screen and (min-width: 769px) and (max-width: 1023px) {
  #product-categories-nav {
    padding: 0px;
  }
}

@media screen and (max-width: 768px) {
  #product-categories-nav {
    gap: 10px;
  }
}

@media screen and (max-width: 415px) {
  #product-categories-nav {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
}
</style>