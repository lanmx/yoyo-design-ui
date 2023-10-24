<template>
  <div class="content">
    <div class="type-show">
      <p class="title">效果展示</p>
      <x-button text="默认"></x-button>
      <x-button text="主要" type="primary" disabled></x-button>
      <x-button text="成功" type="success"></x-button>
      <x-button text="警告" type="warn"></x-button>
      <x-button text="危险" type="danger"></x-button>
      <x-button text="虚线" dashed></x-button>
      <x-button text="实线" solid></x-button>
      <x-button text="默认大小"></x-button>
      <x-button type="success" text="小尺寸" size="small"></x-button>
      <x-button type="warn" text="大尺寸" size="larger"></x-button>
      <x-button text="颜色" color="pink"></x-button>
      <x-button text="颜色" color="yellow"></x-button>
      <x-button text="默认圆角" round></x-button>
      <x-button text="主要圆角" type="primary" round></x-button>
      <x-button text="危险圆角" type="danger" round></x-button>
      <x-button text="圆角" type="danger" round disabled></x-button>

      <x-button>默认</x-button>
      <x-button type="primary">主要</x-button>
      <x-button type="success">成功</x-button>
      <x-button type="warn">警告</x-button>
      <x-button type="danger">危险</x-button>
      <x-button dashed>虚线</x-button>
      <x-button solid>实线</x-button>
      <x-button type="primary" dashed>主要</x-button>
      <x-button type="success" dashed>成功</x-button>
      <x-button type="warn" solid>警告</x-button>
      <x-button type="danger" solid>危险</x-button>
      <x-button color="green" size="small">按钮</x-button>
      <x-button text="按钮" color="pink" :size="size">按钮</x-button>
      <x-button type="primary" round>按钮</x-button>
      <x-button type="success" round size="larger">按钮</x-button>
      <x-button type="danger" round size="small">按钮</x-button>
      <x-button type="success" dashed round>按钮</x-button>

      <x-button></x-button>
      <x-button type="primary">cccc文本文本</x-button>
      <x-button type="success">成功</x-button>
      <x-button type="warn">警告</x-button>
      <x-button type="danger">危险</x-button>
      <x-button dashed>虚线</x-button>
      <x-button solid>实线</x-button>
      <x-button type="primary" dashed>二八</x-button>
      <x-button type="success" dashed>二八</x-button>
      <x-button type="warn" solid>二八</x-button>
      <x-button type="danger" solid>二八</x-button>
      <x-button color="green" size="small">你好</x-button>
      <x-button text="按钮" color="pink" size="small">你好</x-button>
      <x-button type="primary" round>二八</x-button>
      <x-button type="success" round size="larger">二八</x-button>
      <x-button type="danger" round size="small">二八</x-button>
      <x-button type="success" dashed round>二八</x-button>
    </div>
    <div>
      <v-md-editor :model-value="mdData" mode="preview"></v-md-editor>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import mdData from '@md/ButtonView.md?raw'

export default {
  components: {
  },
  setup() {
    const size = ref('24');
    return {
      size, mdData
    }
  }
}  
</script>
<style>
.type-show {
  padding: 10px 0 0 20px;
}
.title {
  margin: 1.33rem 0;
  font-weight: 600;
  line-height: 1.25;
  font-size: 1.35rem;
}
</style>
