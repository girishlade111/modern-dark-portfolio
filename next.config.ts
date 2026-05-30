import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-7cf4e062-f80c-4dd2-bb12-8a549aa790c8.space-z.ai",
  ],
};

export default nextConfig;
