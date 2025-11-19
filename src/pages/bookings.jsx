// Bookings form page collects inbound inquiries for residencies or shows.
export default function BookingsPage() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero describing the booking process */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/background-paintings.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Bookings</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Plan a residency, show, or workshop.</h1>
          <p className="text-base text-white/80 md:text-lg">
            Share your brief, desired dates, and venue details. We respond within 24 hours with availability, technical riders, and sample media assets.
          </p>
        </div>
      </section>

      {/* Form container */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-gray-200 bg-white p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Booking Request</p>
          <form className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-gray-600">
                Name
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none"
                  placeholder="Your full name"
                />
              </label>
              <label className="text-sm text-gray-600">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none"
                  placeholder="name@email.com"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-gray-600">
                Phone number
                <input
                  type="tel"
                  className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none"
                  placeholder="+44 207 000 0000"
                />
              </label>
              <label className="text-sm text-gray-600">
                Event date
                <input type="date" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none" />
              </label>
            </div>
            <label className="text-sm text-gray-600">
              Event type / category
              <select className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none">
                <option>Immersive stage show</option>
                <option>Residency / workshop</option>
                <option>Studio session / recording</option>
                <option>Gallery or film collaboration</option>
              </select>
            </label>
            <label className="text-sm text-gray-600">
              Message / details
              <textarea
                rows={5}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none"
                placeholder="Share format, collaborators, references, or technical needs."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
            >
              Submit booking request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
