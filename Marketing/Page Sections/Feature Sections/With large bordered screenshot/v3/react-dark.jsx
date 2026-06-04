export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="max-w-2xl text-pretty text-5xl font-semibold tracking-tight text-white sm:text-balance sm:text-6xl">
          Everything you need to deploy your app
        </p>
        <div className="relative mt-16 aspect-[2432/1442] h-[36rem] sm:h-auto sm:w-[calc(theme(maxWidth.7xl)-theme(spacing.16))]">
          <div className="absolute -inset-2 rounded-[calc(theme(borderRadius.xl)+theme(spacing.2))] bg-white/[0.025] shadow-sm ring-1 ring-white/10" />
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            className="h-full rounded-xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  )
}
