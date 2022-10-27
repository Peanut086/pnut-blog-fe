<template>
  <div class="w-full h-12 flex flex-nowrap bg-bg-menu-box shadow mb-2">
    <div class="w-1/2 flex justify-between items-center p-2">
      <header-left></header-left>
    </div>
    <div class="w-1/2 flex flex-row-reverse items-center p-2">
      <header-right></header-right>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {NIcon, DropdownOption} from 'naive-ui'
import headerLeft from "./components/headerLeft.vue"
import headerRight from "./components/headerRight.vue"

</script>

<style scoped>

</style>
