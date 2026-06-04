<template>
  <div class="bg-gray-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-800 px-6 py-24 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/15 sm:rounded-3xl sm:px-24 after:sm:rounded-3xl xl:flex-row xl:items-center xl:py-32">
        <h2 class="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl xl:flex-auto">Want our product updates? Sign up for our newsletter.</h2>
        <form class="w-full max-w-md">
          <div class="flex gap-x-4">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/20 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter your email" />
            <button type="submit" class="flex-none rounded-md bg-white/90 px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
          </div>
          <p class="mt-4 text-sm/6 text-gray-300">We care about your data. Read our <a href="#" class="font-semibold whitespace-nowrap text-white hover:text-gray-200">privacy policy</a>.</p>
        </form>
        <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
