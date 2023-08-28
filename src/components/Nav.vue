<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<nav class="navbar">
    <div class="logo">
        <a href="/"><img src="../images/logo.png" alt=""></a>
    </div>
    <ul class="nav-links">
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li><RouterLink to="/ayuda">Ayuda</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 0px 20px;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  list-style:none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
}
img{
    padding-top: 10px;
    margin: 5px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

</style>
