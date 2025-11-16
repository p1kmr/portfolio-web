module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true, // Enable gzip compression
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        // Cache GLB files for better performance
        source: '/:all*(glb|gltf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}
