import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="query" className="block text-sm/6 font-medium text-white">
        Search candidates
      </label>
      <div className="mt-2 flex">
        <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
          <input
            id="query"
            name="query"
            type="text"
            placeholder="John Smith"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-white/5 py-1.5 pr-3 pl-10 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pl-9 sm:text-sm/6"
          />
          <UsersIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-500 sm:size-4"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white outline-1 -outline-offset-1 outline-gray-700 hover:bg-white/20 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        >
          <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 size-4 text-gray-400" />
          Sort
        </button>
      </div>
    </div>
  )
}
