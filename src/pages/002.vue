<script setup lang="ts">
import { zxcvbn } from 'zxcvbn-typescript'
import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

// const {
//   value: inputValue,
//   errorMessage,
//   handleBlur,
//   handleChange,
//   meta,
// } = useField(name, undefined, {
//   initialValue: props.value,
// })

const usersPassword = ref('')
const response = ref({})

watch(usersPassword, () => {
  const { crack_times_display, feedback } = zxcvbn(usersPassword.value!)

  response.value = {
    crackTime: { ...crack_times_display },
    feedback: { ...feedback },
  }
})

function onSubmit(values: any) {
  alert(JSON.stringify(values, null, 2))
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn')
  submitBtn.classList.add('invalid')
  setTimeout(() => {
    submitBtn.classList.remove('invalid')
  }, 1000)
}
</script>

<template>
  <div class="mx-auto max-w-xs border text-center">
    <div id="sign-up">
      <span class="brand-logo block">DONA</span>

      <h1 class="my-8">
        Create an account
      </h1>

      <form class="flex flex-col" :validation-schema="SignUpSchema" @invalid-submit="onInvalidSubmit" @submit="onSubmit">
        <FormInput placeholder="First name" />
        <FormInput placeholder="Last name" />
        <FormInput placeholder="Compnay (Optional)" />
        <FormInput placeholder="Email" />
        <div class="relative">
          <FormInput v-model="usersPassword" name="password" :validation-rules="{ required: true, min: 8 }" placeholder="Password" type="password" />
          <span class="i-carbon:view absolute right-2 top-25% w-6 inline-flex border fill-current text-gray" />

          <div v-if="usersPassword" class="hidden-text mx-1 flex gap-1 text-left text-xs font-normal text-[#656976] -mt-1">
            <span class="i-carbon:idea inline-block" />

            <span>Time to hack:</span>

            <span class="font-semibold"> {{ response?.crackTime?.online_no_throttling_10_per_second }} </span>
          </div>
        </div>

        <input type="submit" value="Sign up" class="my-4 min-h-12 cursor-pointer rounded-lg bg-[#5887DD] p-2 text-white">
      </form>

      <small class="inline-block text-left text-base text-gray">
        By signing you agree to our
        <a href="#" class="underline">
          API Terms of Services
        </a>
        and
        <a href="#" class="underline">
          Private Policy.
        </a>
      </small>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
