<template>
  <section id="homepage-hero">
    <div class="hero-text">
      <p class="overline">New Product</p>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <ButtonOne href="/headphones/xx99-mark-two-headphones" />
    </div>
    <picture>
      <source
        media="(min-width:1024px)"
        srcset="@/assets/home/desktop/Hero-figma.png"
      />
      <source
        media="(min-width:768px)"
        srcset="@/assets/home/tablet/image-header.jpg"
      />
      <source srcset="@/assets/home/mobile/image-header.jpg" />
      <img
        src="@/assets/home/desktop/Hero-figma.png"
        alt="X99 Mark 2 Headphones"
        style="width: auto"
      />
    </picture>
    <!-- <img src="../../assets/home/desktop/image-hero-original.jpg" /> -->
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  //padding: 0 165px;
  background-color: #141313;
  min-height: 729px;
  justify-content: center;
  margin-bottom: 200px;
  .hero-text {
    color: #fff;
    max-width: 398px;
    position: relative;
    top: 128px;

    .overline {
      color: #fff;
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

@media screen and (max-width: 1023px) {
  section {
    padding: 0;
    justify-content: center;
    margin-bottom: 140px;

    .hero-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      max-width: 346px;
      transform: translateY(25%);

      .overline {
        margin-bottom: 24px;
      }

      h1 {
        text-align: center;
        margin-top: 0;
      }

      p {
        text-align: center;
        padding-right: 0;
      }
    }

    img {
      transform: unset;
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 415px) {
  section {
    padding: 0;
    min-height: unset;
    margin-bottom: 120px;

    .hero-text {
      max-width: 328px;
      .overline {
        margin-bottom: 16px;
      }
      h1 {
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 1.29px;
      }
    }
  }
}
</style>