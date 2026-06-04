import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white/5 pl-3 outline outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
          <div className="shrink-0 select-none text-base text-gray-400 sm:text-sm/6">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block min-w-0 grow bg-gray-800 py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pl-3 pr-7 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
