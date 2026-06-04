<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-white">Users</h1>
        <p class="mt-2 text-sm text-gray-300">A list of all the users in your account including their name, title, email and role.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Add user</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <table class="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th scope="col" class="sticky top-0 z-10 border-b border-white/15 bg-gray-900/75 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white backdrop-blur-sm backdrop-filter sm:pl-6 lg:pl-8">Name</th>
                <th scope="col" class="sticky top-0 z-10 hidden border-b border-white/15 bg-gray-900/75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur-sm backdrop-filter sm:table-cell">Title</th>
                <th scope="col" class="sticky top-0 z-10 hidden border-b border-white/15 bg-gray-900/75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur-sm backdrop-filter lg:table-cell">Email</th>
                <th scope="col" class="sticky top-0 z-10 border-b border-white/15 bg-gray-900/75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur-sm backdrop-filter">Role</th>
                <th scope="col" class="sticky top-0 z-10 border-b border-white/15 bg-gray-900/75 py-3.5 pr-4 pl-3 backdrop-blur-sm backdrop-filter sm:pr-6 lg:pr-8">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(person, personIdx) in people" :key="person.email">
                <td :class="[personIdx !== people.length - 1 ? 'border-b border-white/10' : '', 'py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-6 lg:pl-8']">{{ person.name }}</td>
                <td :class="[personIdx !== people.length - 1 ? 'border-b border-white/10' : '', 'hidden px-3 py-4 text-sm whitespace-nowrap text-gray-400 sm:table-cell']">{{ person.title }}</td>
                <td :class="[personIdx !== people.length - 1 ? 'border-b border-white/10' : '', 'hidden px-3 py-4 text-sm whitespace-nowrap text-gray-400 lg:table-cell']">{{ person.email }}</td>
                <td :class="[personIdx !== people.length - 1 ? 'border-b border-white/10' : '', 'px-3 py-4 text-sm whitespace-nowrap text-gray-400']">{{ person.role }}</td>
                <td :class="[personIdx !== people.length - 1 ? 'border-b border-white/10' : '', 'py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-8 lg:pr-8']">
                  <a href="#" class="text-indigo-400 hover:text-indigo-300"
                    >Edit<span class="sr-only">, {{ person.name }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
  { name: 'Emily Selman', title: 'VP, User Experience', email: 'emily.selman@example.com', role: 'Member' },
  { name: 'Kristin Watson', title: 'VP, Human Resources', email: 'kristin.watson@example.com', role: 'Admin' },
  { name: 'Emma Dorsey', title: 'Senior Developer', email: 'emma.dorsey@example.com', role: 'Member' },
  { name: 'Alicia Bell', title: 'Junior Copywriter', email: 'alicia.bell@example.com', role: 'Admin' },
  { name: 'Jenny Wilson', title: 'Studio Artist', email: 'jenny.wilson@example.com', role: 'Owner' },
  { name: 'Anna Roberts', title: 'Partner, Creative', email: 'anna.roberts@example.com', role: 'Member' },
  {
    name: 'Benjamin Russel',
    title: 'Director, Print Operations',
    email: 'benjamin.russel@example.com',
    role: 'Member',
  },
  { name: 'Jeffrey Webb', title: 'Senior Art Director', email: 'jeffrey.webb@example.com', role: 'Admin' },
  { name: 'Kathryn Murphy', title: 'Associate Creative Director', email: 'kathryn.murphy@example.com', role: 'Member' },
]
</script>