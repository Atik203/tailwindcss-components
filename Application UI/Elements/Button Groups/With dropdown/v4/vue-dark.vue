<template>
  <div class="inline-flex rounded-md">
    <button type="button" class="relative inline-flex items-center rounded-l-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-gray-700 hover:bg-white/20 focus:z-10">Save changes</button>
    <Menu as="div" class="relative -ml-px block">
      <MenuButton class="relative inline-flex items-center rounded-r-md bg-white/10 px-2 py-2 text-gray-400 inset-ring-1 inset-ring-gray-700 hover:bg-white/20 focus:z-10">
        <span class="sr-only">Open options</span>
        <ChevronDownIcon class="size-5" aria-hidden="true" />
      </MenuButton>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10">
          <div class="py-1">
            <MenuItem v-for="item in items" :key="item.name" v-slot="{ active }">
              <a :href="item.href" :class="[active ? 'bg-white/5 text-white outline-hidden' : 'text-gray-300', 'block px-4 py-2 text-sm']">{{ item.name }}</a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const items = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]
</script>