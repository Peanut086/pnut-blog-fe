<template>
  <div>
    <n-upload
        ref="uploadRef"
        v-bind="bindProp"
        @update-file-list="fileListUpdate"
    >
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon :depth="3" size="48">
            <archive-icon/>
          </n-icon>
        </div>
        <n-text style="font-size: 16px">
          点击或者拖动文件到该区域来上传
        </n-text>
      </n-upload-dragger>
    </n-upload>
  </div>
</template>

<script lang="ts" setup>
import { NUpload, UploadCustomRequestOptions, UploadFileInfo } from 'naive-ui'
import { computed, ref } from 'vue'
import { useUploadStore } from '../../../store/modules/upload'
import pnutRequest from '../../../pnutAxios'
import axios from 'axios'

// vue3目前通过声明类型定义props时 不支持从外部导入接口类型使用
interface Props {
  accept?: string
  action?: string
  customRequest?: (options: UploadCustomRequestOptions) => void
  defaultUpload?: boolean
  fileList?: UploadFileInfo[]
  multiple?: boolean
  name?: string
}

// 文件列表
const fileList = ref([])
const uploadRef = ref(null)
const store = useUploadStore()

// 定义带有默认值的props
const props = withDefaults(defineProps<Props>(), {
  accept: '测试',
  action: '',
  customRequest: () => {
    console.log('Pnut ========> ', 'sb')
  },
  defaultUpload: false,
  multiple: false,
  name: 'files'
})

/*
* 获取props对象
* */
const bindProp = computed(() => props)

/*
* 文件列表更新后的回调
* */
const fileListUpdate = (v: any) => {
  fileList.value = v
  console.log('Pnut ========> ', v, 'update')
}

/*
* 上传方法--外部调用
* */
const startUpload = async () => {
  // console.log('Pnut ========> ', fileList.value)
  // 多文件上传
  const fd = new FormData()
  if (props.multiple) {
    fileList.value.forEach((item: any) => {
      fd.append('files', item.file)
    })
  } else {
    // 单文件上传
    fd.append('files', fileList.value[0].file as File)
  }
  return await store.uploadFiles(fd)
}

// 暴露部分属性和方法供外部调用
defineExpose(
  {
    fileList,
    startUpload
  }
)
</script>

<style scoped>

</style>
