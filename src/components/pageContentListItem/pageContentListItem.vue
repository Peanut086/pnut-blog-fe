<template>
  <div v-if="false"
       class="page-list-item-box">
    <div
        class="page-list-item-title">
      <n-icon size="40">
        <game-controller-outline/>
      </n-icon>
      <n-gradient-text :gradient="textLinearGradient" class="ml-2">
        阿巴阿巴阿巴阿巴
      </n-gradient-text>
    </div>
    <div class="h-1/3 w-full flex items-center text-2xl">other</div>
  </div>
  <div v-else
       class="page-list-item-box">
    <div>
      <img class="h-80 w-full" src="https://cdn.seovx.com/?mom=302">
    </div>
    <div
        class="page-list-item-title">
      <n-icon size="40">
        <game-controller-outline/>
      </n-icon>
      <n-gradient-text :gradient="textLinearGradient"
                       class="ml-2">
        阿巴阿巴阿巴阿巴
      </n-gradient-text>
    </div>
    <div class="h-1/3 w-full flex items-center text-2xl">other</div>
  </div>
</template>

<script lang="ts" setup>
import {GameControllerOutline, GameController} from '@vicons/ionicons5'

const textLinearGradient = 'linear-gradient(243deg, rgba(181,208,15,0.7931547619047619) 5%, rgba(133,222,118,0.9444152661064426) 40%, rgba(94,190,218,0.9500175070028011) 100%)'
</script>

<style scoped>

</style>
