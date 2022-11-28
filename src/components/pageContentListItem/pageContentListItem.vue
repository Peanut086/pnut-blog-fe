<template>
  <div class="page-list-item-box"
       @click="showArticalDetail">
    <div v-if="artical.cover">
      <!--      <img class="h-80 w-full" :src="https://cdn.seovx.com/?mom=302">-->
      <img :src="artical.cover" class="h-80 w-full">
    </div>
    <div
        class="page-list-item-title">
      <n-icon :color="randomColor" :component="randomIcon" size="30"/>
      <n-gradient-text :gradient="textLinearGradient" class="ml-2 text-2xl">
        {{ artical.title }}
      </n-gradient-text>
      <n-divider/>
    </div>
    <div class="h-1/3 w-full flex items-center text-xs mt-2">
      <div>作者:{{ artical.user.nick_name }}</div>
      <div class="ml-3.5">发布时间:{{ pnutDateFormat(artical.user.create_time) }}</div>
      <div class="h-1/3 ml-3">
        <n-tag v-for="(i,dx) in artical.tags" class=" mr-2" type="success">{{ i.name }}</n-tag>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { IArticalInterface } from '../../interface/artical.interface'
import { pnutDateFormat } from '../../utils/pnutDateFormat'
import { useArticalStore } from '../../store/modules/artical/index'
import getRandomIcon from '../../utils/randomIcon'
import randomColorStr from '../../utils/randomColorStr'

const textLinearGradient = 'linear-gradient(243deg, rgba(181,208,15,0.7931547619047619) 5%, rgba(133,222,118,0.9444152661064426) 40%, rgba(94,190,218,0.9500175070028011) 100%)'

const props = defineProps<{
  artical: IArticalInterface
}>()

const router = useRouter()
const articalStore = useArticalStore()
const showArticalDetail = () => {
  articalStore.setCurrentArtical(props.artical)
  router.push('/article-detailed')
}

// 获取随机图标
const randomIcon = ref(computed(() => {
  return getRandomIcon()
}))

// 随机颜色
const randomColor = ref(computed(() => {
  return randomColorStr()
}))
</script>

<style scoped>

</style>
