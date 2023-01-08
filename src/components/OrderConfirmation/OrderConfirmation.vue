<template>
  <div id="order-confirmation">
    <div id="order-confirmation-background"></div>
    <div id="order-confirmation-content">
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle fill="#D87D4A" cx="32" cy="32" r="32" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m20.754 33.333 6.751 6.751 15.804-15.803"
          />
        </g>
      </svg>
      <h3>
        Thank you
        <pre>for your order</pre>
      </h3>
      <p id="email-confirmation-note">
        You will receive an email confirmation shortly.
      </p>
      <div id="order-info">
        <div id="order-products">
          <div id="order-product-details">
            <img
              :src="require(`@/${getProductsInCart[0].cartImage}`)"
              :alt="`${getProductsInCart[0].productName}`"
            />
            <p id="order-product-name">{{ getProductsInCart[0].shortName }}</p>
            <p id="order-product-quantity">
              x{{ getProductsInCart[0].quantity }}
            </p>
            <p id="order-product-price">
              £{{ getProductsInCart[0].productPriceString }}
            </p>
          </div>
          <div id="order-other-products">
            <p v-if="getProductsInCart.length - 1 > 1">
              and {{ getProductsInCart.length - 1 }} other item(s)
            </p>
            <p v-else>and 1 other item</p>
          </div>
        </div>
        <div id="order-grand-total">
          <p class="title">Grand Total</p>
          <p id="order-grand-total-value">£{{ grandTotal }}</p>
        </div>
      </div>
      <ButtonOne href="/" :style="fullWidth" @click="removeAllProducts"
        >Back to home</ButtonOne
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["grandTotal"],
  data() {
    return {
      fullWidth: "100%",
    };
  },
  computed: {
    ...mapGetters("cart", {
      getProductsInCart: "getProductsInCart",
    }),
  },
  methods: {
    removeAllProducts() {
      this.$store.dispatch("cart/removeAllFromCart");
    },
    removeOverflow() {
      document.querySelector("body").style.overflowY = "";
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.querySelector("body").style.overflowY = "hidden";
  },
  unmounted() {
    document.querySelector("body").style.overflowY = "";
  },
};
</script>

<style lang="scss" scoped>
#order-confirmation {
  #order-confirmation-background {
    background-color: #000;
    opacity: 0.4;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  #order-confirmation-content {
    background-color: #fff;
    border-radius: 8px;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 48px;
    min-width: 444px;

    h3 {
      margin: 33px 0 24px;
      text-transform: uppercase;
    }

    #email-confirmation-note {
      opacity: 0.5;
      margin-bottom: 33px;
    }

    #order-info {
      display: flex;
      margin-bottom: 46px;

      #order-products {
        padding: 24px;
        background-color: #f1f1f1;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

        #order-product-details {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 12px;
          img {
            grid-row: 1 / 3;
            height: 50px;
            width: 50px;
            margin-right: 16px;
          }
          #order-product-name {
            font-weight: 700;
          }
          #order-product-quantity {
            text-align: right;
          }
          #order-product-price {
            grid-column: 2 / 3;
            font-size: 14px;
          }
        }

        #order-other-products {
          p {
            margin-top: 12px;
            text-align: center;
            font-size: 12px;
            line-height: 16.4px;
            letter-spacing: -0.21px;
          }
        }

        #order-product-details #order-product-quantity,
        #order-product-details #order-product-price,
        #order-other-products p {
          font-weight: 700;
          opacity: 0.5;
        }
      }

      #order-grand-total {
        background-color: #000;
        padding: 41px 66px 41px 32px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        .title {
          color: #fff;
          opacity: 0.5;
          text-transform: uppercase;
        }

        #order-grand-total-value {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }

    .buttonOne {
      width: 100%;
    }
  }
}

@media screen and (max-width: 415px) {
  #order-confirmation {
    #order-confirmation-content {
      min-width: 263px;
      padding: 32px;

      h3 {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.86px;
        margin: 23px 0 16px;
      }

      #email-confirmation-note {
        margin-bottom: 24px;
      }

      #order-info {
        flex-direction: column;
        margin-bottom: 23px;

        #order-products {
          border-bottom-left-radius: unset;
          border-top-right-radius: 8px;
        }

        #order-grand-total {
          border-top-right-radius: unset;
          border-bottom-left-radius: 8px;
          padding: 15px 105px 19px 24px;

          .title {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #order-confirmation {
    #order-confirmation-content {
      min-width: 250px;
      padding: 24px;

      h3 {
        font-size: 21px;
        line-height: 24px;
        margin: 16px 0 8px;
      }

      #email-confirmation-note {
        line-height: 22px;
        margin-bottom: 14px;
      }
    }
  }
}
</style>