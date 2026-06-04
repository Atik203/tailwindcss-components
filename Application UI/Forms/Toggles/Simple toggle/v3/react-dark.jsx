export default function Example() {
  return (
    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-white/5 p-0.5 outline-offset-2 outline-indigo-500 ring-1 ring-inset ring-white/10 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
      <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
      <input
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 size-full appearance-none focus:outline-none"
      />
    </div>
  )
}
