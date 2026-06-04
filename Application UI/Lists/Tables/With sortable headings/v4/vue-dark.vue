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
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="relative min-w-full divide-y divide-white/15">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">
                  <a href="#" class="group inline-flex">
                    Name
                    <span class="invisible ml-2 flex-none rounded-sm text-gray-500 group-hover:visible group-focus:visible">
                      <ChevronDownIcon class="size-5" aria-hidden="true" />
                    </span>
                  </a>
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  <a href="#" class="group inline-flex">
                    Title
                    <span class="ml-2 flex-none rounded-sm bg-gray-800 text-white group-hover:bg-gray-700">
                      <ChevronDownIcon class="size-5" aria-hidden="true" />
                    </span>
                  </a>
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  <a href="#" class="group inline-flex">
                    Email
                    <span class="invisible ml-2 flex-none rounded-sm text-gray-500 group-hover:visible group-focus:visible">
                      <ChevronDownIcon class="invisible ml-2 size-5 flex-none rounded-sm text-gray-500 group-hover:visible group-focus:visible" aria-hidden="true" />
                    </span>
                  </a>
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  <a href="#" class="group inline-flex">
                    Role
                    <span class="invisible ml-2 flex-none rounded-sm text-gray-500 group-hover:visible group-focus:visible">
                      <ChevronDownIcon class="invisible ml-2 size-5 flex-none rounded-sm text-gray-500 group-hover:visible group-focus:visible" aria-hidden="true" />
                    </span>
                  </a>
                </th>
                <th scope="col" class="py-3.5 pr-0 pl-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 bg-gray-900">
              <tr v-for="person in people" :key="person.email">
                <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{{ person.name }}</td>
                <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-400">{{ person.title }}</td>
                <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-400">{{ person.email }}</td>
                <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-400">{{ person.role }}</td>
                <td class="py-4 pr-4 pl-3 text-right text-sm whitespace-nowrap sm:pr-0">
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
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
]
</script>