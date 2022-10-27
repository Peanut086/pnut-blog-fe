<template>
  <div class="flex h-full bg-bg-menu-box w-full pr-2.5  flex flex-col">
    <div class=" h-1/6 w-full text-center">
      <pnut-avatar/>
    </div>
    <div class="bg-bg-menu-box h-5/6 mt-2 p-2.5">
      <pnut-menu :menuOptions="menus" title="组成"></pnut-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pnutAvatar from "../pnutAvatar/pnutAvatar.vue"
import pnutMenu from "../pnutMenu/pnutMenu.vue"
import {Component, h, onMounted, onBeforeMount, computed, ref} from "vue";
import {useArticalCategoryStore} from "../../store/modules/articalCategory";

// 获取菜单数据
onBeforeMount(() => {
  useArticalCategoryStore().getArticalCategoryByType('1')
})

const menus: any = computed(() => useArticalCategoryStore().getCategoryTec)
</script>

<style scoped>

</style>
