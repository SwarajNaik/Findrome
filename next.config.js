/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  // Disable PWA for now to fix the error
  // PWA can be added later if needed
};

module.exports = nextConfig;
