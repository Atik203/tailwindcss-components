<template>
  <div class="overflow-hidden rounded-md bg-gray-800/50 outline -outline-offset-0 outline-white/10">
    <ul role="list" class="divide-y divide-white/10">
      <li v-for="item in items" :key="item.id" class="px-6 py-4">
        <!-- Your content -->
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
</script>