<template>
  <div class="w-full h-full flex flex-col pl-4 pr-4">
    <div class="h-20 w-full mt-2">
      <n-form-item label="起个标题吧:" label-placement="left">
        <n-input v-model:value="title" class="w-10" clearable maxlength="40"/>
      </n-form-item>
    </div>
    <div class="h-full overflow-auto mb-2.5">
      <v-md-editor v-model="content" class="overflow-auto" height="100%" @change="mdChange"/>
    </div>
    <div class="flex flex-col mb-2.5 justify-center items-center">
      <div class="w-1/4 h-32">
        <n-button class="mr-6" @click="cancelEdit">取 消</n-button>
        <n-button @click="nextStep">下一步</n-button>
      </div>
    </div>

    <n-modal
        v-model:show="showModal"
        :mask-closable="false"
        negative-text="取 消"
        positive-text="提 交"
        preset="dialog"
        title="最后一步了..."
        @positive-click="confirmSubmit"
        @negative-click="cancelSubmit"
    >
      <template #default>
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
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useDialog } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useArticalStore } from '../../store/modules/artical'
import localStorageUtil from '../../utils/localStorageUtil'
import { useTagsStore } from '../../store/modules/tags'
import { useArticalCategoryStore } from '../../store/modules/articalCategory'

const title = ref()
const content = ref()
const submitContent = ref()
const router = useRouter()
const dialog = useDialog()
const articalStore = useArticalStore()
const tagsStore = useTagsStore()
const articalCategoryStore = useArticalCategoryStore()
const category = ref('')
const tags = ref('')
const showModal = ref(false)
const user = JSON.parse(localStorageUtil.get('userInfo') || '')

/*
* 取消按钮对应事件
* */
const cancelEdit = () => {
  dialog.warning({
    title: '请三思哦',
    content: '暂时没有自动保存的功能，请三思呀，取消了就什么都没有了~',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      router.back()
    },
    onNegativeClick: () => {
    }
  })
}

/*
* 点击下一步的事件回调
* */
const nextStep = () => {
  showModal.value = true
}

/*
* 编辑器内容改变时的回调事件
* */
const mdChange = (text: string, html: any) => {
  console.log('Pnut ========> ', text)
  console.log('Pnut ========> ', html)
  submitContent.value = html
}

const categoryOption = ref(computed(() => articalCategoryStore.getCategoryTec)) // CascaderOption[]
const tagOption = ref(computed(() => {
  return tagsStore.getAllTags.map(item => {
    return {
      label: item.name,
      value: item.id
    }
  })
})) // CascaderOption[]

/*
* 获取当前选中的分类id
*  */
const updateCategory = (v: any) => {
  category.value = v
}

/*
* 获取当前选中的标签id
* */
const updateTags = (v: any) => {
  tags.value = v
}

/*
* 弹窗中点击确认的回调
* */
const confirmSubmit = () => {
  showModal.value = false
  articalStore.createArtical({
    title: title.value,
    content: String(submitContent.value),
    status: '1',
    category: category.value.toString(),
    author: String(user.id),
    tags: tags.value.toString()
  })
}

/*
* 弹窗中点击取消的回调
* */
const cancelSubmit = () => {
  showModal.value = false
}
</script>

<style scoped>

</style>
