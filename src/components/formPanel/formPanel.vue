<template>
  <div class="w-full h-full p-2.5 flex flex-col justify-center items-center">
    <n-form ref="formRef" v-model:rules="formConfig.rules" :model="reactiveObj" class="w-2/5">
      <n-form-item v-for="item in formConfig.form" :key="item.name" :label="item.label"
                   :label-placement="item.labelPlacement"
                   :path="`${item.name}`">
        <n-input v-if="(item.type === 'input' || item.type === 'password' || item.type === 'textarea')"
                 v-model:value="reactiveObj[`${item.name}`]"
                 :clearable="item.clearable"
                 :maxlength="item.maxlength"
                 :placeholder="item.placeholder"
                 :round="item.round"
                 :size="item.size" :type="item.type"/>
      </n-form-item>
    </n-form>
    <div class="mt-3 w-1/5 flex justify-center items-center">
      <slot name="footer">
        <div class="flex w-full justify-evenly">
          <n-button type="error">{{ formConfig.cancelText }}</n-button>
          <n-button type="primary" @click="confirmSubmit">{{ formConfig.submitText }}</n-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref} from "vue";
import {IFormConfig} from "./interface";
import {ILoginInterface} from "../../pages/login/login.interface";
import {FormInst, useMessage} from "naive-ui";

// props
defineProps<{
  formConfig: IFormConfig
}>()

let reactiveObj = ref<ILoginInterface>({})

const emit = defineEmits<{
  submit: (data: ILoginInterface) => void
  cancel: () => void
}>()

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const confirmSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      emit('submit', reactiveObj.value)
    } else {
      message.error("检查一下有没有输入错误喔")
    }
  })
}
</script>

<style scoped>

</style>
