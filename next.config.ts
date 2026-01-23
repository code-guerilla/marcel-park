import createNextIntlPlugin from "next-intl/plugin"

const nextConfig = {
  cacheComponents: true,
  reactCompiler: true,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
