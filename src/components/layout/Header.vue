<template>
  <div class="header">
    <div class="logo-text">
      <RouterLink to="/" >yoyo.design</RouterLink>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0px;
  z-index: 99;
  background-color: var(--color-background);
  width: 100%;
  line-height: 40px;
  border-bottom: 1px solid #e5e6eb;
  padding: 5px 10px;
}
.logo-text {
  width: 180px;
  text-align: center;
}
</style>