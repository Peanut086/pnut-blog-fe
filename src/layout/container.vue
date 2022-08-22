<template>
  <div class="container mx-auto h-screen bg-commonBg bg-opacity-90">
    <container-header></container-header>
    <div class="flex flex-auto flex-row">
      <div class="w-1/5">1</div>
      <div class="w-3/5">2</div>
      <div class="w-1/5">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import containerHeader from './component/container-header.vue'
</script>

<style scoped>

</style>
