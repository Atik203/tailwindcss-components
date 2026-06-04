<template>
  <nav class="flex flex-1 flex-col" aria-label="Sidebar">
    <ul role="list" class="-mx-2 space-y-1">
      <li v-for="item in navigation" :key="item.name">
        <a :href="item.href" :class="[item.current ? 'bg-white/5 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white', 'group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold']">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
</script>