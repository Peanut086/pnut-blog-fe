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
          <n-form-item :rule="categoryRule" label="选择分类:" label-placement="left">
            <n-tree-select
                v-model:value="category"
                :options="categoryOption"
                @update:value="updateCategory"
            />
          </n-form-item>
          <n-form-item :rule="tagsRule" label="选择标签:" label-placement="left">
            <n-cascader
                v-model:value="tags"
                :options="tagOption"
                check-strategy="child"
                filterable
                multiple
                @update-value="updateTags"
            />
          </n-form-item>
          <n-form-item label="选择分类:" label-placement="left">
            <pnut-upload
                ref="uploadRef"/>
          </n-form-item>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { FormItemRule, FormRules, useDialog } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useArticalStore } from '../../store/modules/artical'
import localStorageUtil from '../../utils/localStorageUtil'
import { useTagsStore } from '../../store/modules/tags'
import { useArticalCategoryStore } from '../../store/modules/articalCategory'
import puntUpload from '../../components/pnutUpload/src/pnutUpload.vue'
import { useUpload } from '../../components/pnutUpload/src/hooks/useUpload'
import pnutUpload from '../../components/pnutUpload'
import { IRefItem } from '../../components/pnutUpload/src/types'

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
// 调用文件上传hooks
const uploadRef = ref<IRefItem>()
// 表单验证规则
const categoryRule = {
  trigger: ['input', 'blur'],
  validator () {
    if (category.value === '') {
      return new Error('别忘了选择分类哦')
    }
  }
}

const tagsRule = {
  trigger: ['input', 'blur'],
  validator () {
    if (tags.value.length === 0) {
      return new Error('标签也不能为空~')
    }
  }
}

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
const confirmSubmit = async () => {
  if (isNotEmpty()) {
    showModal.value = false
    // 用于判断当前是否有文件被选中
    const hasFile: boolean = uploadRef.value?.fileList?.length !== 0
    // 如果文件上传成功就继续提交  否则终止提交操作
    const files = hasFile ? await uploadRef.value?.startUpload!() : []
    if (files.length === 0 && hasFile) {
      window.$message.error('文件上传失败了，重新试试吧')
      return false
    }

    const res = await articalStore.createArtical({
      title: title.value,
      content: String(submitContent.value),
      status: '1',
      category: category.value.toString(),
      cover: files[0]?.url ?? '',
      author: String(user.id),
      tags: tags.value.toString()
    })

    if (res) {
      await router.back()
    }
  }
  // 必须return   否则默认会关闭弹窗
  return false
}

/*
* 弹窗中点击取消的回调
* */
const cancelSubmit = () => {
  showModal.value = false
}

/*
* 判断标签、分类是否为空
* */
const isNotEmpty = (): boolean => {
  if (category.value === '' || tags.value.length === 0) {
    window.$message.error('标签、分类不能为空')
    return false
  }
  return true
}
</script>

<style scoped>

</style>
