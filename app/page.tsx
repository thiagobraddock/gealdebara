import Image from "next/image"
import { MapPin, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16 gap-8">
      {/* Logo do Grupo */}
      <Image
        src="/images/grupo-escoteiro-aldebara.jpeg"
        alt="Logo do Grupo Escoteiro Aldebarã"
        width={320}
        height={320}
        sizes="(max-width: 640px) 240px, 320px"
        className="w-60 h-60 sm:w-80 sm:h-80 object-contain"
        priority
      />

      {/* Título e localização */}
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "#2E7D32" }}>
          Grupo Escoteiro Aldebarã
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-600">
          238 – Espírito Santo do Pinhal – SP
        </p>
      </div>

      {/* Lema */}
      <div className="flex items-center gap-3">
        <span className="inline-block w-10 h-px" style={{ background: "#1565C0" }} />
        <div className="flex items-center gap-2">
          <Image
            src="/images/icone-sempre-alerta.png"
            alt="Sinal Escoteiro"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
          <p className="text-xl sm:text-2xl font-semibold tracking-widest uppercase" style={{ color: "#1565C0" }}>
            Sempre Alerta
          </p>
        </div>
        <span className="inline-block w-10 h-px" style={{ background: "#1565C0" }} />
      </div>

      {/* Divisor */}
      <hr className="w-24 border-t-2 border-gray-200" />

      {/* Badge "Em Breve" */}
      <div className="rounded-full px-6 py-2" style={{ background: "#2E7D32" }}>
        <p className="text-white text-lg sm:text-xl font-semibold tracking-wide uppercase">
          Em Breve
        </p>
      </div>

      {/* Seção Ramos Escoteiros */}
      <section className="w-full max-w-7xl mt-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: "#2E7D32" }}>
          Nossos Ramos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Lobinho */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/logos-ramos/Logo_ramo_lobinho_principal.png"
                alt="Ramo Lobinho"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crianças de 6,5 a 10 anos.<br />
              Lema: <span className="font-semibold">"Melhor Possível"</span>.
            </p>
          </div>

          {/* Escoteiro */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/logos-ramos/Logo_ramo_escoteiro_principal.png"
                alt="Ramo Escoteiro"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adolescentes de 11 a 14 anos.<br />
              Lema: <span className="font-semibold">"Sempre Alerta"</span>.
            </p>
          </div>

          {/* Sênior */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/logos-ramos/Logo_ramo_senior_principal.png"
                alt="Ramo Sênior"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adolescentes de 15 a 17 anos.<br />
              Lema: <span className="font-semibold">"Sempre Alerta"</span>.
            </p>
          </div>

          {/* Pioneiro */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-4">
              <Image
                src="/images/logos-ramos/Logo_ramo_pioneiro_principal.png"
                alt="Ramo Pioneiro"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jovens de 18 a 20 anos.<br />
              Lema: <span className="font-semibold">"Servir"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="w-full max-w-3xl mt-16 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Endereço */}
          <div className="flex items-start gap-2 text-center sm:text-left">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#2E7D32" }} />
            <div>
              <p className="text-sm text-gray-700">
                Rua Coronel Amando Vergueiro, 30
              </p>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-start gap-2 text-center sm:text-left">
            <Clock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#2E7D32" }} />
            <div>
              <p className="text-sm text-gray-700">
                Sábados das 15:00h às 17:30h
              </p>
            </div>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gealdebara238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-center sm:text-left hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" style={{ color: "#2E7D32" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="text-sm font-medium" style={{ color: "#2E7D32" }}>
              @gealdebara238
            </span>
          </a>
        </div>
      </section>

      {/* Logo Escoteiros do Brasil */}
      <Image
        src="/images/escoteiros-do-brasil.png"
        alt="Escoteiros do Brasil"
        width={300}
        height={96}
        sizes="(max-width: 640px) 200px, 300px"
        className="w-48 sm:w-72 object-contain mt-16"
      />
    </main>
  )
}
