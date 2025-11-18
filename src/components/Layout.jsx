import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';


export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-gray-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
    </div>
  );
}
