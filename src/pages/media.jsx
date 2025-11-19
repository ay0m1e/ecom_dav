import Link from "next/link";
import Image from "next/image";

// Featured video embeds used in the hero grid.
const videoFeatures = [
  {
    id: "residency",
    title: "Residency Film",
    platform: "YouTube",
    src: "https://www.youtube.com/embed/8Msa3Vx-_To?si=V3QkLQhrWc5cfhf5",
    summary: "Documentary short that follows the National Theatre residency build and opening performance.",
  },
  {
    id: "festival",
    title: "Festival Recap",
    platform: "YouTube",
    src: "https://www.youtube.com/embed/5qap5aO4i9A",
    summary: "Live improvisation featuring choir stems, synth bass, and responsive LED sculptures.",
  },
];

// Photo tiles for the mid-page gallery.
const photoStories = [
  { id: "atelier", image: "/images/david_photo3.jpg", caption: "Atelier build week · Lagos" },
  { id: "gallery", image: "/images/david_photo4.jpg", caption: "Gallery install · Shoreditch" },
  { id: "clinic", image: "/images/david_photo5.jpg", caption: "Percussion clinic · Montreal" },
  { id: "textile", image: "/images/david_photo6.jpg", caption: "Textile dye baths · Ogun State" },
  { id: "stage", image: "/images/david_photo7.jpg", caption: "Stage rigging · Berlin" },
  { id: "portrait", image: "/images/david.jpg", caption: "Press portrait · Lagos Island" },
];

// Downloadable audio assets displayed on cards.
const audioDrops = [
  {
    title: "Talking Drum Stem Pack",
    length: "24-bit · 12 tracks",
    description: "Phase-aligned stems captured through analog compressors with cue sheets for DAW sessions.",
  },
  {
    title: "Residency Soundscape",
    length: "15 min · Atmos mix",
    description: "Immersive audio bed interlacing Yoruba proverbs, ambient room tones, and synth swells.",
  },
  {
    title: "Workshop Toolkit",
    length: "40 loops · BPM tagged",
    description: "Loop library for education partners featuring polyrhythms and call-and-response cues.",
  },
];

// Media page centralizes video, photography, audio drops, and CTAs.
export default function Media() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/tkdrum_1.jpg')] bg-cover bg-[position:center_70%]" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Media Library</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Films, live sessions, and gallery drops.</h1>
          <p className="text-base text-white/80 md:text-lg">
            Download-ready press assets, stage plot walk-throughs, and documentary snippets curated for music directors,
            curators, and brand partners.
          </p>
        </div>
      </section>

      {/* Feature Films with embedded players */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Featured Films</p>
              <h2 className="text-3xl font-semibold">Watch the latest commissions.</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {videoFeatures.map((video) => (
              <article key={video.id} className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
                <div className="aspect-video overflow-hidden rounded-3xl border border-gray-100">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">{video.platform}</p>
                  <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Stories grid */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Photo Stories</p>
              <h2 className="text-3xl font-semibold">Textures, stages, and patrons.</h2>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-[rgba(123,36,36,0.92)]">
              Request press kit →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photoStories.map((story) => (
              <figure key={story.id} className="rounded-[30px] border border-gray-200 bg-[#fafafa] shadow-sm">
                <div className="relative h-60 overflow-hidden rounded-t-[30px]">
                  <Image src={story.image} alt={story.caption} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="px-4 py-4 text-sm text-gray-700">{story.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Drops catalog */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Audio Drops</p>
              <h2 className="text-3xl font-semibold">Stem packs & immersive mixes.</h2>
            </div>
            <p className="max-w-xl text-sm text-gray-600">Ready-to-sync stems for scoring, advertising, VR, and experiential pop-ups.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audioDrops.map((drop) => (
              <article key={drop.title} className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{drop.length}</p>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{drop.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{drop.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[rgba(123,36,36,0.92)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black"
                >
                  Preview
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for contacting / booking */}
      <section className="border-t-2 border-[rgba(123,36,36,0.92)] bg-[#fdf9f6] px-6 py-16 text-center lg:px-12">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Downloads</p>
          <h2 className="text-3xl font-semibold">Need layered audio stems or high-res stills?</h2>
          <p className="text-sm text-gray-600">
            Share your timeline and technical specs—press and touring partners receive access links within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[rgba(123,36,36,0.92)] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
            >
              Contact studio
            </Link>
            <Link
              href="/bookings"
              className="rounded-full border border-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-gray-100"
            >
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
