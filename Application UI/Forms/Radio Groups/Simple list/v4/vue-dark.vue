<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-white">Notifications</legend>
    <p class="mt-1 text-sm/6 text-gray-400">How do you prefer to receive notifications?</p>
    <div class="mt-6 space-y-6">
      <div v-for="notificationMethod in notificationMethods" :key="notificationMethod.id" class="flex items-center">
        <input :id="notificationMethod.id" name="notification-method" type="radio" :checked="notificationMethod.id === 'email'" class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden" />
        <label :for="notificationMethod.id" class="ml-3 block text-sm/6 font-medium text-white">{{ notificationMethod.title }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]
</script>