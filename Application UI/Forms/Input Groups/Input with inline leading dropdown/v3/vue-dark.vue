<template>
  <div>
    <label for="phone-number" class="block text-sm/6 font-medium text-white">Phone number</label>
    <div class="mt-2">
      <div class="flex rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
        <div class="grid shrink-0 grid-cols-1 focus-within:relative">
          <select id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-1.5 pl-3 pr-7 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
          <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" aria-hidden="true" />
        </div>
        <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6" placeholder="123-456-7890" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
</script>