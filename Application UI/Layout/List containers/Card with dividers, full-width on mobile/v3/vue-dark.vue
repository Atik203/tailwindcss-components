<template>
  <div class="overflow-hidden bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10 sm:rounded-md">
    <ul role="list" class="divide-y divide-white/10">
      <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-6">
        <!-- Your content -->
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>