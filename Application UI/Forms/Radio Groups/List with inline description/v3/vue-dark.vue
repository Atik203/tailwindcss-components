<template>
  <fieldset aria-label="Plan">
    <div class="space-y-5">
      <div v-for="plan in plans" :key="plan.id" class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input :id="plan.id" :aria-describedby="`${plan.id}-description`" name="plan" type="radio" :checked="plan.id === 'small'" class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
        </div>
        <div class="ml-3 text-sm/6">
          <label :for="plan.id" class="font-medium text-white">{{ plan.name }}</label>
          {{ ' ' }}
          <span :id="`${plan.id}-description`" class="text-gray-400">{{ plan.description }}</span>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]
</script>