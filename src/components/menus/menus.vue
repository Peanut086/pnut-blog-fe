<template>
  <div class="flex h-full w-full p-2.5 bg-amber-100 flex flex-col">
    <div class="bg-pink-100 h-1/6 text-center p-2.5">
      <pnut-avatar/>
    </div>
    <div class="bg-yellow-500 h-5/6 mt-2 p-2.5">
      <pnut-menu :menuOptions="menuOptions" title="文章"></pnut-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import pnutAvatar from "../pnutAvatar/pnutAvatar.vue"
import pnutMenu from "../pnutMenu/pnutMenu.vue"
import {MenuOption, NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {Component, h, onMounted} from "vue";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from '@vicons/ionicons5'
import {useArticalCategoryStore} from "../../store/modules/articalCategory";

// 获取菜单数据
onMounted(() => {
  useArticalCategoryStore().getArticalCategoryByType('1')
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/list'
              }
            },
            {default: () => '测试1'}
        ),
    key: 'go-to-work',
    icon: renderIcon(WorkIcon)
  }, {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/detail'
              }
            },
            {default: () => '测试2'}
        ),
    key: 'go-to-work',
    icon: renderIcon(WorkIcon)
  }
]
</script>

<style scoped>

</style>
