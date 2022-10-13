<template>
  <div class="w-full h-full flex flex-col">
    <div class="h-20 w-full">
      <n-form-item label="起个标题吧:" label-placement="left">
        <n-input v-model:value="title" class="w-10" clearable maxlength="40"/>
      </n-form-item>
    </div>
    <div class="h-full overflow-auto">
      <v-md-editor v-model="content" height="100%"></v-md-editor>
    </div>
    <div class="h20 flex flex-col">

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

let title = ref()
let content = ref()
</script>

<style scoped>

</style>
