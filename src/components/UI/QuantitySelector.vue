<template>
  <div class="add-to-cart-quantity">
    <span @click="decreaseQuantity">-</span>
    <input type="number" readonly :value="quantity" id="quantity" />
    <span @click="increaseQuantity">+</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
      this.$emit("quantity", parseInt(this.quantity));
    },
    decreaseQuantity() {
      this.quantity--;
      this.$emit("quantity", parseInt(this.quantity));
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>