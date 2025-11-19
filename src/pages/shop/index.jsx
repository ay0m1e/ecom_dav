import Image from "next/image";

// Static catalog data powering each product card in the grid.
const catalog = [
  {
    id: "drum-classic",
    name: "Signature Talking Drum",
    price: "£420",
    badge: "New",
    image: "/images/paint-prod1.jpg",
    description: "Hand-laced goatskin with bronze bells and indigo cords. Includes tuning guide and soft case.",
  },
  {
    id: "drum-mini",
    name: "Mini Travel Drum",
    price: "£210",
    badge: "Limited",
    image: "/images/paint-prod2.jpg",
    description: "Compact body tuned for residencies and workshops, with quick-release hardware.",
  },
  {
    id: "indigo-throw",
    name: "Indigo Textile Throw",
    price: "£130",
    badge: "Restocked",
    image: "/images/woven-prod%20(1).jpg",
    description: "Handwoven cotton with bronze bead edging, inspired by batá rhythm patterns.",
  },
  {
    id: "carved-chair",
    name: "Carved Lounge Chair",
    price: "£890",
    badge: "Made-to-order",
    image: "/images/Handmade%20Chair.svg",
    description: "Sapele wood frame with woven leather straps and maroon piping.",
  },
  {
    id: "purse",
    name: "Hand Crafted Purse",
    price: "£59",
    badge: "Drop",
    image: "/images/hand%20crafted%20bag.svg",
    description: "Stitched in Lagos with suede lining, adjustable strap, and brass hardware.",
  },
  {
    id: "vase",
    name: "Jug Water Carrier",
    price: "£189",
    badge: "Edition",
    image: "/images/Vase-product.svg",
    description: "Burnished clay with carved symbols representing talking drum tones.",
  },
  {
    id: "stem-pack",
    name: "Studio Stem Pack",
    price: "£140",
    badge: "Digital",
    image: "/images/paint-prod9.jpg",
    description: "24-bit multitrack stems captured with analog compressors and cue sheets.",
  },
  {
    id: "print-series",
    name: "Limited Print Series",
    price: "£95",
    badge: "Signed",
    image: "/images/Monalisa.svg",
    description: "Risograph prints inspired by Yoruba call-and-response phrasing.",
  },
];

// Shop landing page with hero and catalog grid.
export default function ShopPage() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Hero describing the shop */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/gangan.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Kay Drumz Shop</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Limited runs handcrafted in Lagos & London.</h1>
          <p className="text-base text-white/80 md:text-lg">
            Browse drums, textiles, and gallery objects released this season. Each shipment includes provenance cards,
            tuning guides, and archival photo sets.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Catalog</p>
              <h2 className="text-3xl font-semibold">Shop the current drop.</h2>
            </div>
            <p className="max-w-xl text-sm text-gray-600">
              Every release is crafted in micro batches and shipped worldwide with insured delivery. Requests for sold-out
              items can be submitted via the bookings page.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map((product) => (
              <article key={product.id} className="flex flex-col rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
                <div className="relative mb-5 h-64 overflow-hidden rounded-[28px]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                  <span className="absolute left-4 top-4 rounded-full bg-[rgba(123,36,36,0.92)] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-white">
                    {product.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Thread & Clay</p>
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <button
                    type="button"
                    className="rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black"
                  >
                    View piece
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
