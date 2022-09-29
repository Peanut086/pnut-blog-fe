<template>
  <div class="container mx-auto h-screen overflow-hidden bg-commonBg bg-opacity-90">
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
import {onMounted} from "vue";
import Header from './component/header/header.vue'
import Main from './component/main/main.vue'
import pnutRequest from "../pnutAxios/index"
import {IUser} from "../interface/user.interface";


onMounted(async () => {
  let res = await pnutRequest.GET<Array<IUser>>({
    url: "user"
  })
  console.log('Pnut ========> ', res.data[0].avatar)
})

</script>

<style scoped>

</style>
