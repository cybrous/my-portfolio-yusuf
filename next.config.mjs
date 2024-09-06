import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().then(() => {
    console.log('Development platform setup complete.');
  }).catch((error) => {
    console.error('Error setting up development platform:', error);
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yunus-home.github.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Customize as needed
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // Allow indexing
          },
        ],
      },
    ];
  },
};

export default nextConfig;
