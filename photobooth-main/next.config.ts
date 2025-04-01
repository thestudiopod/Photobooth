import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["jotai-devtools"],
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
