/// <reference types="vite/client" />

import {DialogApiInjection} from "naive-ui/es/dialog/src/DialogProvider";
import {MessageApiInjection} from "naive-ui/es/message/src/MessageProvider";

declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
  }
}

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module 'prismjs'
declare module 'codemirror'
declare module '@kangc/v-md-editor/lib/preview-html'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/codemirror-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'
