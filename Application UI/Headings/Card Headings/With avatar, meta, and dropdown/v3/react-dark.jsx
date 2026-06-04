import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-10 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">
            <a href="#" className="hover:underline">
              Chelsea Hagon
            </a>
          </p>
          <p className="text-sm text-gray-400">
            <a href="#" className="hover:underline">
              December 9 at 11:43 AM
            </a>
          </p>
        </div>
        <div className="flex shrink-0 self-center">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="relative flex items-center rounded-full text-gray-400 outline-offset-[6px] hover:text-white">
              <span className="absolute -inset-2" />
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-200 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    <StarIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
                    <span>Add to favorites</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-200 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    <CodeBracketIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
                    <span>Embed</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-200 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    <FlagIcon aria-hidden="true" className="mr-3 size-5 text-gray-400" />
                    <span>Report content</span>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  )
}
