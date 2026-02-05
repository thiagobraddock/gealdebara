import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grupo Escoteiro Aldebarã",
  description: "238 - Espírito Santo do Pinhal - SP · Sempre Alerta",
  icons: { icon: "/images/favicon.png" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
