import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const nextConfig = {
  cacheComponents: true,
  output: "standalone",
  reactCompiler: true,
} satisfies NextConfig

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
