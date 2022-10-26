<template>
  <!--  <n-scrollbar>-->
  <div class="h-full  p-2.5 m-3.5 flex flex-col ">
    <div class="mb-6">
      <slot name="header">
        <div class="h-full w-full flex flex-col">
          <div class="h-2/3 flex items-center ">
            <n-gradient-text :size="40" type="warning">
              {{ artical.title }}
            </n-gradient-text>
          </div>
          <div class="h-1/3">
            <div class="h-full w-full flex flex-row justify-start">
              <div class="h-8 flex justify-center align-center items-center p-3">
                <n-icon size="22">
                  <PersonCircleOutline/>
                </n-icon>
                <div class="mr-1.5 ml-1.5 ">作者:</div>
                <div class="text-blue-300">{{ artical.user.nick_name }}</div>
              </div>
              <div class="h-8 flex justify-center align-center items-center p-3">
                <n-icon size="22">
                  <CreateOutline/>
                </n-icon>
                <div class="mr-1.5 ml-1.5 ">创建于:</div>
                <div class="text-blue-300">{{ pnutDateFormat(artical.create_time) }}</div>
              </div>
              <div class="h-8 flex justify-center align-center items-center p-3">
                <n-icon size="22">
                  <CreateOutline/>
                </n-icon>
                <div class="mr-1.5 ml-1.5 ">标签:</div>
                <div class="text-blue-300">{{ accessTag(artical.tags) }}</div>
              </div>
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
    <div class="">
      <slot name="footer">
      </slot>
    </div>
  </div>
  <!--  </n-scrollbar>-->
</template>

<script lang="ts" setup>
import {IArticalInterface} from "../../interface/artical.interface";
import {pnutDateFormat} from "../../utils/pnutDateFormat";
import {computed, onMounted} from "vue";
import {ITag} from "../../interface/tag.interface";

const props = defineProps<{
  artical: IArticalInterface
}>()

const getArticalContent = () => {
  return props.artical.content
}

/*标签处理*/
const accessTag = computed(() => {
  return function (tags: ITag[]) {
    let tag = ""
    tags.forEach((item: ITag) => {
      tag = tag + ' ' + item.name
    })
    return tag
  }
})
onMounted(() => {

})
</script>

<style scoped>

</style>
