<template>
  <div class="container mx-auto h-screen overflow-hidden bg-commonBg">
    <div class="flex flex-col h-full">
      <div class="w-full">
        <Header/>
      </div>
      <div class="h-full">
        <n-message-provider>
          <Main/>
        </n-message-provider>
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
