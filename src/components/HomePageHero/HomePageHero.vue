<template>
  <section id="homepage-hero">
    <div class="hero-text">
      <p class="subTitle">New Product</p>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <ButtonOne href="/headphones/xx99-mark-two-headphones" />
    </div>
    <img src="../../assets/home/desktop/Hero-figma.png" />
    <!-- <img src="../../assets/home/desktop/image-hero-original.jpg" /> -->
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  padding: 0 165px;
  background-color: #141313;
  min-height: 729px;
  // background-image: url("../../assets/home/desktop/image-hero-original.jpg");
  // background-image: url("../../assets/home/desktop/Hero-figma.png");
  // background-size: cover;
  // background-repeat: no-repeat;

  .hero-text {
    color: #fff;
    max-width: 398px;
    position: relative;
    top: 128px;

    .subTitle {
      opacity: 0.5;
      text-transform: uppercase;
    }

    h1 {
      text-transform: uppercase;
      margin: 24px 0;
    }

    p {
      margin: 0 0 40px;
      opacity: 0.75;
      padding-right: 49px;
    }
  }

  img {
    transform: translate(100px, -100px);
  }

  button {
    margin-top: 40px;
  }
}
</style>