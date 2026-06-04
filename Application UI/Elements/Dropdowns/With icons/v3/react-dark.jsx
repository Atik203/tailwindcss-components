import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">
        Options
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-500" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <PencilSquareIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white"
              />
              Edit
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <ArchiveBoxIcon aria-hidden="true" className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white" />
              Archive
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white"
              />
              Move
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <UserPlusIcon aria-hidden="true" className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white" />
              Share
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <HeartIcon aria-hidden="true" className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white" />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
            >
              <TrashIcon aria-hidden="true" className="mr-3 size-5 text-gray-500 group-data-[focus]:text-white" />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
