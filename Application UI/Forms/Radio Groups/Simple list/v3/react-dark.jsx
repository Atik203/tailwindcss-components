const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm/6 font-semibold text-white">Notifications</legend>
      <p className="mt-1 text-sm/6 text-gray-400">How do you prefer to receive notifications?</p>
      <div className="mt-6 space-y-6">
        {notificationMethods.map((notificationMethod) => (
          <div key={notificationMethod.id} className="flex items-center">
            <input
              defaultChecked={notificationMethod.id === 'email'}
              id={notificationMethod.id}
              name="notification-method"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
            />
            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm/6 font-medium text-white">
              {notificationMethod.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
