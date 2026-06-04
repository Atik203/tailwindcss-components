<template>
  <div>
    <label for="account-number" class="block text-sm/6 font-medium text-white">Account number</label>
    <div class="mt-2 grid grid-cols-1">
      <input type="text" name="account-number" id="account-number" class="col-start-1 row-start-1 block w-full rounded-md bg-white/5 py-1.5 pl-3 pr-10 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pr-9 sm:text-sm/6" placeholder="000-00-0000" />
      <QuestionMarkCircleIcon class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/16/solid'
</script>