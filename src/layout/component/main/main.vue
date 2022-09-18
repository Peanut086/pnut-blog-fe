<template>
  <div class="flex h-full p-2.5">
    <div class="w-1/6">
      <menus></menus>
    </div>
    <div class="w-4/6">
      <div class="w-full h-full bg-amber-700">
        <n-scrollbar class="h-full w-full">
          <router-view></router-view>
        </n-scrollbar>
      </div>
    </div>
    <div class="w-1/6">3</div>
  </div>
</template>

<script lang="ts" setup>
import menus from "../../../components/menus/menus.vue";
</script>

<style scoped>

</style>
