<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex space-x-4 rounded-md bg-gray-800/50 px-6 outline -outline-offset-1 outline-white/10">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-300">
            <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg class="h-full w-6 shrink-0 text-white/10" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="page.href" class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
</script>