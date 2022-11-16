<template>
  <router-link :to="href" v-if="href">
    <button class="button buttonOne" :style="fullWidthStyling">
      <slot>See Product</slot>
    </button>
  </router-link>
  <button class="button buttonOne" v-else>
    <slot>See Product</slot>
  </button>
</template>

<script>
export default {
  props: ["href", "style"],
  computed: {
    fullWidthStyling() {
      return {
        width: this.style,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.buttonOne {
  background-color: #d87d4a;
  color: #fff;
  border: none;
}

.buttonOne:hover {
  background-color: #fbaf85;
}
</style>