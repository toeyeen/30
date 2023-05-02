<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'
import cx from 'classnames'

type InputTypes = 'text' | 'password'
type InputSize = 'small' | 'normal' | 'large'

interface FormError {
  isAvailable?: boolean
  messages?: ErrorObject[]
  showMessage?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder: string
  type?: InputTypes
  name?: string
  error?: FormError
  size?: InputSize
}>(), {
  modelValue: '',
  placeholder: 'Placeholder',
  type: 'text',
  size: 'normal',
})

const emit = defineEmits(['update:modelValue'])

const isRevealed = ref(false)

function onInput(event: Event) {
  const target = (event.target) as HTMLInputElement
  emit('update:modelValue', target.value)
}

const showInputError = computed(() => {
  const messages = props.error?.messages.find((message) => {
    return message.$uid.includes(`${props.name}`)
  })

  return messages
})

const inputType = computed(() => {
  if (isRevealed.value && props.type === 'password')
    return 'text'

  if (!isRevealed.value && props.type === 'password')
    return 'password'

  if (!isRevealed.value && props.type === 'text')
    return 'text'
})

const inputStyle = computed(() => {
  return cx({
    'min-h-12 text-lg': props.size === 'large',
    'max-h-8 text-sm': props.size === 'small',
    'max-h-10': props.size === 'normal',
  })
})

function reveal() {
  isRevealed.value = !isRevealed.value
}
</script>

<template>
  <label :for="props.name" class="mb-4">
    <div class="relative">
      <input v-bind="$attrs" :type="inputType" :value="props.modelValue" :placeholder="props.placeholder" class="w-full rounded-md bg-gray-100 p-2 transition transition-shadow focus:bg-white hover:bg-gray-200 focus:outline-none placeholder:hover:text-gray-400" :class="[inputStyle, error?.isAvailable ? 'input-error' : 'ctm-ring']" @input="onInput">
      <span v-if="props.type === 'password' " class="absolute right-2 top-50% h-full w-6 inline-flex cursor-pointer border fill-current text-gray -translate-y-50%" :class="[isRevealed ? 'i-carbon:view-off' : 'i-carbon:view']" @click="reveal" />
    </div>

    <small v-if="error?.isAvailable && error?.showMessage" class="mt-1 block text-left text-xs uppercase text-[#D62B20]">
      {{ showInputError?.$message?.replace('Value', showInputError.$property) }}
    </small>

    <slot name="extras" />
  </label>
</template>

<style lang="scss" scoped>
.input-error {
  color: #D62B20;
  background: #d62b200d ;
  box-shadow: inset 0px 0px 0px 1px #e7a5a3;

  &::placeholder {
    color: #d62b2080;
  }

}
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
