export default function Example() {
  return (
    <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
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
  )
}
