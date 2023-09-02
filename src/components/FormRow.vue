<script setup>

</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
