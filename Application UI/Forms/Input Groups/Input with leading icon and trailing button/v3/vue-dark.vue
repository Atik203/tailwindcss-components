<template>
  <div>
    <label for="query" class="block text-sm/6 font-medium text-white">Search candidates</label>
    <div class="mt-2 flex">
      <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
        <input type="text" name="query" id="query" class="col-start-1 row-start-1 block w-full rounded-l-md bg-white/5 py-1.5 pl-10 pr-3 text-base text-white outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pl-9 sm:text-sm/6" placeholder="John Smith" />
        <UsersIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-500 sm:size-4" aria-hidden="true" />
      </div>
      <button type="button" class="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-gray-700 hover:bg-white/20 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500">
        <BarsArrowUpIcon class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
        Sort
      </button>
    </div>
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/vue/16/solid'
</script>