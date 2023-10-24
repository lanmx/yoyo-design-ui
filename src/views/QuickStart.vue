<template>
  <v-md-editor :model-value="mdData" mode="preview"></v-md-editor>
</template>
<script>
import mdData from '@md/QuickStart.md?raw'
export default {
  setup() {
    return {
      mdData
    }
  },
}
</script>