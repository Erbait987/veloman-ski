/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `sun9-[0-9]*.userapi.com`,
        port: "",
        pathname: "/impg/**",
      },
      {
        protocol: "https",
        hostname: `i0.wp.com`,
        port: "",
        pathname: "/S-jeelt.ru/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      procces.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_ENTRY_ID: process.env.NEXT_PUBLIC_ENTRY_ID,
    NEXT_PUBLIC_ENTRY_ID_SKI: process.env.NEXT_PUBLIC_ENTRY_ID_SKI,
    NEXT_PUBLIC_ENTRY_ID_BIKE: process.env.NEXT_PUBLIC_ENTRY_ID_BIKE,
    NEXT_PUBLIC_TELEGRAM_URL: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  },
};

export default nextConfig;
