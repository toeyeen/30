<script setup lang="ts">
import { useField } from 'vee-validate'

type InputTypes = 'text' | 'password'
interface ValidationRules {
  required?: boolean
  min?: number
}

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder: string
  type: InputTypes
  name?: string
  validationRules?: ValidationRules
}>(), {
  modelValue: '',
  placeholder: 'Placeholder',
  type: 'text',
})

const emit = defineEmits(['update:modelValue'])

const name = toRef(props, 'name')

const { value, errorMessage, handleBlur } = useField(name, { required: true, min: 8 })

function onInput(event: Event) {
  const target = (event.target) as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label :for="props.name">
    <input :type="props.type" :value="props.modelValue" :placeholder="props.placeholder" class="ctm-ring brand-input" @input="onInput" @blur="handleBlur">
    <small class="text-red-500">
      {{ errorMessage }}
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
