const people = [
  { id: 1, name: 'Annette Black', selected: true },
  { id: 2, name: 'Cody Fisher', selected: true },
  { id: 3, name: 'Courtney Henry', selected: false },
  { id: 4, name: 'Kathryn Murphy', selected: false },
  { id: 5, name: 'Theresa Webb', selected: false },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-base font-semibold text-white">Members</legend>
      <div className="mt-4 divide-y divide-white/10 border-t border-b border-white/10">
        {people.map((person, personIdx) => (
          <div key={personIdx} className="relative flex gap-3 py-4">
            <div className="min-w-0 flex-1 text-sm/6">
              <label htmlFor={`person-${person.id}`} className="font-medium text-white select-none">
                {person.name}
              </label>
            </div>
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  defaultChecked={person.selected}
                  id={`person-${person.id}`}
                  name={`person-${person.id}`}
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 indeterminate:border-indigo-500 indeterminate:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:checked:bg-white/10 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
