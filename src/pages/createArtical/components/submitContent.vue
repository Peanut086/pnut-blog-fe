<template>
  <div>
    <n-form-item label="选择分类:" label-placement="left">
      <n-cascader
          v-model:value="category"
          :options="categoryOption"
          check-strategy="child"
          filterable
      />
    </n-form-item>
    <n-form-item label="选择标签:" label-placement="left">
      <n-cascader
          v-model:value="tags"
          :options="tagOption"
          check-strategy="child"
          filterable
          multiple
      />
    </n-form-item>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {CascaderOption} from "naive-ui";

const category = ref('')
const tags = ref('')
const categoryOption = ref<CascaderOption[]>([]) //CascaderOption[]
const tagOption = ref<CascaderOption[]>([]) //CascaderOption[]
</script>

<style scoped>

</style>
