import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/venture-studio",
        destination: "/deadlock-labs",
        permanent: true
      },
      {
        source: "/venture-studio/thesis",
        destination: "/deadlock-labs/thesis",
        permanent: true
      },
      {
        source: "/venture-studio/pipeline",
        destination: "/deadlock-labs/pipeline",
        permanent: true
      },
      {
        source: "/founder",
        destination: "/deadlock-labs/founder",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
