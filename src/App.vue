<template>
  <MainNav />
  <!-- <main> -->
  <router-view />
  <!-- </main> -->
  <TheFooter />
</template>


<script>
import MainNav from "./components/Navigation/MainNavigation.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
export default {
  components: {
    MainNav,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

* {
  font-family: Manrope;
  margin: 0;
  padding: 0;
}

body {
  margin: 0px;
}

// main {
//   padding: 0 165px;
// }

h1 {
  font-size: 56px;
  letter-spacing: 2px;
  line-height: 58px;
  font-weight: 700;
}

h2 {
  font-size: 40px;
  letter-spacing: 1.5px;
  line-height: 44px;
  font-weight: 700;
}

h3 {
  font-size: 32px;
  letter-spacing: 1.15px;
  line-height: 36px;
  font-weight: 700;
}

h4 {
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 38px;
  font-weight: 700;
}

h5 {
  font-size: 24px;
  letter-spacing: 1.7px;
  line-height: 33px;
  font-weight: 700;
}

h6 {
  font-size: 18px;
  letter-spacing: 1.3px;
  line-height: 24px;
  font-weight: 700;
}

p {
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
}

.overline {
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
  text-transform: uppercase;
  color: #d87d4a;
}

.subTitle {
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  font-weight: 400;
}

.button {
  height: 48px;
  width: 160px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
