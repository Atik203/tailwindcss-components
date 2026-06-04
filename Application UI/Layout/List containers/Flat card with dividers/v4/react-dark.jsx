const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-gray-900">
      <ul role="list" className="divide-y divide-white/10">
        {items.map((item) => (
          <li key={item.id} className="px-6 py-4">
            {/* Your content */}
          </li>
        ))}
      </ul>
    </div>
  )
}
