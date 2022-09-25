<template>
  <div>
    <n-gradient-text class="text-2xl" type="info">
      我是傻逼
    </n-gradient-text>
    <n-menu
        :options="menuOptions"
        accordion
    />
  </div>
</template>

<script lang="ts" setup>
import {MenuOption, NIcon} from "naive-ui";
import {RouterLink, useRouter} from "vue-router";
import {Component, h} from "vue";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, {default: () => h(icon)})
}
const menuOptions: MenuOption[] = [
  {
    label: '工作台',
    key: 'work',
    icon: renderIcon(WorkIcon),
  }
]
</script>

<style scoped>

</style>
