<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base/7 font-semibold text-indigo-400">Pricing</h2>
        <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Pricing that grows with you</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
      <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? '-mr-px lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? '-ml-px lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-gray-800/50 p-8 ring-1 ring-inset ring-gray-700 xl:p-10']">
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-400' : 'text-white', 'text-lg/8 font-semibold']">{{ tier.name }}</h3>
              <p v-if="tier.mostPopular" class="rounded-full bg-indigo-400/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-400">Most popular</p>
            </div>
            <p class="mt-4 text-sm/6 text-gray-300">{{ tier.description }}</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-semibold tracking-tight text-white">{{ tier.priceMonthly }}</span>
              <span class="text-sm/6 font-semibold text-gray-400">/month</span>
            </p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckIcon class="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                {{ feature }}
              </li>
            </ul>
          </div>
          <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-500 text-white hover:bg-indigo-400' : 'bg-white/10 text-white ring-1 ring-inset ring-white/5 hover:bg-white/20 focus-visible:outline-white/75', 'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500']">Buy plan</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$19',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$49',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
]
</script>