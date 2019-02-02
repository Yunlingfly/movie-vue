<template>
  <div>
    <y-head></y-head>
    <router-view></router-view>
    <y-footer></y-footer>
  </div>
</template>

<script>
import yHead from "./Header.vue";
import yFooter from "./Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    yHead,
    yFooter
  }
};
</script>

