export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr_auto_1fr] bg-gray-900 lg:grid-cols-[max(50%,36rem)_1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-10 w-auto sm:h-12"
            />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base/8 font-semibold text-indigo-400">404</p>
            <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Page not found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <a href="#" className="text-sm/7 font-semibold text-indigo-400">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-white/10 bg-gray-800/50 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm/7 text-gray-400 lg:px-8">
              <a href="#">Contact support</a>
              <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 fill-gray-600">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <a href="#">Status</a>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
