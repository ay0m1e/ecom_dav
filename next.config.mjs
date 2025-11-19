/** @type {import('next').NextConfig} */
// Enable React strict mode and modern image formats for the entire app.
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
