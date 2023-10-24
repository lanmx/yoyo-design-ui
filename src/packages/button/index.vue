<template>
  <div class="btn-outer">
    <button
      class="btn"
      @click="btnChange"
      :style="{ backgroundColor: color }"
      :class="{
        // type颜色类型
        'default': !type,
        'primary': type === 'primary',
        'success': type === 'success',
        'warn': type === 'warn',
        'danger': type === 'danger',
        // 边框类型
        'dashed': dashed,
        'solid': solid,
        // 按钮大小
        'small': size === 'small',
        'larger': size === 'larger',
        // 圆角
        'round': round,
        // 禁用
        'disabled': disabled
      }"
    >
      {{ text }}
    </button>
  </div>
 
</template>
<script setup lang="ts">
defineOptions({
  name: 'xButton',
})
defineProps<{
  type?: string
  text?: string
  color?: string
  size?: string
  round?: boolean
  dashed?: boolean
  solid?: boolean
  disabled?: boolean
}>()
const btnChange = (event: Event) => {
  console.log(event);
}
</script>

<style lang="less">
@primary-color: #0070ff;
@primary-hover-color: #4f99f9;
@success-color: #00bd7e;
@success-hover-color: #1cf3ab;
@warn-color: orange;
@warn-hover-color: rgb(251, 188, 71);
@danger-color: red;
@danger-hover-color: rgb(248, 113, 113);

@solid-color: #d9d9d9;
@font-white-color: #fffffd;
@font-black-color: #262626;

@size-small: 12px;
@size-default: 14px;
@size-larger: 16px;

@disabled-color: #b8b8b8;
@disabled-bg-color: #f5f5f5;

.btn {
  border-radius: 2px;
  padding: 5px 8px;
  border: none;
}
.default {
  background-color: transparent;
  padding: 5px 8px;
  color: @font-black-color;
  font-size: @size-default;
}
.default:hover {
  background-color: rgb(217, 227, 238);
  color: @primary-color;
}
.primary {
  background-color: @primary-color;
  color: @font-white-color;
}
.primary:hover {
  background-color: @primary-hover-color;
}
.primary {
  background-color: @primary-color;
  color: @font-white-color;
}
.primary:hover {
  background-color: @primary-hover-color;
}
.success {
  background-color: @success-color;
  color: @font-white-color;
}
.success:hover {
  background-color: @success-hover-color;
}
.warn {
  background-color: @warn-color;
  color: @font-white-color;
}
.warn:hover {
  background-color: @warn-hover-color;
}
.danger {
  background-color: @danger-color;
  color: @font-white-color;
}
.danger:hover {
  background-color: @danger-hover-color;
}
.dashed {
  background-color: transparent;
  color: @font-black-color;
  border: @solid-color dashed 1px;
}
.dashed:hover {
  background-color: transparent;
  color: @primary-color;
  border: @primary-color dashed 1px;
}
.solid {
  background-color: transparent;
  color: @font-black-color;
  border: @solid-color solid 1px;
}
.solid:hover {
  background-color: transparent;
  color: @primary-color;
  border: @primary-color solid 1px;
}
.small {
  font-size: @size-small;
  padding: 4px 6px;
}
.larger {
  font-size: @size-larger;
  padding: 6px 10px;
}
.round {
  padding: 4px 16px;
  border-radius: 32px;
}
.disabled {
  background-color: @disabled-bg-color !important;
  color: @disabled-color  !important;
  pointer-events: none;
}
.btn-outer {
  display: inline-block;
  cursor: not-allowed;
  // cursor: no-drop;
}
</style>
