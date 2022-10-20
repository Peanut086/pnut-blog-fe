<template>
  <div class="flex h-full p-2.5">
    <div class="w-1/6">
      <menus></menus>
    </div>
    <div class="w-4/6">
      <div class="w-full h-full">
        <!--        <n-scrollbar class="h-full w-full">-->
        <n-dialog-provider>
          <router-view></router-view>
        </n-dialog-provider>
        <!--        </n-scrollbar>-->
      </div>
    </div>
    <div class="w-1/6">
      <right-aside/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import menus from "../../../components/menus/menus.vue";
import rightAside from "../../../components/rightAside/rightAside.vue"
</script>

<style scoped>

</style>
