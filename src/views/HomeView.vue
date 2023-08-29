<script setup>
import Fmobile from '../components/FormMobile.vue'
import Navbar from "../components/Nav.vue"
import Footerbar from "../components/Footer.vue"

</script>

<template>
  <navbar></navbar>
  <div class="content">
  <!-- <h1>Envía un WhatsApp sin guardar el número en tus contactos</h1> -->
  <fmobile title="Envía un WhatsApp sin guardar el número en tus contactos" />
</div>
  <footerbar></footerbar>
</template>

<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 500px;
    
  }
fmobile{
  justify-content: center;
} */
  /* h1 {
    display: flex; 
    justify-content: center;
    width: 100%;
    padding: 40px;
  } */
/* } */
</style>L