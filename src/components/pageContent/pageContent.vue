<template>
  <n-scrollbar>
    <div class="h-full  p-2.5 m-3.5">
      <div class="h-10 mb-6">
        <slot name="header">
          <div class="h-full w-full flex flex-col">
            <div class="h-2/3 text-4xl flex items-center">
              <div>{{ artical.title }}</div>
            </div>
            <div class="h-1/3">
              <div class="h-full w-full flex flex-row justify-start">
                <div class="h-full mr-2">{{ pnutDateFormat(artical.create_time) }}</div>
                <div class="h-full">{{ artical.user.nick_name }}</div>
              </div>
            </div>
          </div>
        </slot>
      </div>
      <div class="">
        <slot name="content">
          <!--        <div>{{ artical.content }}</div>-->
        </slot>
      </div>
      <div class="h-20">
        <slot name="footer">
        </slot>
      </div>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import {IArticalInterface} from "../../interface/artical.interface";
import {pnutDateFormat} from "../../utils/pnutDateFormat";
import {onMounted} from "vue";

const props = defineProps<{
  artical: IArticalInterface
}>()

const getArticalContent = () => {
  return props.artical.content
}
onMounted(() => {

})
</script>

<style scoped>
div >>> .n-scrollbar-content {
  height: 100% !important;
}
</style>
