export default function Example() {
  return (
    <div>
      <label htmlFor="name" className="block text-sm/6 font-medium text-white">
        Name
      </label>
      <div className="relative mt-2">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="peer block w-full bg-white/5 px-3 py-1.5 text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-white/20 peer-focus:border-t-2 peer-focus:border-indigo-500"
        />
      </div>
    </div>
  )
}
