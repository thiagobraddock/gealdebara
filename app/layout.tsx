import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["400", "500", "600", "700", "800"],
})

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
    <html lang="pt-BR" className={nunitoSans.variable}>
      <body className={`${nunitoSans.className} bg-white text-scout-gray-900`}>
        {children}
      </body>
    </html>
  )
}
