import { type TipoPatrulha } from "./catalogo-patrulhas"

export interface PatrulhaAtiva {
  id: string
  nome: string
  tipo: TipoPatrulha
  cor1: string
  cor2: string
  cor1Hex: string
  cor2Hex: string
  grito: string
  descricao: string
  imagemBanderola?: string // caminho para imagem da banderola (ex: "/images/patrulhas/gaviao.jpg")
}

// ═══════════════════════════════════════════════════════
// PATRULHAS ATIVAS DO GRUPO ESCOTEIRO ALDEBARÃ
// Edite este arquivo para configurar as patrulhas do seu grupo.
// As cores devem seguir o padrão oficial dos Escoteiros do Brasil.
// ═══════════════════════════════════════════════════════

export const patrulhasAtivas: PatrulhaAtiva[] = [
  {
    id: "gaviao",
    nome: "Gavião",
    tipo: "animal",
    cor1: "Cor-de-rosa",
    cor2: "Cor-de-rosa",
    cor1Hex: "#E91E63",
    cor2Hex: "#E91E63",
    grito: "Gavião! Gavião!\nDe olhar certeiro e garras de aço,\nVoa alto sem hesitar!\nGavião! Gavião!",
    descricao: "O Gavião representa a visão aguçada e a determinação. Símbolo de liderança e coragem entre as patrulhas.",
  },
  {
    id: "pantera",
    nome: "Pantera",
    tipo: "animal",
    cor1: "Amarelo",
    cor2: "Amarelo",
    cor1Hex: "#FDD835",
    cor2Hex: "#FDD835",
    grito: "Pantera! Pantera!\nSilenciosa na mata escura,\nÁgil, forte, sem igual!\nPantera! Pantera!",
    descricao: "A Pantera simboliza agilidade, força silenciosa e capacidade de adaptação em qualquer ambiente.",
  },
  {
    id: "aguia",
    nome: "Águia",
    tipo: "animal",
    cor1: "Verde",
    cor2: "Preto",
    cor1Hex: "#2E7D32",
    cor2Hex: "#212121",
    grito: "Águia! Águia!\nRainha dos céus, asas abertas,\nVoa livre sem temer!\nÁguia! Águia!",
    descricao: "A Águia é símbolo de liberdade e visão ampla. Representa a capacidade de enxergar além e liderar com sabedoria.",
  },
]
