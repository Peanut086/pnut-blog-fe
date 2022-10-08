<template>
  <n-scrollbar class="w-full h-full overflow-auto">
    <page-content v-if="article" :artical="article"/>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import pageContent from "../../components/pageContent/pageContent.vue"
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useArticalStore} from "../../store/modules/artical";

const router = useRouter()
const articalStore = useArticalStore()
let article = ref()

onMounted(() => {
  article.value = articalStore.getCurrentArtical

  articalStore.getArticalDetail(article.value.id).then(() => {
    article.value = articalStore.getCurrentArtical
  })
})
</script>

<style scoped>

</style>
