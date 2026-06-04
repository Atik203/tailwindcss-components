import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
  { id: '01', name: 'Job details', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', href: '#', status: 'current' },
  { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="divide-y divide-white/15 rounded-md border border-white/15 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.status === 'complete' ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 group-hover:bg-indigo-400">
                    <CheckIcon aria-hidden="true" className="size-6 text-white" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-white">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} aria-current="step" className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-400">
                  <span className="text-indigo-400">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-400">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/15 group-hover:border-white/25">
                    <span className="text-gray-400 group-hover:text-white">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-400 group-hover:text-white">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div aria-hidden="true" className="absolute right-0 top-0 hidden h-full w-5 md:block">
                  <svg fill="none" viewBox="0 0 22 80" preserveAspectRatio="none" className="size-full text-white/15">
                    <path
                      d="M0 -2L20 40L0 82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
