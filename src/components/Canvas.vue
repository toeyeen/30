<script setup lang="ts">
import { initCanvas } from '~/utils/index'

const canvasEl = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasEl.value!

  const { ctx } = initCanvas(canvas)

  const { width, height } = canvas
})
</script>

<template>
  <div class="box border border-black bg-white centered">
    <canvas ref="canvasEl" width="400" height="400" />
  </div>
  <div class="box-description flex py-2" />
</template>

<style scoped>
</style>
