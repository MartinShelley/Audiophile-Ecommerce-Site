<template>
  <div
    class="categoryCard"
    @click="$router.push('/' + productCategory), toggleMobileNavigation()"
    @mouseover="isCardHovering = true"
    @mouseleave="isCardHovering = false"
  >
    <picture>
      <source :srcset="desktopImgUrl" media="(min-width: 1024px)" />
      <source :srcset="tabletImgUrl" media="(min-width: 768px)" />
      <source :srcset="mobileImgUrl" />
      <img :src="desktopImgUrl" :alt="`${productCategory}` + 'Category'" />
    </picture>
    <div class="cardContent">
      <h6>{{ productCategory }}</h6>
      <ButtonThree :cardHover="isCardHovering" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonThree from "../../UI/Buttons/ButtonThree.vue";
export default {
  props: {
    productCategory: String,
  },
  components: {
    ButtonThree,
  },
  data() {
    return {
      isCardHovering: false,
    };
  },
  computed: {
    desktopImgUrl() {
      return require(`@/assets/shared/desktop/image-category-thumbnail-${this.productCategory}.png`);
    },
    tabletImgUrl() {
      return require(`@/assets/shared/tablet/image-category-thumbnail-${this.productCategory}.png`);
    },
    mobileImgUrl() {
      return require(`@/assets/shared/mobile/image-category-thumbnail-${this.productCategory}.png`);
    },
    ...mapGetters({
      showMobileNav: "showMobileNav",
    }),
  },
  methods: {
    toggleMobileNavigation() {
      if (this.showMobileNav === true) {
        this.$store.commit("toggleMobileNavigation");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.categoryCard {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
  height: 204px;
  border-radius: 8px;

  .cardContent {
    display: flex;
    height: 70%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;

    h6 {
      margin-bottom: 15px;
      text-transform: uppercase;
    }
  }
}

.categoryCard:hover {
  cursor: pointer;
}

.categoryCard:hover + .button {
  color: #d87d4a;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .categoryCard {
    height: 165px;
    width: 223px;

    .cardContent {
      padding-bottom: 22px;
    }
  }
}

@media screen and (max-width: 767px) {
  .categoryCard {
    width: 327px;
    height: 165px;

    .cardContent {
      padding-bottom: 22px;
    }
  }
}

@media screen and (max-width: 415px) {
  .categoryCard {
    width: 100%;
  }
}
</style>