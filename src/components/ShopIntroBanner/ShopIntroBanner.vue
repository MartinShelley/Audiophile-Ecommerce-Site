<template>
  <section id="shop-intro-banner">
    <div class="banner-content">
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <picture>
      <source
        srcset="@/assets/shared/desktop/image-best-gear.jpg"
        media="(min-width: 1024px)"
      />
      <source
        srcset="@/assets/shared/tablet/image-best-gear.jpg"
        media="(min-width: 481px)"
      />
      <source srcset="@/assets/shared/mobile/image-best-gear.jpg" />
      <img src="@/assets/shared/desktop/image-best-gear.jpg" />
    </picture>
  </section>
</template>

<style lang="scss" scoped>
#shop-intro-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 165px;
  column-gap: 125px;
  align-items: center;

  .banner-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 445px;

    h2 {
      text-transform: uppercase;

      span {
        color: #d87d4a;
      }
    }

    p {
      opacity: 0.5;
    }
  }

  img {
    border-radius: 8px;
  }
}

@media screen and (max-width: 1023px) {
  #shop-intro-banner {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 40px;

    .banner-content {
      margin-top: 63px;
      text-align: center;
      max-width: 573px;
    }

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 480px) {
  #shop-intro-banner {
    .banner-content {
      max-width: 327px;
      h2 {
        font-size: 28px;
      }
    }
  }
}
</style>