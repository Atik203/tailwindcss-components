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
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-400 text-indigo-400' : 'border-transparent text-gray-400 hover:border-white/20 hover:text-gray-300', 'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">
            <component :is="tab.icon" :class="[tab.current ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-400', '-ml-0.5 mr-2 size-5']" aria-hidden="true" />
            <span>{{ tab.name }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/vue/20/solid'

const tabs = [
  { name: 'My Account', href: '#', icon: UserIcon, current: false },
  { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
]
</script>