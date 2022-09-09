<template>
  <div class="w-full h-12 flex flex-nowrap">
    <div class="w-1/2 flex">
      <div class="border-2 w-1/3">这是一段测试标题</div>
      <div class="border-2 w-2/3">
        <n-input placeholder="搜索">
          <template #prefix>
            <n-icon :component="FlashOutline"/>
          </template>
        </n-input>
      </div>
    </div>
    <div class="w-1/2">右边</div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
