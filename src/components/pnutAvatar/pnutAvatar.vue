<template>
  <div class="flex-col">
    <div>
      <n-avatar
          :size="80"
          round
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div>
      <n-gradient-text class="text-2xl" type="success">
        {{ userInfo.nick_name || 'JavaScript大王' }}
      </n-gradient-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useUerInfoStore} from "../../store/modules/userInfo";
import {computed, ref, onMounted} from "vue";

const userInfoStore = useUerInfoStore()
let userInfo = computed(() => userInfoStore.userInfo)
</script>

<style scoped>

</style>
