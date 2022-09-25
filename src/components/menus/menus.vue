<template>
  <div class="flex h-full w-full p-2.5 bg-amber-100 flex flex-col">
    <div class="bg-pink-100 h-1/6 text-center p-2.5">
      <pnut-avatar/>
    </div>
    <div class="bg-yellow-500 h-5/6 mt-2 p-2.5">
      <pnut-menu :menuOptions="menuOptions" title="测试标题"></pnut-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pnutAvatar from "../pnutAvatar/pnutAvatar.vue"
import pnutMenu from "../pnutMenu/pnutMenu.vue"
import {MenuOption, NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {Component, h} from "vue";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: MenuOption[] = [
  {
    label: '工作台',
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '傻逼',
    key: 'go-to-work',
    icon: renderIcon(WorkIcon)
  }
]
</script>

<style scoped>

</style>
