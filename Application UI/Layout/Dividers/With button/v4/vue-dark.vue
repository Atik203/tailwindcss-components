<template>
  <div class="flex items-center">
    <div class="w-full border-t border-white/15" aria-hidden="true"></div>
    <div class="relative flex justify-center">
      <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white inset-ring inset-ring-white/5 hover:bg-white/20">
        <PlusIcon class="-mr-0.5 -ml-1 size-5 text-gray-400" aria-hidden="true" />
        Button text
      </button>
    </div>
    <div class="w-full border-t border-white/10" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>