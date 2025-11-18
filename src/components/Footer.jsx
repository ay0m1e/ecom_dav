import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Shop", href: "/shop" },
  { label: "Bookings", href: "/bookings" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { label: "Instagram", icon: "/icons/instagram.svg" },
  { label: "Facebook", icon: "/icons/facebook.svg" },
  { label: "TikTok", icon: "/icons/tiktok.svg" },
  { label: "X", icon: "/icons/x.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-[rgba(123,36,36,0.92)] bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icons/footer_logo.png" alt="KayDrumz logo" width={120} height={100} />
            <span className="font-newsreader text-2xl text-gray-900">Kay Drumz.</span>
          </Link>
          <p className="text-sm text-gray-600">Talking drum portfolio & artisan studio based in Lagos and London.</p>
          <div className="space-y-1 text-sm text-gray-700">
            <p>Email: hello@threadandclay.com</p>
            <p>Phone: +44 20 7123 0000</p>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-10">
          <div className="min-w-[180px] space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[rgba(123,36,36,0.92)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-[180px] space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">Social</h3>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social) => (
                <span key={social.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-[#fafafa] shadow-sm">
                  <Image src={social.icon} alt={`${social.label} icon`} width={20} height={20} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Kay Drumz. All rights reserved.</p>
    </footer>
  );
}
