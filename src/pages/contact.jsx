// Quick lists that populate the contact cards on the page.
const contactLinks = [
  {
    title: "Studio",
    lines: ["Thread & Clay", "Rush Green Campus, Dagenham", "Lagos Studio · Victoria Island"],
  },
  {
    title: "Email",
    lines: ["hello@threadandclay.com", "press@threadandclay.com"],
  },
  {
    title: "Phone",
    lines: ["UK +44 20 7123 0000", "NG +234 809 000 0000"],
  },
];

// Social handles that appear under the "Join the journey" CTA.
const socials = [
  { name: "Instagram", handle: "@threadandclay", href: "#" },
  { name: "TikTok", handle: "@talkingdrummer", href: "#" },
  { name: "YouTube", handle: "Thread & Clay Studio", href: "#" },
];

// Contact page combines hero, inquiry form, and supplemental studio info.
export default function ContactPage() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero describing communication goals */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/background-paintings.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Contact</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Let’s plan your next experience.</h1>
          <p className="text-base text-white/80 md:text-lg">Reach out for commissions, residencies, collaborations, or press materials.</p>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-gray-200 bg-white p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Send a note</p>
          <form className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-gray-600">
                Name
                <input className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none" placeholder="Your full name" />
              </label>
              <label className="text-sm text-gray-600">
                Email
                <input type="email" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none" placeholder="name@email.com" />
              </label>
            </div>
            <label className="text-sm text-gray-600">
              Subject
              <input className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none" placeholder="How can we collaborate?" />
            </label>
            <label className="text-sm text-gray-600">
              Message
              <textarea rows={5} className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none" placeholder="Share context, dates, or goals." />
            </label>
            <button type="submit" className="w-full rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black">
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Supplemental studio + social details */}
      <section className="bg-white px-6 pb-16 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Studio Details</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {contactLinks.map((info) => (
                <div key={info.title} className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">{info.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {info.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Join the journey</p>
            <div className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-6 shadow-sm">
              <p className="text-sm text-gray-600">Follow for live session drops, behind-the-scenes clips, and residency announcements.</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {socials.map((social) => (
                  <li key={social.name} className="flex items-center justify-between">
                    <span>{social.name}</span>
                    <a href={social.href} className="font-semibold text-[rgba(123,36,36,0.92)]">
                      {social.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
