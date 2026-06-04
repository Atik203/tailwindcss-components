import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'complete' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-indigo-500" />
                </div>
                <a
                  href="#"
                  className="relative flex size-8 items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-400"
                >
                  <CheckIcon aria-hidden="true" className="size-5 text-white" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-white/15" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className="relative flex size-8 items-center justify-center rounded-full border-2 border-indigo-500 bg-gray-900"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-indigo-500" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-white/15" />
                </div>
                <a
                  href="#"
                  className="group relative flex size-8 items-center justify-center rounded-full border-2 border-white/15 bg-gray-900 hover:border-white/25"
                >
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-transparent group-hover:bg-white/15" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
