import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-between gap-x-8 lg:mx-0">
        <div className="flex items-center gap-x-6">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg"
            className="size-16 flex-none rounded-full outline outline-white/10"
          />
          <h1>
            <div className="text-sm/6 text-gray-400">
              Invoice <span className="text-gray-300">#00011</span>
            </div>
            <div className="mt-1 text-base font-semibold text-white">Tuple, Inc</div>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <button type="button" className="hidden text-sm/6 font-semibold text-white sm:block">
            Copy URL
          </button>
          <a href="#" className="hidden text-sm/6 font-semibold text-white sm:block">
            Edit
          </a>
          <a
            href="#"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Send
          </a>

          <Menu as="div" className="relative sm:hidden">
            <MenuButton className="relative block">
              <span className="absolute -inset-3" />
              <span className="sr-only">More</span>
              <EllipsisVerticalIcon aria-hidden="true" className="size-5 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-gray-800 py-2 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <button
                  type="button"
                  className="block w-full px-3 py-1 text-left text-sm/6 text-white data-focus:bg-white/5 data-focus:outline-hidden"
                >
                  Copy URL
                </button>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-white data-focus:bg-white/5 data-focus:outline-hidden"
                >
                  Edit
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
