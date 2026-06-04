<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="mx-auto max-w-2xl text-base font-semibold text-white lg:mx-0 lg:max-w-none">Recent activity</h2>
    </div>
    <div class="mt-6 overflow-hidden border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <table class="w-full text-left">
            <thead class="sr-only">
              <tr>
                <th>Amount</th>
                <th class="hidden sm:table-cell">Client</th>
                <th>More details</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="day in days" :key="day.dateTime">
                <tr class="text-sm/6 text-gray-100">
                  <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                    <time :datetime="day.dateTime">{{ day.date }}</time>
                    <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-white/15 bg-gray-800/50"></div>
                    <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-white/15 bg-gray-800/50"></div>
                  </th>
                </tr>
                <tr v-for="transaction in day.transactions" :key="transaction.id">
                  <td class="relative py-5 pr-6">
                    <div class="flex gap-x-6">
                      <component :is="transaction.icon" class="hidden h-6 w-5 flex-none text-gray-500 sm:block" aria-hidden="true" />
                      <div class="flex-auto">
                        <div class="flex items-start gap-x-3">
                          <div class="text-sm/6 font-medium text-white">{{ transaction.amount }}</div>
                          <div v-if="transaction.status === 'Paid'" class="rounded-md bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">{{ transaction.status }}</div>
                          <div v-if="transaction.status === 'Withdraw'" class="rounded-md bg-gray-700/50 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-500/20">{{ transaction.status }}</div>
                          <div v-if="transaction.status === 'Overdue'" class="rounded-md bg-red-900/30 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-500/20">{{ transaction.status }}</div>
                        </div>
                        <div v-if="transaction.tax" class="mt-1 text-xs/5 text-gray-400">{{ transaction.tax }} tax</div>
                      </div>
                    </div>
                    <div class="absolute right-full bottom-0 h-px w-screen bg-white/10"></div>
                    <div class="absolute bottom-0 left-0 h-px w-screen bg-white/10"></div>
                  </td>
                  <td class="hidden py-5 pr-6 sm:table-cell">
                    <div class="text-sm/6 text-white">{{ transaction.client }}</div>
                    <div class="mt-1 text-xs/5 text-gray-400">{{ transaction.description }}</div>
                  </td>
                  <td class="py-5 text-right">
                    <div class="flex justify-end">
                      <a :href="transaction.href" class="text-sm/6 font-medium text-indigo-400 hover:text-indigo-300"
                        >View<span class="hidden sm:inline"> transaction</span><span class="sr-only">, invoice #{{ transaction.invoiceNumber }}, {{ transaction.client }}</span></a
                      >
                    </div>
                    <div class="mt-1 text-xs/5 text-gray-400">
                      Invoice <span class="text-white">#{{ transaction.invoiceNumber }}</span>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/vue/20/solid'

const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]
</script>