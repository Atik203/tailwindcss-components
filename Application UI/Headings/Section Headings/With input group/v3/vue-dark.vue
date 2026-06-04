<template>
  <div class="border-b border-white/10 pb-5 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-base font-semibold text-white">Job Postings</h3>
    <div class="mt-3 flex sm:ml-4 sm:mt-0">
      <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
        <input type="text" name="query" id="query" aria-label="Search candidates" class="col-start-1 row-start-1 block w-full rounded-l-md bg-gray-800/50 py-1.5 pl-10 pr-3 text-base text-white outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pl-9 sm:text-sm/6" placeholder="Search candidates" />
        <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" aria-hidden="true" />
      </div>
      <button type="button" class="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-gray-700 hover:bg-white/20 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500">
        <BarsArrowUpIcon class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
        Sort
      </button>
    </div>
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
</script>