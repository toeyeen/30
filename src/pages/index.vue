<script setup lang="ts">
import { works } from './works'

const liveWorks = works.filter(work => !work.draft)
</script>

<template>
  <div class="mx-auto max-h-full w-full overflow-auto px-2 py-8 font-fira centered -mt-20 md:max-w-lg">
    <p class="mb-4 text-left text-2xl text-black">
      30 Days
    </p>

    <div class="grid grid-cols-1 gap-x-4 md:grid-cols-2">
      <router-link
        v-for="work in liveWorks"
        :key="work.no" class="block justify-self-start font-fira text-base hover:text-[#374151] hover:transition"
        :to="{
          path: `/${work.no}`,
        }"
      >
        <span class="opacity-75">
          {{ work.no }}
        </span>
        <span class="ml-2 font-semibold">
          {{ work.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<!--
Note: Remember how easy it is to use different layout in nuxt, we can achieve that with vue 3. The little code below this make it s possible for a user to make use a particular layout on a component/Page
 -->
<route lang="yaml">
meta:
  layout: Base
  </route>
