<template>
  <div class="overflow-hidden rounded-lg bg-gray-900 outline outline-1 -outline-offset-1 outline-white/10">
    <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
    <div class="bg-gray-800/75 p-6">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="sm:flex sm:space-x-5">
          <div class="shrink-0">
            <img class="mx-auto size-20 rounded-full outline outline-1 -outline-offset-1 outline-white/10" :src="user.imageUrl" alt="" />
          </div>
          <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
            <p class="text-sm font-medium text-gray-400">Welcome back,</p>
            <p class="text-xl font-bold text-white sm:text-2xl">{{ user.name }}</p>
            <p class="text-sm font-medium text-gray-400">{{ user.role }}</p>
          </div>
        </div>
        <div class="mt-5 flex justify-center sm:mt-0">
          <a href="#" class="flex items-center justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">View profile</a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 bg-gray-800/50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      <div v-for="stat in stats" :key="stat.label" class="px-6 py-5 text-center text-sm font-medium">
        <span class="text-white">{{ stat.value }}</span>
        {{ ' ' }}
        <span class="text-gray-400">{{ stat.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = {
  name: 'Rebecca Nicholas',
  role: 'Product Designer',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]
</script>