<template>
  <div class="w-screen h-screen bg-main-bg">
    <n-spin :show="show">
      <container/>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
import container from './layout/container.vue'
import {useSpinControl} from "./store/modules/spinControl";
import {computed, ref, watch} from "vue";

const spinControl = useSpinControl()
let show = ref(false)

watch(computed(() => spinControl.show), (newVal, oldVal) => {
  show.value = newVal
})
</script>

<style scoped>

</style>
