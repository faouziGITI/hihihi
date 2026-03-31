const nextConfig = {
  images: {
    qualities: [75, 90], // ✅ ADD 90
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
export default nextConfig;