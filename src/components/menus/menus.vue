<template>
  <div class="flex h-full w-full p-2.5 bg-amber-100 flex flex-col">
    <div class="bg-pink-100 h-1/6 text-center p-2.5">
      <pnut-avatar/>
    </div>
    <div class="bg-yellow-500 h-5/6 mt-2 p-2.5">
      <pnut-menu></pnut-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pnutAvatar from "../pnutAvatar/pnutAvatar.vue"
import pnutMenu from "../pnutMenu/pnutMenu.vue"
</script>

<style scoped>

</style>
