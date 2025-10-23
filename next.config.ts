import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any as NextConfig;

export default withFlowbiteReact(nextConfig);