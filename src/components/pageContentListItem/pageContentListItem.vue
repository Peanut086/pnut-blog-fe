<template>
  <div class="page-list-item-box"
       @click="showArticalDetail">
    <div v-if="artical.cover">
      <img class="h-80 w-full" src="https://cdn.seovx.com/?mom=302">
    </div>
    <div
        class="page-list-item-title">
      <n-icon size="40">
        <game-controller-outline/>
      </n-icon>
      <n-gradient-text :gradient="textLinearGradient" class="ml-2">
        {{ artical.title }}
      </n-gradient-text>
    </div>
    <div class="h-1/3 w-full flex items-center text-xl mt-2">
      <div>作者:{{ artical.user.nick_name }}</div>
      <div class="ml-3.5">发布时间:{{ pnutDateFormat(artical.user.create_time) }}</div>
      <div class="h-1/3 ml-3">
        <n-tag v-for="(i,dx) in artical.tags" class=" mr-2" type="success">{{ i.name }}</n-tag>
      </div>
    </div>
  </div>
  <!--  <div v-else
         class="page-list-item-box">
      <div>
        <img class="h-80 w-full" src="https://cdn.seovx.com/?mom=302">
      </div>
      <div
          class="page-list-item-title">
        <n-icon size="40">
          <game-controller-outline/>
        </n-icon>
        <n-gradient-text :gradient="textLinearGradient"
                         class="ml-2">
          阿巴阿巴阿巴阿巴
        </n-gradient-text>
      </div>
      <div class="h-1/3 w-full flex items-center text-2xl">other</div>
    </div>-->
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {GameControllerOutline, GameController} from '@vicons/ionicons5'
import {IArticalInterface} from "../../interface/artical.interface";
import {pnutDateFormat} from "../../utils/pnutDateFormat";
import {useArticalStore} from "../../store/modules/artical/index"

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
</script>

<style scoped>

</style>
