import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // static HTML export for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  // If hosting at https://<user>.github.io/<repo>/ set basePath: "/<repo>"
  // basePath: "/manisha-portfolio",
};

export default nextConfig;
