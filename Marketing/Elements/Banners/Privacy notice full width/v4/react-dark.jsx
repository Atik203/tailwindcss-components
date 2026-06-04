export default function Example() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 border-t border-white/10 bg-gray-800 p-6 md:flex-row md:items-center lg:px-8">
      <p className="max-w-4xl text-sm/6 text-white">
        This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
        consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious.
        See our{' '}
        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
          cookie policy
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          className="rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-white/10 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Accept all
        </button>
        <button type="button" className="text-sm/6 font-semibold text-gray-300 hover:text-white">
          Reject all
        </button>
      </div>
    </div>
  )
}
