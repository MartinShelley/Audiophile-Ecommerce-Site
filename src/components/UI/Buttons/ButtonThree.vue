<template>
  <div @click="$router.push(href)">
    <span
      class="productCategoryLink"
      :class="{ productCategoryLinkHover: cardHover }"
      >Shop</span
    >
    <img
      class="linkArrow"
      src="./../../../assets/shared/desktop/icon-arrow-right.svg"
      alt="Shop"
    />
  </div>
</template>

<script>
export default {
  props: ["href", "cardHover"],
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  gap: 13px;

  .productCategoryLink {
    text-transform: uppercase;
    font-size: 13px;
    opacity: 0.5;
    letter-spacing: 1px;
    color: #000;
    font-weight: 700;
  }

  .productCategoryLinkHover {
    color: #d87d4a;
  }
}
</style>