const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden bg-gray-800/50 px-4 py-4 outline outline-1 -outline-offset-1 outline-white/10 sm:rounded-md sm:px-6"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
