import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white/10 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white/10 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon aria-hidden="true" className="size-5" />
      </button>
    </span>
  )
}
