import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a parent lockfile lives at ~/package-lock.json,
  // which Next would otherwise infer as the root.
  turbopack: { root: __dirname },
};

export default nextConfig;
