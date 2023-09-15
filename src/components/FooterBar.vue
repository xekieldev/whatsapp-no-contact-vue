<script setup>

</script>

<template>
  <footer class="footer">
    <ul class="footer-links">
      <li><a href="https://github.com/xekieldev"><img class="github-logo" src="../images/github-logo.png" alt=""></a></li>
      <li><a href="https://linkedin.com/in/exequiel-sartor"><img class="github-logo" src="../images/linkedin-logo.png"
            alt=""></a></li>

    </ul>
  </footer>
</template>


<style scoped>
.footer {
  background: #ffffff;
  /* opacity: 0.5; */
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 0;
}

.footer-links li {
  margin: 0 15px;
}

.footer-links a {
  text-decoration: none;
  color: white;
}

.github-logo {
  padding-top: 0px;
  margin: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
