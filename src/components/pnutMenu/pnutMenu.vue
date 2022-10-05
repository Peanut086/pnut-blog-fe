<template>
  <div>
    <n-gradient-text class="text-xl" type="info">
      {{ title }}
    </n-gradient-text>
    <n-menu
        :options="menuOptions"
        accordion
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
</script>

<style scoped>

</style>
