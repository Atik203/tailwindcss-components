export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-white">
        Company website
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white/5 pl-3 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <div className="shrink-0 select-none text-base text-gray-400 sm:text-sm/6">https://</div>
          <input
            id="company-website"
            name="company-website"
            type="text"
            placeholder="www.example.com"
            className="block min-w-0 grow bg-transparent py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}
