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
      class="note" :class="[active ? 'active'
        : '']"
    >
      <div class="note-overlay" />
      <div class="note-container">
        <div
          class="note-wrapper"
        >
          <div ref="noteBoxRef" class="note-box">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
// .note {

//   &-wrapper {
//     position: relative;

//   }

//   &-box {
//     z-index: 999;
//     position: absolute;
//     pointer-events: none;
//     left: 50%;
//     bottom: 0%;
//     width: 500px;
//     max-width: 100vw;
//     min-height: 160px;
//     transform: translate(-50%, 100%);
//     transition: all 0.3s ease-in-out 0s;
//     background: white;
//     padding: 16px;
//   }

// }

// .note-container.active + .note-overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: black;
//   opacity: .2;
//   height: 100%;
//   width: 100%;
//   transition: all 0.3s ease-in-out 0s;
//   z-index: 2;
// }

// .note-container.active .note-box {
//   transform: translate(-50%, 0%);
// }

.note {
  position: fixed;
  z-index: 999;
  width: 0%;
  height: 100%;
  top: 0;
}

.note-overlay {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #00000073;
    opacity: 0;
    pointer-events: none;
}

.note-container {
  bottom: 0%;
  max-width: 500px;
  width: 500px;
  position: fixed;
  min-height: 160px;
  background: white;
  left: 50%;
  transform: translate(-50%, 110%);
  transition: all .3s ease-in-out 0s;
  padding: 16px 28px;
}

.note.active  .note-container {
  position: absolute;
    width: 100%;
    transform: translate(-50%, 0%);

}

.note.active {
  width: 100%;
}
.note.active .note-overlay {
  height: 100%;
  transition: none;
  opacity: 1;
  animation: noteFadeIn .3s cubic-bezier(.23,1,.32,1);
}

@keyframes noteFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}
</style>
