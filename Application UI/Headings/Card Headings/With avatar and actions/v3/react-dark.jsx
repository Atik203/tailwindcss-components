import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-white/10 px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-12 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold text-white">Tom Cook</h3>
              <p className="text-sm text-gray-400">
                <a href="#">@tom_cook</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20"
          >
            <PhoneIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5 text-gray-400" />
            <span>Phone</span>
          </button>
          <button
            type="button"
            className="relative ml-3 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20"
          >
            <EnvelopeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5 text-gray-400" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}
