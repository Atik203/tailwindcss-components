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
      <nav class="isolate flex divide-x divide-white/10 rounded-lg bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10" aria-label="Tabs">
        <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'text-white' : 'text-gray-400 hover:text-white', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium hover:bg-white/5 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
          <span>{{ tab.name }}</span>
          <span aria-hidden="true" :class="[tab.current ? 'bg-indigo-400' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']"></span>
        </a>
      </nav>
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