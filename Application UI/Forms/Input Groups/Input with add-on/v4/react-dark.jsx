export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-white">
        Company website
      </label>
      <div className="mt-2 flex">
        <div className="flex shrink-0 items-center rounded-l-md bg-white/5 px-3 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-700 sm:text-sm/6">
          https://
        </div>
        <input
          id="company-website"
          name="company-website"
          type="text"
          placeholder="www.example.com"
          className="-ml-px block w-full grow rounded-r-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
