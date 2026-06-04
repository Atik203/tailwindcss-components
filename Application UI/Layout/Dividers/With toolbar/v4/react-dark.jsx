import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-white/15" />
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white/5 px-3 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/10 focus:z-10"
          >
            <span className="sr-only">Edit</span>
            <PencilIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white/5 px-3 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/10 focus:z-10"
          >
            <span className="sr-only">Attachment</span>
            <PaperClipIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center bg-white/5 px-3 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/10 focus:z-10"
          >
            <span className="sr-only">Annotate</span>
            <ChatBubbleBottomCenterTextIcon aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-md bg-white/5 px-3 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/10 focus:z-10"
          >
            <span className="sr-only">Delete</span>
            <TrashIcon aria-hidden="true" className="size-5" />
          </button>
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-white/15" />
    </div>
  )
}
