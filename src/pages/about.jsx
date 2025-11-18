import Image from "next/image";
import Link from "next/link";

const bioHighlights = [
  "Talking drum virtuoso with 15+ global tours",
  "Founder of Thread & Clay artisan studio",
  "Residencies with BBC, Boiler Room, Global Citizen",
  "Workshops for conservatories & cultural labs",
];

const galleryImages = [
  { src: "/images/pottery-back2.jpg", alt: "Studio session" },
  { src: "/images/woven-prod9.jpg", alt: "Textile detail" },
  { src: "/images/paint-prod5.jpg", alt: "Performance close-up" },
];

export default function About() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero / Intro */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/background-paintings.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">About Thread & Clay</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Modern storytelling through ancestral rhythm.</h1>
          <p className="text-base text-white/80 md:text-lg">
            Ayo Ogunlana is a talking drummer, art director, and curator crafting cinematic performances and tactile studio drops that travel between Lagos, London, and global stages.
          </p>
        </div>
      </section>

      {/* Drummer Bio */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Artist Bio</p>
            <h2 className="text-3xl font-semibold">From palace courtyards to world tours.</h2>
            <p className="text-base text-gray-600">
              Raised in Osogbo shadowing royal drummers, Ayo honed tonal storytelling before scoring for Afrobeats headliners and fashion houses. Thread & Clay merges those roots with gallery-ready objects, remote studio sessions, and residencies that celebrate Yoruba call-and-response culture.
            </p>
            <div className="flex flex-wrap gap-3">
              {bioHighlights.map((item) => (
                <span key={item} className="rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-80 overflow-hidden rounded-[40px] border border-white shadow-xl">
              <Image src="/images/pottry-back.jpg" alt="Ayo Ogunlana portrait" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Clients & collaborators</p>
              <p className="mt-2 text-sm text-gray-700">BBC · Boiler Room · Global Citizen · National Theatre · Afropunk · V&A Museum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Studio Memories</p>
              <h2 className="text-3xl font-semibold">Craft, residencies, and touring moments.</h2>
            </div>
            <p className="max-w-xl text-sm text-gray-600">Captured during residencies in Lagos, Berlin, and London—each image is paired with soundscapes and tactile drops.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={image.src} className={`rounded-[32px] border border-gray-200 bg-[#fafafa] p-4 shadow-sm ${index === 1 ? "md:translate-y-10" : ""}`}>
                <div className="relative h-64 overflow-hidden rounded-[24px]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
                <p className="mt-4 text-sm text-gray-600">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t-2 border-[rgba(123,36,36,0.92)] bg-[#fdf9f6] px-6 py-16 text-center lg:px-12">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Collaborate</p>
          <h2 className="text-3xl font-semibold">Plan a residency, media commission, or limited drop.</h2>
          <p className="text-sm text-gray-600">Share your brief and timeline—we respond within 24 hours with concept decks, technical riders, and sample media assets.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/bookings"
              className="rounded-full bg-[rgba(123,36,36,0.92)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
            >
              Request booking
            </Link>
            <Link
              href="/media"
              className="rounded-full border border-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-gray-100"
            >
              View media kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
