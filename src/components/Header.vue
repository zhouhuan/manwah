<script setup>
import { onMounted, onUnmounted } from 'vue'
import Box from '@/components/Box.vue'

const listener = () => {
  let scrollTop = document.documentElement.scrollTop
  let critical = 30
  let element = document.querySelector('.header')
  let addClass = 'bottom-shadow'
  scrollTop > critical
    ? element.classList.add(addClass)
    : scrollTop <= critical && element.classList.remove(addClass)
}
onMounted(() => {
  document.addEventListener('scroll', listener)
})
onUnmounted(() => {
  document.removeEventListener('scroll', listener)
})
</script>

<template>
  <div class="header">
    <Box class="logo">
      <img src="http://mwusweb-test.hs6.top/img/logo.66381d86.png" alt="" />
    </Box>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: white;

  .logo {
    img {
      width: 80px;
      height: 40px;
    }
  }
}

.bottom-shadow {
  box-shadow: 0 6px 10px #d6e0e85c;
}
</style>
