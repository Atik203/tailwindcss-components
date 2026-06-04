import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative flex items-center justify-between">
      <span className="bg-gray-900 pr-3 text-base font-semibold text-white">Projects</span>
      <div className="flex w-full items-center">
        <div aria-hidden="true" className="w-full border-t border-white/15" />
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          <PlusIcon aria-hidden="true" className="-mr-0.5 -ml-1 size-5 text-gray-400" />
          <span>Button text</span>
        </button>
      </div>
    </div>
  )
}
