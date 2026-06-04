import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-yellow-500/10 p-4 outline outline-yellow-500/15">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="size-5 text-yellow-300" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-100">Attention needed</h3>
          <div className="mt-2 text-sm text-yellow-100/80">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
              totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
