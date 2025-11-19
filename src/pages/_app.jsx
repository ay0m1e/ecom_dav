import Layout from "@/components/Layout";
import "@/styles/globals.css";

// Next.js custom App injects the shared layout around every routed page.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* Spread each page's props into its component */}
      <Component {...pageProps} />
    </Layout>
  );
}
