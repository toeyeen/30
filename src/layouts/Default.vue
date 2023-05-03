<script setup lang="ts">
import { removeEmptyProp } from '../utils/index'
import { works } from '~/pages/works'

// interface Jobs {
//   current: Work
//   previous: Work
//   next: Work
// }

const route = useRoute()

const completedWorks = works.filter(work => !work.draft)

const currentWork = computed(() => {
  const currentwork = completedWorks.filter((work) => {
    return route.path.includes(work.no)
  })

  return currentwork[0]
})

const jobs = computed(() => {
  let jobsObject = {}
  for (let i = 0; i < completedWorks.length; i++) {
    if ((currentWork.value.no === completedWorks[i].no) && i === 0) {
      jobsObject = {
        current: completedWorks[i],
        next: completedWorks[i + 1],
      }
    }

    if ((currentWork.value.no === completedWorks[i].no) && i > 0) {
      jobsObject = {
        previous: completedWorks[i - 1],
        current: completedWorks[i],
        next: completedWorks[i + 1],
      }
    }

    if ((currentWork.value.no === completedWorks[i].no) && (i > 0 && i === completedWorks.length)) {
      jobsObject = {
        previous: completedWorks[i - 1],
        current: completedWorks[i],
      }
    }
  }

  const cleanJobsObject = removeEmptyProp(jobsObject)

  return cleanJobsObject
})
</script>

<template>
  <div class="min-h-full w-full overflow-x-hidden">
    <header class="fixed left-0 top-0 p-4">
      <router-link to="/">
        <span class="i-carbon:arrow-left inline-block h-6 w-6 cursor-pointer fill-current" />
      </router-link>
    </header>
    <RouterView />
    <footer class="fixed bottom-0 left-0 block w-full flex items-end justify-between px-4">
      <ul class="nav-links">
        <router-link v-for="value, key, idx in jobs" :key="idx" class="nav-link" :to="`/${value?.no}`" :class="[key, key !== 'current' ? 'opacity-25' : '']">
          <span class="font-semibold">
            {{ value?.name }}
          </span>
          <span class="font-medium">
            {{ value?.no }}
          </span>
        </router-link>
      </ul>
      <div class="nav-info align-center flex cursor-pointer justify-center ab-center">
        <div class="center h-10 w-10 border border-1 px-2 pb-1 pt-1 text-lg">
          i
        </div>
      </div>
      <p>
        {{ currentWork.no }}
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.nav-links  {
  max-height: 72px;

  & .nav-link {
    display: block;
    text-align: left;

    &.next, &.previous {
    cursor: pointer;
    opacity: 0;
    transition: all .3s;

    &:hover {
      opacity: .25;
    }
    }

    &.next {
      margin-bottom: -1.6rem;
    }

    & > span:first-child {
        font-weight: 700;
        font-size: 14px;
        margin-right:10px;

      }

      & > span:last-child {
        font-weight: 200px;
        opacity: .75;
      }
  }

  & .nav-link.current {
    margin-right:10px;

      & > span:first-child {
        font-weight: 800;
        font-size: 14px;
      }

      & > span:last-child {
        font-weight: 200px;
        opacity: .75;
      }
}

}

.nav-links:hover .nav-link.next {
  margin-bottom: 0rem;
}
.nav-links:hover .nav-link.next , .nav-links:hover .nav-link.previous {
  opacity: .55;
}
</style>
