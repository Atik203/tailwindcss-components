export default function Example() {
  return (
    <div className="relative">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block rounded-lg bg-gray-900 px-1 text-xs font-medium text-white"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Jane Smith"
        className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
      />
    </div>
  )
}
