<script setup>
import Help from '../components/Help.vue'
import Navbar from "../components/Nav.vue"
import Footerbar from "../components/Footer.vue"
</script>

<template>
  <navbar></navbar>
  <help/>
  <footerbar></footerbar>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 500px;
  }
  h2{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px;
    /* justify-content: center; */
  }
}</style>