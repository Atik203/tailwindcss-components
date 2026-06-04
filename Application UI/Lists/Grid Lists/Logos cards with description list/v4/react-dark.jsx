import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]

export default function Example() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl outline -outline-offset-1 outline-white/10">
          <div className="flex items-center gap-x-4 border-b border-white/10 bg-gray-800/50 p-6">
            <img
              alt={client.name}
              src={client.imageUrl}
              className="size-12 flex-none rounded-lg bg-gray-700 object-cover ring-1 ring-white/10"
            />
            <div className="text-sm/6 font-medium text-white">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <MenuButton className="relative block text-gray-400 hover:text-white">
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-gray-800 py-2 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-white data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    View<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-white data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Edit<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-white/10 px-6 py-4 text-sm/6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-400">Last invoice</dt>
              <dd className="text-gray-300">
                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-400">Amount</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-white">{client.lastInvoice.amount}</div>
                {client.lastInvoice.status == 'Paid' ? (
                  <div className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-green-500/10 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
                {client.lastInvoice.status == 'Withdraw' ? (
                  <div className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/10 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
                {client.lastInvoice.status == 'Overdue' ? (
                  <div className="rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-red-500/10 ring-inset">
                    {client.lastInvoice.status}
                  </div>
                ) : null}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}
