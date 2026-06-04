const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-800/50 outline outline-1 -outline-offset-1 outline-white/10 sm:rounded-md">
      <ul role="list" className="divide-y divide-white/10">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-4 sm:px-6">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
