<template>
  <n-scrollbar class="w-full h-full ">
    <page-content v-if="article" :artical="article" class="h-full">
      <template #content>
        <div class="h-full">
          <v-md-preview-html :html="article.content" height="100%"
                             preview-class="vuepress-markdown-body"/>
        </div>
      </template>
      <!--      <template #footer>-->
      <!--        <div class="h-40">低不低顶部</div>-->
      <!--      </template>-->
    </page-content>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import pageContent from '../../components/pageContent/pageContent.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useArticalStore } from '../../store/modules/artical'

const router = useRouter()
const articalStore = useArticalStore()
const article = ref()

onMounted(() => {
  article.value = articalStore.getCurrentArtical

  articalStore.getArticalDetail(article.value.id).then(() => {
    article.value = articalStore.getCurrentArtical
  })
})
</script>

<style scoped>

</style>
