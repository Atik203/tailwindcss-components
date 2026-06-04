<template>
  <div>
    <label for="name" class="block text-sm/6 font-medium text-white">Name</label>
    <div class="relative mt-2">
      <input type="text" name="name" id="name" class="peer block w-full bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="Jane Smith" />
      <div class="absolute inset-x-0 bottom-0 border-t border-white/20 peer-focus:border-t-2 peer-focus:border-indigo-500" aria-hidden="true"></div>
    </div>
  </div>
</template>
