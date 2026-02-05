import Image from "next/image"

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
        <p className="text-xl sm:text-2xl font-semibold tracking-widest uppercase" style={{ color: "#1565C0" }}>
          Sempre Alerta
        </p>
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
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: "#424242" }}>
              Ramo Lobinho
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crianças de 6,5 a 10 anos. Lema: <span className="font-semibold">"Melhor Possível"</span>.
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
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: "#424242" }}>
              Ramo Escoteiro
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adolescentes de 11 a 14 anos. Lema: <span className="font-semibold">"Sempre Alerta"</span>.
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
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: "#424242" }}>
              Ramo Sênior
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adolescentes de 15 a 17 anos. Lema: <span className="font-semibold">"Sempre Alerta"</span>.
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
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide" style={{ color: "#424242" }}>
              Ramo Pioneiro
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jovens de 18 a 20 anos. Lema: <span className="font-semibold">"Servir"</span>.
            </p>
          </div>
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
