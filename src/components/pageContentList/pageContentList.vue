<template>
  <div class="h-full overflow-auto p-2.5 flex flex-col">
    <n-scrollbar>
      <page-content-list-item v-for="item in articalList" :key="item.id" :artical="item"/>
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import {computed, watch, ref, onMounted} from 'vue'
import pageContentListItem from "../pageContentListItem/pageContentListItem.vue"
import {useArticalCategoryStore} from "../../store/modules/articalCategory";
import {useArticalStore} from "../../store/modules/artical";

const currentMenuId = ref(computed(() => useArticalCategoryStore().getCurrentMenuId))
const articalList = ref(computed(() => useArticalStore().getArticalList))

watch(currentMenuId, (newVal, oldVal) => {
  queryArticalListByType(newVal as string)
})

const queryArticalListByType = (type: string) => {
  useArticalStore().getArticalListByType(type)
}

onMounted(() => {

})
</script>

<style scoped>

</style>
