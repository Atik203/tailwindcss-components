<template>
  <div class="flex items-center justify-between gap-3">
    <div class="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
      <span class="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5"></span>
      <input type="checkbox" class="absolute inset-0 size-full appearance-none focus:outline-none" id="annual-billing" name="annual-billing" aria-labelledby="annual-billing-label" aria-describedby="annual-billing-description" />
    </div>

    <div class="text-sm">
      <label id="annual-billing-label" class="font-medium text-gray-900">Annual billing</label>
      {{ ' ' }}
      <span id="annual-billing-description" class="text-gray-500">(Save 10%)</span>
    </div>
  </div>
</template>
