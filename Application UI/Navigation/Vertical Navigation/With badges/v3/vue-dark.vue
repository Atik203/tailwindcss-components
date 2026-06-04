<template>
  <nav class="flex flex-1 flex-col" aria-label="Sidebar">
    <ul role="list" class="-mx-2 space-y-1">
      <li v-for="item in navigation" :key="item.name">
        <a :href="item.href" :class="[item.current ? 'bg-white/5 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white', 'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold']">
          {{ item.name }}
          <span v-if="item.count" class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-400 outline outline-1 -outline-offset-1 outline-white/10" aria-hidden="true">{{ item.count }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navigation = [
  { name: 'Dashboard', href: '#', count: '5', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', count: '12', current: false },
  { name: 'Calendar', href: '#', count: '20+', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
</script>