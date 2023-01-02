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
  background-color: #141313;
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

@media screen and (max-width: 1023px) and (min-width: 415px) {
  #category-hero {
    min-height: unset;
    padding: 195px 0 97px;
  }
}

@media screen and (max-width: 415px) {
  #category-hero {
    min-height: unset;
    padding: 122px 0 32px;

    .hero-title {
      h1 {
        font-size: 28px;
        line-height: 38.25px;
        letter-spacing: 2px;
      }
    }
  }
}
</style>