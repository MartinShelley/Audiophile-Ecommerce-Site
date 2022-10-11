<template>
  <main>
    <ProductCategoryHero :category="productCategory" />
    <section class="category-products">
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        :productName="product.name"
        :productDesc="product.description"
        :newProduct="product.new"
        :productDesktopImage="product.image.desktop"
        :href="'/' + productCategory + '/' + product.slug"
      />
    </section>
    <ProductCategoryNav />
    <ShopIntroBanner />
  </main>
</template>

<script>
import ProductCategoryHero from "@/components/ProductCategoryHero/ProductCategoryHero.vue";
export default {
  components: {
    ProductCategoryHero,
  },
  data() {
    return {
      categoryProducts: {},
      isPageLoading: false,
    };
  },
  methods: {
    async getCategoryProducts() {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();

      const category = this.productCategory;
      this.categoryProducts = products[category];
    },
  },
  computed: {
    productCategory() {
      return this.$route.name;
    },
  },
  created() {
    this.isPageLoading = true;
    this.getCategoryProducts();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getCategoryProducts();
      }
    );
    this.isPageLoading = false;
  },
};
</script>

<style lang="scss" scoped>
.product-card:nth-child(1) {
  margin-top: 160px;
}

#product-categories-nav {
  padding: 120px 165px 0 !important;
}

#shop-intro-banner {
  margin-top: 0;
}

.product-card:nth-child(even) {
  flex-direction: row-reverse;
}

.product-card:last-child {
  margin-bottom: 0;
}
</style>