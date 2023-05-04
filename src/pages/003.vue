<script setup lang="ts">
import { initCanvas } from '~/utils/index'

const canvasEl = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasEl.value!
  const blockSize = 20
  const rows = 20
  const columns = 20

  canvas.height = rows * blockSize
  canvas.width = columns * blockSize

  // Snake Head
  let snakeX = blockSize * 5
  let snakeY = blockSize * 5

  // Snake Body

  const snakeBody = []

  // Snake Velocity;
  let snakeVelocityX = 0
  let snakeVelocityY = 0

  // Snake Food
  let foodX: number
  let foodY: number

  // Game over

  let gameOver = false
  const { width, height } = canvas

  const { ctx } = initCanvas(canvas, width, height)

  // Randomly place food
  placeFood()

  // Update the canvas
  setInterval(update, 1000 / 10)
  // requestAnimationFrame(update)

  // Listen to key event
  document.addEventListener('keydown', changeDirection)

  function update() {
    if (gameOver)
      return

    // Snake Board
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)

    // Snake Food
    ctx.fillStyle = 'lime'
    ctx.fillRect(foodX, foodY, blockSize, blockSize)

    if (snakeX === foodX && snakeY === foodY) {
      console.log(1234)
      snakeBody.push([foodX, foodY])
      placeFood()
    }

    for (let i = snakeBody.length - 1; i > 0; i--)
      snakeBody[i] = snakeBody[i - 1]

    if (snakeBody.length)
      snakeBody[0] = [snakeX, snakeY]

    // Snake
    ctx.fillStyle = 'red'
    snakeX = snakeX + snakeVelocityX * (blockSize)
    snakeY = snakeY + snakeVelocityY * (blockSize)
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)

    for (let i = 0; i < snakeBody.length; i++)
      ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)

    // requestAnimationFrame(update)

    if (snakeX < 0 || snakeX > columns * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
      gameOver = true
      alert('Game over 1')
    }

    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
        gameOver = true
        alert('Game over 2')
      }
    }
  }

  function placeFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize
    foodY = Math.floor(Math.random() * columns) * blockSize
  }

  function changeDirection(e: KeyboardEvent) {
    if (e.code === 'ArrowUp' && snakeVelocityY !== 1) {
      snakeVelocityX = 0
      snakeVelocityY = -1
    }
    else if (e.code === 'ArrowDown' && snakeVelocityY !== -1) {
      snakeVelocityX = 0
      snakeVelocityY = 1
    }
    else if (e.code === 'ArrowLeft' && snakeVelocityX !== 1) {
      snakeVelocityX = -1
      snakeVelocityY = 0
    }
    else if (e.code === 'ArrowRight' && snakeVelocityX !== -1) {
      snakeVelocityX = 1
      snakeVelocityY = 0
    }
  }
})
</script>

<template>
  <div class="border border-black bg-white centered">
    <canvas ref="canvasEl" />
  </div>
  <div class="box-description flex py-2" />
</template>

<style scoped>
</style>
