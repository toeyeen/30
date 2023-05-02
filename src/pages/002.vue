<script setup lang="ts">
import { zxcvbn } from 'zxcvbn-typescript'
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators'

// const {
//   value: inputValue,
//   errorMessage,
//   handleBlur,
//   handleChange,
//   meta,
// } = useField(name, undefined, {
//   initialValue: props.value,
// })

const user = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  password: '',

})

const response = ref({})

const requiredNameLength = ref(2)

const FormRules = computed(() => ({
  user: {
    firstName: {
      required,
      minLength: minLength(requiredNameLength.value),
    },
    lastName: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: helpers.withMessage(
        ({
          $params,
        }) => `Must be greater than ${$params.min} characters`,
        minLength(6),
      ),
    },
  },
}))

const v$ = useVuelidate(FormRules, { user })

watch(() => user.password, () => {
  const { crack_times_display, feedback } = zxcvbn(user.password!)

  response.value = {
    crackTime: { ...crack_times_display },
    feedback: { ...feedback },
  }
})

async function onSubmit(e: Event) {
  e.preventDefault()
  const isFormCorrect = await v$.value.$validate()

  console.log(isFormCorrect, 'sddd')
  // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
  if (!isFormCorrect)
    return
  alert(JSON.stringify(values, null, 2))
}
</script>

<template>
  <div class="mx-auto max-w-xs text-center">
    <div id="sign-up">
      <span class="brand-logo block">DONA</span>

      <h1 class="my-8">
        Create an account
      </h1>

      <form class="flex flex-col" @submit="onSubmit">
        <BaseInput
          v-model="user.firstName"
          name="user.firstName" placeholder="First name" :error="{
            isAvailable: v$.user.firstName.$error,
            messages: v$.user.$errors,
          }" @blur="v$.user.firstName.$touch"
        />

        <BaseInput
          v-model="user.lastName"
          name="user.lastName" placeholder="Last name" :error="{
            isAvailable: v$.user.lastName.$error,
            messages: v$.user.$errors,
          }" @blur="v$.user.lastName.$touch"
        />

        <BaseInput v-model="user.company" placeholder="Compnay (Optional)" />

        <BaseInput
          v-model="user.email" name="user.email" placeholder="Email" :error="{
            isAvailable: v$.user.email.$error,
            messages: v$.user.$errors,
          }" @blur="v$.user.email.$touch"
        />
        <base-input
          v-model="user.password" name="user.password" :validation-rules="{ required: true, min: 8 }" placeholder="Password" type="password" :error="{
            isAvailable: v$.user.password.$error,
            messages: v$.user.$errors,
          }" @blur="v$.user.password.$touch"
        >
          <template #extras>
            <div v-if="user.password" class="hidden-text mx-1 mt-2 flex gap-1 text-left text-xs font-normal text-[#D62B20]">
              <span class="i-carbon:idea inline-block" />

              <span>Time to hack:</span>

              <span class="font-semibold"> {{ response?.crackTime?.online_no_throttling_10_per_second }} </span>
            </div>
          </template>
        </base-input>

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
