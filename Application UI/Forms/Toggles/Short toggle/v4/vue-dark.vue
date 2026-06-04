<template>
  <div class="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-indigo-500 has-focus-visible:outline-2">
    <span class="absolute mx-auto h-4 w-9 rounded-full bg-gray-800/50 inset-ring inset-ring-white/10 transition-colors duration-200 ease-in-out group-has-checked:bg-indigo-500"></span>
    <span class="absolute left-0 size-5 rounded-full border border-gray-300 bg-white transition-transform duration-200 ease-in-out group-has-checked:translate-x-5"></span>
    <input type="checkbox" class="absolute inset-0 size-full appearance-none focus:outline-hidden" aria-label="Use setting" name="setting" />
  </div>
</template>
