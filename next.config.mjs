/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    unoptimized: true,
  },

  // Enable compression and optimization
  compress: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
