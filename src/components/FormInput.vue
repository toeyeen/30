<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'

type InputTypes = 'text' | 'password'

interface FormError {
  isAvailable: boolean
  messages: ErrorObject[]
}

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder: string
  type?: InputTypes
  name?: string
  error?: FormError
}>(), {
  modelValue: '',
  placeholder: 'Placeholder',
  type: 'text',
})

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const target = (event.target) as HTMLInputElement
  emit('update:modelValue', target.value)
}

const showInputError = computed(() => {
  const messages = props.error?.messages.find((message) => {
    return message.$uid === `${props.name}-required`
  })

  return messages
})
</script>

<template>
  <label :for="props.name" class="mb-4">
    <input :type="props.type" :value="props.modelValue" :placeholder="props.placeholder" class="ctm-ring brand-input" @input="onInput">
    <small v-if="error?.isAvailable" class="block text-left text-red-500">
      {{ showInputError?.$message }}
    </small>
  </label>
</template>

<style lang="scss" scoped>
.ctm-ring {
  box-shadow: inset 0px 0px 0px 1px #d4d4d4;

  &:focus {
    caret-color: #5887DD ;
    box-shadow: inset 0px 0px .1rem 1px #5887DD,  0px 0px 0px 2px #5887DD26; ;

  }
}

.hidden-text {
  --max-height : 20px
}
</style>
