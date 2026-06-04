const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <div className="overflow-hidden rounded-md bg-gray-800/50 outline outline-1 -outline-offset-0 outline-white/10">
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
