<script setup>
import Container from '@/components/Container.vue'
import Header from '@/components/Header.vue'
import Project from '@/components/Project.vue'
import Box from '@/components/Box.vue'
</script>

<template>
  <Container>
    <Header />
    <Box style="margin-top: 25px">
      <Project />
    </Box>
  </Container>
</template>

<style lang="less" scoped></style>
