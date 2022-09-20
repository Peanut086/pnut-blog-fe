<template>
  <div class="container mx-auto h-screen overflow-hidden bg-commonBg bg-opacity-90">
    <div class="flex flex-col h-full">
      <div class="w-full">
        <Header/>
      </div>
      <div class="h-full">
        <Main/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, getCurrentInstance} from "vue"
import Header from './component/header/header.vue'
import Main from './component/main/main.vue'

const context = getCurrentInstance()?.appContext;

onMounted(() => {
  console.log('container mounted')
  // 获取this
  context?.config.globalProperties.pnutRequest.POST({
    url: "/user/create",
    data: {
      "id": "",
      "nick_name": "JavaScript大王",
      "phone_number": "17787800784",
      "email": "361618664@qq.com",
      "introduce": "喜欢撸代码",
      "avatar": "暂无",
      "password": "970806",
      "create_time": "2022-11-11",
      "update_time": "2022-12-12"
    }
  })
})
</script>

<style scoped>

</style>
