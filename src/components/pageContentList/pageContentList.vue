<template>
  <div class="h-full overflow-auto p-2.5 flex flex-col">
    <n-scrollbar>
      <page-content-list-item v-for="iten in 20" :key="item"/>
    </n-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import pageContentListItem from "../pageContentListItem/pageContentListItem.vue"
</script>

<style scoped>

</style>
