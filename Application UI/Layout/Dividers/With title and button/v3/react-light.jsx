import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative flex items-center justify-between">
      <span className="bg-white pr-3 text-base font-semibold text-gray-900">Projects</span>
      <div className="flex w-full items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-300" />
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon aria-hidden="true" className="-ml-1 -mr-0.5 size-5 text-gray-400" />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
