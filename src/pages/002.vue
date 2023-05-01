<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-xs border text-center">
    <div id="sign-up">
      <span class="brand-logo block">DONA</span>

      <h1 class="my-8">
        Create an account
      </h1>

      <form class="flex flex-col">
        <input type="text" placeholder="First Name" class="brand-input ctm-ring">
        <input type="text" placeholder="Last Name" class="brand-input ctm-ring">
        <input type="text" placeholder="Company (Optional)" class="brand-input ctm-ring">
        <input type="text" placeholder="Email address" class="brand-input ctm-ring">
        <div class="relative">
          <input type="password" placeholder="Password" class="brand-input ctm-ring">
          <span class="i-carbon:view absolute right-2 top-25% w-6 inline-flex border fill-current text-gray" />
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

<style scoped>
.ctm-ring:focus {
  box-shadow: inset 0px 0px .12rem #5887DD;
}
</style>
