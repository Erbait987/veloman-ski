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
};

export default nextConfig;
