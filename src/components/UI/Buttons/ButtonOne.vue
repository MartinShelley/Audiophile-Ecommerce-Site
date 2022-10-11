<template>
  <button @click="$router.push(href)" class="button buttonOne">
    <slot>See Product</slot>
  </button>
</template>

<script>
export default {
  props: ["href"],
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