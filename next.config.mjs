/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Uncomment and set these if using a custom domain or subdirectory
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
