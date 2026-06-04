export default function Example() {
  return (
    <div className="divide-white/10 overflow-hidden rounded-lg bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="bg-gray-800/50 px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  )
}
