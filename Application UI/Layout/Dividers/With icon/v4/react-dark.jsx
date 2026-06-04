import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-white/15" />
      <div className="relative flex justify-center">
        <span className="bg-gray-900 px-2 text-gray-400">
          <PlusIcon aria-hidden="true" className="size-5 text-gray-400" />
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-white/15" />
    </div>
  )
}
