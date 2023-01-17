<template>
    <div class="layout"> 
      <SideBar />
      <div class="content-wrapper">
       <router-view> </router-view>
      </div>
    </div>
  </template>
  <script>
  import SideBar from "@/components/sidebar/SideBar.vue"
  // import BreadCrumbs from "../components/BreadCrumbs.vue"
  export default {
     name:"layoutPage",
     components: { SideBar  }
  }
  </script>
  <style lang="scss" scoped>
  .layout{
    background:  red;
    display: flex;
    width: 100%;
    height: 100vh;
    .content-wrapper{
      background: green;
      flex: 1;
    }
  }
  </style>