export default function Example() {
  return (
    <div>
      <label htmlFor="search" className="block text-sm/6 font-medium text-white">
        Quick search
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <input
            id="search"
            name="search"
            type="text"
            className="block min-w-0 grow bg-transparent px-3 py-1.5 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
          />
          <div className="flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-white/10 px-1 font-sans text-xs text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}
