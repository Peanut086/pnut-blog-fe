<template>
  <div class="container mx-auto h-screen overflow-hidden bg-commonBg">
    <div class="flex flex-col h-full">
      <div class="w-full">
        <Header/>
      </div>
      <div class="h-full">
        <n-message-provider>
          <Main/>
        </n-message-provider>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './component/header/header.vue'
import Main from './component/main/main.vue'
import {onMounted} from "vue";
import {useTagsStore} from "../store/modules/tags";
import {useUerInfoStore} from "../store/modules/userInfo";
import LocalStorageUtil from "../utils/localStorageUtil";
import {IUser} from "../interface/user.interface";

const tagStore = useTagsStore()
const userInfoStore = useUerInfoStore()

onMounted(() => {
  // 请求所有标签数据
  tagStore.queryAllTags()
  let userInfo: IUser = JSON.parse(LocalStorageUtil.get('userInfo') || '{}')
  // 每次初始化或者刷新页面都会同步缓存中的用户信息到pinia    没有的话
  if (userInfo.id) {
    userInfoStore.setUserInfo(userInfo)
  } else {
    window.$message.info("还可以注册登录使用喔~")
  }
})
</script>

<style scoped>

</style>
