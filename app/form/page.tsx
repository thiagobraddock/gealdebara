import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Redirecionando...",
  other: {
    "refresh": "0;url=https://forms.gle/2cTakYnjQW1pmPo88",
  },
}

export default function FormRedirect() {
  return (
    <meta httpEquiv="refresh" content="0;url=https://forms.gle/2cTakYnjQW1pmPo88" />
  )
}
