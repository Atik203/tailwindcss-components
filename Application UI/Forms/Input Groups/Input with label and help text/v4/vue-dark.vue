<template>
  <div>
    <label for="email" class="block text-sm/6 font-medium text-white">Email</label>
    <div class="mt-2">
      <input type="email" name="email" id="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="you@example.com" aria-describedby="email-description" />
    </div>
    <p class="mt-2 text-sm text-gray-400" id="email-description">We'll only use this for spam.</p>
  </div>
</template>
