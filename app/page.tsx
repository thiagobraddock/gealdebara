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

      {/* Logo Escoteiros do Brasil */}
      <Image
        src="/images/escoteiros-do-brasil.png"
        alt="Escoteiros do Brasil"
        width={300}
        height={96}
        sizes="(max-width: 640px) 200px, 300px"
        className="w-48 sm:w-72 object-contain mt-4"
      />
    </main>
  )
}
