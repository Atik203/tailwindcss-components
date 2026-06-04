<template>
  <nav class="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6" aria-label="Pagination">
    <div class="hidden sm:block">
      <p class="text-sm text-gray-300">
        Showing
        {{ ' ' }}
        <span class="font-medium">1</span>
        {{ ' ' }}
        to
        {{ ' ' }}
        <span class="font-medium">10</span>
        {{ ' ' }}
        of
        {{ ' ' }}
        <span class="font-medium">20</span>
        {{ ' ' }}
        results
      </p>
    </div>
    <div class="flex flex-1 justify-between sm:justify-end">
      <a href="#" class="relative inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 ring-1 ring-inset ring-white/5 hover:bg-white/20">Previous</a>
      <a href="#" class="relative ml-3 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 ring-1 ring-inset ring-white/5 hover:bg-white/20">Next</a>
    </div>
  </nav>
</template>

<script setup>
const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]
</script>