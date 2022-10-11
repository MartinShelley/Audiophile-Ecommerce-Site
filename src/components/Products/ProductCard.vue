<template>
  <div class="product-card">
    <img :src="require(`../../${productDesktopImage}`)" />
    <div class="product-details">
      <p class="new-product overline" v-if="newProduct">New Product</p>
      <h2>{{ productName }}</h2>
      <p class="product-desc" style="white-space: pre-line">
        {{ productDesc }}
      </p>
      <ButtonOne :href="href" v-if="pageType === 'productCategory'" />
      <div class="product-add-to-cart" v-else-if="pageType === 'productDetail'">
        <p class="product-price">£{{ productPrice }}</p>
        <div class="add-to-cart-form">
          <div class="add-to-cart-quantity">
            <span>-</span>
            <input type="number" readonly value="1" />
            <span>+</span>
          </div>
          <ButtonOne class="add-to-cart-button">Add To Cart</ButtonOne>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productName: String,
    productDesc: String,
    newProduct: Boolean,
    productDesktopImage: String,
    href: String,
    productPriceString: Number,
  },
  computed: {
    pageType() {
      let page;
      if (this.$route.meta.pageType === "productCategory") {
        page = "productCategory";
      } else if (this.$route.meta.pageType === "productDetail") {
        page = "productDetail";
      }
      return page;
    },
    productPrice() {
      return this.productPriceString
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  align-items: center;
  margin-bottom: 160px;
  padding: 0 165px;
  gap: 125px;

  img {
    max-width: 540px;
  }

  .product-details {
    max-width: 445px;

    .new-product {
      margin-bottom: 16px;
    }

    h2 {
      margin-bottom: 32px;
      text-transform: uppercase;
      padding-right: 45px;
    }

    .product-desc {
      margin-bottom: 40px;
    }

    button {
      border: none;
    }

    .product-add-to-cart {
      .product-price {
        margin: 32px 0 47px;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.3px;
        text-transform: uppercase;
        color: #000000;
      }
      .add-to-cart-form {
        display: flex;
        .add-to-cart-quantity {
          display: grid;
          width: 120px;
          grid-template-columns: 1fr 1fr 1fr;
          column-width: 40px;
          background-color: #f1f1f1;
          justify-items: center;
          align-items: center;

          span {
            opacity: 25%;
          }

          span:hover {
            cursor: pointer;
          }

          input {
            border: none;
            max-width: 40px;
            background-color: #f1f1f1;
            font-weight: 700;
            font-size: 13px;
            line-height: 18px;
            text-align: right;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
        }
        .add-to-cart-button {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>