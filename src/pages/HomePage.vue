<template>
  <main>
    <HomePageHero />
    <ProductCategoryNav />
    <section id="product-banners">
      <div id="zx9-speaker">
        <picture>
          <source
            srcset="@/assets/home/desktop/zx9-speaker-image.png"
            media="(min-width: 1024px)"
          />
          <source
            srcset="@/assets/home/tablet/image-speaker-zx9.png"
            media="(min-width: 768px)"
          />
          <source srcset="@/assets/home/mobile/image-speaker-zx9.png" />
          <img src="@/assets/home/desktop/zx9-speaker-image.png" />
        </picture>
        <div class="banner-content">
          <h2>zx9 speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonTwo class="inverted" href="speakers/zx9-speaker" />
        </div>
      </div>
      <div id="zx7-speaker">
        <div class="zx7-speaker-banner">
          <div class="zx7-content">
            <h4>zx7 speaker</h4>
            <ButtonTwo href="/speakers/zx7-speaker" />
          </div>
        </div>
      </div>
      <div id="yx1-earphones">
        <img src="@/assets/home/desktop/image-earphones-yx1.jpg" />
        <div class="yx1-content">
          <div>
            <h4>yx1 earphones</h4>
            <ButtonTwo href="/earphones/yx1-earphones" />
          </div>
        </div>
      </div>
    </section>
    <ShopIntroBanner />
  </main>
</template>

<script>
import HomePageHero from "../components/HomePageHero/HomePageHero.vue";
import ButtonTwo from "../components/UI/Buttons/ButtonTwo.vue";
export default {
  components: {
    HomePageHero,
    ButtonTwo,
  },
};
</script>

<style lang="scss" scoped>
#product-banners {
  padding: 0 165px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-rows: 560px 320px 320px;
  row-gap: 48px;
  column-gap: 30px;
  margin-bottom: 200px;

  #zx9-speaker {
    grid-column: 1 / 3;
    grid-row: 1;
    background-color: #d87d4a;
    background-image: url("@/assets/home/desktop/pattern-circles.svg");
    background-repeat: no-repeat;
    background-position: -145px -36px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 148px;
    overflow: hidden;

    img {
      max-height: 493px;
      position: relative;
      top: 94px;
      left: 108px;
    }

    .banner-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 349px;
      color: #fff;

      h2 {
        text-transform: uppercase;
        font-size: 56px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 2px;
        text-align: left;
        margin-bottom: 24px;
      }

      p {
        opacity: 0.75;
      }

      button {
        margin-top: 40px;
      }
    }
  }

  #zx7-speaker {
    grid-row: 2;
    grid-column: 1 / 3;
    background-image: url("@/assets/home/desktop/image-speaker-zx7.jpg");
    background-size: 100%;
    height: 320px;
    border-radius: 8px;

    .zx7-content {
      position: relative;
      top: 101px;
      left: 95px;

      h4 {
        text-transform: uppercase;
        margin-bottom: 32px;
      }
    }
  }

  #yx1-earphones {
    grid-row: 3;
    grid-column: 1 / 3;
    display: flex;
    gap: 30px;

    img {
      grid-column: 1 / 2;
      border-radius: 8px;
      width: 50%;
    }

    .yx1-content {
      grid-column: 2 / 3;
      background-color: #f1f1f1;
      width: 50%;
      border-radius: 8px;

      div {
        display: flex;
        flex-direction: column;
        position: relative;
        left: 95px;
        top: 101px;

        h4 {
          text-transform: uppercase;
          margin-bottom: 32px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #product-banners {
    padding: 0 40px;
    grid-template-rows: 720px 320px 320px;

    #zx9-speaker {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>