<template>
  <div class="border-b border-white/10 px-4 py-5 sm:px-6">
    <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="shrink-0">
            <img class="size-12 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-4">
            <h3 class="text-base font-semibold text-white">Tom Cook</h3>
            <p class="text-sm text-gray-400">
              <a href="#">@tom_cook</a>
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex shrink-0">
        <button type="button" class="relative inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">
          <PhoneIcon class="-ml-0.5 mr-1.5 size-5 text-gray-400" aria-hidden="true" />
          <span>Phone</span>
        </button>
        <button type="button" class="relative ml-3 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">
          <EnvelopeIcon class="-ml-0.5 mr-1.5 size-5 text-gray-400" aria-hidden="true" />
          <span>Email</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
</script>