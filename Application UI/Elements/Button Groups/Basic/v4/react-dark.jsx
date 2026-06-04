export default function Example() {
  return (
    <span className="isolate inline-flex rounded-md">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        Years
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        Months
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-gray-700 hover:bg-white/20 focus:z-10"
      >
        Days
      </button>
    </span>
  )
}
