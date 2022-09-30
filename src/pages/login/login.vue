<template>
  <div class="w-full h-full">
    <div class="w-full h-80 bg-pink-100 flex flex-col items-center justify-center">
      <div class="w-1/2">
        <n-form ref="formRef" :model="model" :rules="rules" label-placement="left">
          <n-form-item label="账号:" path="username">
            <n-input v-model:value="model.username" clearable round @keydown.enter.prevent/>
          </n-form-item>
          <n-form-item label="密码:" path="password">
            <n-input
                v-model:value="model.password"
                clearable
                maxlength="12"
                round
                type="password"
                @keydown.enter.prevent
            />
          </n-form-item>
        </n-form>
      </div>
      <div class="w-1/2 flex justify-center">
        <n-button color="#8a2be2" icon-placement="right" secondary strong @click="submit">
          <template #icon>
            <n-icon>
              <cash-icon/>
            </n-icon>
          </template>
          登 录
        </n-button>
      </div>
    </div>
    <div>还没想好放什么</div>
  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue"
import {FormInst, FormItemRule, FormRules, useMessage} from "naive-ui"
import {CashOutline as CashIcon} from '@vicons/ionicons5'
import {useLoginStore} from "../../store/modules/userInfo";
import {ILoginInterface, ILoginResponse} from "./login.interface"
import pnutRequest from "../../pnutAxios/index"

const model = ref<ILoginInterface>({
  username: "",
  password: ""
})
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const loginStore = useLoginStore()

const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('等等！这里是必填项')
        }
        // 不符合邮箱格式
        else if (
            !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)
            && !/^1[3-9]\d{9}$/.test(value)
        ) {
          return new Error('这好像不是邮箱格式也不是手机格式')
        }
        return true
      },
      trigger: ['blur']
    }
  ],
  password: [
    {
      required: true,
      trigger: ['blur'],
      validator(rule: FormItemRule, value: string) {
        if (value.length === 0) {
          return new Error("密码为空咋登录")
        } else if (value.length < 6) {
          return new Error("密码长度必须是大于8小于12的字符组合喔")
        }
        return true
      }
    }
  ]
}

const submit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      startLogin()
    } else {
      message.error("检查一下有没有输入错误喔")
    }
  })
}

const startLogin = async () => {
  const res = await pnutRequest.POST<ILoginResponse>({
    url: "/auth/login",
    data: model.value
  })
  if (res.status === 201) {
    message.success("登录成功")
    loginStore.setToken(res.data.token)
  } else {
    message.warning(res.message)
  }
}
</script>

<style scoped>

</style>
