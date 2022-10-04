<template>
  <div class="cursor-pointer">
    <n-dropdown
        :options="menus"
        :show-arrow="true"
        trigger="click"
        @select="dropdownHandler"
    >
      <div>
        <n-button icon-placement="right" secondary strong>
          <template #icon>
            <n-icon>
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <g fill="none">
                  <path
                      d="M9.25 7.25c0 .513-.309.953-.75 1.146v1.108a.5.5 0 1 1-1 0V8.396A1.25 1.25 0 1 1 9.25 7.25zM7.143 2.042a8.308 8.308 0 0 1-1.718.875a9.266 9.266 0 0 1-2.7.576a5.133 5.133 0 0 1-.17.007h-.05A.5.5 0 0 0 2 4v2.755a7.5 7.5 0 0 0 3.685 6.457l2.062 1.219a.5.5 0 0 0 .509 0l2.06-1.218A7.5 7.5 0 0 0 14 6.756V4a.5.5 0 0 0-.508-.5h-.05a7.886 7.886 0 0 1-.804-.064a8.981 8.981 0 0 1-2.051-.518a8.691 8.691 0 0 1-1.724-.88a5.086 5.086 0 0 1-.4-.297a2.076 2.076 0 0 1-.111-.098a.5.5 0 0 0-.706.005l-.109.097c-.082.07-.213.173-.394.297zM3 6.755V4.477a10.265 10.265 0 0 0 2.78-.626a9.302 9.302 0 0 0 1.926-.983c.115-.078.214-.15.298-.215c.085.064.185.136.3.214c.424.285 1.058.65 1.922.983A9.98 9.98 0 0 0 13 4.48v2.277a6.5 6.5 0 0 1-3.193 5.596l-1.806 1.067l-1.807-1.068A6.5 6.5 0 0 1 3 6.755z"
                      fill="currentColor"></path>
                </g>
              </svg>
            </n-icon>
          </template>
        </n-button>
      </div>
    </n-dropdown>
  </div>
</template>

<script lang="ts" setup>
import {h, defineComponent} from 'vue'
import {useRouter} from "vue-router";
import type {Component} from 'vue'
import {NIcon, DropdownOption} from 'naive-ui'
import headerLeft from "./components/headerLeft.vue"

import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const router = useRouter();

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
import {IIHeaderMenus} from "../../../../interface/header.interface";

const menus: Array<IIHeaderMenus> = [
  {
    label: '登录',
    key: "login",
    icon: renderIcon(UserIcon)
  },
  {
    label: "注册",
    key: "register",
    icon: renderIcon(EditIcon)
  }
]

const dropdownHandler = (key: string | number, option: DropdownOption) => {
  console.log('Pnut ========> ', key)
  console.log('Pnut ========> ', option)
  switch (key) {
    case "login":
      router.push({
        path: "/login",
      });
      break
    case "register":
      router.push({
        path: "/register",
      });
      break
  }
}
</script>

<style scoped>

</style>
