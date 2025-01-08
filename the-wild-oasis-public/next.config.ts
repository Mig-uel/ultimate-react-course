import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'xmabeywyvhrwlxntjxya.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
        protocol: 'https',
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // output: 'export',
}

export default nextConfig
