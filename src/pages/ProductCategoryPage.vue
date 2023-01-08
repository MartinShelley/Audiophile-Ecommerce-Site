<template>
  <main>
    <ProductCategoryHero :category="productCategory" />
    <section class="category-products">
      <CategoryProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        :productName="product.name"
        :productDesc="product.description"
        :newProduct="product.new"
        :productDesktopImage="product.categoryImage.desktop"
        :productTabletImage="product.categoryImage.tablet"
        :productMobileImage="product.categoryImage.mobile"
        :href="'/' + productCategory + '/' + product.slug"
      />
    </section>
    <ProductCategoryNav />
    <ShopIntroBanner />
  </main>
</template>

<script>
import ProductCategoryHero from "@/components/ProductCategoryHero/ProductCategoryHero.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ProductCategoryHero,
  },
  computed: {
    ...mapGetters("products", {
      getAllProducts: "getAllProducts",
    }),
    categoryProducts() {
      return this.getAllProducts[this.productCategory];
    },
    productCategory() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  gap: 125px;
}

.product-card:nth-child(1) {
  margin-top: 160px;
}

#product-categories-nav {
  padding: 120px 165px 0 !important;
}

#shop-intro-banner {
  margin-top: 0;
}

#shop-intro-banner {
  margin-top: 160px;
}

.product-card:nth-child(even) {
  flex-direction: row-reverse;
}

.product-card:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 1023px) {
  .product-card {
    flex-direction: column;
    gap: 52px;

    .product-details {
      max-width: 572px;
    }
  }
  .product-card:last-child {
    margin-bottom: 171.5px;
  }

  #product-categories-nav {
    padding: unset !important;
  }
  .product-card:nth-child(even) {
    flex-direction: column;
  }
  .product-card:nth-child(1) {
    margin-top: 120px;
  }
}

@media screen and (max-width: 415px) {
  .category-products {
    padding: 0 24px;
  }
  .product-card:nth-child(1) {
    margin-top: 64px;
  }
}
</style>