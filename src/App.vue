<script setup>

import { RouterView } from 'vue-router'
import "./assets/main.css"
import Navbar from "./components/Nav.vue"
import Footerbar from "./components/Footer.vue"

</script>

<template>
  <navbar></navbar>
<div class="container">
  <RouterView />
</div>
  <footerbar></footerbar>
</template>

<style scoped>

.container{

  background: linear-gradient(to top, #ffffff, #888888);
  height: 100%;

}
</style>
