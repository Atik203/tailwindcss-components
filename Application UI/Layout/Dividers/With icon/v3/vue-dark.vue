<template>
  <div class="flex items-center">
    <div class="w-full border-t border-white/15" aria-hidden="true"></div>
    <div class="relative flex justify-center">
      <span class="bg-gray-900 px-2 text-gray-400">
        <PlusIcon class="size-5 text-gray-400" aria-hidden="true" />
      </span>
    </div>
    <div class="w-full border-t border-white/15" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>