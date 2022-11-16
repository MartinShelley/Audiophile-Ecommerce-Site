<template>
  <main>
    <div class="back-button-nav">
      <router-link @click="$router.back()" to="" class="back-button"
        >Go Back</router-link
      >
    </div>
    <section>
      <ProductCard
        :key="activeProduct.id"
        :productName="activeProduct.name"
        :productDesc="activeProduct.description"
        :newProduct="activeProduct.new"
        :productDesktopImage="activeProduct.image.desktop"
        :productPriceString="activeProduct.price"
      />
    </section>
    <section class="product-description">
      <div class="product-features">
        <h3>Features</h3>
        <p>{{ activeProduct.features }}</p>
      </div>
      <div class="product-in-the-box">
        <h3>In the box</h3>
        <ul>
          <li v-for="(item, index) in activeProduct.includes" :key="index">
            <span class="includes-quantity">{{ item.quantity }}x</span>
            <span class="includes-item">{{ item.item }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="product-images">
      <div>
        <img
          class="product-image-one"
          :src="require(`@/${activeProduct.gallery.first.desktop}`)"
        />
        <img
          class="product-image-two"
          :src="require(`@/${activeProduct.gallery.second.desktop}`)"
        />
        <img
          class="product-image-three"
          :src="require(`@/${activeProduct.gallery.third.desktop}`)"
        />
      </div>
    </section>
    <section class="you-may-also-like-section">
      <div class="you-may-also-like-title">
        <h3>You may also like</h3>
      </div>
      <div class="you-may-also-like-products">
        <div
          class="you-may-also-like-product"
          v-for="product in activeProduct.others"
          :key="product.name"
        >
          <img :src="require(`@/${product.image.desktop}`)" />
          <h5>{{ product.name }}</h5>
          <ButtonOne :href="`/${product.category}/${product.slug}`" />
        </div>
      </div>
    </section>
    <ProductCategoryNav />
    <ShopIntroBanner />
  </main>
</template>


<script>
import ProductCard from "@/components/Products/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters("products", {
      getAllProducts: "getAllProducts",
    }),
    activeProduct() {
      let activeProduct;
      const products = this.getAllProducts;
      const category = this.productCategory;
      const productName = this.productName;
      products[category].filter((product) => {
        if (product.slug === productName) {
          activeProduct = product;
        }
      });
      return activeProduct;
    },
    productName() {
      return this.$route.params.product;
    },
    productCategory() {
      return this.$route.meta.productCategory;
    },
  },
};
</script>


<style lang="scss" scoped>
.back-button-nav {
  margin: 79px 0 56px 165px;

  .back-button {
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0px;
    color: #000;
    opacity: 0.5;
    margin-top: 79px;
  }
}

.product-description {
  display: grid;
  margin: 0 165px;
  grid-template-columns: 1fr 1fr;
  column-gap: 125px;

  .product-features {
    h3 {
      margin-bottom: 32px;
    }

    p {
      white-space: pre-line;
    }
  }

  .product-in-the-box {
    h3 {
      margin-bottom: 32px;
    }

    li {
      list-style: none;
      margin-bottom: 8px;

      .includes-quantity {
        color: #d87d4a;
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        margin-right: 24px;
      }

      .includes-item {
        opacity: 0.5;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
}

.product-images {
  div {
    margin: 160px 0;
    display: grid;
    grid-template-columns: 440px 635px;
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
    row-gap: 32px;
    justify-content: center;

    .product-image-one {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    .product-image-two {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    .product-image-three {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }
  }
}

.you-may-also-like-section {
  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 64px;
  }

  .you-may-also-like-products {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    .you-may-also-like-product {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-bottom: 40px;
        max-width: 350px;
      }
      h5 {
        margin-bottom: 32px;
        text-transform: uppercase;
      }
    }
  }
}
</style>