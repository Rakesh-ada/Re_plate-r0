import { createCivicAuthPlugin } from "@civic/auth/nextjs"

const civicAuthPlugin = createCivicAuthPlugin({
  clientId: "9ec1eca2-63c7-4c6b-87a0-a8cb4f1b1145"
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default civicAuthPlugin(nextConfig)
