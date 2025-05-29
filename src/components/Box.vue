<script setup></script>

<template>
  <div class="box">
    <slot />
  </div>
</template>

<style scoped lang="less">
.box {
  width: 1350px;
  margin: 0 auto;
  padding: 0;
}

@media screen and (max-width: 1350px) {
  .box {
    width: 1000px;
  }
}

@media screen and (max-width: 1000px) {
  .box {
    width: 100vw;
  }
}
</style>
