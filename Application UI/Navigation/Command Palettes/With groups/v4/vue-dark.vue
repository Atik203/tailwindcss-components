<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="" leave="ease-in duration-200" leave-from="" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-900/50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to=" scale-100" leave="ease-in duration-200" leave-from=" scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-gray-900 shadow-2xl outline-1 -outline-offset-1 outline-white/10 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="grid grid-cols-1">
                <ComboboxInput class="col-start-1 row-start-1 h-12 w-full bg-gray-900 pr-4 pl-11 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" @blur="query = ''" />
                <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-500" aria-hidden="true" />
              </div>

              <div v-if="query === ''" class="border-t border-white/10 px-6 py-14 text-center text-sm sm:px-14">
                <GlobeAmericasIcon class="mx-auto size-6 text-gray-500" aria-hidden="true" />
                <p class="mt-4 font-semibold text-white">Search for clients and projects</p>
                <p class="mt-2 text-gray-400">Quickly access clients and projects by running a global search.</p>
              </div>

              <ComboboxOptions v-if="filteredItems.length > 0" static as="ul" class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2">
                <li v-for="[category, items] in Object.entries(groups)" :key="category">
                  <h2 class="bg-white/5 px-4 py-2.5 text-xs font-semibold text-white">
                    {{ category }}
                  </h2>
                  <ul class="mt-2 text-sm text-gray-300">
                    <ComboboxOption v-for="item in items" :key="item.id" :value="item" as="template" v-slot="{ active }">
                      <li :class="['cursor-default px-4 py-2 select-none', active && 'bg-indigo-500 text-white outline-hidden']">
                        {{ item.name }}
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <div v-if="query !== '' && filteredItems.length === 0" class="border-t border-white/10 px-6 py-14 text-center text-sm sm:px-14">
                <FaceFrownIcon class="mx-auto size-6 text-gray-500" aria-hidden="true" />
                <p class="mt-4 font-semibold text-white">No results found</p>
                <p class="mt-2 text-gray-400">We couldn’t find anything with that term. Please try again.</p>
              </div>
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
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
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

const items = [
  { id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#' },
  // More items...
]

const open = ref(true)
const query = ref('')
const filteredItems = computed(() =>
  query.value === ''
    ? []
    : items.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase())
      }),
)
const groups = computed(() =>
  filteredItems.value.reduce((groups, item) => {
    return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  }, {}),
)

function onSelect(item) {
  if (item) {
    window.location = item.url
  }
}
</script>