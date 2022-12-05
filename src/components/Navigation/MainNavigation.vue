<template>
  <header>
    <nav>
      <div id="navigation-icons">
        <img
          src="@/assets/shared/tablet/icon-hamburger.svg"
          alt="Main Navigation"
          id="hamburger-menu-icon"
          @click="toggleMobileNavigation"
        />
        <router-link to="/"
          ><img src="../../assets/shared/desktop/logo.svg"
        /></router-link>
      </div>
      <ul id="desktop-navigation">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/headphones">Headphones</router-link>
        </li>
        <li>
          <router-link to="/speakers">Speakers</router-link>
        </li>
        <li>
          <router-link to="/earphones">Earphones</router-link>
        </li>
      </ul>
      <div id="mobile-navigation" v-show="showMobileNav">
        <ProductCategoriesNav />
      </div>
      <div class="cart-icon">
        <svg
          @click="cart"
          width="23"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          />
        </svg>
        <span class="cart-quantity-icon">{{ cartQuantity }}</span>
      </div>
    </nav>
    <div class="cart" v-show="showCart">
      <div class="cart-background" @click="cart"></div>
      <div class="cart-body">
        <div class="cart-header">
          <h6>Cart ({{ cartQuantity }})</h6>
          <p @click="removeAll">Remove all</p>
        </div>
        <div
          class="cart-no-products"
          v-if="this.getProductsInCart.length === 0"
        >
          <h6>Your Shopping Cart is empty</h6>
        </div>
        <div class="cart-content" v-else>
          <ul>
            <li v-for="product in getProductsInCart" :key="product.productName">
              <div class="cart-product">
                <img :src="require(`../../${product.cartImage}`)" />
                <div class="cart-product-details">
                  <h6>{{ product.shortName }}</h6>
                  <p>£{{ product.productPriceString }}</p>
                </div>
              </div>
              <div class="cart-quantity">
                <span @click="decreaseQuantity(product.productName)">-</span>
                <input type="number" :value="product.quantity" id="quantity" />
                <span @click="increaseQuantity(product.productName)">+</span>
              </div>
            </li>
          </ul>
          <div class="cart-total">
            <p class="cart-total-label">Total</p>
            <h6>£{{ cartTotal }}</h6>
          </div>
          <ButtonOne href="/checkout" :style="fullWidth" @click="cart"
            >Checkout</ButtonOne
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCategoriesNav from "../Navigation/ProductCategories/ProductCategoriesNav.vue";
export default {
  components: {
    ProductCategoriesNav,
  },
  data() {
    return {
      fullWidth: "100%",
      showMobileNav: false,
    };
  },
  methods: {
    cart() {
      this.$store.commit("cart/toggleShowCart");
    },
    removeAll() {
      this.$store.dispatch("cart/removeAllFromCart");
    },
    increaseQuantity(product) {
      this.$store.dispatch("cart/increaseProductQuantity", {
        productName: product,
      });
    },
    decreaseQuantity(product) {
      this.$store.dispatch("cart/decreaseProductQuantity", {
        productName: product,
      });
    },
    toggleMobileNavigation() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
  computed: {
    ...mapGetters("cart", {
      getProductsInCart: "getProductsInCart",
      cartQuantity: "cartQuantity",
      cartTotalPrice: "cartTotalPrice",
      showCart: "showCart",
    }),
    cartTotal() {
      return this.cartTotalPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>


<style lang="scss" scoped>
header {
  position: relative;
  top: 0px;
  width: 100%;
  background-color: #141313;
  z-index: 1;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    margin: 0 165px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    #navigation-icons {
      a {
        display: flex;
      }
    }
    ul {
      display: flex;
      gap: 34px;

      li {
        list-style: none;

        a {
          font-family: "Manrope";
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          line-height: 25px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
        }

        a:hover {
          color: #d87d4a;
        }
      }
    }
    #hamburger-menu-icon {
      display: none;
    }
    .cart-icon {
      display: flex;
      svg {
        padding: 15px;
        fill: white;
      }
      svg:hover {
        fill: #d87d4a;
        cursor: pointer;
      }
      .cart-quantity-icon {
        color: white;
        font-size: 10px;
        background-color: #d87d4a;
        border-radius: 50%;
        /* padding: 2px 5px; */
        height: 15px;
        width: 15px;
        display: flex;
        font-weight: 600;
        justify-content: center;
        position: relative;
        right: 25%;
      }
    }
  }

  .cart {
    .cart-background {
      position: fixed;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000;
      opacity: 0.4;
    }

    .cart-body {
      position: absolute;
      top: 128px;
      right: 165px;
      background-color: #fff;
      width: 377px;
      padding: 31px 32px;
      border-radius: 8px;

      .cart-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;

        h6 {
          text-transform: uppercase;
        }

        p {
          color: #000;
          opacity: 0.5;
        }

        p:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .cart-no-products {
        h6 {
          color: #d87d4a;
        }
      }

      .cart-content {
        ul {
          li {
            list-style: none;
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;

            .cart-product {
              display: flex;
              align-items: center;

              img {
                max-width: 64px;
                border-radius: 8px;
                margin-right: 16px;
              }

              .cart-product-details {
                display: flex;
                flex-direction: column;

                p {
                  opacity: 0.5;
                }
              }
            }
            .cart-quantity {
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
          }
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          .cart-total-label {
            font-size: 15px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0px;
            text-align: left;
            text-transform: uppercase;
            opacity: 0.5;
          }
        }

        button {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  header {
    position: absolute;
    background-color: unset;
    nav {
      height: 89px;
      margin: 0 40px;
      #navigation-icons {
        display: flex;
        align-items: center;
        gap: 42px;
        #hamburger-menu-icon {
          display: block;
          width: 16px;
          height: 15px;
        }
      }
      #desktop-navigation {
        display: none;
      }
      #mobile-navigation {
        position: absolute;
        width: 100%;
        top: 89px;
        left: 0;
        background-color: #fafafa;
        z-index: 5;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  header {
    nav {
      margin: 0 0 0 24px;
      #navigation-icons {
        gap: 100px;
      }
    }
  }
}
@media screen and (max-width: 376px) {
  header {
    nav {
      #navigation-icons {
        gap: 76px;
      }
    }
  }
}
</style>