import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  // We'll keep redirects out; DNS provider will handle legacy path redirects
  env: {
    PAYLOAD_CONFIG_PATH: path.resolve(process.cwd(), "src/payload.config.ts"),
  },
};

export default withPayload(nextConfig);
