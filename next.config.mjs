/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // distDir override via env per evitare conflitti con file macOS residui
  // nel sandbox di build. In produzione Vercel usa sempre `.next`.
  ...(process.env.NEXT_DIST_DIR_OVERRIDE && { distDir: process.env.NEXT_DIST_DIR_OVERRIDE }),
};

export default nextConfig;
