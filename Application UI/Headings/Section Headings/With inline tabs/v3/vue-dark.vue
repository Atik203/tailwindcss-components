<template>
  <div class="border-b border-white/10">
    <div class="sm:flex sm:items-baseline">
      <h3 class="text-base font-semibold text-white">Issues</h3>
      <div class="mt-4 sm:ml-10 sm:mt-0">
        <nav class="-mb-px flex space-x-8">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-400 text-indigo-400' : 'border-transparent text-gray-400 hover:border-white/20 hover:text-white', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { name: 'Open', href: '#', current: true },
  { name: 'Closed', href: '#', current: false },
]
</script>