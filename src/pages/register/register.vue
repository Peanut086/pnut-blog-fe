<template>
  <div class="w-full h-full">
    <div class="w-full min-h-80 max-h-120 bg-pink-100 flex flex-col items-center justify-center">
      <form-panel :formConfig="registerFormConfig" @submit="startRegister"/>
    </div>
    <div>还没想好放什么</div>
  </div>
</template>

<script lang="ts" setup>
import {useMessage} from "naive-ui"
import {registerFormConfig} from "./config/registerFormConfig";
import {useRegisterStore} from "../../store/modules/register/index";

const message = useMessage()

const startRegister = (data: any) => {
  window.$message = message;
  useRegisterStore().register(data)
}
</script>

<style scoped>

</style>
