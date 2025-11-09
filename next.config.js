/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.maptiler.com', // 🗺 地図背景
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 🥐 Unsplash画像
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // 👤 プロフィール用
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // 🧁 ← 今回の犯人！
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

