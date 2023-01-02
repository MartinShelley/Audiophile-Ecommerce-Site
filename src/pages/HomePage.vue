<template>
  <main>
    <HomePageHero />
    <ProductCategoryNav />
    <section id="product-banners">
      <div id="zx9-speaker">
        <picture>
          <source
            srcset="@/assets/home/desktop/zx9-speaker-image(2).png"
            media="(min-width:1024px)"
          />
          <source
            srcset="@/assets/home/tablet/image-speaker-zx9(2).png"
            media="(min-width:768px)"
          />
          <source srcset="@/assets/home/mobile/image-speaker-zx9(2).png" />
          <img src="@/assets/home/desktop/zx9-speaker-image(2).png" />
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
        <div class="zx7-content">
          <h4>zx7 speaker</h4>
          <ButtonTwo href="/speakers/zx7-speaker" />
        </div>
        <picture>
          <source
            srcset="@/assets/home/desktop/image-speaker-zx7.jpg"
            media="(min-width:1024px)"
          />
          <source
            srcset="@/assets/home/tablet/image-speaker-zx7.jpg"
            media="(min-width:768px)"
          />
          <source srcset="@/assets/home/mobile/image-speaker-zx7.jpg" />
          <img src="@/assets/home/desktop/image-speaker-zx7.jpg" />
        </picture>
      </div>
      <div id="yx1-earphones">
        <picture>
          <source
            srcset="@/assets/home/desktop/image-earphones-yx1.jpg"
            media="(min-width:1024px)"
          />
          <source
            srcset="@/assets/home/tablet/image-earphones-yx1(2).jpg"
            media="(min-width:768px)"
          />
          <source srcset="@/assets/home/mobile/image-earphones-yx1.jpg" />
          <img src="@/assets/home/desktop/image-earphones-yx1.jpg" />
        </picture>
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
  // grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-rows: 560px 320px 320px;
  row-gap: 48px;
  column-gap: 30px;
  max-width: 1110px;
  margin: 0 auto 200px;

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
    // height: 560px;

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
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    // background-image: url("@/assets/home/desktop/image-speaker-zx7.jpg");
    // background-size: 100%;
    // height: 320px;

    .zx7-content {
      position: relative;
      top: 101px;
      left: 95px;
      grid-row: 1;
      grid-column: 1 / 2;

      h4 {
        text-transform: uppercase;
        margin-bottom: 32px;
      }
    }

    picture {
      grid-row: 1;
      grid-column: 1 /3;
      img {
        width: 100%;
        max-height: 320px;
        border-radius: 8px;
      }
    }
  }

  #yx1-earphones {
    grid-row: 3;
    grid-column: 1 / 3;
    display: flex;
    gap: 30px;

    picture {
      grid-column: 1 / 2;

      img {
        border-radius: 8px;
        // width: 50%;
      }
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

@media screen and (max-width: 1023px) {
  /* and (min-width: 768px) */
  #product-banners {
    margin-bottom: 96px;
    padding: 0 40px;
    grid-template-rows: 720px 320px 320px;

    #zx9-speaker {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 64px;
      background-position: center -280px;
      // height: 720px;

      img {
        top: unset;
        left: unset;
      }

      .banner-content {
        align-items: center;
        h2,
        p {
          text-align: center;
        }
      }
    }

    #zx7-speaker {
      .zx7-content {
        left: 62px;
      }
    }

    #yx1-earphones {
      picture {
        width: 50%;

        img {
          width: 100%;
          max-height: 320px;
        }
      }
      .yx1-content {
        div {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: fit-content;
        }
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #product-banners {
    margin-bottom: 120px;
    padding: 0 24px;
    grid-template-rows: 600px 320px 200px 200px;

    #zx9-speaker {
      background-size: 626px;
      background-position: center -132px;
      justify-content: unset;

      .banner-content {
        max-width: 280px;
        padding: 24px;
        h2 {
          line-height: 40px;
          font-size: 36px;
        }
      }

      img {
        top: 55px;
      }
    }

    #yx1-earphones {
      display: block;
      gap: unset;
      flex-direction: unset;
      picture {
        width: 100%;
      }

      .yx1-content {
        margin-top: 24px;
        width: 100%;
        height: 100%;
      }
    }

    #zx7-speaker {
      .zx7-content {
        left: 24px;
        min-width: 204px;
      }
    }
  }
}

@media screen and (max-width: 376px) {
  #product-banners {
    #zx9-speaker {
      background-size: 558px;
    }
  }
}

@media screen and (max-width: 340px) {
  #product-banners {
    #zx7-speaker {
      .zx7-content {
        top: 70px;
        left: 24px;
        min-width: 204px;

        h4 {
          font-size: 23px;
        }
      }
    }
  }
}

// @media screen and (max-width: 768px) {
//   #yx1-earphones {
//     .yx1-content {
//       gap: 11px;
//     }
//   }
// }
</style>