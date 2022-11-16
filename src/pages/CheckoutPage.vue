<template>
  <main>
    <div class="back-button-nav">
      <router-link @click="$router.back()" to="" class="back-button"
        >Go Back</router-link
      >
    </div>
    <div class="checkout">
      <form>
        <h3>Checkout</h3>
        <p class="subtitle form-section-heading">Billing Details</p>
        <div class="billing-details form-section">
          <div class="form-item">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="form-item">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="form-item">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>
        <p class="subtitle form-section-heading">Shipping Info</p>
        <div class="shipping-info form-section">
          <div class="form-item address">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div class="form-item">
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" name="postcode" />
          </div>
          <div class="form-item">
            <label for="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div class="form-item">
            <label for="country">Country</label>
            <input type="text" id="country" name="country" />
          </div>
        </div>
        <p class="subtitle form-section-heading">Payment Details</p>
        <div class="payment-section">
          <label>Payment Method</label>
          <!-- <div id="credit-debit-card" class="payment-type"> -->
          <label id="credit-debit-card" class="payment-type"
            ><input
              type="radio"
              name="paymentMethod"
              value="credit/debit card"
              @click="togglePaymentMethod('card')"
            />Credit/Debit Card</label
          >
          <!-- </div> -->
          <!-- <div id="cash-on-delivery" class="payment-type"> -->
          <label id="cash-on-delivery" class="payment-type"
            ><input
              type="radio"
              name="paymentMethod"
              value="cash"
              @click="togglePaymentMethod('cash')"
            />Cash on Delivery</label
          >
          <!-- </div> -->
          <div id="selected-cash" v-if="cashOnDeliverySelected">
            <img src="../assets/checkout/icon-cash-on-delivery.svg" />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
      </form>
      <aside>
        <h6>Summary</h6>
        <div v-if="this.getProductsInCart.length === 0">
          <h6>No Products in cart</h6>
        </div>
        <ul v-else>
          <li v-for="product in getProductsInCart" :key="product.productName">
            <div class="product">
              <img :src="require(`../${product.cartImage}`)" />
              <div class="product-details">
                <div>
                  <p id="product-name">{{ product.shortName }}</p>
                  <p id="product-price">£{{ product.productPriceString }}</p>
                </div>
                <div>
                  <p id="product-quantity">x{{ product.quantity }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="order-totals">
          <div class="total total-label">
            <p>Total</p>
            <h6>£{{ cartTotalLabel }}</h6>
          </div>
          <div class="delivery total-label">
            <p>Delivery</p>
            <h6>£50</h6>
          </div>
          <div class="vat total-label">
            <p>VAT(included)</p>
            <h6>£{{ VATLabel }}</h6>
          </div>
        </div>
        <div class="grand-total total-label">
          <p>Grand Total</p>
          <h6 id="grand-total-price">£{{ grandTotal }}</h6>
        </div>
        <ButtonOne>Continue & Pay</ButtonOne>
      </aside>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cashOnDeliverySelected: false,
    };
  },
  methods: {
    checkFormIsValid() {},
    togglePaymentMethod(paymentType) {
      console.log("togglePaymentMethod");
      if (paymentType === "cash") {
        this.cashOnDeliverySelected = true;
      } else if (paymentType === "card") {
        this.cashOnDeliverySelected = false;
      }
    },
  },
  computed: {
    ...mapGetters("cart", {
      getProductsInCart: "getProductsInCart",
      cartQuantity: "cartQuantity",
      cartTotalPrice: "cartTotalPrice",
      showCart: "showCart",
    }),
    cartTotalLabel() {
      return this.cartTotalPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    grandTotal() {
      const VAT = this.cartTotalPrice * 0.2;
      const grandTotalValue = this.cartTotalPrice + 50 + VAT;
      if (grandTotalValue % 1 != 0) {
        return grandTotalValue
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return grandTotalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    VATLabel() {
      const VATValue = this.cartTotalPrice * 0.2;
      if (VATValue % 1 != 0) {
        return VATValue.toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return VATValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 165px 141px;
  background-color: #f2f2f2;
  height: 100%;
  .back-button-nav {
    padding: 79px 0 38px;

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

  .checkout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 30px;

    form {
      background-color: #fff;
      padding: 0 48px;
      border-radius: 8px;

      h3 {
        margin: 54px 0 41px 0;
        text-transform: uppercase;
      }

      .form-section-heading {
        text-transform: uppercase;
        color: #d87d4a;
        margin-bottom: 16px;
        font-size: 13px;
        letter-spacing: 0.93px;
        font-weight: 700;
      }

      input {
        border: 1px solid #cfcfcf;
        border-radius: 8px;
      }

      .form-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        row-gap: 24px;
        margin-bottom: 55px;
        .form-item {
          display: flex;
          flex-direction: column;

          label {
            font-size: 12px;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: -0.21px;
            text-align: left;
            margin-bottom: 9px;
          }

          input {
            height: 56px;
            padding-left: 16px;
          }
        }
      }

      .shipping-info {
        grid-template-rows: 1fr 1fr 1fr;

        .address {
          grid-column: 1/3;
        }
      }

      .payment-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 48px;

        label {
          font-size: 12px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: -0.21px;
          text-align: left;
        }

        #credit-debit-card {
          grid-column: 2 / 3;
          margin-bottom: 16px;
        }

        #cash-on-delivery {
          grid-column: 2 / 3;

          // label {
          //   margin-bottom: 0;
          // }
        }

        .payment-type {
          display: flex;
          align-items: center;
          height: 56px;
          border: 1px solid #cfcfcf;
          border-radius: 8px;

          label {
            font-size: 14px;
            font-weight: 700;
            line-height: 19px;
            letter-spacing: -0.25px;
            text-align: left;
            margin-left: 16px;
          }

          input {
            margin: 0 16px 0 21px;
            width: 20px;
            height: 20px;
            background-clip: content-box;
            background-color: #fff;
            appearance: none;
            padding: 5px;
            border-radius: 50%;
          }

          input:checked {
            background-color: #d87d4a;
          }
        }

        #selected-cash {
          display: flex;
          align-items: center;
          grid-column: 1 / 3;
          margin: 30px 0 40px;

          p {
            font-size: 15px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0px;
            text-align: left;
            color: #000;
            opacity: 0.5;
            margin-left: 32px;
            max-width: 554px;
          }
        }
      }
    }
    aside {
      background-color: #fff;
      border-radius: 8px;
      padding: 32px 33px;
      height: fit-content;
      h6 {
        text-transform: uppercase;
      }

      ul {
        margin-top: 31px;
        li {
          list-style: none;
          margin-bottom: 24px;

          .product {
            display: grid;
            grid-template-columns: 0.5fr 2fr;
            align-items: center;

            img {
              width: 64px;
              height: 64px;
              border-radius: 8px;
            }

            .product-details {
              display: flex;
              justify-content: space-between;
              margin-left: 16px;

              #product-name {
                font-size: 15px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0px;
                text-align: left;
              }

              #product-price {
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0px;
                text-align: left;
                opacity: 0.5;
              }

              #product-quantity {
                font-weight: 700;
                letter-spacing: 0px;
                text-align: right;
                opacity: 0.5;
              }
            }
          }
        }
      }

      .order-totals {
        margin-bottom: 24px;

        .total,
        .delivery {
          margin-bottom: 8px;
        }
      }

      .grand-total {
        margin-bottom: 32px;

        #grand-total-price {
          color: #d87d4a;
        }
      }
      .total-label {
        display: flex;
        justify-content: space-between;

        p {
          opacity: 0.5;
          text-transform: uppercase;
        }
        h6 {
          margin: 0;
        }
      }
      button {
        width: 100%;
      }
    }
  }
}
</style>