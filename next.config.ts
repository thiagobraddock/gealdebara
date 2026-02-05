import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/form',
        destination: 'https://forms.gle/2cTakYnjQW1pmPo88',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
