import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  cacheComponents: true,
  output: "standalone",
  reactCompiler: true,
} satisfies NextConfig

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
