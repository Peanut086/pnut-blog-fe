<template>
  <div>
    <n-gradient-text class="text-xl" type="info">
      {{ title }}
    </n-gradient-text>
    <n-menu
        :options="menuOptions"
        accordion
        @select="selectHandler"
    />
  </div>
</template>

<script lang="ts" setup>
import {MenuOption} from "naive-ui";

defineProps<{
  menuOptions: {
    type: MenuOption[];
    default: () => MenuOption[];
  },
  title: {
    type: string;
    default: () => "";
  }
}>()
const selectHandler = (v: any) => {
  
}
</script>

<style scoped>

</style>
