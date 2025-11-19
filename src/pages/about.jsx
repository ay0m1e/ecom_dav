import Image from "next/image";
import Link from "next/link";

// Quick badges that summarize David's credentials.
const bioHighlights = [
  "Talking Drum Performer with 15+ major stage appearances",
  "Cultural educator for young learners & global audiences",
  "Advocate for Yoruba storytelling and heritage preservation",
  "Workshop host for schools, churches, and cultural spaces",
];

// Image set powering the gallery near the bottom of the page.
const galleryImages = [
  { src: "/images/pottery-back2.jpg", alt: "Studio session" },
  { src: "/images/woven-prod9.jpg", alt: "Textile detail" },
  { src: "/images/paint-prod5.jpg", alt: "Performance close-up" },
];

// About page walks through the artist bio, gallery proof points, and CTA.
export default function About() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero / Intro */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/background-paintings.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">About David</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Modern storytelling through ancestral rhythm.</h1>
          <p className="text-base text-white/80 md:text-lg">
            David Oderinde is a talking-drum performer and cultural educator crafting rhythmic experiences that honour Yoruba heritage while speaking to contemporary audiences across Nigeria.
          </p>
        </div>
      </section>

      {/* Drummer Bio detailing David's background */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Artist Bio</p>
            <h2 className="text-3xl font-semibold">From childhood rhythms to nationwide stages.</h2>
            <p className="text-base text-gray-600">
              Born in Nigeria as the last child in a creative family, 
              David began playing the talking drum at just three years old. 
              He grew up immersed in Yoruba rhythm, studying master drummers and 
              performing at local gatherings long before he could read sheet music. 
              Over the years, he refined that early spark into a purposeful practice — 
              teaching, performing, 
              and championing the drum as a living symbol of African identity.
            </p>
            <p>
              His work spans major gospel and cultural platforms, including Marathon Messiah’s Praise (RCCG) and Newsong (TCCAN), 
              where he blends traditional techniques with contemporary stage presence. 
              Through school programmes, workshops, and international collaborations, 
              David promotes a future where heritage isn’t archived — it’s activated.
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
              <p className="mt-2 text-sm text-gray-700">RCCG Marathon Messiah’s Praise · TCCAN Newsong · Cultural Schools · Community Arts Projects · Youth Music Academies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Showcase showing studio work and touring moments */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Studio Memories</p>
              <h2 className="text-3xl font-semibold">Craft, residencies, and touring moments.</h2>
            </div>
            <p className="max-w-xl text-sm text-gray-600">Captured across churches, cultural festivals, rehearsal rooms, and teaching spaces — each moment reflects David’s commitment to preserving Yoruba rhythm while inspiring the next generation.</p>
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

      {/* Call to Action nudging partners to collaborate */}
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
