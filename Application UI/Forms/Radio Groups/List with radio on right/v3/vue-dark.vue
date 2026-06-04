<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-white">Transfer funds</legend>
    <p class="mt-1 text-sm/6 text-gray-400">Transfer your balance to your bank account.</p>
    <div class="mt-2.5 divide-y divide-white/10">
      <div v-for="(account, accountIdx) in accounts" :key="accountIdx" class="relative flex items-start pb-4 pt-3.5">
        <div class="min-w-0 flex-1 text-sm/6">
          <label :for="`account-${account.id}`" class="font-medium text-white">{{ account.name }}</label>
          <p :id="`account-${account.id}-description`" class="text-gray-400">{{ account.description }}</p>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`account-${account.id}`" :aria-describedby="`account-${account.id}-description`" name="account" type="radio" :checked="account.id === 'checking'" class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]
</script>