/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-1275221-4608844.cloudwaysapps.com",
      },
    ],
  },
}

export default nextConfig
