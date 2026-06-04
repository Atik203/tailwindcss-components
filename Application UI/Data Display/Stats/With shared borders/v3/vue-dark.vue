<template>
  <div>
    <h3 class="text-base font-semibold text-white">Last 30 days</h3>
    <dl class="mt-5 grid grid-cols-1 divide-white/10 overflow-hidden rounded-lg bg-gray-800/75 ring-1 ring-inset ring-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
      <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-100">{{ item.name }}</dt>
        <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div class="flex items-baseline text-2xl font-semibold text-indigo-400">
            {{ item.stat }}
            <span class="ml-2 text-sm font-medium text-gray-400">from {{ item.previousStat }}</span>
          </div>

          <div :class="[item.changeType === 'increase' ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowUpIcon v-if="item.changeType === 'increase'" class="-ml-1 mr-0.5 size-5 shrink-0 self-center text-green-400" aria-hidden="true" />
            <ArrowDownIcon v-else class="-ml-1 mr-0.5 size-5 shrink-0 self-center text-red-400" aria-hidden="true" />
            <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
            {{ item.change }}
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]
</script>