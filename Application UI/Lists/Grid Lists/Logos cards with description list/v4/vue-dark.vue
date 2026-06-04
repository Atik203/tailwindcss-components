<template>
  <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
    <li v-for="client in clients" :key="client.id" class="overflow-hidden rounded-xl outline -outline-offset-1 outline-white/10">
      <div class="flex items-center gap-x-4 border-b border-white/10 bg-gray-800/50 p-6">
        <img :src="client.imageUrl" :alt="client.name" class="size-12 flex-none rounded-lg bg-gray-700 object-cover ring-1 ring-white/10" />
        <div class="text-sm/6 font-medium text-white">{{ client.name }}</div>
        <Menu as="div" class="relative ml-auto">
          <MenuButton class="relative block text-gray-400 hover:text-white">
            <span class="absolute -inset-2.5"></span>
            <span class="sr-only">Open options</span>
            <EllipsisHorizontalIcon class="size-5" aria-hidden="true" />
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-gray-800 py-2 outline-1 -outline-offset-1 outline-white/10">
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-white/5 outline-hidden' : '', 'block px-3 py-1 text-sm/6 text-white']"
                  >View<span class="sr-only">, {{ client.name }}</span></a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-white/5 outline-hidden' : '', 'block px-3 py-1 text-sm/6 text-white']"
                  >Edit<span class="sr-only">, {{ client.name }}</span></a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <dl class="-my-3 divide-y divide-white/10 px-6 py-4 text-sm/6">
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-400">Last invoice</dt>
          <dd class="text-gray-300">
            <time :datetime="client.lastInvoice.dateTime">{{ client.lastInvoice.date }}</time>
          </dd>
        </div>
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-400">Amount</dt>
          <dd class="flex items-start gap-x-2">
            <div class="font-medium text-white">{{ client.lastInvoice.amount }}</div>
            <div v-if="client.lastInvoice.status == 'Paid'" class="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-green-500/10 ring-inset">{{ client.lastInvoice.status }}</div>
            <div v-if="client.lastInvoice.status == 'Withdraw'" class="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10 ring-inset">{{ client.lastInvoice.status }}</div>
            <div v-if="client.lastInvoice.status == 'Overdue'" class="rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-red-500/10 ring-inset">{{ client.lastInvoice.status }}</div>
          </dd>
        </div>
      </dl>
    </li>
  </ul>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'

const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]
</script>