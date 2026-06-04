<template>
  <div class="rounded-md bg-blue-500/10 p-4 outline outline-blue-500/20">
    <div class="flex">
      <div class="shrink-0">
        <InformationCircleIcon class="size-5 text-blue-400" aria-hidden="true" />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-sm text-blue-300">A new software update is available. See what’s new in version 2.0.4.</p>
        <p class="mt-3 text-sm md:mt-0 md:ml-6">
          <a href="#" class="font-medium whitespace-nowrap text-blue-300 hover:text-blue-200">
            Details
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/20/solid'
</script>