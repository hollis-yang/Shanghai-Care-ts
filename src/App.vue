<script setup lang="ts">
import { RouterView } from 'vue-router'

// 引入echarts
import * as echarts from 'echarts'
import { provide } from 'vue'
provide('echarts', echarts)
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss"></style>
