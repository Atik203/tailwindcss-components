<template>
  <div>
    <div class="grid grid-cols-1 sm:hidden">
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select aria-label="Select a tab" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pl-3 pr-8 text-base text-gray-100 outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400" aria-hidden="true" />
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-white/10">
        <nav class="-mb-px flex" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-400 text-indigo-400' : 'border-transparent text-gray-400 hover:border-white/20 hover:text-gray-300', 'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]
</script>