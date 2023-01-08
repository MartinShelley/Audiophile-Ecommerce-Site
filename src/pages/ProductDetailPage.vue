<template>
  <main>
    <section class="product-detail-section">
      <ProductDetailCard
        :key="activeProduct.id"
        :productName="activeProduct.name"
        :productDesc="activeProduct.description"
        :newProduct="activeProduct.new"
        :productDesktopImage="activeProduct.image.desktop"
        :productTabletImage="activeProduct.image.tablet"
        :productMobileImage="activeProduct.image.mobile"
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
          :srcset="
            require(`@/${activeProduct.gallery.first.desktop}`) +
            ' 445w, ' +
            require(`@/${activeProduct.gallery.first.tablet}`) +
            ' 277w, ' +
            require(`@/${activeProduct.gallery.first.mobile}`) +
            ' 327w '
          "
          sizes="(min-width:1024px) 445px, (min-width:768px) 277px, 327px"
          :alt="`${activeProduct.name} Image 1`"
        />
        <img
          class="product-image-two"
          :srcset="
            require(`@/${activeProduct.gallery.second.desktop}`) +
            ' 445w, ' +
            require(`@/${activeProduct.gallery.second.tablet}`) +
            ' 277w, ' +
            require(`@/${activeProduct.gallery.second.mobile}`) +
            ' 327w '
          "
          sizes="(min-width:1024px) 445px, (min-width:768px) 277px, 327px"
          :alt="`${activeProduct.name} Image 2`"
        />
        <img
          class="product-image-three"
          :srcset="
            require(`@/${activeProduct.gallery.third.desktop}`) +
            ' 635w, ' +
            require(`@/${activeProduct.gallery.third.tablet}`) +
            ' 395w, ' +
            require(`@/${activeProduct.gallery.third.mobile}`) +
            ' 327w '
          "
          sizes="(min-width:1024px) 635px, (min-width:768px) 395px, 327px"
          :alt="`${activeProduct.name} Image 3`"
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
          <picture>
            <source
              media="(min-width:1024px)"
              :srcset="require(`@/${product.image.desktop}`)"
            />
            <source
              media="(min-width:768px)"
              :srcset="require(`@/${product.image.tablet}`)"
            />
            <source :srcset="require(`@/${product.image.mobile}`)" />
            <img
              :src="require(`@/${product.image.desktop}`)"
              :alt="`${product.name}`"
            />
          </picture>
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
import { mapGetters } from "vuex";
export default {
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
          console.log("found product");
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
.product-detail-section {
  max-width: 1110px;
  margin: 79px auto 160px;
}
.product-description {
  display: flex;
  gap: 125px;
  justify-content: center;

  h3 {
    margin-bottom: 32px;
    text-transform: uppercase;
  }
  .product-features {
    max-width: 635px;
    p {
      white-space: pre-line;
      opacity: 0.5;
    }
  }

  .product-in-the-box {
    min-width: 350px;
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
  margin: 160px 0;
  div {
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

    img {
      border-radius: 8px;
    }
  }
}

.you-may-also-like-section {
  margin-bottom: 240px;
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
        border-radius: 8px;
      }
      h5 {
        margin-bottom: 32px;
        text-transform: uppercase;
      }
    }
  }
}

@media screen and (max-width: 1023px) and (min-width: 416px) {
  main {
    position: relative;
    top: 90px;

    .product-detail-section {
      margin: unset;
    }
    .product-card {
      img {
        width: 564px;
      }
    }
    .product-description {
      display: flex;
      flex-direction: column;
      margin: 0 40px;
      gap: 120px;

      .product-features {
        max-width: unset;
      }
      .product-in-the-box {
        display: flex;
        gap: 166px;
      }
    }

    .product-images {
      margin: 120px 40px;
      div {
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 174px 174px;
        row-gap: 20px;
        column-gap: 18px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .you-may-also-like-section {
      margin-bottom: 172px;
      h3 {
        margin-bottom: 56px;
      }
      .you-may-also-like-products {
        gap: 11px;

        .you-may-also-like-product {
          img {
            max-width: 223px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 415px) {
  .back-button-nav {
    margin: 106px 0 24px 24px;
  }

  .product-description {
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 88px;

    h3 {
      font-size: 24px;
      letter-spacing: 0.86px;
      margin-bottom: 24px;
    }
  }

  .product-images {
    margin: 88px 24px 120px;
    div {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1.5fr;
      column-gap: unset;

      img {
        width: 100%;
      }
      .product-image-three {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
    }
  }

  .you-may-also-like-section {
    margin: 0 24px 172px;
    h3 {
      font-size: 24px;
      letter-spacing: 0.86px;
      margin-bottom: 40px;
    }
    .you-may-also-like-products {
      gap: 56px;
      flex-direction: column;

      .you-may-also-like-product {
        img {
          width: 100%;
          max-width: unset;
          margin-bottom: 32px;
        }
      }
    }
  }
}
</style>