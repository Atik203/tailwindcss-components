'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Leslie Alexander', online: true },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-white">Assigned to</Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white/5 py-1.5 pr-12 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronDownIcon className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        <ComboboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base outline -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {query.length > 0 && (
            <ComboboxOption
              value={{ id: null, name: query }}
              className="cursor-default px-3 py-2 text-gray-300 select-none data-focus:bg-indigo-500 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span
                  className="inline-block size-2 shrink-0 rounded-full border border-gray-600 in-aria-active:border-white/75"
                  aria-hidden="true"
                />
                <span className="ml-3 block truncate">{query}</span>
              </div>
            </ComboboxOption>
          )}
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="cursor-default px-3 py-2 text-gray-300 select-none data-focus:bg-indigo-500 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span
                  className={classNames(
                    'inline-block size-2 shrink-0 rounded-full',
                    person.online ? 'bg-green-500' : 'bg-white/20',
                  )}
                  aria-hidden="true"
                />
                <span className="ml-3 block truncate">
                  {person.name}
                  <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                </span>
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  )
}
