# 🏕️ Brand Guideline - Estilo World Scouting
## Para aplicação Next.js

---

## 1. Paleta de Cores

### Cores Primárias

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Scouting Purple** | `#622599` | 98, 37, 153 | Cor principal, headers, CTAs primários |
| **Midnight Purple** | `#4D006E` | 77, 0, 110 | Fundos escuros, hover states |
| **Canvas White** | `#FFFFFF` | 255, 255, 255 | Fundos, textos sobre roxo |

### Cores de Apoio

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| **Blossom Pink** | `#FF8DFF` | 255, 141, 255 | Destaques, badges, elementos decorativos |
| **Fire Red** | `#FF5655` | 255, 86, 85 | Alertas, CTAs de urgência |
| **Ember Orange** | `#FFAE80` | 255, 174, 128 | Avisos, destaques secundários |
| **Ocean Blue** | `#0094B4` | 0, 148, 180 | Links, informações |
| **River Blue** | `#82E6DE` | 130, 230, 222 | Sucesso, badges informativos |
| **Forest Green** | `#248737` | 36, 135, 55 | Sucesso, confirmações |
| **Leaf Green** | `#9FED8F` | 159, 237, 143 | Backgrounds sutis, tags |

### CSS Variables (Tailwind Config)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'scout': {
          'purple': {
            DEFAULT: '#622599',
            'dark': '#4D006E',
            'light': '#7B3DB3',
          },
          'pink': '#FF8DFF',
          'red': '#FF5655',
          'orange': '#FFAE80',
          'blue': {
            'ocean': '#0094B4',
            'river': '#82E6DE',
          },
          'green': {
            'forest': '#248737',
            'leaf': '#9FED8F',
          },
          'white': '#FFFFFF',
          'gray': {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            600: '#4B5563',
            900: '#111827',
          }
        }
      }
    }
  }
}
```

---

## 2. Tipografia

### Fonte Principal: Nunito Sans

```html
<!-- No _document.tsx ou layout.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet" />
```

```css
/* globals.css */
:root {
  --font-primary: 'Nunito Sans', sans-serif;
}

body {
  font-family: var(--font-primary);
}
```

### Hierarquia Tipográfica

| Elemento | Peso | Tamanho | Line Height | Uso |
|----------|------|---------|-------------|-----|
| **H1** | 800 (ExtraBold) | 48px / 3rem | 1.1 | Títulos de página |
| **H2** | 700 (Bold) | 36px / 2.25rem | 1.2 | Seções principais |
| **H3** | 700 (Bold) | 24px / 1.5rem | 1.3 | Subtítulos |
| **H4** | 600 (SemiBold) | 20px / 1.25rem | 1.4 | Cards, destaque |
| **Body** | 400 (Regular) | 16px / 1rem | 1.6 | Texto corrido |
| **Body Small** | 400 (Regular) | 14px / 0.875rem | 1.5 | Legendas, meta |
| **Caption** | 600 (SemiBold) | 12px / 0.75rem | 1.4 | Labels, tags |

```js
// tailwind.config.js - Typography
fontSize: {
  'display': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
  'h1': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
  'h2': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
  'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
  'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
  'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '600' }],
}
```

---

## 3. Padrões de Layout

### Estilo "Layered" (Sobreposição)

O estilo World Scouting usa **camadas sobrepostas** de roxo e branco, criando profundidade visual.

```tsx
// Componente Hero com sobreposição
const HeroSection = () => (
  <section className="relative bg-scout-purple overflow-hidden">
    {/* Camada de fundo com gradiente */}
    <div className="absolute inset-0 bg-gradient-to-br from-scout-purple-dark to-scout-purple" />
    
    {/* Elemento decorativo branco sobreposto */}
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    <div className="absolute top-10 -left-10 w-64 h-64 bg-scout-pink/20 rounded-full blur-2xl" />
    
    {/* Conteúdo */}
    <div className="relative z-10 container mx-auto px-6 py-20">
      <h1 className="text-white text-display">Título Principal</h1>
    </div>
  </section>
)
```

### Cards com Contraste

```tsx
// Card padrão com hover roxo
const ScoutCard = ({ title, description, icon }) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:bg-scout-purple transition-all duration-300 cursor-pointer">
    {/* Ícone com fundo roxo que inverte no hover */}
    <div className="w-14 h-14 rounded-xl bg-scout-purple/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
      <span className="text-scout-purple group-hover:text-white text-2xl transition-colors">
        {icon}
      </span>
    </div>
    
    <h3 className="text-h3 text-gray-900 group-hover:text-white mb-2 transition-colors">
      {title}
    </h3>
    <p className="text-body text-gray-600 group-hover:text-white/80 transition-colors">
      {description}
    </p>
  </div>
)
```

---

## 4. Componentes de UI

### Botões

```tsx
// Botão Primário
const ButtonPrimary = ({ children, ...props }) => (
  <button 
    className="bg-scout-purple hover:bg-scout-purple-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-scout-purple/30"
    {...props}
  >
    {children}
  </button>
)

// Botão Secundário (outline)
const ButtonSecondary = ({ children, ...props }) => (
  <button 
    className="border-2 border-scout-purple text-scout-purple hover:bg-scout-purple hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
    {...props}
  >
    {children}
  </button>
)

// Botão Ghost (sobre fundo roxo)
const ButtonGhost = ({ children, ...props }) => (
  <button 
    className="border-2 border-white text-white hover:bg-white hover:text-scout-purple font-semibold px-6 py-3 rounded-full transition-all duration-200"
    {...props}
  >
    {children}
  </button>
)
```

### Tags/Badges

```tsx
const Badge = ({ variant = 'purple', children }) => {
  const variants = {
    purple: 'bg-scout-purple/10 text-scout-purple',
    pink: 'bg-scout-pink/20 text-scout-purple-dark',
    green: 'bg-scout-green-leaf/30 text-scout-green-forest',
    blue: 'bg-scout-blue-river/30 text-scout-blue-ocean',
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-semibold ${variants[variant]}`}>
      {children}
    </span>
  )
}
```

### Ícones com Fundo

```tsx
// Padrão de ícone com fundo circular/quadrado arredondado
const IconBox = ({ icon, variant = 'light' }) => {
  const variants = {
    light: 'bg-scout-purple/10 text-scout-purple',
    dark: 'bg-scout-purple text-white',
    white: 'bg-white text-scout-purple',
    ghost: 'bg-white/20 text-white',
  }
  
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variants[variant]}`}>
      {icon}
    </div>
  )
}
```

---

## 5. Padrões de Seção

### Seção Clara (Fundo Branco)

```tsx
<section className="bg-white py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-h1 text-scout-purple text-center mb-4">Título da Seção</h2>
    <p className="text-body text-gray-600 text-center max-w-2xl mx-auto mb-12">
      Descrição da seção
    </p>
    {/* Conteúdo */}
  </div>
</section>
```

### Seção Roxa (Fundo Escuro)

```tsx
<section className="bg-scout-purple py-20 relative overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute top-0 right-0 w-80 h-80 bg-scout-pink/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-scout-purple-dark/50 rounded-full blur-3xl" />
  
  <div className="container mx-auto px-6 relative z-10">
    <h2 className="text-h1 text-white text-center mb-4">Título da Seção</h2>
    <p className="text-body text-white/80 text-center max-w-2xl mx-auto mb-12">
      Descrição da seção
    </p>
    {/* Conteúdo com cards brancos */}
  </div>
</section>
```

### Seção Gradiente

```tsx
<section className="bg-gradient-to-br from-scout-purple via-scout-purple-dark to-scout-purple py-20">
  {/* Conteúdo */}
</section>
```

---

## 6. Navegação

### Header

```tsx
const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-scout-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">⚜️</span>
          </div>
          <span className="font-bold text-scout-purple text-lg">Scout</span>
        </div>
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-scout-purple font-medium transition-colors">
            Início
          </a>
          <a href="#" className="text-gray-600 hover:text-scout-purple font-medium transition-colors">
            Sobre
          </a>
          <a href="#" className="text-gray-600 hover:text-scout-purple font-medium transition-colors">
            Atividades
          </a>
        </nav>
        
        {/* CTA */}
        <button className="bg-scout-purple text-white px-5 py-2 rounded-full font-semibold hover:bg-scout-purple-dark transition-colors">
          Participar
        </button>
      </div>
    </div>
  </header>
)
```

---

## 7. Efeitos e Animações

### Hover States

```css
/* Transições suaves padrão */
.scout-transition {
  @apply transition-all duration-300 ease-out;
}

/* Efeito de elevação no hover */
.scout-lift {
  @apply hover:-translate-y-1 hover:shadow-xl transition-all duration-300;
}

/* Efeito de brilho roxo */
.scout-glow {
  @apply hover:shadow-lg hover:shadow-scout-purple/25;
}
```

### Gradientes Úteis

```css
/* Gradiente principal */
.gradient-scout {
  background: linear-gradient(135deg, #622599 0%, #4D006E 100%);
}

/* Gradiente com pink */
.gradient-scout-pink {
  background: linear-gradient(135deg, #622599 0%, #FF8DFF 100%);
}

/* Overlay para imagens */
.overlay-scout {
  background: linear-gradient(180deg, rgba(98, 37, 153, 0) 0%, rgba(98, 37, 153, 0.9) 100%);
}
```

---

## 8. Responsividade

### Breakpoints Recomendados

```js
// tailwind.config.js
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

### Container

```js
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    sm: '1.5rem',
    lg: '2rem',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
}
```

---

## 9. Acessibilidade

### Contraste de Cores

| Combinação | Ratio | Status |
|------------|-------|--------|
| Roxo (#622599) sobre Branco | 7.5:1 | ✅ AAA |
| Branco sobre Roxo (#622599) | 7.5:1 | ✅ AAA |
| Roxo escuro (#4D006E) sobre Branco | 10.2:1 | ✅ AAA |
| Rosa (#FF8DFF) sobre Roxo escuro | 5.8:1 | ✅ AA |

### Focus States

```css
/* Focus ring padrão */
.scout-focus {
  @apply focus:outline-none focus:ring-2 focus:ring-scout-purple focus:ring-offset-2;
}

/* Focus para elementos sobre roxo */
.scout-focus-light {
  @apply focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-scout-purple;
}
```

---

## 10. Exemplo Completo - Página

```tsx
// pages/index.tsx
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-scout-purple min-h-[70vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-scout-purple-dark/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-scout-pink/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏕️ Grupo Escoteiro Aldebarã
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Aventura, amizade e aprendizado
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Junte-se a nós e descubra um mundo de possibilidades para jovens exploradores.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-scout-purple px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Inscreva-se
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-scout-purple transition-colors">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-scout-purple text-center mb-12">
            Por que ser escoteiro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards aqui */}
          </div>
        </div>
      </section>
    </main>
  )
}
```

---

## Resumo Rápido

| Elemento | Valor |
|----------|-------|
| **Cor Principal** | `#622599` (Scouting Purple) |
| **Cor Escura** | `#4D006E` (Midnight Purple) |
| **Cor de Destaque** | `#FF8DFF` (Blossom Pink) |
| **Fonte** | Nunito Sans |
| **Border Radius** | `rounded-xl` (12px) / `rounded-full` (botões) |
| **Sombras** | Sutis, com tint roxo no hover |
| **Estilo** | Clean, layered, contraste roxo/branco |

---

*Guideline criado para aplicação Next.js com Tailwind CSS*
