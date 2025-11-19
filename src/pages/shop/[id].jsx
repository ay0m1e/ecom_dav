import Image from "next/image";

// Placeholder product data (could be dynamic in the future).
const product = {
  name: "Signature Talking Drum",
  price: "£420",
  shortDescription: "Hand-laced goatskin drum with bronze bells, indigo cords, and touring-ready tuning notes.",
  longDescription:
    "Crafted in Lagos, each talking drum is shaped with Sapele wood, treated with shea butter for resonance, and tensioned with indigo-dyed cordage inspired by Yoruba call-and-response storytelling. The accompanying case includes mic placement notes, a tuning key, and QR access to walkthrough videos.",
  image: "/images/paint-prod1.jpg",
  materials: ["Goatskin", "Bronze bells", "Indigo cord", "Sapele wood"],
  dimensions: ['Height: 22"', 'Diameter: 9"', "Weight: 4.3kg"],
};

// Cross-sell suggestions displayed under the main detail section.
const suggested = [
  {
    id: "mini",
    title: "Mini Travel Drum",
    price: "£210",
    image: "/images/paint-prod2.jpg",
  },
  {
    id: "textile",
    title: "Indigo Textile Throw",
    price: "£130",
    image: "/images/woven-prod%20(1).jpg",
  },
  {
    id: "chair",
    title: "Carved Lounge Chair",
    price: "£890",
    image: "/images/Handmade%20Chair.svg",
  },
];

// Product detail layout split into gallery + info column.
export default function ProductDetailPage() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      {/* Primary product area */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="relative h-[480px] overflow-hidden rounded-[40px] border border-white shadow-lg">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[product.image, "/images/paint-prod5.jpg", "/images/paint-prod6.jpg"].map((imageSrc) => (
                <div key={imageSrc} className="relative h-28 overflow-hidden rounded-2xl border border-gray-200">
                  <Image src={imageSrc} alt={`${product.name} detail`} fill className="object-cover" sizes="160px" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Thread & Clay</p>
              <h1 className="text-3xl font-semibold">{product.name}</h1>
              <p className="text-sm text-gray-600">{product.shortDescription}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold text-gray-900">{product.price}</span>
              <span className="text-xs uppercase tracking-[0.4em] text-gray-500">Ships worldwide</span>
            </div>
            <button className="w-full rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black">
              Add to cart
            </button>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-sm text-gray-600">{product.longDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Materials</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {product.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-5">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Dimensions</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {product.dimensions.map((dimension) => (
                    <li key={dimension}>{dimension}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested items */}
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[rgba(123,36,36,0.92)]">Suggested</p>
              <h2 className="text-3xl font-semibold">You may also like</h2>
            </div>
            <button className="rounded-full border border-gray-900 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-gray-100">
              View all products
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {suggested.map((item) => (
              <article key={item.id} className="rounded-[30px] border border-gray-200 bg-[#fafafa] p-5 shadow-sm">
                <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
                <button className="mt-4 inline-flex text-sm font-semibold text-[rgba(123,36,36,0.92)]">View details →</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
