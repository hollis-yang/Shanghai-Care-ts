<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-button type="primary">
    <el-icon :size="20">
      <Edit />
    </el-icon>i am button
  </el-button>
  <RouterView></RouterView>
</template>

<style scoped lang="scss"></style>
