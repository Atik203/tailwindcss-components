<template>
  <div class="flex items-center justify-between gap-3">
    <div class="group relative inline-flex w-11 shrink-0 rounded-full bg-white/5 p-0.5 outline-offset-2 outline-indigo-500 ring-1 ring-inset ring-white/10 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
      <span class="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5"></span>
      <input type="checkbox" class="absolute inset-0 size-full appearance-none focus:outline-none" id="annual-billing" name="annual-billing" aria-labelledby="annual-billing-label" aria-describedby="annual-billing-description" />
    </div>

    <div class="text-sm">
      <label id="annual-billing-label" class="font-medium text-white">Annual billing</label>
      {{ ' ' }}
      <span id="annual-billing-description" class="text-gray-400">(Save 10%)</span>
    </div>
  </div>
</template>
