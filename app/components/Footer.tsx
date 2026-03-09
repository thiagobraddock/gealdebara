import Image from "next/image"

export default function Footer() {
  return (
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
          &copy; {new Date().getFullYear()} Grupo Escoteiro Aldebarã 238. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
