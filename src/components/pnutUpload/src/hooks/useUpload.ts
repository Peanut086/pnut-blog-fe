import { ref } from 'vue'
import pnutUpload from '../../index'

/*
* 文件上传组件hooks
* */
export function useUpload (): any[] {
  const uploadRef = ref<InstanceType<typeof pnutUpload>>()

  return [
    uploadRef
  ]
}
