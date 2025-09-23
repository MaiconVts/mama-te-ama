# Projeto Mama-Te-Ama ❤️

Este repositório contém o código-fonte de uma página web criada como uma homenagem e presente. O projeto foca em um design minimalista, romântico e em interações dinâmicas para contar uma história através de fotos e memórias.

---

## 📂 Estrutura de Arquivos

A organização dos arquivos do projeto segue a estrutura abaixo:
```
mama-te-ama/
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── clique-aqui.css
│   │   └── te-amo.css
│   │
│   ├── 📂 img/
│   │   ├── 📂 design/
│   │   │   └── (Futuros arquivos de design aqui)
│   │   │
│   │   └── 📂 fotos/
│   │       └── oi.png
│   │
│   └── 📂 js/
│       └── script.js
│
├── 📄 clique-aqui.html
├── 📄 te-amo.html
└── 📄 README.md
```
*(Nota: O arquivo `te-amo.html` é a página principal para onde o botão irá levar).*

---

## 🎨 Creative Briefing

### 1. Conceito
O projeto é uma "Linha do Tempo Afetiva" em formato de *one-page scroll*. A navegação é uma jornada vertical que revela "estações de memória", combinando imagens flutuantes com textos minimalistas em um layout alternado.

### 2. Paleta de Cores
| Papel | Cor | Hex Code |
| :--- | :--- | :--- |
| **Fundo Principal** | Branco "Casca de Ovo" | `#FDFBF5` |
| **Texto Principal** | Grafite | `#333333` |
| **Destaques/Títulos**| Vinho | `#8B0000` |
| **Detalhes de Luxo**| Dourado | `#D4AF37` |
| **Tom Romântico** | Rosa Queimado | `#D9A9A9` |
| **Ponto de Luz** | Vermelho Rubi | `#C70039` |
| **Base Profunda** | Vermelho Sombra | `#640000` |
| **Brilho Intenso** | Vermelho Brasa | `#FF5733` |

### 3. Tipografia (Google Fonts)
- **Títulos Principais (`h1`, `h2`):** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Textos e Parágrafos (`p`):** [Raleway](https://fonts.google.com/specimen/Raleway)
- **Detalhes e Assinaturas:** [Dancing Script](https://fonts.google.com/specimen/Dancing+Script)

---

## 🛠️ Ferramentas e Recursos

### Assets e Design
- **Remoção de Fundo de Imagens:** [remove.bg](https://www.remove.bg/)
- **Backgrounds e Formas Vetoriais:** [Haikei](https://app.haikei.app/)
- **Otimização de Imagens:** [TinyPNG](https://tinypng.com/)
- **✨ Gerador de Gradientes (Novo):** [CSS Gradient](https://cssgradient.io/) - Uma ferramenta visual incrível para criar e customizar gradientes. Você escolhe as cores, o estilo, e ele gera o código CSS pronto para você copiar.

---

## 🚀 Plano de Desenvolvimento Modular

O projeto será construído em etapas para garantir a qualidade de cada componente.

- [x] **Módulo 1: Página de Entrada** - O convite inicial. (`clique-aqui.html` + `assets/css/clique-aqui.css`)
- [ ] **Módulo 2: Estrutura da Página Principal** - Setup do header e footer. (`te-amo.html` + `assets/css/te-amo.css`)
- [ ] **Módulo 3: Seções de Memória** - Criação das `divs` alternadas com texto e imagens.
- [ ] **Módulo 4: Efeitos Visuais Avançados** - Implementação de Parallax, animações de entrada e `keyframes`.
- [ ] **Módulo 5: Interatividade com JS** - Player de música e outras surpresas (`assets/js/script.js`).
- [ ] **Módulo 6: Responsividade e Otimização Final** - Media queries e polimento para dispositivos móveis.

---

## ✨ Inspiração para Gradientes

Aqui estão alguns modelos de gradientes usando nossa paleta completa para referência futura. Eles podem ser usados em fundos de página, cards ou outros elementos.

```css
/* --- Modelo 1: Noite Intensa (Linear) --- */
/* Um gradiente escuro e dramático, ideal para a página de entrada. */
.gradiente-noite {
    background: linear-gradient(160deg, #640000, #8B0000, #C70039);
}

/* --- Modelo 2: Pôr do Sol Romântico (Linear) --- */
/* Um gradiente mais suave e quente, usando os tons de rosa e dourado. */
.gradiente-por-do-sol {
    background: linear-gradient(45deg, #D9A9A9, #C70039, #D4AF37);
}

/* --- Modelo 3: Brasa Ardente (Radial) --- */
/* Um gradiente radial com um centro vibrante e bordas escuras. */
.gradiente-brasa {
    background: radial-gradient(circle, #FF5733, #C70039, #640000);
}

/* --- Modelo 4: Toque de Luxo (Radial) --- */
/* Um gradiente radial que cria um ponto de luz dourado. Sutil e elegante. */
.gradiente-luxo {
    background: radial-gradient(circle, #D4AF37, #8B0000);
}

/* --- Modelo 5: Amanhecer Suave (Linear) --- */
/* Usa o fundo "Casca de Ovo" e o "Rosa Queimado" para um efeito muito delicado. */
.gradiente-amanhecer {
    background: linear-gradient(180deg, #FDFBF5, #D9A9A9);
}

/* --- Modelo 6: Metal Cônico (Conic) --- */
/* Simula o efeito de metal escovado radial, ideal para fundos com textura. */
.gradiente-metal-conico {
    background: conic-gradient(from 90deg, #960000, #f72020 15%, #960000 50%, #f72020 65%, #960000);
}