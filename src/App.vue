<script setup>

import { RouterView } from 'vue-router'
import "./assets/main.css"
import Navbar from "./components/NavBar.vue"
import Footerbar from "./components/FooterBar.vue"

</script>

<template>
  <navbar />
  <div class="container">
    <RouterView />
  </div>
  <footerbar />
</template>

<style scoped>

.container{

  background: linear-gradient(to top, #ffffff, #888888);
  height: 95vh;

}
</style>
