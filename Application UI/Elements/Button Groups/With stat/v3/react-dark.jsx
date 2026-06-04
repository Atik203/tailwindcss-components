import { BookmarkIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md">
      <button
        type="button"
        className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        <BookmarkIcon aria-hidden="true" className="-ml-0.5 size-5 text-gray-500" />
        Bookmark
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        12k
      </button>
    </span>
  )
}
