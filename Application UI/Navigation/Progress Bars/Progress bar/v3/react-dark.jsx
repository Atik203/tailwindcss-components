export default function Example() {
  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-white">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-white/10">
          <div style={{ width: '37.5%' }} className="h-2 rounded-full bg-indigo-500" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-400 sm:grid">
          <div className="text-indigo-400">Copying files</div>
          <div className="text-center text-indigo-400">Migrating database</div>
          <div className="text-center">Compiling assets</div>
          <div className="text-right">Deployed</div>
        </div>
      </div>
    </div>
  )
}
