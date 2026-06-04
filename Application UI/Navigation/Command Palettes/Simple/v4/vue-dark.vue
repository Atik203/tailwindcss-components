<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="" leave="ease-in duration-200" leave-from="" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-900/50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to=" scale-100" leave="ease-in duration-200" leave-from=" scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-xl transform divide-y divide-white/10 overflow-hidden rounded-xl bg-gray-900 shadow-2xl outline-1 -outline-offset-1 outline-white/10 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="grid grid-cols-1">
                <ComboboxInput class="col-start-1 row-start-1 h-12 w-full bg-gray-900 pr-4 pl-11 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" @blur="query = ''" />
                <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-500" aria-hidden="true" />
              </div>

              <ComboboxOptions v-if="filteredPeople.length > 0" static class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-200">
                <ComboboxOption v-for="person in filteredPeople" :key="person.id" :value="person" as="template" v-slot="{ active }">
                  <li :class="['cursor-default px-4 py-2 select-none', active && 'bg-indigo-500 text-white outline-hidden']">
                    {{ person.name }}
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <p v-if="query !== '' && filteredPeople.length === 0" class="p-4 text-sm text-gray-400">No people found.</p>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' },
  // More people...
]

const open = ref(true)
const query = ref('')
const filteredPeople = computed(() =>
  query.value === ''
    ? []
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase())
      }),
)

function onSelect(person) {
  if (person) {
    window.location = person.url
  }
}
</script>