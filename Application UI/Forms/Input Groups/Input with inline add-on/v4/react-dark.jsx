export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-white">
        Company website
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">https://</div>
          <input
            id="company-website"
            name="company-website"
            type="text"
            placeholder="www.example.com"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}
