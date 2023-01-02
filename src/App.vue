<template>
  <MainNav />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <!-- <transition name="fade" mode="out-in"> -->
      <component :is="Component" :key="this.$route.path" />
    </transition>
  </router-view>
  <TheFooter />
</template>


<script>
import MainNav from "./components/Navigation/MainNavigation.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MainNav,
    TheFooter,
  },
  computed: {
    ...mapGetters({
      showCart: "cart/showCart",
      showMobileNav: "showMobileNav",
    }),
    toggleScrolling() {
      if (this.showCart) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("products/getProductDetails");
  },
  beforeMount() {
    const timeNow = new Date();
    const cartExpiry = localStorage.getItem("cartExpiry");
    //if cart time has expired reset cart
    if (cartExpiry < timeNow.getTime()) {
      console.log("no cartExpiry or cart expired");
      this.$store.dispatch("cart/removeAllFromCart");
      localStorage.setItem("cartExpiry", null);
    }
    //if there are products in cart and cart hasn't expired
    else if (
      localStorage.getItem("productsInCart") &&
      cartExpiry > timeNow.getTime()
    ) {
      const getPreviouslyAddedProducts = JSON.parse(
        localStorage.productsInCart
      );
      this.$store.commit("cart/getProductsInCart", getPreviouslyAddedProducts);
      let cartTotal = 0;
      let cartQuantity = 0;
      getPreviouslyAddedProducts.forEach((product) => {
        cartTotal = cartTotal + product.productPrice * product.quantity;
        cartQuantity = cartQuantity + product.quantity;
      });
      this.$store.commit("cart/updateCartTotal", {
        newCartTotal: cartTotal,
      });
      this.$store.commit("cart/updateCartQuantity", {
        quantity: cartQuantity,
      });
      //update 30 minute cart expiry
      localStorage.setItem("cartExpiry", timeNow.getTime() + 1800000);
    }
  },
  watch: {
    toggleScrolling(toggleScrolling) {
      document.body.style.overflow = toggleScrolling ? "hidden" : "";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

* {
  font-family: Manrope;
  margin: 0;
  padding: 0;
}

body {
  margin: 0px;
  // overflow-x: hidden;
}

// main {
//   padding: 0 165px;
// }

h1 {
  font-size: 56px;
  letter-spacing: 2px;
  line-height: 58px;
  font-weight: 700;
}

h2 {
  font-size: 40px;
  letter-spacing: 1.5px;
  line-height: 44px;
  font-weight: 700;
}

h3 {
  font-size: 32px;
  letter-spacing: 1.15px;
  line-height: 36px;
  font-weight: 700;
}

h4 {
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 38px;
  font-weight: 700;
}

h5 {
  font-size: 24px;
  letter-spacing: 1.7px;
  line-height: 33px;
  font-weight: 700;
}

h6 {
  font-size: 18px;
  letter-spacing: 1.3px;
  line-height: 24px;
  font-weight: 700;
}

p {
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
}

.overline {
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
  text-transform: uppercase;
  color: #d87d4a;
}

.subTitle {
  font-size: 13px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
}

.button {
  height: 48px;
  width: 160px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}

.popUpOpen {
  overflow-y: hidden;
}

// .route-enter-from {
//   opacity: 0;
//   transform: translateY(-30px);
// }

// .route-leave-to {
//   opacity: 0;
//   transform: translateY(30px);
// }

// .route-enter-active {
//   transition: all 0.7s ease-out;
// }

// .route-leave-active {
//   transition: all 0.7s ease-in;
// }

// .route-enter-to,
// .route-leave-from {
//   opacity: 1;
//   transform: translateY(0px);
// }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
