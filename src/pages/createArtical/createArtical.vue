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
      <div class="w-1/4">
        <n-button class="mr-6" @click="cancelEdit">取 消</n-button>
        <n-button @click="nextStep">下一步</n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {h, ref} from "vue";
import {useDialog} from "naive-ui";
import {useRouter} from "vue-router";
import submitContent from './components/submitContent.vue'
import {NDialogProvider} from "naive-ui/es/dialog/src/DialogProvider";
import {useSubmitStore} from "../../store/modules/submitCache";
import {useArticalStore} from "../../store/modules/artical";
import {ITag} from "../../interface/tag.interface";
import {IUser} from "../../interface/user.interface";
import {useUerInfoStore} from "../../store/modules/userInfo";
import localStorageUtil from "../../utils/localStorageUtil";

let title = ref()
let content = ref()
const router = useRouter()
const dialog = useDialog()
const submitStore = useSubmitStore()
const articalStore = useArticalStore()
const userStore = useUerInfoStore()
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

const nextStep = () => {
  const user = JSON.parse(localStorageUtil.get('userInfo') || "")
  dialog.success({
    title: '成功',
    content: () => {
      return h(submitContent, null, [])
    },
    positiveText: '确定',
    negativeText: '先不提交',
    onPositiveClick: (mouseEvent) => {
      let category = submitStore.$state.category
      let tags = submitStore.$state.tags
      articalStore.createArtical({
        title: title.value,
        content: String(content),
        status: '1',
        category: category.toString(),
        author: String(user.id),
        tags: tags,
      })
    },
    onNegativeClick: () => {

    }
  })
}

const mdChange = (text: string, html: any) => {
  console.log('Pnut ========> ', text)
  console.log('Pnut ========> ', html)
  content = html
}
</script>

<style scoped>

</style>
