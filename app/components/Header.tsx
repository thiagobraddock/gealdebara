"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/patrulhas", label: "Patrulhas" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-scout-purple-200/40 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/grupo-escoteiro-aldebara.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-scout-purple">
              Grupo Escoteiro Aldebarã
            </p>
            <p className="text-xs text-scout-gray-500">238 – Espírito Santo do Pinhal</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-scout-gray-600 transition-colors hover:text-scout-purple"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://forms.gle/2cTakYnjQW1pmPo88"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-scout-purple px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-scout-purple-dark"
          >
            Quero Fazer Parte
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-scout-gray-600 transition-colors hover:bg-scout-gray-100 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-scout-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-scout-gray-600 transition-colors hover:bg-scout-gray-50 hover:text-scout-purple"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://forms.gle/2cTakYnjQW1pmPo88"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-scout-purple px-5 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-scout-purple-dark"
            >
              Quero Fazer Parte
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
