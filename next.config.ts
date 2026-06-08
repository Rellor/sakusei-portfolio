import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 enforces an allowlist for `quality` values.
    qualities: [75, 90, 92, 95],
  },
};

export default nextConfig;
