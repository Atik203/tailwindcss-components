const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

export default function Example() {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">Last 30 days</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-gray-800/75 px-4 py-5 shadow-sm inset-ring inset-ring-white/10 sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-400">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
