<template>
  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id" class="overflow-hidden bg-gray-800/50 px-4 py-4 outline outline-1 -outline-offset-1 outline-white/10 sm:rounded-md sm:px-6">
      <!-- Your content -->
    </li>
  </ul>
</template>

<script setup>
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>