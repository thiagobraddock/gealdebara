export type Ramo = "escoteiro" | "senior"

export interface Patrulha {
  id: string
  nome: string
  ramo: Ramo
  cor1: string
  cor2: string
  cor1Hex: string
  cor2Hex: string
  grito: string
  descricao: string
}

export const ramos: Record<Ramo, { label: string; descricao: string; idade: string }> = {
  escoteiro: {
    label: "Ramo Escoteiro",
    descricao:
      "As patrulhas do Ramo Escoteiro levam nomes de animais. Cada patrulha carrega um bastão com uma bandeirola nas suas cores oficiais.",
    idade: "11 a 14 anos",
  },
  senior: {
    label: "Ramo Sênior",
    descricao:
      "As patrulhas do Ramo Sênior levam nomes de tribos indígenas brasileiras. O distintivo é dividido diagonalmente com as duas cores da tribo.",
    idade: "15 a 17 anos",
  },
}

export const patrulhas: Patrulha[] = [
  // ═══════════════════════════════════════
  // RAMO ESCOTEIRO — Animais
  // ═══════════════════════════════════════
  {
    id: "aguia",
    nome: "Águia",
    ramo: "escoteiro",
    cor1: "Verde",
    cor2: "Preto",
    cor1Hex: "#2E7D32",
    cor2Hex: "#212121",
    grito:
      "No alto das montanhas, o seu voo majestral,\nEla abre suas asas, sua visão fenomenal,\nSua coragem registrada, assim queremos ser,\nEscoteiros sempre alerta, unidos pra vencer!\nPatrulha Águia! Sempre Alerta!",
    descricao:
      "A águia é símbolo de visão, coragem e liberdade. Voa alto e enxerga longe, representando liderança e determinação.",
  },
  {
    id: "leao",
    nome: "Leão",
    ramo: "escoteiro",
    cor1: "Amarelo",
    cor2: "Vermelho",
    cor1Hex: "#FDD835",
    cor2Hex: "#D32F2F",
    grito:
      "Com a força e a coragem do leão,\nSomos unidos de coração,\nNa selva ou na cidade, em qualquer lugar,\nA Patrulha Leão veio pra ficar!\nPatrulha Leão! Sempre Alerta!",
    descricao:
      "O leão é o rei dos animais, símbolo de força, coragem e nobreza. Representa a liderança natural e o espírito de equipe.",
  },
  {
    id: "pantera",
    nome: "Pantera",
    ramo: "escoteiro",
    cor1: "Amarelo",
    cor2: "Preto",
    cor1Hex: "#FDD835",
    cor2Hex: "#212121",
    grito:
      "Ágeis e silenciosas na escuridão,\nCom garra e com força, somos a Pantera então,\nNa mata ou na trilha, prontos pra lutar,\nPatrulha Pantera, ninguém vai nos parar!\nPatrulha Pantera! Sempre Alerta!",
    descricao:
      "A pantera é ágil, silenciosa e estratégica. Representa a astúcia, a agilidade e a capacidade de adaptação.",
  },
  {
    id: "cobra",
    nome: "Cobra",
    ramo: "escoteiro",
    cor1: "Alaranjado",
    cor2: "Preto",
    cor1Hex: "#FF9800",
    cor2Hex: "#212121",
    grito:
      "Rastejando pelo chão, com atenção e precisão,\nA cobra é esperta, cheia de razão,\nÁgil e astuta, pronta pra atacar,\nPatrulha Cobra, sempre no lugar!\nPatrulha Cobra! Sempre Alerta!",
    descricao:
      "A cobra simboliza astúcia, agilidade e sabedoria. Representa a capacidade de se adaptar e agir com precisão.",
  },
  {
    id: "falcao",
    nome: "Falcão",
    ramo: "escoteiro",
    cor1: "Branco",
    cor2: "Azul",
    cor1Hex: "#FAFAFA",
    cor2Hex: "#1565C0",
    grito:
      "Cantando, jogando, aprendendo e acampando,\nNós somos a Falcão e estamos em ação,\nPara ajudar o próximo em qualquer ocasião!\nPatrulha Falcão! Sempre Alerta!",
    descricao:
      "O falcão é uma ave de rapina veloz e precisa. Símbolo de velocidade, foco e determinação no objetivo.",
  },
  {
    id: "raposa",
    nome: "Raposa",
    ramo: "escoteiro",
    cor1: "Amarelo",
    cor2: "Verde",
    cor1Hex: "#FDD835",
    cor2Hex: "#2E7D32",
    grito:
      "Na selva em todo lugar,\nEstamos prontos para ajudar,\nCom a patrulha Raposa você pode contar!\nPatrulha Raposa! Sempre Alerta!",
    descricao:
      "A raposa é astuta, inteligente e ágil. Representa a esperteza e a capacidade de resolver problemas criativamente.",
  },
  {
    id: "lobo",
    nome: "Lobo",
    ramo: "escoteiro",
    cor1: "Amarelo",
    cor2: "Preto",
    cor1Hex: "#FDD835",
    cor2Hex: "#212121",
    grito:
      "Uivando na floresta, unidos de verdade,\nA matilha é forte, cheia de lealdade,\nCom faro e com coragem, prontos pra vencer,\nPatrulha Lobo, sempre a crescer!\nPatrulha Lobo! Sempre Alerta!",
    descricao:
      "O lobo vive em matilha, símbolo de lealdade, união e trabalho em equipe. Representa o espírito de grupo e a fraternidade.",
  },
  {
    id: "gaviao",
    nome: "Gavião",
    ramo: "escoteiro",
    cor1: "Azul",
    cor2: "Amarelo",
    cor1Hex: "#1565C0",
    cor2Hex: "#FDD835",
    grito:
      "Voando alto pelo céu, com olhar de gavião,\nVigiando a natureza com muita atenção,\nForte e destemido em qualquer missão,\nPatrulha Gavião, sempre em ação!\nPatrulha Gavião! Sempre Alerta!",
    descricao:
      "O gavião é uma ave de rapina que representa visão aguçada, coragem e habilidade de caça.",
  },
  {
    id: "jaguar",
    nome: "Jaguar",
    ramo: "escoteiro",
    cor1: "Amarelo",
    cor2: "Preto",
    cor1Hex: "#FDD835",
    cor2Hex: "#212121",
    grito:
      "Na mata fechada, com passo certeiro,\nO jaguar é forte, é o grande guerreiro,\nCom garra e coragem, sempre a lutar,\nPatrulha Jaguar, pronta pra brilhar!\nPatrulha Jaguar! Sempre Alerta!",
    descricao:
      "O jaguar (onça-pintada) é o maior felino das Américas. Símbolo de força, poder e conexão com a natureza brasileira.",
  },
  {
    id: "coruja",
    nome: "Coruja",
    ramo: "escoteiro",
    cor1: "Azul",
    cor2: "Branco",
    cor1Hex: "#1565C0",
    cor2Hex: "#FAFAFA",
    grito:
      "Na calada da noite, com sabedoria,\nA coruja enxerga o que ninguém via,\nAtenta e esperta, pronta pra ensinar,\nPatrulha Coruja, sempre a observar!\nPatrulha Coruja! Sempre Alerta!",
    descricao:
      "A coruja é símbolo de sabedoria e conhecimento. Enxerga na escuridão, representando discernimento e prudência.",
  },
  {
    id: "touro",
    nome: "Touro",
    ramo: "escoteiro",
    cor1: "Vermelho",
    cor2: "Preto",
    cor1Hex: "#D32F2F",
    cor2Hex: "#212121",
    grito:
      "Com força e com vigor, avançamos sem temor,\nO touro não recua, é bravo e lutador,\nUnidos na patrulha, um time vencedor,\nPatrulha Touro, cheia de valor!\nPatrulha Touro! Sempre Alerta!",
    descricao:
      "O touro representa força, determinação e resistência. É símbolo de vigor e perseverança diante dos desafios.",
  },
  {
    id: "gato-do-mato",
    nome: "Gato-do-Mato",
    ramo: "escoteiro",
    cor1: "Verde",
    cor2: "Amarelo",
    cor1Hex: "#2E7D32",
    cor2Hex: "#FDD835",
    grito:
      "Silencioso e atento, pelo mato a caminhar,\nO gato-do-mato é ágil, difícil de encontrar,\nCom olhar certeiro e passo ligeiro,\nPatrulha Gato-do-Mato, sempre o primeiro!\nPatrulha Gato-do-Mato! Sempre Alerta!",
    descricao:
      "O gato-do-mato é um felino nativo do Brasil. Ágil e silencioso, representa a conexão com a fauna brasileira.",
  },

  // ═══════════════════════════════════════
  // RAMO SÊNIOR — Tribos Indígenas
  // ═══════════════════════════════════════
  {
    id: "tupi",
    nome: "Tupi",
    ramo: "senior",
    cor1: "Branco",
    cor2: "Vermelho",
    cor1Hex: "#FAFAFA",
    cor2Hex: "#D32F2F",
    grito:
      "Da terra e da floresta, guerreiros de valor,\nO povo Tupi é forte, é bravo e é lutador,\nUnidos pela história, com garra e tradição,\nPatrulha Tupi, firme no coração!\nPatrulha Tupi! Sempre Alerta!",
    descricao:
      "Os Tupis formam um dos maiores grupos indígenas do Brasil. Sua língua influenciou profundamente o português brasileiro.",
  },
  {
    id: "guarani",
    nome: "Guarani",
    ramo: "senior",
    cor1: "Branco",
    cor2: "Verde",
    cor1Hex: "#FAFAFA",
    cor2Hex: "#2E7D32",
    grito:
      "Do litoral às montanhas, o povo Guarani,\nCom fé e resistência, estamos sempre aqui,\nA terra é nossa mãe, a mata nosso lar,\nPatrulha Guarani, prontos pra lutar!\nPatrulha Guarani! Sempre Alerta!",
    descricao:
      "Os Guaranis são um dos povos indígenas mais numerosos do Brasil. Conhecidos por sua espiritualidade e conexão com a terra.",
  },
  {
    id: "apiaka",
    nome: "Apiaká",
    ramo: "senior",
    cor1: "Azul Escuro",
    cor2: "Amarelo",
    cor1Hex: "#1A237E",
    cor2Hex: "#FDD835",
    grito:
      "Valentes e astutos partimos a lutar,\nCom a garra e com a força do índio Apiaká,\nSeremos mais unidos em qualquer lugar!\nPatrulha Apiaká! Sempre Alerta!",
    descricao:
      "Os Apiakás são um povo indígena do Mato Grosso, da família linguística Tupi-Guarani. Conhecidos por sua bravura.",
  },
  {
    id: "bororo",
    nome: "Bororo",
    ramo: "senior",
    cor1: "Vermelho",
    cor2: "Preto",
    cor1Hex: "#D32F2F",
    cor2Hex: "#212121",
    grito:
      "Da terra do cerrado, guerreiros Bororo,\nCom rituais sagrados e tradição de valor,\nFortes e unidos, sempre a caminhar,\nPatrulha Bororo, prontos pra lutar!\nPatrulha Bororo! Sempre Alerta!",
    descricao:
      "Os Bororos habitam o Mato Grosso e são conhecidos por seus elaborados rituais funerários e rica cultura cerimonial.",
  },
  {
    id: "aimore",
    nome: "Aimoré",
    ramo: "senior",
    cor1: "Verde",
    cor2: "Amarelo",
    cor1Hex: "#2E7D32",
    cor2Hex: "#FDD835",
    grito:
      "Bravos e temidos, guerreiros sem igual,\nO povo Aimoré é forte, resistência natural,\nDa mata e da serra, com coragem a marchar,\nPatrulha Aimoré, ninguém vai nos parar!\nPatrulha Aimoré! Sempre Alerta!",
    descricao:
      "Os Aimorés (ou Botocudos) habitavam o sul da Bahia e norte do Espírito Santo. Conhecidos por sua resistência à colonização.",
  },
  {
    id: "pataxo",
    nome: "Pataxó",
    ramo: "senior",
    cor1: "Laranja",
    cor2: "Verde",
    cor1Hex: "#FF9800",
    cor2Hex: "#2E7D32",
    grito:
      "Da Bahia às montanhas, com orgulho e tradição,\nO povo Pataxó é força e união,\nCom dança e com cultura, sempre a celebrar,\nPatrulha Pataxó, prontos pra lutar!\nPatrulha Pataxó! Sempre Alerta!",
    descricao:
      "Os Pataxós vivem no sul da Bahia e norte de Minas Gerais. Conhecidos por suas tradições culturais e artesanato.",
  },
  {
    id: "kayapo",
    nome: "Kayapó",
    ramo: "senior",
    cor1: "Amarelo",
    cor2: "Preto",
    cor1Hex: "#FDD835",
    cor2Hex: "#212121",
    grito:
      "Com pinturas de guerra e cocares a brilhar,\nO povo Kayapó é forte, pronto pra lutar,\nDefensores da floresta, guardiões do lugar,\nPatrulha Kayapó, sempre a avançar!\nPatrulha Kayapó! Sempre Alerta!",
    descricao:
      "Os Kayapós habitam o Pará e Mato Grosso. São reconhecidos mundialmente por sua defesa da floresta amazônica.",
  },
  {
    id: "xavante",
    nome: "Xavante",
    ramo: "senior",
    cor1: "Vermelho",
    cor2: "Branco",
    cor1Hex: "#D32F2F",
    cor2Hex: "#FAFAFA",
    grito:
      "Guerreiros do cerrado, com força e com razão,\nO povo Xavante marcha com determinação,\nCom arco e com flecha, sempre a lutar,\nPatrulha Xavante, prontos pra brilhar!\nPatrulha Xavante! Sempre Alerta!",
    descricao:
      "Os Xavantes vivem no Mato Grosso e são conhecidos por suas corridas de tora e tradições guerreiras.",
  },
  {
    id: "anhamba",
    nome: "Anhambé",
    ramo: "senior",
    cor1: "Azul Claro",
    cor2: "Amarelo",
    cor1Hex: "#42A5F5",
    cor2Hex: "#FDD835",
    grito:
      "Da floresta amazônica, guerreiros sem igual,\nO povo Anhambé é bravo, força natural,\nCom união e coragem, sempre a caminhar,\nPatrulha Anhambé, prontos pra lutar!\nPatrulha Anhambé! Sempre Alerta!",
    descricao:
      "Os Anhambés são um povo indígena do Pará. Seu nome vem do Tupi e significa 'sombra de pássaro'.",
  },
  {
    id: "arara",
    nome: "Arara",
    ramo: "senior",
    cor1: "Cinza",
    cor2: "Amarelo",
    cor1Hex: "#9E9E9E",
    cor2Hex: "#FDD835",
    grito:
      "Com cores vibrantes e espírito guerreiro,\nO povo Arara é forte, é bravo e verdadeiro,\nDa mata e dos rios, com garra a avançar,\nPatrulha Arara, sempre no lugar!\nPatrulha Arara! Sempre Alerta!",
    descricao:
      "Os Araras são um povo indígena do Pará. Seu nome remete à arara, ave símbolo da fauna brasileira.",
  },
]
