<template>
  <div class="h-full overflow-auto p-2.5 m-3.5">
    <div class="h-1/6">
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
        {{ artical.content }}
      </slot>
    </div>
    <div>
      <slot name="footer">
        这是底部
      </slot>
    </div>
  </div>
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

</style>
