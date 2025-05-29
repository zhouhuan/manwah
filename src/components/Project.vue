<script setup>
import { computed } from 'vue'
import projects from '@/projects.js'

const fillNumber = computed(() => {
  let rowsNumber = 4
  return rowsNumber > 0 ? +rowsNumber - (projects.length % +rowsNumber) : 0
})
</script>

<template>
  <div class="box">
    <el-card shadow="hover" v-for="project in projects" :key="project.id">
      <div class="left">
        <img
          alt=""
          src="@/assets/logo.png"
          style="width: 40px; height: 40px; object-fit: contain"
        />
      </div>
      <div class="right">
        <div class="app" v-for="app in project.app" :key="app.title">
          <div class="title">{{ app.title }}</div>
          <div class="environment">
            <el-link v-if="app.codeUrl" :href="app.codeUrl" target="_blank">前端代码</el-link>
          </div>
          <div class="environment">
            <div class="tag" v-for="tag in app.tag" :key="tag.title">
              <el-link :href="tag.url" target="_blank">{{ tag.title }}</el-link>
              <el-link v-if="tag.pipeline" :href="tag.pipeline" target="_blank">流水线</el-link>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card style="visibility: hidden" v-for="number in fillNumber" :key="number" />
  </div>
</template>

<style scoped lang="less">
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;

  :deep(.el-card) {
    width: 320px;

    .el-card__body {
      width: 100% !important;
      display: flex;

      .right {
        width: calc(100% - 62px);
        padding: 0 20px;
        box-sizing: border-box;

        .app {
          &:not(:first-child) {
            padding-top: 20px;
          }

          &:not(:last-child) {
            padding-bottom: 20px;
            border-bottom: 1px solid #e8e8e8;
          }

          .title {
            font-size: 14px;
            font-weight: bold;
            color: #333;
          }

          .environment {
            display: flex;
            gap: 10px;

            .tag {
              a {
                display: table;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1355px) {
  .box {
    :deep(.el-card) {
      width: 450px;
    }
  }
}

@media screen and (max-width: 930px) {
  .box {
    :deep(.el-card) {
      width: 80vw;
    }
  }
}
</style>
