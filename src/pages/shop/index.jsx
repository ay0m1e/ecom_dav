import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/data/products";

// Shop landing page with hero and catalog grid.
export default function ShopPage() {
  return (
    <div className="bg-[#fafafa] text-gray-900">
      <Head>
        <title>Kay Drumz — Shop</title>
      </Head>
      {/* Hero describing the shop */}
      <section className="relative isolate overflow-hidden px-6 py-20 text-white lg:px-12">
        <div className="absolute inset-0 bg-[url('/images/gangan.jpg')] bg-cover bg-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Kay Drumz Shop</p>
          <h1 className="font-newsreader text-4xl leading-tight md:text-5xl">Limited runs handcrafted in Lagos & London.</h1>
          <p className="text-base text-white/80 md:text-lg">
            Handmade Yoruba talking drums, sticks, and build components — carved, roped, and finished in Lagos.
            Each piece ships with care and can be built to order.
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
            {products.map((product) => (
              <article key={product.id} className="flex flex-col rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
                <div className="relative mb-5 h-64 overflow-hidden rounded-[28px]">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Kay Drumz</p>
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{formatPrice(product)}</span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="rounded-full bg-[rgba(123,36,36,0.92)] px-6 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black"
                  >
                    View piece
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
