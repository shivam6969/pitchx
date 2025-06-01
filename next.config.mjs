/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/team-3',
        destination: '/about-us',
        permanent: true, // 301 redirect
      },
    ];
  },
}

export default nextConfig
