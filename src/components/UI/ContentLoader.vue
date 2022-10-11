<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader },
};
</script>

<template>
  <content-loader
    viewBox="0 0 1400 600"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="4" rx="2" ry="2" width="588" height="188" />
    <rect x="8" y="227" rx="0" ry="0" width="241" height="260" />
    <rect x="284" y="233" rx="0" ry="0" width="275" height="34" />
    <rect x="286" y="288" rx="0" ry="0" width="271" height="116" />
    <rect x="287" y="425" rx="0" ry="0" width="268" height="53" />
  </content-loader>
</template>