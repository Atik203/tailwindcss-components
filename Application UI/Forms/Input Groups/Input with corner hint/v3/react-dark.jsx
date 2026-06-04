export default function Example() {
  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor="email" className="block text-sm/6 font-medium text-white">
          Email
        </label>
        <span id="email-optional" className="text-sm/6 text-gray-400">
          Optional
        </span>
      </div>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="email-optional"
          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
