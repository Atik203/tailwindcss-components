<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">
      Options
      <ChevronDownIcon class="-mr-1 size-5 text-gray-500" aria-hidden="true" />
    </MenuButton>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <PencilSquareIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Edit
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <DocumentDuplicateIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <ArchiveBoxIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Archive
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <ArrowRightCircleIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Move
            </a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <UserPlusIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Share
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <HeartIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-white/5 text-white outline-none' : 'text-gray-300', 'flex items-center px-4 py-2 text-sm']">
              <TrashIcon :class="[active ? 'text-white' : 'text-gray-500', 'mr-3 size-5']" aria-hidden="true" />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/vue/20/solid'
</script>