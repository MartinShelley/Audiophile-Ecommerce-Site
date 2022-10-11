<template>
  <div
    class="categoryCard"
    @click="$router.push('/' + productCategory)"
    @mouseover="isCardHovering = true"
    @mouseleave="isCardHovering = false"
  >
    <div class="categoryImg">
      <img :src="imgUrl" />
    </div>
    <div class="cardContent">
      <h6>{{ productCategory }}</h6>
      <ButtonThree :cardHover="isCardHovering" />
    </div>
  </div>
</template>

<script>
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
    imgUrl() {
      return require(`@/assets/shared/desktop/image-category-thumbnail-${this.productCategory}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.categoryCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 284px;

  .categoryImg {
    height: 30%;
    z-index: 1;

    img {
      max-height: 215px;
    }
  }

  .cardContent {
    background-color: #f1f1f1;
    display: flex;
    height: 70%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;
    border-radius: 8px;

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
</style>