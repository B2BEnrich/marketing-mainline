import createMDX from "@next/mdx";
import { createSecureHeaders } from "next-secure-headers";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "react-icons",
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api-docs",
        destination: "/zudoku-docs/introduction.html",
      },
      {
        source: "/api-docs/:path*",
        destination: "/zudoku-docs/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          referrerPolicy: "same-origin",
        }),
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
