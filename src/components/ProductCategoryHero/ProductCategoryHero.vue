<template>
  <section id="category-hero">
    <div class="hero-title">
      <h1>{{ category }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style lang="scss" scoped>
header {
  background-color: #000;
}

#category-hero {
  display: flex;
  background-color: #141414;
  justify-content: center;
  align-items: center;
  min-height: 239px;

  h1 {
    text-transform: uppercase;
    color: #fff;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
  }
}
</style>