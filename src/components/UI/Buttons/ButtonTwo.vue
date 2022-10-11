<template>
  <button :class="renderClass" @click="$router.push(href)">
    <slot>See Product</slot>
  </button>
</template>

<script>
export default {
  props: ["class", "href"],
  computed: {
    renderClass() {
      if (this.class === "inverted") {
        return "button buttonTwo-inverted";
      } else {
        return "button buttonTwo";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.buttonTwo {
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
}

.buttonTwo-inverted:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}

.buttonTwo:hover,
.buttonTwo-inverted {
  background-color: #000;
  color: #fff;
}

.buttonTwo:hover,
.buttonTwo-inverted:hover {
  cursor: pointer;
}
</style>