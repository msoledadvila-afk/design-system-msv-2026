# Design System — María Soledad Vila

> Sistema de diseño unificado para **Portfolio personal** (Vibe Coder & Arquitecta Digital) y **Talento Impulsa Consulting** (Modelo PCA™ — Productividad Consciente Aumentada).

[![Versión](https://img.shields.io/badge/versión-1.0.0-C4907C)](#)
[![Estado](https://img.shields.io/badge/estado-activo-7A9472)](#)
[![Marcas](https://img.shields.io/badge/marcas-2-9A7B3D)](#)

---

## 🎯 Filosofía

> *"No enseñamos herramientas. Diseñamos estructuras."*

Dos sub-marcas hermanas que comparten **estructura técnica** pero hablan **lenguajes visuales diferenciados**. Mismos tokens, distintos valores. Una arquitectura escalable: cuando sumemos un tercer producto, solo agregamos `data-brand="x"` y todo el sistema sigue funcionando.

---

## 🌐 Showroom interactivo

Abrí el design system navegable, con switch entre sub-marcas, copia de HEX al click y descarga de archivos:

**👉 [Ver showroom en vivo](./design-system.html)**

> Si estás viendo este repo en GitHub.com, hacé click en `design-system.html` y después en "Open raw" o descargalo y abrilo en tu navegador. Para ver la versión navegable directa, ver sección "GitHub Pages" más abajo.

---

## 📦 Archivos

| Archivo | Para qué sirve |
|---|---|
| **[`design-system.html`](./design-system.html)** | Showroom navegable autocontenido. Para ver el sistema en acción. |
| **[`tokens.json`](./tokens.json)** | Source of truth en formato W3C Design Tokens. Lo entienden Figma Tokens, Style Dictionary, v0, Cursor. |
| **[`tokens.css`](./tokens.css)** | Variables CSS listas para pegar. Aplicás `data-brand="portfolio"` o `"talento"` en `<html>` y todo se resuelve. |
| **[`tailwind.config.js`](./tailwind.config.js)** | Tema Tailwind extendido. Para proyectos React/Vite/Next con Tailwind. |
| **[`prompts-para-ia.md`](./prompts-para-ia.md)** | Prompts pre-armados para v0, Lovable, Bolt, Cursor, Claude. El sistema viaja con vos. |

---

## 🎨 Sub-marcas

### Portfolio · Vibe Coder & Arquitecta Digital
- **Color de marca:** `#C4907C` terracota
- **Fondo:** `#F5F2F0` beige cálido
- **Tipografía:** Syne (display) + Outfit (body)
- **Personalidad:** cálida, artesanal, humana, editorial

### Talento Impulsa Consulting · Modelo PCA™
- **Color de marca:** `#9A7B3D` dorado mostaza
- **Fondo:** `#EFE9DB` crema institucional
- **Tipografía:** Outfit (display+body) + Cormorant Garamond italic (decorativa)
- **Personalidad:** institucional, autoritativa, tono de tesis

---

## 🚀 Uso rápido

### En un proyecto HTML/CSS vanilla

```html
<!DOCTYPE html>
<html lang="es" data-brand="portfolio">
<head>
  <link rel="stylesheet" href="tokens.css">
</head>
<body>
  <h1 style="font-family: var(--font-display); color: var(--brand-deep);">
    Hola
  </h1>
</body>
</html>
```

### En un proyecto Tailwind

```js
// tailwind.config.js (copiá el del repo)
module.exports = require('./tailwind.config.js');
```

```jsx
<body data-brand="portfolio">
  <button className="bg-brand text-white rounded-pill px-8 py-3">
    CTA
  </button>
</body>
```

### Con una IA generativa (v0, Lovable, Cursor, Claude)

1. Abrí [`prompts-para-ia.md`](./prompts-para-ia.md)
2. Copiá el bloque de identidad de la sub-marca correspondiente
3. Pegalo al inicio de tu conversación con la IA
4. Pedí lo que necesitás — la IA va a generar código alineado al sistema

---

## 🌍 GitHub Pages

Para ver el showroom como sitio web público navegable:

1. **Settings → Pages** del repo
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` · **Folder:** `/ (root)`
4. **Save**

En 1-2 minutos vas a tener:
```
https://msoledadvila-afk.github.io/design-system-msv-2026/
```

---

## 📐 Estructura técnica

```
design-system-msv-2026/
├── index.html              # Portada
├── design-system.html      # Showroom navegable
├── tokens.json             # W3C Design Tokens
├── tokens.css              # Variables CSS
├── tailwind.config.js      # Tema Tailwind
├── prompts-para-ia.md      # Prompts para IAs
├── README.md               # Este archivo
└── LICENSE                 # MIT
```

### Decisiones arquitectónicas

- **Token-based, no clase-based.** Las decisiones viven en `tokens.json` — el resto se genera o se sincroniza.
- **Una sola fuente de verdad** para colores, tipografía, spacing y motion.
- **Sub-marcas vía atributo HTML**, no via clase ni archivo separado. Cambiar `data-brand` es suficiente para cambiar todo el contexto visual.
- **Fonts desde Google Fonts**, no autohosteadas — performance y simplicidad.
- **Sin frameworks pesados** en el showroom. HTML + CSS + JS vanilla. El sistema vive más allá de la moda de un framework.

---

## 🛠️ Roadmap

- [x] v1.0 — Foundations completas, 2 sub-marcas, showroom interactivo
- [ ] v1.1 — Componentes adicionales (forms, navs, modals)
- [ ] v1.2 — Modo dark del portfolio personal
- [ ] v1.3 — Tokens en formato Style Dictionary para sincronizar con Figma
- [ ] v2.0 — Sistema de iconografía propio

---

## 👤 Sobre

**María Soledad Vila** — Vibe Coder & Arquitecta Digital · Fundadora de [Talento Impulsa Consulting](https://talentoimpulsa.com.ar).

Construyo aplicaciones web que integran IA de forma nativa, devolviendo el control a cada organización.

- 🌐 [mariasoledadvila.com.ar](https://mariasoledadvila.com.ar) · hola@mariasoledadvila.com.ar
- 🌐 [talentoimpulsa.com.ar](https://talentoimpulsa.com.ar) · hola@talentoimpulsa.com.ar

---

## 📄 Licencia

MIT — ver [`LICENSE`](./LICENSE).

Sentite libre de inspirarte. Si lo usás como base, una mención no estaría de más 🙂
