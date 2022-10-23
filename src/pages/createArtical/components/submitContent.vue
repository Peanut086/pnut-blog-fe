<template>
  <div>
    <n-form-item label="选择分类:" label-placement="left">
      <n-tree-select
          :options="categoryOption"
          @update:value="updateCategory"
      />
    </n-form-item>
    <n-form-item label="选择标签:" label-placement="left">
      <n-cascader
          v-model:value="tags"
          :options="tagOption"
          check-strategy="child"
          filterable
          multiple
          @update-value="updateTags"
      />
    </n-form-item>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, defineProps} from "vue";
import {CascaderOption} from "naive-ui";
import {useTagsStore} from "../../../store/modules/tags";
import {useArticalCategoryStore} from "../../../store/modules/articalCategory";
import {useSubmitStore} from "../../../store/modules/submitCache";

const tagsStore = useTagsStore();
const articalCategoryStore = useArticalCategoryStore();
let category = ref('')
let tags = ref('')
const submitStore = useSubmitStore()

const categoryOption = ref(computed(() => articalCategoryStore.getCategoryTec)) //CascaderOption[]
const tagOption = ref(computed(() => {
  return tagsStore.getAllTags.map(item => {
    return {
      label: item.name,
      value: item.id
    }
  })
})) //CascaderOption[]

/*使用change事件  通过自定义事件的方式发送到父组件*/
const updateCategory = (v: any) => {
  category = v
  submitStore.setCategory(v)
}

const updateTags = (v: any) => {
  submitStore.setTags(v.toString())
}
</script>

<style scoped>

</style>
