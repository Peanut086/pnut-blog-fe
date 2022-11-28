import { defineStore } from 'pinia'
import pnutRequest from '../../../pnutAxios/index'

interface IUploadResult {
  name: string
  url: string
}

interface IUploadResList {
  [key: string]: IUploadResult[]
}

export const useUploadStore = defineStore('upload', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {
    async uploadFiles (fileList: FormData) {
      const res = await pnutRequest.POST<IUploadResList>({
        url: '/ali-oss/upload',
        // 解决 files:
        // [object FormData]
        // 问题
        data: fileList,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return res.data
    }
  }
})
