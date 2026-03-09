import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
      <body className="bg-white text-scout-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
