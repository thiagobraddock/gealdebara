"use client"

import { useEffect } from "react"
import Image from "next/image"
import { MapPin, Clock, Instagram, ArrowRight } from "lucide-react"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Full Purple */}
      <section className="relative flex items-center justify-center bg-scout-purple overflow-hidden px-6 py-16 sm:py-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-scout-purple-dark/30 via-transparent to-scout-purple-light/10" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/grupo-escoteiro-aldebara.jpeg"
              alt="Logo do Grupo Escoteiro Aldebarã"
              width={180}
              height={180}
              className="h-36 w-36 rounded-full object-contain sm:h-44 sm:w-44"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Grupo Escoteiro Aldebarã
          </h1>
          
          {/* Location */}
          <p className="mb-6 text-base font-medium text-white/70 sm:text-lg">
            238 – Espírito Santo do Pinhal – SP
          </p>

          {/* Motto with Icon */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />
            <div className="flex items-center gap-2">
              <Image
                src="/images/icone-sempre-alerta.png"
                alt="Sinal Escoteiro"
                width={28}
                height={28}
                className="h-7 w-7 object-contain invert brightness-0"
              />
              <p className="text-lg font-bold uppercase tracking-[0.15em] text-white sm:text-xl">
                Sempre Alerta
              </p>
            </div>
            <span className="h-px w-10 bg-white/30" />
          </div>

          {/* CTA Button */}
          <a
            href="https://forms.gle/2cTakYnjQW1pmPo88"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-7 py-3 text-base font-bold text-scout-purple transition-all duration-200 hover:bg-transparent hover:text-white sm:px-8 sm:py-4 sm:text-lg"
          >
            Quero Fazer Parte
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Nossos Ramos Section */}
      <section data-animate className="opacity-0 bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-scout-purple sm:text-3xl">
              Nossos Ramos
            </h2>
            <p className="mx-auto max-w-lg text-sm text-scout-gray-500 sm:text-base">
              O Escotismo acompanha jovens dos 6 aos 21 anos, com atividades adaptadas a cada faixa etária.
            </p>
          </div>

          {/* Ramos Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {/* Lobinho */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/logos-ramos/Logo_ramo_lobinho_principal.png"
                alt="Ramo Lobinho"
                width={140}
                height={140}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 mb-4"
              />
              <p className="text-sm text-scout-gray-500">6,5 a 10 anos</p>
              <p className="text-sm font-bold text-scout-gray-900">&quot;Melhor Possível&quot;</p>
            </div>

            {/* Escoteiro */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/logos-ramos/Logo_ramo_escoteiro_principal.png"
                alt="Ramo Escoteiro"
                width={140}
                height={140}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 mb-4"
              />
              <p className="text-sm text-scout-gray-500">11 a 14 anos</p>
              <p className="text-sm font-bold text-scout-gray-900">&quot;Sempre Alerta&quot;</p>
            </div>

            {/* Sênior */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/logos-ramos/Logo_ramo_senior_principal.png"
                alt="Ramo Sênior"
                width={140}
                height={140}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 mb-4"
              />
              <p className="text-sm text-scout-gray-500">15 a 17 anos</p>
              <p className="text-sm font-bold text-scout-gray-900">&quot;Sempre Alerta&quot;</p>
            </div>

            {/* Pioneiro */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/logos-ramos/Logo_ramo_pioneiro_principal.png"
                alt="Ramo Pioneiro"
                width={140}
                height={140}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 mb-4"
              />
              <p className="text-sm text-scout-gray-500">18 a 21 anos</p>
              <p className="text-sm font-bold text-scout-gray-900">&quot;Servir&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-animate className="opacity-0 bg-scout-gray-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-scout-purple sm:text-3xl">
            Venha nos Conhecer
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Address */}
            <a
              href="https://maps.app.goo.gl/NtasM1B8Qmr47jnv9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-scout-purple">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-scout-gray-500">
                  Endereço
                </p>
                <p className="mt-0.5 text-sm font-medium text-scout-gray-900">
                  R. Cel. Amando Vergueiro, 30
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-scout-purple">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-scout-gray-500">
                  Horário
                </p>
                <p className="mt-0.5 text-sm font-medium text-scout-gray-900">
                  Sábados, 15h às 17h30
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gealdebara238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-scout-purple">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-scout-gray-500">
                  Instagram
                </p>
                <p className="mt-0.5 text-sm font-medium text-scout-purple">
                  @gealdebara238
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-scout-purple-dark px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <Image
            src="/images/escoteiros-do-brasil.png"
            alt="Escoteiros do Brasil"
            width={300}
            height={96}
            className="w-60 object-contain sm:w-72"
          />
          <div className="h-px w-12 bg-white/20" />
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Grupo Escoteiro Aldebarã 238. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
