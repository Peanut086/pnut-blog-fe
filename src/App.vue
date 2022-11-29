<template>
  <div class="w-screen h-screen bg-main-bg">
    <n-spin :show="show" description="稍安勿躁呀..." size="large">
      <container/>
      <template #icon>
        <n-icon>
          <PaperPlaneOutline/>
        </n-icon>
      </template>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
import container from './layout/container.vue'
import { useSpinControl } from './store/modules/spinControl'
import { computed, ref, watch } from 'vue'

const spinControl = useSpinControl()
const show = ref(false)

watch(computed(() => spinControl.show), (newVal, oldVal) => {
  show.value = newVal
})
</script>

<style scoped>

</style>
