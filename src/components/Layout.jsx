import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

// App-wide shell that wraps every page with nav, footer, and analytics hooks.
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-gray-900">
      {/* Global site navigation */}
      <Navbar />
      {/* Render whatever page was requested */}
      <main className="flex-1">{children}</main>
      {/* Site footer + monitoring snippets */}
      <Footer />
      <Analytics />
      <SpeedInsights/>
    </div>
  );
}
