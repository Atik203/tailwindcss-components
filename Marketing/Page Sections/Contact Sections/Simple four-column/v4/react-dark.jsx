export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Our offices</h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-500 pl-6 font-semibold text-white">Los Angeles</h3>
            <address className="border-l border-white/10 pt-2 pl-6 text-gray-400 not-italic">
              <p>4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-500 pl-6 font-semibold text-white">New York</h3>
            <address className="border-l border-white/10 pt-2 pl-6 text-gray-400 not-italic">
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-500 pl-6 font-semibold text-white">Toronto</h3>
            <address className="border-l border-white/10 pt-2 pl-6 text-gray-400 not-italic">
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-500 pl-6 font-semibold text-white">London</h3>
            <address className="border-l border-white/10 pt-2 pl-6 text-gray-400 not-italic">
              <p>114 Cobble Lane</p>
              <p>London N1 2EF</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}
