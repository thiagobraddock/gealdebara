"use client"

import { useState, useEffect } from "react"
import { patrulhas, ramos, type Ramo, type Patrulha } from "@/data/patrulhas"
import { Volume2 } from "lucide-react"

function Bandeirola({ cor1Hex, cor2Hex }: { cor1Hex: string; cor2Hex: string }) {
  return (
    <div className="relative mx-auto mb-4 flex flex-col items-center">
      {/* Pole */}
      <div className="h-6 w-1 rounded-t bg-scout-gray-300" />
      {/* Flag */}
      <div
        className="h-16 w-12 rounded-b-sm shadow-md"
        style={{
          background: `linear-gradient(135deg, ${cor1Hex} 50%, ${cor2Hex} 50%)`,
        }}
      />
      {/* Tail */}
      <div
        className="h-3 w-12"
        style={{
          clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          background: `linear-gradient(90deg, ${cor1Hex} 50%, ${cor2Hex} 50%)`,
        }}
      />
    </div>
  )
}

function PatrulhaCard({ patrulha }: { patrulha: Patrulha }) {
  const [showGrito, setShowGrito] = useState(false)

  return (
    <div className="group flex flex-col rounded-2xl border border-scout-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-scout-purple-200">
      {/* Bandeirola */}
      <Bandeirola cor1Hex={patrulha.cor1Hex} cor2Hex={patrulha.cor2Hex} />

      {/* Name */}
      <h3 className="mb-1 text-center text-lg font-bold text-scout-gray-900">
        {patrulha.nome}
      </h3>

      {/* Colors */}
      <div className="mb-3 flex items-center justify-center gap-2">
        <span
          className="inline-block h-3 w-3 rounded-full border border-scout-gray-200"
          style={{ backgroundColor: patrulha.cor1Hex }}
        />
        <span className="text-xs text-scout-gray-500">
          {patrulha.cor1} e {patrulha.cor2}
        </span>
        <span
          className="inline-block h-3 w-3 rounded-full border border-scout-gray-200"
          style={{ backgroundColor: patrulha.cor2Hex }}
        />
      </div>

      {/* Description */}
      <p className="mb-4 flex-1 text-center text-sm leading-relaxed text-scout-gray-500">
        {patrulha.descricao}
      </p>

      {/* Grito Toggle */}
      <button
        onClick={() => setShowGrito(!showGrito)}
        className="mx-auto flex items-center gap-2 rounded-full border border-scout-purple-200 px-4 py-1.5 text-xs font-semibold text-scout-purple transition-all hover:bg-scout-purple hover:text-white"
      >
        <Volume2 className="h-3.5 w-3.5" />
        {showGrito ? "Ocultar Grito" : "Ver Grito"}
      </button>

      {/* Grito Content */}
      {showGrito && (
        <div className="mt-4 rounded-xl bg-scout-purple-50 p-4">
          <p className="whitespace-pre-line text-center text-sm font-medium italic leading-relaxed text-scout-purple-dark">
            {patrulha.grito}
          </p>
        </div>
      )}
    </div>
  )
}

export default function PatrulhasPage() {
  const [ramo, setRamo] = useState<Ramo>("escoteiro")
  const [search, setSearch] = useState("")

  const filteredPatrulhas = patrulhas
    .filter((p) => p.ramo === ramo)
    .filter(
      (p) =>
        search === "" ||
        p.nome.toLowerCase().includes(search.toLowerCase())
    )

  const currentRamo = ramos[ramo]

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
      el.classList.remove("animate-fade-in-up")
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ramo])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-scout-purple px-6 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-scout-purple-dark/30 via-transparent to-scout-purple-light/10" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Patrulhas
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/70 sm:text-lg">
            A patrulha é a unidade fundamental do Escotismo. Cada patrulha tem seu nome, suas
            cores, sua bandeirola e seu grito — tradições que unem o grupo e constroem identidade.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="bg-white px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Ramo Tabs */}
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex rounded-xl border border-scout-gray-200 bg-scout-gray-50 p-1">
              {(Object.keys(ramos) as Ramo[]).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setRamo(r)
                    setSearch("")
                  }}
                  className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all ${
                    ramo === r
                      ? "bg-scout-purple text-white shadow-sm"
                      : "text-scout-gray-500 hover:text-scout-purple"
                  }`}
                >
                  {ramos[r].label}
                </button>
              ))}
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Buscar patrulha..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-scout-gray-200 bg-scout-gray-50 px-4 py-2 text-sm text-scout-gray-900 placeholder:text-scout-gray-500 focus:border-scout-purple focus:outline-none focus:ring-2 focus:ring-scout-purple/20 sm:w-56"
            />
          </div>

          {/* Ramo Info */}
          <div data-animate className="opacity-0 mb-10 rounded-2xl bg-scout-purple-50 p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-scout-purple">
                  {currentRamo.label}
                </h2>
                <p className="mt-1 text-sm text-scout-gray-500">
                  {currentRamo.descricao}
                </p>
              </div>
              <span className="mt-2 inline-flex items-center self-start rounded-full bg-scout-purple px-4 py-1.5 text-xs font-bold text-white sm:mt-0">
                {currentRamo.idade}
              </span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPatrulhas.map((p, i) => (
              <div
                key={p.id}
                data-animate
                className="opacity-0"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <PatrulhaCard patrulha={p} />
              </div>
            ))}
          </div>

          {filteredPatrulhas.length === 0 && (
            <p className="py-16 text-center text-sm text-scout-gray-500">
              Nenhuma patrulha encontrada para &quot;{search}&quot;.
            </p>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-scout-gray-50 px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-scout-purple sm:text-3xl">
            O Sistema de Patrulhas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-scout-gray-900">
                A Bandeirola
              </h3>
              <p className="text-sm leading-relaxed text-scout-gray-500">
                Cada patrulha possui um bastão com uma bandeirola nas suas cores oficiais. Nela são
                gravadas as lembranças marcantes das experiências vividas juntos. É carregada pelo
                monitor da patrulha.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-scout-gray-900">
                O Grito de Patrulha
              </h3>
              <p className="text-sm leading-relaxed text-scout-gray-500">
                O grito é uma tradição que reforça a identidade e o espírito de equipe. É criado
                pelos próprios membros e entoado em atividades, cerimônias e acampamentos. O grito
                representa a alma da patrulha.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-scout-gray-900">
                O Livro de Patrulha
              </h3>
              <p className="text-sm leading-relaxed text-scout-gray-500">
                Todas as informações sobre os membros, fotografias das ações e registros das
                atividades ficam no livro de patrulha — a memória viva do grupo.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-scout-gray-900">
                O Totem
              </h3>
              <p className="text-sm leading-relaxed text-scout-gray-500">
                A escolha do totem (animal ou tribo) deve ser feita em consenso por todos os
                membros. Uma vez escolhido, é para sempre — carrega a história e tradições de todos
                que passaram pela patrulha.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
