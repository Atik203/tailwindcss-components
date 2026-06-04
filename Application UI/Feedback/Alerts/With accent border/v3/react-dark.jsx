import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-l-4 border-yellow-500 bg-yellow-500/10 p-4">
      <div className="flex">
        <div className="shrink-0">
          <ExclamationTriangleIcon aria-hidden="true" className="size-5 text-yellow-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-300">
            You have no credits left.{' '}
            <a href="#" className="font-medium text-yellow-300 underline hover:text-yellow-200">
              Upgrade your account to add more credits.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
