import { UploadFileInfo } from 'naive-ui'

export interface IRefItem {
  fileList?: UploadFileInfo[]
  startUpload?: () => Promise<any>
}
