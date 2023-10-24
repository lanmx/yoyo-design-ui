<template>
  <div class="nav-name" v-for="group in menus" :key="group.name">
    {{ group.name }}
    <div class="nav-name-item" 
      :class="{ 'nav-item-active': currentPath === item.path }" 
      v-for="item in group.children" 
      :key="item.name" 
      @click="changeView(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SliderMenu',
  setup() {
    const menus = ref([
      { name: '开发指南', children: [
          { name: '快速上手', path: 'start' }
        ]
      },
      {
        name: '通用组件',
        children: [
          { name: '按钮 Button', path: 'button' },
          { name: '图标 Icon', path: 'icon' }
        ]
      },
      {
        name: '数据展示',
        children: [
          { name: '选择器 Seletor', path: 'seletor' },
        ]
      },
    ])

    // 切换菜单
    const currentPath= ref('')
    const changeView = (item: string) => {
      currentPath.value = item;
      router.push({ path: item })
    }

    return {
      menus,
      changeView,
      currentPath
    }
  }
})
</script>
<style lang="less" scoped>
@text-active-color: #165dff;
@text-active-bg-color: #f2f3f5;
.nav-name {
  margin: 0 0 4px;
  padding: 0 12px;
  color: var(--color-text-1);
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
}
.nav-name-item {
  display: block;
  padding-left: 20px;
  color: var(--color-text-1);
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;
}
.nav-item-active {
  color: @text-active-color;
  background-color: @text-active-bg-color;
}
</style>
