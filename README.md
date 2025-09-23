# Projeto Afeto: Uma Jornada Visual Interativa

Este repositório contém o código-fonte de uma página web criada como uma homenagem e presente. O projeto foca em um design minimalista, romântico e em interações dinâmicas para contar uma história através de fotos e memórias.

---

## 🎨 Creative Briefing

### 1. Conceito
O projeto é uma "Linha do Tempo Afetiva" em formato de *one-page scroll*. A navegação é uma jornada vertical que revela "estações de memória", combinando imagens flutuantes com textos minimalistas em um layout alternado, criando um ritmo visual poético.

### 2. Paleta de Cores
| Papel | Cor | Hex Code |
| :--- | :--- | :--- |
| **Fundo Principal** | Branco "Casca de Ovo" | `#FDFBF5` |
| **Texto Principal** | Grafite | `#333333` |
| **Destaques/Títulos**| Vinho | `#8B0000` |
| **Detalhes de Luxo**| Dourado | `#D4AF37` |
| **Tom Romântico** | Rosa Queimado | `#D9A9A9` |

### 3. Tipografia (Google Fonts)
- **Títulos Principais (`h1`, `h2`):** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Textos e Parágrafos (`p`):** [Raleway](https://fonts.google.com/specimen/Raleway)
- **Detalhes e Assinaturas:** [Dancing Script](https://fonts.google.com/specimen/Dancing+Script)

---

## 🛠️ Ferramentas e Recursos

### Essenciais
- **Editor de Código:** Visual Studio Code
- **Controle de Versão:** Git & GitHub
- **Hospedagem (Sugestão):** GitHub Pages, Vercel, Netlify (todos gratuitos para projetos estáticos)

### Assets e Design
- **Remoção de Fundo de Imagens:** [remove.bg](https://www.remove.bg/)
- **Backgrounds e Formas Vetoriais:** [Haikei](https://app.haikei.app/)
- **Padrões de Fundo SVG:** [SVGBackgrounds.com](https://www.svgbackgrounds.com/)
- **Otimização de Imagens:** [TinyPNG](https://tinypng.com/) (essencial para a página carregar rápido!)

---

## 🚀 Plano de Desenvolvimento Modular

O projeto será construído em etapas para garantir a qualidade de cada componente.

- [x] **Módulo 1: Página de Entrada** - O convite inicial. (`index.html` + `style-entrada.css`)
- [ ] **Módulo 2: Estrutura da Página Principal** - Setup dos arquivos, header e footer. (`principal.html` + `style-principal.css`)
- [ ] **Módulo 3: Seções de Memória** - Criação das `divs` alternadas com texto e imagens.
- [ ] **Módulo 4: Efeitos Visuais Avançados** - Implementação de Parallax, animações de entrada e `keyframes`.
- [ ] **Módulo 5: Interatividade com JS** - Galeria de fotos, player de música customizado.
- [ ] **Módulo 6: Responsividade e Otimização Final** - Media queries e polimento para dispositivos móveis.

---

## ✨ Ideias para Efeitos Avançados (CSS & JS)

Esta seção é nosso laboratório de ideias para quando formos adicionar a "mágica".

### CSS Animations & Keyframes
- **Efeito de "Desenho":** Usar `stroke-dasharray` e `stroke-dashoffset` para animar bordas douradas ou traços de fundo em SVG, fazendo parecer que estão sendo desenhados na tela.
- **Texto Revelado:** Animar um gradiente no texto (`background-clip: text`) para um efeito de brilho passando sobre as palavras.
- **Animação de Entrada para Seções:** Cada seção de memória pode surgir na tela com um `transform: translateY(50px)` e `opacity: 0` que se tornam `translateY(0)` e `opacity: 1` quando visíveis.

### Parallax
- **Parallax de Fundo:** Um background sutil (talvez de estrelas ou pontos de luz) que se move mais devagar que o conteúdo principal.
- **Parallax de Múltiplas Camadas:** As imagens flutuantes em uma mesma seção podem ter velocidades de parallax diferentes (`data-rellax-speed="-1"`, `data-rellax-speed="2"`), criando uma incrível sensação de profundidade 3D.

### Interatividade
- **Cursor Personalizado:** Mudar o cursor do mouse para um ponto dourado ou um pequeno coração.
- **Efeito "Reveal on Scroll":** Uma imagem pode começar em preto e branco e se tornar colorida conforme o usuário rola a página sobre ela.
- **Card de Música Interativo:** O card pode ter um efeito de vinil girando (usando `animation: spin`) quando a música está tocando.