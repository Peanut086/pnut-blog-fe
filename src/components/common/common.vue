<template>
  <!--评论组件-->
  <div class="h-full w-full flex-col mt-2.5">
    <n-divider title-placement="left">
      <span class="text-gray-500 text-xl">评论</span>
      <span class="text-gray-400 text-xxs ml-2">200+</span>
    </n-divider>
    <commontPanel @update="updateCommentValue"/>
    <div v-for="item in 10" class="flex-row align-center justify-start mt-6  border-b-2">
      <div class="flex align-center mt-4 pb-2">
        <n-avatar
            :size="32"
            class="mr-6"
            round
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div>
          <div class="text-xxl">JavaScript大王</div>
          <div class="text-xl mt-2 mb-2">
            1、随便写的文本
          </div>
          <div class="text-xxl">2022-11-11 22:22:22 reply</div>
        </div>
      </div>
      <div class="flex align-center mt-4 pb-2 ml-14 border-t-2 pt-2">
        <n-avatar
            :size="26"
            class="mr-6"
            round
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div>
          <div class="text-xxl">
            <n-text type="success">JavaScript大王</n-text>
            回复给:
            <n-text type="success">卢本伟</n-text>
          </div>
          <div class="text-xl mt-2 mb-2">
            1-1、随便写的文本
          </div>
          <div class="text-xxl">2022-11-11 22:22:22
            <n-text class="cursor-pointer" type="error">回复</n-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import commontPanel from './components/commontPanel.vue'
import { ICustomInfo } from './components/types'

const updateCommentValue = (val: string, customInfo: ICustomInfo) => {
  console.log('Pnut ========> ', val, customInfo)
}
</script>
