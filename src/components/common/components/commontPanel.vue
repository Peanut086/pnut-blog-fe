<template>
  <div class="flex justify-between">
    <div class="w-1/12">
      <n-avatar
          :size="30"
          round
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div class="w-10/12">
      <n-input
          v-model:value="inputValue"
          :autosize="{
        minRows: 1,
        maxRows: 2
      }"
          clearable
          maxlength="100"
          placeholder=""
          round
          show-count
          size="small"
          type="textarea"
      />
    </div>
    <div class="w-1/12 ml-1">
      <n-button size="small" @click="submit">提 交</n-button>
    </div>
  </div>
  <!--  未登录时评论才会要求输入个人信息 -->
  <div v-if="!userInfo['id']" class="flex justify-between mt-4 border-b-2">
    <div class="flex-1 mr-2">
      <n-form-item :rule="nameRule" label="昵称:" label-placement="left" show-require-mark>
        <n-input v-model:value="customInfo.name" placeholder="无名氏?"></n-input>
      </n-form-item>
    </div>
    <div class="flex-1 mr-2">
      <n-form-item :rule="emailRule" label="邮箱:" label-placement="left" show-require-mark>
        <n-input v-model:value="customInfo.email" placeholder="输入邮箱地址"></n-input>
      </n-form-item>
    </div>
    <div class="flex-1">
      <n-form-item :rule="pageRule" label="主页:" label-placement="left" show-require-mark>
        <n-input v-model:value="customInfo.homePage" placeholder="博客地址"></n-input>
      </n-form-item>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import LocalStorageUtil from '../../../utils/localStorageUtil'
import { ICustomInfo } from './types'

/* 获取登录缓存  判断评论组件是否需要手动录入部分用户信息 */
const userInfo = computed(() => {
  return JSON.parse(LocalStorageUtil.get('userInfo') || '{}')
})

// 未登录时的用户信息
const customInfo = ref<ICustomInfo>({
  name: '',
  email: '',
  homePage: ''
})

// 验证规则
const nameRule = {
  trigger: ['input', 'blur'],
  validator () {
    if (customInfo.value.name === '') {
      return new Error('请输入昵称')
    }
  }
}

const emailRule = {
  trigger: ['input', 'blur'],
  validator () {
    if (customInfo.value.email === '') {
      return new Error('请输入邮箱')
    } else {
      const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!reg.test(customInfo.value.email)) {
        return new Error('邮箱格式不正确')
      }
    }
  }
}

const pageRule = {
  trigger: ['input', 'blur'],
  validator () {
    if (customInfo.value.email === '') {
      return new Error('请输入主页或个人博客地址')
    }
  }
}

const emits = defineEmits(['update'])

const inputValue = ref<string>('')
const submit = () => {
  // 如果为登录状态则不需要手动输入用户信息
  if (!userInfo.value.id) {
    if (customInfo.value.name === '' || customInfo.value.email === '' || customInfo.value.homePage === '') {
      window.$message.error('请填写完整信息~')
      return '我是傻福'
    }
  } else if (inputValue.value === '') {
    window.$message.error('请输入评论内容~')
    return '我是傻福'
  }
  emits('update', inputValue.value, customInfo.value)
}

</script>
