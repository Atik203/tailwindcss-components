<template>
  <span class="isolate inline-flex rounded-md">
    <button type="button" class="relative inline-flex items-center rounded-l-md bg-white/10 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10">
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="size-5" aria-hidden="true" />
    </button>
    <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white/10 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10">
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="size-5" aria-hidden="true" />
    </button>
  </span>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>