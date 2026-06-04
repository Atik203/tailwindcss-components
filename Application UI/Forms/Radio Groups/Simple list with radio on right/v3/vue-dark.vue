<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-white">Select a side</legend>
    <div class="mt-4 divide-y divide-white/10 border-b border-t border-white/10">
      <div v-for="(side, sideIdx) in sides" :key="sideIdx" class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm/6">
          <label :for="`side-${side.id}`" class="select-none font-medium text-white">{{ side.name }}</label>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`side-${side.id}`" name="plan" type="radio" :checked="side.id === null" class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]
</script>