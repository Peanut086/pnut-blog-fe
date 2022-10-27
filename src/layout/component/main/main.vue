<template>
  <div class="flex h-full">
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
import {useMessage} from "naive-ui";

// message挂在全局  方便在pinia中调用
window.$message = useMessage()
</script>

<style scoped>

</style>
