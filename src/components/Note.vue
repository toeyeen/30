<script setup lang="ts">
const props = defineProps({
  show: Boolean,
})

const emits = defineEmits(['close'])
const noteBoxRef = ref(null)

const active = computed(() => {
  return !!props.show
})

const localActive = ref(active.value)

onClickOutside(noteBoxRef, (event) => {
  localActive.value = false

  console.log(event)
  emits('close', localActive.value)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="note-container" :class="[active ? 'active'
        : '']"
    >
      <div
        class="note-wrapper"
      >
        <div ref="noteBoxRef" class="note-box">
          <slot />
        </div>
      </div>
    </div>
    <div class="note-overlay" />
  </Teleport>
</template>

<style lang="scss" scoped>
.note {

  &-wrapper {
    position: relative;

  }

  &-box {
    z-index: 999;
    position: absolute;
    pointer-events: none;
    left: 50%;
    bottom: 0%;
    width: 500px;
    max-width: 100vw;
    min-height: 160px;
    transform: translate(-50%, 100%);
    transition: all 0.3s ease-in-out 0s;
    background: white;
    padding: 16px;
  }

}

.note-container.active + .note-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: .2;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in-out 0s;
  z-index: 2;
}

.note-container.active .note-box {
  transform: translate(-50%, 0%);
}
</style>
