<template>
  <div>
    <ul role="list" class="divide-y divide-white/5">
      <li v-for="person in people" :key="person.email" class="flex items-center justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img class="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" :src="person.imageUrl" alt="" />
          <div class="min-w-0 flex-auto">
            <p class="text-sm/6 font-semibold text-white">{{ person.name }}</p>
            <p class="mt-1 truncate text-xs/5 text-gray-400">{{ person.email }}</p>
          </div>
        </div>
        <a :href="person.href" class="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20">View</a>
      </li>
    </ul>
    <a href="#" class="flex w-full items-center justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-offset-0">View all</a>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
]
</script>