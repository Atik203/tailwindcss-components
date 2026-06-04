<template>
  <dl class="mx-auto grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
    <div v-for="stat in stats" :key="stat.name" class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-gray-900 px-4 py-10 sm:px-6 xl:px-8">
      <dt class="text-sm/6 font-medium text-gray-400">{{ stat.name }}</dt>
      <dd :class="[stat.changeType === 'negative' ? 'text-rose-400' : 'text-gray-300', 'text-xs font-medium']">{{ stat.change }}</dd>
      <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-white">{{ stat.value }}</dd>
    </div>
  </dl>
</template>

<script setup>
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]
</script>