export default function Example() {
  return (
    <div className="bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-white">Manage subscription</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
            nam.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Change plan
          </button>
        </div>
      </div>
    </div>
  )
}
