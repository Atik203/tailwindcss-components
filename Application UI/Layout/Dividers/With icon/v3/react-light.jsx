import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex items-center">
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <PlusIcon aria-hidden="true" className="size-5 text-gray-500" />
        </span>
      </div>
      <div aria-hidden="true" className="w-full border-t border-gray-300" />
    </div>
  )
}
