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
        source: "/venture-studio/:slug",
        destination: "/deadlock-labs/:slug",
        permanent: true
      },
      {
        source: "/founder",
        destination: "/deadlock-labs/founder",
        permanent: true
      },
      {
        source: "/projects",
        destination: "/workbench",
        permanent: true
      },
      {
        source: "/projects/:slug",
        destination: "/workbench/:slug",
        permanent: true
      },
      {
        source: "/writing",
        destination: "/scratch-pad",
        permanent: true
      },
      {
        source: "/lab-notes",
        destination: "/scratch-pad",
        permanent: true
      },
      {
        source: "/lab-notes/:slug",
        destination: "/scratch-pad/:slug",
        permanent: true
      },
      {
        source: "/photography",
        destination: "/outside",
        permanent: true
      },
      {
        source: "/culture",
        destination: "/outside/culture",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
