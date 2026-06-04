const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
]

export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-white">Users</h1>
            <p className="mt-2 text-sm text-gray-300">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add user
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-gray-900">
              <tr>
                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-white">
                  Name
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-white/15" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-white/15" />
                </th>
                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell">
                  Title
                </th>
                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white md:table-cell">
                  Email
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Role
                </th>
                <th scope="col" className="py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.email}>
                  <td className="relative py-4 pr-3 text-sm font-medium text-white">
                    {person.name}
                    <div className="absolute right-full bottom-0 h-px w-screen bg-white/10" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-white/10" />
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-400 sm:table-cell">{person.title}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-400 md:table-cell">{person.email}</td>
                  <td className="px-3 py-4 text-sm text-gray-400">{person.role}</td>
                  <td className="py-4 pl-3 text-right text-sm font-medium">
                    <a href="#" className="text-indigo-400 hover:text-indigo-300">
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
