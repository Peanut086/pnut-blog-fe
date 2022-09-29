<template>
  <div class="w-1/3 font-bold text-2xl text-center">
    JavaScript大王
  </div>
  <div class="w-2/3 align-middle">
    <div class="w-1/2">
      <n-input clearable="true" placeholder="搜索" round>
        <template #suffix>
          <n-icon :component="LogoutIcon"/>
        </template>
      </n-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'
</script>

<style scoped>

</style>
