<template>
  <div class="h-full overflow-auto p-2.5">
    <div class="h-1/6">
      <slot name="header">
        <div class="h-full w-full flex flex-col">
          <div class="h-2/3 text-4xl flex items-center">
            <div>论可持续发展</div>
          </div>
          <div class="h-1/3">
            <div class="h-full w-full flex flex-row justify-start">
              <div class="h-full mr-2">2021-08-08</div>
              <div class="h-full">作者：张三</div>
            </div>
          </div>
        </div>
      </slot>
    </div>
    <div class="">
      <slot name="content">
        CONTENT
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
