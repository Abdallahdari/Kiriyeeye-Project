import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["igojpyhmueeufmrtfsbe.supabase.co"],
  },
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production, use with caution
  },
};

export default nextConfig;
