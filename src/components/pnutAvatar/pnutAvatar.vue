<template>
  <div class="flex-col">
    <div>
      <n-avatar
          :size="80"
          round
          src="https://pnut.oss-cn-chengdu.aliyuncs.com/logo.png?Expires=1669640653&OSSAccessKeyId=TMP.3KiGWQfTZzY6bntUwvFU1jC3DSMUSM4CTeHrhxcX8up99VKv7UQW6Pe8J4sKYws7AAp1gM1ugH4CX2h4bMfYjJWyB63wK7&Signature=OyqcqaIgX66hIX0ZFSjqb8tZ%2BK0%3D"
      />
    </div>
    <div style="font-family: 'digital',serif;">
      <n-gradient-text class="text-2xl" type="success">
        {{ userInfo.nick_name || 'JavaScript大王' }}
      </n-gradient-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUerInfoStore } from '../../store/modules/userInfo'
import { computed, ref, onMounted } from 'vue'

const userInfoStore = useUerInfoStore()
const userInfo = computed(() => userInfoStore.userInfo)
</script>

<style scoped>

</style>
