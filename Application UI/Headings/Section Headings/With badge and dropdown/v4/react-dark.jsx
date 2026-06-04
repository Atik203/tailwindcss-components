import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="border-b border-white/10 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-base font-semibold text-white">
            Full-Stack Developer
          </h1>
          <p className="mt-1 truncate text-sm text-gray-400">Checkout and Payments Team</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:shrink-0 sm:justify-start">
          <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/10">
            Open
          </span>
          <div className="-my-2 ml-3 inline-block text-left">
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center rounded-full p-2 text-gray-400 hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-indigo-500">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="flex justify-between px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <span>Edit</span>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="flex justify-between px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <span>Duplicate</span>
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="flex w-full justify-between px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <span>Archive</span>
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}
