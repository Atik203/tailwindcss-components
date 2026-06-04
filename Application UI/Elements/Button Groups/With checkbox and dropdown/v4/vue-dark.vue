<template>
  <span class="inline-flex">
    <span class="inline-flex shrink-0 items-center rounded-l-md border border-gray-700 bg-white/10 px-2 py-2">
      <div class="group grid size-4 grid-cols-1">
        <input name="select-all" aria-label="Select all" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-white/20 bg-transparent checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto" />
        <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25" viewBox="0 0 14 14" fill="none">
          <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </span>
    <div class="-ml-px grid grid-cols-1">
      <select id="message-type" name="message-type" aria-label="Select message type" class="col-start-1 row-start-1 w-full appearance-none rounded-r-md bg-white/10 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-700 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" aria-hidden="true" />
    </div>
  </span>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
</script>