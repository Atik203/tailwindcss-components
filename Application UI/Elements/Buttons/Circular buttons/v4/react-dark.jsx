import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-indigo-500 p-1 text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-500 p-1.5 text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
    </>
  )
}
