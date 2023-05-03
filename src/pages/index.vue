<script setup lang="ts">
import { works } from './works'

const liveWorks = works.filter(work => !work.draft)
</script>

<template>
  <div class="mx-auto max-h-full max-w-xl overflow-auto border border-red">
    <h1 class="text-4xl">
      Welcome to My 30 days project
    </h1>

    <p>30 Days </p>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <router-link
        v-for="work in liveWorks"
        :key="work.no" class="font-gray block text-sm"
        :to="{
          path: `/${work.no}`,
        }"
      >
        {{ work.no }}
      </router-link>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure doloribus dolorum nisi, culpa aliquam alias maxime officiis eius enim distinctio dolore consequuntur deserunt corporis quibusdam atque quasi quos odit!</p>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: Base
  </route>
