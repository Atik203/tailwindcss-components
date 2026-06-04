<template>
  <div class="bg-gray-800/50 outline -outline-offset-1 outline-white/10 sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-base font-semibold text-white">Update your email</h3>
      <div class="mt-2 max-w-xl text-sm text-gray-400">
        <p>Change the email address you want associated with your account.</p>
      </div>
      <form class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <input type="email" name="email" id="email" aria-label="Email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="you@example.com" />
        </div>
        <button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto">Save</button>
      </form>
    </div>
  </div>
</template>
