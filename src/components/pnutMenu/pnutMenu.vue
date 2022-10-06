<template>
  <div>
    <n-gradient-text class="text-xl" type="info">
      {{ title }}
    </n-gradient-text>
    <n-menu
        :options="menuOptions"
        accordion
        @update-value="selectHandler"
    />
  </div>
</template>

<script lang="ts" setup>
import {MenuOption} from "naive-ui";
import {useRouter} from "vue-router";
import {useArticalCategoryStore} from "../../store/modules/articalCategory";

const router = useRouter()

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
const selectHandler = (key: string, item: MenuOption) => {
  useArticalCategoryStore().setCurrentMenuId(key) // 这里使用pinia存储当前选中的菜单id  params传参存在一定的弊端
  router.push('/list')
}
</script>

<style scoped>

</style>
