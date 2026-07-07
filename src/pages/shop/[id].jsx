import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/data/products";

// WhatsApp number placeholder — replace with the studio's real number before launch.
const WHATSAPP_NUMBER = "PHONE_PLACEHOLDER";

// Every product is statically known ahead of time, so paths are generated from the data file.
export function getStaticPaths() {
  return {
    paths: products.map((product) => ({ params: { id: product.id } })),
    fallback: false,
  };
}

// Look up the requested product by slug; unknown slugs get a real 404.
export function getStaticProps({ params }) {
  const product = products.find((item) => item.id === params.id);
  if (!product) {
    return { notFound: true };
  }
  return { props: { product } };
}

// Product detail layout split into gallery + info column.
export default function ProductDetailPage({ product }) {
  const suggested = products.filter((item) => item.id !== product.id).slice(0, 3);
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name} listed on the Kay Drumz site.`
  );

  return (
    <div className="bg-[#fafafa] text-gray-900">
      <Head>
        <title>Kay Drumz — {product.name}</title>
      </Head>
      {/* Primary product area */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="relative h-[480px] overflow-hidden rounded-[40px] border border-white shadow-lg">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((imageSrc) => (
                  <div key={imageSrc} className="relative h-28 overflow-hidden rounded-2xl border border-gray-200">
                    <Image src={imageSrc} alt={`${product.name} detail`} fill className="object-cover" sizes="160px" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-6 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Kay Drumz</p>
              <h1 className="text-3xl font-semibold">{product.name}</h1>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold text-gray-900">{formatPrice(product)}</span>
              <span className="text-xs uppercase tracking-[0.4em] text-gray-500">Ships worldwide</span>
            </div>

            {/* Purchase action: sold, buy (Paystack), or enquire (WhatsApp) */}
            {!product.available ? (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-full bg-gray-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gray-600"
              >
                Sold
              </button>
            ) : product.purchaseType === "buy" && product.paystackUrl ? (
              <a
                href={product.paystackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
              >
                Buy now
              </a>
            ) : (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black"
              >
                Enquire on WhatsApp
              </a>
            )}

            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
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
            <Link
              href="/shop"
              className="rounded-full border border-gray-900 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-gray-100"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {suggested.map((item) => (
              <article key={item.id} className="rounded-[30px] border border-gray-200 bg-[#fafafa] p-5 shadow-sm">
                <div className="relative mb-4 h-48 overflow-hidden rounded-2xl">
                  <Image src={item.images[0]} alt={item.name} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{formatPrice(item)}</p>
                <Link href={`/shop/${item.id}`} className="mt-4 inline-flex text-sm font-semibold text-[rgba(123,36,36,0.92)]">
                  View details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
