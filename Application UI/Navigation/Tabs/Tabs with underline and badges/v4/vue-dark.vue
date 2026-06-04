<template>
  <div>
    <div class="grid grid-cols-1 sm:hidden">
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select aria-label="Select a tab" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-gray-100 outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400" aria-hidden="true" />
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-white/10">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" href="#" :class="[tab.current ? 'border-indigo-400 text-indigo-400' : 'border-transparent text-gray-400 hover:border-white/20 hover:text-white', 'flex border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
            <span v-if="tab.count" :class="[tab.current ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/10 text-gray-300', 'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const tabs = [
  { name: 'Applied', href: '#', count: '52', current: false },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]
</script>