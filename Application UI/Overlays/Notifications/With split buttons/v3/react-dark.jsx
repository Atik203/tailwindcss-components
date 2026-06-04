'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Example() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto flex w-full max-w-md divide-x divide-white/10 rounded-lg bg-gray-800 shadow-lg outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-white">Receive notifications</p>
                  <p className="mt-1 text-sm text-gray-400">Notifications may include alerts, sounds, and badges.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-white/10">
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg px-4 py-3 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:z-10 focus:outline focus:outline-2 focus:outline-indigo-400"
                    >
                      Reply
                    </button>
                  </div>
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false)
                      }}
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg px-4 py-3 text-sm font-medium text-gray-300 hover:text-white focus:outline focus:outline-2 focus:outline-indigo-400"
                    >
                      Don't allow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
