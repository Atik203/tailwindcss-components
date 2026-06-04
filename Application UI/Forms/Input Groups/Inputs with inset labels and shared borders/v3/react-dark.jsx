export default function Example() {
  return (
    <div className="-space-y-px">
      <div className="rounded-t-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-700 focus-within:relative focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
        <label htmlFor="name" className="block text-xs font-medium text-gray-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
        />
      </div>
      <div className="rounded-b-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-gray-700 focus-within:relative focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
        <label htmlFor="job-title" className="block text-xs font-medium text-gray-200">
          Job title
        </label>
        <input
          id="job-title"
          name="job-title"
          type="text"
          placeholder="Head of Tomfoolery"
          className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
