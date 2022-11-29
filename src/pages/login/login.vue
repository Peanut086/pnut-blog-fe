<template>
  <div class="w-full h-full">
    <div class="w-full h-80 flex flex-col items-center justify-center">
      <form-panel :formConfig="loginFormConfig" @submit="startLogin"/>
    </div>
    <!--    <div>还没想好放什么</div>-->
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import formPanel from '../../components/formPanel/formPanel.vue'
import { useLoginStore } from '../../store/modules/login/index'
import { loginFormConfig } from './config/loginForm'

const message = useMessage()
const loginStore = useLoginStore()

const startLogin = (data: any) => {
  // window上挂载指定的属性
  window.$message = message
  loginStore.login(data)
}
</script>

<style scoped>

</style>
