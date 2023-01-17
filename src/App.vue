<template>
  <div id="app">
    <div>
      <Layout />
    </div>
    <div></div>
  </div>
</template>

<script>
import Layout from "./layout/layout.vue";
export default {
  components: { Layout },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
