<template>
  <div class="container mx-auto h-screen bg-commonBg bg-opacity-90">
    <div class="flex flex-col h-full">
      <div class="w-full">
        <Header/>
      </div>
      <div class="h-full">
        <Main/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './component/header/header.vue'
import Main from './component/main/main.vue'
</script>

<style scoped>

</style>
