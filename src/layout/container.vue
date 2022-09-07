<template>
  <div class="container mx-auto h-screen bg-commonBg bg-opacity-90">
    <div class="flex flex-col h-full">
      <div class="bg-pink-700 h-auto">
        <Header/>
      </div>
      <div class="bg-pink-100 h-full">
        <Main/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './component/header.vue'
import Main from './component/main.vue'
</script>

<style scoped>

</style>
