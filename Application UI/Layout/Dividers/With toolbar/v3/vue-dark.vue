<template>
  <div class="flex items-center">
    <div class="w-full border-t border-white/15" aria-hidden="true"></div>
    <div class="relative flex justify-center">
      <span class="isolate inline-flex -space-x-px rounded-md">
        <button type="button" class="relative inline-flex items-center rounded-l-md bg-white/5 px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/10 focus:z-10">
          <span class="sr-only">Edit</span>
          <PencilIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center bg-white/5 px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/10 focus:z-10">
          <span class="sr-only">Attachment</span>
          <PaperClipIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center bg-white/5 px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/10 focus:z-10">
          <span class="sr-only">Annotate</span>
          <ChatBubbleBottomCenterTextIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center rounded-r-md bg-white/5 px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/10 focus:z-10">
          <span class="sr-only">Delete</span>
          <TrashIcon class="size-5" aria-hidden="true" />
        </button>
      </span>
    </div>
    <div class="w-full border-t border-white/15" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/vue/20/solid'
</script>