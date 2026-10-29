import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The contact page moved to /cocreate; keep old links and bookmarks working
  async redirects() {
    return [{ source: "/contact", destination: "/cocreate", permanent: true }];
  },
};

export default nextConfig;
