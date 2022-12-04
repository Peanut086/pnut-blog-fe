<template>
  <md-editor v-model="text" style="width:800px" v-bind="bindValue" @change="contentChange"/>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const text = ref('Hello Editor!')

export interface Props {
  text: string, // 编辑器内容
  theme: string, // 主题
  htmlPreview: boolean, // 是否开启html预览
  previewOnly: boolean, // 是否只开启预览
  pageFullscreen: boolean, // 是否开启全屏
  preview?: boolean, // 是否开启预览
  language?: string, // 语言
  toolbar?: any, // 是否开启工具栏
  toolbarsExclude?: any, // 工具栏排除项
  noPrettier?: boolean, // 是否开启代码格式化
  showCodeRowNumber?: boolean, // 是否开启代码行号
  previewTheme?: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis', // 预览主题
  tableShape?: any, // 表格大小  x y轴个数
  noMermaid?: boolean, // 如果你不希望使用图表展示内容，可以设置关闭。
  placeholder?: string, // 编辑器内容为空时的占位符
  codeTheme?: 'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow', // 代码主题
}

const props = withDefaults(defineProps<Props>(), {
  text: '我是傻逼',
  theme: 'light',
  htmlPreview: false,
  previewOnly: false,
  pageFullscreen: false,
  preview: true,
  language: 'zh-CN',
  toolbar: [
    'bold',
    'underline',
    'italic',
    '-',
    'title',
    'strikeThrough',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    'task',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    'katex',
    '-',
    'revoke',
    'next',
    'save',
    '=',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',
    'github'
  ],
  toolbarsExclude: [],
  noPrettier: true,
  showCodeRowNumber: true,
  previewTheme: 'default',
  tableShape: [5, 5],
  noMermaid: false,
  placeholder: '请输入内容',
  codeTheme: 'atom'
})
// 自定义事件
const emits = defineEmits(['change'])

// 从props中获取text
text.value = computed(() => props.text).value
// 组件属性对象
const bindValue = computed(() => {
  return {
    ...props,
    text: null
  }
})

/*
* 内容改变事件
* */
type ContentChange = (text: string) => void
const contentChange: ContentChange = (text) => {
  emits('change', text)
}
</script>

<style scoped>

</style>
