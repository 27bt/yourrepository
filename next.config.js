/*const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  scope: '/',
  sw: 'service-worker.js', // Optional, customize the service worker file name
  buildExcludes: [/middleware-manifest\.json$/],
});

const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js configurations as needed
};

module.exports = withPWA(nextConfig);
*/

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'service-worker.js',
});

module.exports = withPWA({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
});
