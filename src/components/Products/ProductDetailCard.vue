<template>
  <div class="product-card-container">
    <div class="back-button-nav">
      <router-link @click="$router.back()" to="" class="back-button"
        >Go Back</router-link
      >
    </div>
    <div class="product-card">
      <picture>
        <source
          :srcset="require(`@/${productDesktopImage}`)"
          media="(min-width:1024px)"
        />
        <source
          :srcset="require(`@/${productTabletImage}`)"
          media="(min-width:768px)"
        />
        <source :srcset="require(`@/${productMobileImage}`)" />
        <img
          :src="require(`@/${productDesktopImage}`)"
          :alt="`${productName}`"
        />
      </picture>
      <div class="product-details">
        <p class="new-product overline" v-if="newProduct">New Product</p>
        <h2>{{ productName }}</h2>
        <p class="product-desc">
          {{ productDesc }}
        </p>
        <ButtonOne :href="href" v-if="pageType === 'productCategory'" />
        <div
          class="product-add-to-cart"
          v-else-if="pageType === 'productDetail'"
        >
          <p class="product-price">£{{ productPrice }}</p>
          <div class="add-to-cart-form">
            <div class="product-quantity">
              <span @click="decreaseQuantity">-</span>
              <input
                type="number"
                :value="this.quantity"
                id="quantity"
                min="1"
              />
              <span @click="increaseQuantity">+</span>
            </div>
            <ButtonOne
              v-if="!this.addedToCart"
              @click="addProductToCart(productName)"
              class="add-to-cart-button"
              >Add To Cart</ButtonOne
            >
            <ButtonOne
              v-else-if="this.addedToCart"
              @click="addProductToCart(productName)"
              class="added-to-cart"
              >Added To Cart</ButtonOne
            >
          </div>
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
    productTabletImage: String,
    productMobileImage: String,
    href: String,
    productPriceString: Number,
  },
  data() {
    return {
      addedToCart: false,
      quantity: 1,
    };
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
    getShowCart() {
      return this.$store.getters["cart"].showCart;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store
        .dispatch("cart/addToCart", {
          productAdded: product,
          quantity: this.quantity,
          productPrice: parseInt(this.productPriceString),
        })
        .then(() => {
          const refThis = this;
          this.toggleAddedToCart();
          setTimeout(function () {
            refThis.toggleAddedToCart();
          }, 2000);
        });
      this.$store.commit("cart/toggleShowCart");
    },
    cart() {
      if (this.getShowCart === true) {
        this.$store.commit("cart/toggleShowCart");
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    getQuantity(value) {
      this.quantity = value;
    },
    toggleAddedToCart() {
      this.addedToCart = !this.addedToCart;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 56px;

  .back-button-nav {
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
}
.product-card {
  display: flex;
  gap: 125px;

  picture {
    img {
      max-width: 540px;
      border-radius: 8px;
    }
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
      opacity: 0.5;
      white-space: pre-line;
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
        gap: 16px;

        .product-quantity {
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
            height: 32px;
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
        .added-to-cart {
          opacity: 0.5;
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .back-button-nav {
    margin: 33px 0 0px 40px;
  }

  .product-card-container {
    gap: 24px;
  }
  .product-card {
    margin-bottom: 120px;
    padding: 0 40px;
    gap: 69px;

    picture {
      img {
        width: 100%;
        max-width: unset;
      }
    }
    .product-details {
      text-align: left;
      max-width: 340px;

      h2 {
        padding-right: unset;
      }

      .product-add-to-cart {
        .add-to-cart-form {
          .product-quantity {
            input {
              text-align: center;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 415px) {
  .product-card {
    flex-direction: column;
    padding: 0 24px;
    gap: 32px;
    align-items: unset;
    .product-details {
      .new-product {
        margin-bottom: 24px;
      }

      h2 {
        font-size: 28px;
        line-height: 38.25px;
        letter-spacing: 1px;
        margin-bottom: 24px;
      }

      .product-desc {
        margin-bottom: 24px;
      }

      .product-add-to-cart {
        .product-price {
          margin: 24px 0 31px;
        }
      }
    }
  }
}
</style>