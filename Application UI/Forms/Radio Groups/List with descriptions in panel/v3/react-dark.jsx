const settings = [
  { id: 'public', name: 'Public access', description: 'This project would be available to anyone who has the link' },
  {
    id: 'private-to-project-members',
    name: 'Private to project members',
    description: 'Only members of this project would be able to access',
  },
  { id: 'private-to-you', name: 'Private to you', description: 'You are the only one able to access this project' },
]

export default function Example() {
  return (
    <fieldset aria-label="Privacy setting" className="-space-y-px rounded-md bg-gray-800/50">
      {settings.map((setting) => (
        <label
          key={setting.id}
          aria-label={setting.name}
          aria-description={setting.description}
          className="group flex border border-gray-700 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md focus:outline-none has-[:checked]:relative has-[:checked]:border-indigo-800 has-[:checked]:bg-indigo-500/10"
        >
          <input
            defaultValue={setting.id}
            defaultChecked={setting.id === 'public'}
            name="privacy-setting"
            type="radio"
            className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
          />
          <span className="ml-3 flex flex-col">
            <span className="block text-sm font-medium text-white group-has-[:checked]:text-indigo-300">
              {setting.name}
            </span>
            <span className="block text-sm text-gray-400 group-has-[:checked]:text-indigo-300/75">
              {setting.description}
            </span>
          </span>
        </label>
      ))}
    </fieldset>
  )
}
