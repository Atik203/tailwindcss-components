<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto flex w-full max-w-md divide-x divide-white/10 rounded-lg bg-gray-800 shadow-lg outline outline-1 -outline-offset-1 outline-white/10">
          <div class="flex w-0 flex-1 items-center p-4">
            <div class="w-full">
              <p class="text-sm font-medium text-white">Receive notifications</p>
              <p class="mt-1 text-sm text-gray-400">Notifications may include alerts, sounds, and badges.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col divide-y divide-white/10">
              <div class="flex h-0 flex-1">
                <button type="button" @click="show = false" class="flex w-full items-center justify-center rounded-none rounded-tr-lg px-4 py-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:z-10 focus:outline focus:outline-2 focus:outline-indigo-400">Reply</button>
              </div>
              <div class="flex h-0 flex-1">
                <button type="button" @click="show = false" class="flex w-full items-center justify-center rounded-none rounded-br-lg px-4 py-3 text-sm font-medium text-gray-300 hover:text-white focus:outline focus:outline-2 focus:outline-indigo-400">Don't allow</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>