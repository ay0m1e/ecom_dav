import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#footer" },
];

const shopDropdown = [
  { label: "Paintings", href: "/shop/paintings" },
  { label: "Pottery", href: "/shop/pottery" },
  { label: "Weaving", href: "/shop/weaving" },
];

const heroStats = [
  { label: "Performances", value: "150+" },
  { label: "Students Trained", value: "50+" },
  { label: "Workshops", value: "45" },
  { label: "Cultural Residencies", value: "9" },
];

const bestsellers = [
  {
    id: "vase",
    name: "Jug Water Carrier",
    price: "£189",
    image: "/images/paint-prod1.jpg",
  },
  {
    id: "monalisa",
    name: "The Monalisa",
    price: "£1,000,000",
    image: "/images/paint-prod3.jpg",
  },
  {
    id: "purse",
    name: "Hand Crafted Purse",
    price: "£59",
    image: "/images/paint-prod4.jpg",
  },
  {
    id: "chair",
    name: "Handmade Luxury Chair",
    price: "£359",
    image: "/images/paint-prod5.jpg",
  },
];

const footerColumns = [
  {
    title: "Studio",
    items: ["Thread & Clay", "Lagos · London", "Est. 2012"],
  },
  {
    title: "Shop",
    items: ["Paintings", "Pottery", "Weaving", "Gift Cards"],
  },
  {
    title: "Visit",
    items: ["Rush Green Campus", "Dagenham Rd, United Kingdom", "138 Waterville Rd, Avon"],
  },
  {
    title: "Support",
    items: ["Shipping & Returns", "Terms & Policy", "Press"]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

      <main>
        <section
          className="relative isolate flex min-h-[75vh] flex-col items-center justify-center gap-6 overflow-hidden px-6 py-20 text-center text-white md:px-12"
        >
          <div className="absolute inset-0 bg-[url('/images/background-paintings.jpg')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Talking Drum Portfolio</p>
            <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">
              Modern storytelling through Yoruba percussion & cultural heritage.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              Oderinde David Oluwakayode brings cinematic talking-drum performance, cultural education, 
              and heritage-rooted sound design to stages, studios, and festivals across Nigeria and beyond.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#bestsellers"
                className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-white"
              >
                View Performances
              </Link>
              <Link
                href="/bookings"
                className="rounded-full border border-white/70 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Book an Appearance
              </Link>
            </div>
          </div>
          <dl className="relative z-10 grid w-full max-w-3xl grid-cols-2 gap-6 rounded-3xl bg-white/10 p-6 text-left text-white backdrop-blur md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-widest text-white/70">{stat.label}</dt>
                <dd className="text-2xl font-semibold md:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="story" className="px-6 py-16 lg:px-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Studio Story</p>
              <h2 className="text-3xl font-semibold text-gray-900">
                Heritage drums meet gallery-ready craftsmanship.
              </h2>
              <p className="text-base text-gray-600">
                Inspired by palatial Yoruba drummers and contemporary design labs, the studio curates instruments,
                textiles, and custom shows with a focus on warmth, tactility, and layered storytelling. Each release is
                produced in micro batches and finished by hand in Lagos and London.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-3xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500">Materials</p>
                  <p className="text-sm font-semibold text-gray-900">Shea leather · Indigo dye · Bronze</p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500">Clients</p>
                  <p className="text-sm font-semibold text-gray-900">Boiler Room · Global Citizen · V&A</p>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-1/2">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white shadow-xl">
                <Image
                  src="/images/pottery-back2.jpg"
                  alt="Artisan shaping a talking drum"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
                <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Residency</p>
                <p className="text-lg font-semibold text-gray-900">National Theatre, London</p>
                <p className="text-sm text-gray-600">Summer 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section id="bestsellers" className="bg-white px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Bestsellers</p>
                <h2 className="mt-3 text-3xl font-semibold">Limited art objects & signature drums.</h2>
              </div>
              <Link href="/shop" className="text-sm font-semibold text-[rgba(123,36,36,0.92)]">
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bestsellers.map((product) => (
                <article key={product.id} className="flex flex-col rounded-[30px] border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm">
                  <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                    <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <span className="font-semibold text-[rgba(123,36,36,0.92)]">{product.price}</span>
                  </div>
                  <button
                    type="button"
                    className="mt-6 rounded-full bg-[rgba(123,36,36,0.92)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Add to cart
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t-2 border-[rgba(123,36,36,0.92)] bg-white">
          <iframe
            className="h-[420px] w-full object-cover opacity-60"
            src="https://player.vimeo.com/video/1122500526?autoplay=1&muted=1&loop=1&controls=0"
            title="Studio film"
            allow="autoplay; fullscreen; picture-in-picture"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
            <h3 className="text-2xl font-semibold md:text-3xl">Find the art that speaks to you.</h3>
            <p className="max-w-xl text-sm text-white/80">
              Residency films, live performance clips, and studio walkthroughs updated monthly for curators and art
              directors.
            </p>
            <Link
              href="/media"
              className="pointer-events-auto rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-white"
            >
              Watch media reel
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
