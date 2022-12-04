<template>
  <n-scrollbar class="w-full h-full ">
    <page-content v-if="article" :artical="article" class="h-full">
      <template #content>
        <div class="h-full">
          <markDownEditor v-model="article.content" :previewOnly="true" style="width: 100%;padding: 0 30px"/>
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
import markDownEditor from '../../components/markdownEditor/markdownEditor.vue'
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
