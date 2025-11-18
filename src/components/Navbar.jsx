import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Shop", href: "/shop" },
  { label: "Bookings", href: "/bookings" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/30 bg-[rgba(123,36,36,0.92)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-[15px] lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/logo-real.png" alt="KayDrumz logo" width={120} height={100} />
          <span className="font-newsreader text-2xl tracking-wide">Kay Drumz.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-amber-200">
              {link.label}
            </Link>
          ))}
          <button type="button" className="rounded-full border border-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.3em] hover:bg-white/10">
            Artist Portal
          </button>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </span>
        </button>
      </div>

      <div className={`lg:hidden ${open ? "max-h-screen" : "max-h-0"} overflow-hidden border-t border-white/20 bg-[rgba(123,36,36,0.95)] transition-[max-height] duration-300`}>
        <div className="space-y-4 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold uppercase tracking-[0.3em] text-white/90"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="w-full rounded-full border border-white/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white"
          >
            Artist Portal
          </button>
        </div>
      </div>
    </header>
  );
}
