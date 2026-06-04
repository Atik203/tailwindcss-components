<template>
  <div class="border-l-4 border-yellow-500 bg-yellow-500/10 p-4">
    <div class="flex">
      <div class="shrink-0">
        <ExclamationTriangleIcon class="size-5 text-yellow-500" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-300">
          You have no credits left.
          {{ ' ' }}
          <a href="#" class="font-medium text-yellow-300 underline hover:text-yellow-200">Upgrade your account to add more credits.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'
</script>