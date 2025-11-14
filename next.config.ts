
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aswadali.vercel.app',
      },
    ],
  },
}

export default nextConfig;
