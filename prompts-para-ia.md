# Prompts listos para IAs

> **Cómo usar este archivo:** Cada bloque de abajo está pensado para copiarse y pegarse en un prompt. La idea es que tu design system viaje contigo cuando construís en v0.dev, Lovable, Bolt, Cursor o conversaciones nuevas con Claude.
>
> **Regla de oro:** siempre pegá primero el bloque "Identidad de marca" correspondiente, después tu pedido específico. Eso evita que la IA invente colores o tipografías.

---

## 📦 BLOQUE 1 — Identidad de marca · PORTFOLIO (Vibe Coder)

> Pegar al inicio de cualquier prompt cuando trabajes en algo del portfolio personal.

```
Trabajo bajo el design system "Portfolio María Soledad Vila — Vibe Coder & Arquitecta Digital".

PALETA (usar exactos, no improvisar):
- Marca primaria: #C4907C (terracota)
- Marca suave:   #D4A797 (terracota clara, hover/gradientes)
- Marca profunda: #A87464 (botones presionados, énfasis)
- Fondo principal: #F5F2F0 (beige cálido)
- Fondo alterno:   #EAE5E1
- Card / superficie elevada: #FFFFFF
- Borde: #DDD7D2
- Texto principal: #2C2A2E (no negro puro, casi negro cálido)
- Texto secundario: #7A7580
- Acentos extendidos (usar con moderación): #ABB7A3 sage, #A48997 lavender, #1E2A47 navy, #DAD2BB sand

TIPOGRAFÍA:
- Display (titulares): 'Syne', sans-serif — pesos 700/800
- Body (cuerpo + UI): 'Outfit', sans-serif — pesos 300/400/500/600
- Cargar: https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@400;600;700;800&display=swap

PERSONALIDAD VISUAL:
- Cálida, artesanal, humana — NO corporate-tech
- Bordes redondeados generosos: 16px default (--radius), 24px en cards grandes, pill (9999px) en botones
- Sombras con tinte terracota, no grises: 0 8px 24px rgba(196,144,124,0.12)
- Animaciones suaves con fade-up y blobs radiales pulsando como halos de marca
- Layout: max-width 1100px, padding generoso (96px sección desktop, 64px mobile)
- Tono editorial, no dashboard. Usa generous negative space.

EVITAR ABSOLUTAMENTE:
- Inter, Roboto, Arial, system fonts
- Gradientes purple-on-white (cliché AI)
- Bordes 4px o 8px (institucional, no corresponde)
- Azul corporate, verde fluo, amarillo vibrante
- Layouts simétricos rígidos: preferir asimetría cálida
```

---

## 📦 BLOQUE 2 — Identidad de marca · TALENTO IMPULSA (institucional)

> Pegar al inicio de cualquier prompt cuando trabajes en algo de Talento Impulsa Consulting.

```
Trabajo bajo el design system "Talento Impulsa Consulting — Productividad Consciente Aumentada (PCA™)".

PALETA (usar exactos):
- Marca primaria: #9A7B3D (dorado mostaza, para titulares decorativos)
- Marca suave:   #B8995A
- Marca profunda: #75582A
- Fondo crema:  #EFE9DB (principal)
- Fondo piedra: #DDD8D4 (secundario)
- Fondo cálido: #E3D7D2 (bloques editoriales)
- Card: #FFFFFF
- Borde: #C8C0B5
- Texto: #1A1814 (negro cálido institucional)
- Texto secundario: #6E6859

ESCALA TIERRA (para tarjetas de niveles, tags, jerarquías):
- Tier 1 (más claro, premium): #E3D7D2
- Tier 2: #BFABA2
- Tier 3: #8C7D7A
- Tier 4 (más oscuro, base): #684B45
- Tier 5 (carbón, contraste): #3B3935

MODO DARK (solo para portadas dramáticas tipo hero):
- Fondo: #0A0A0A (negro profundo)
- Superficie: #1A1612
- Acento luz: #1F4A52 (verde petróleo)
- Acento dorado luminoso: #D4B062

TIPOGRAFÍA:
- Display + body: 'Outfit', sans-serif (cohesión institucional, una sola familia, pesos diferenciados)
- Decorativa cursiva (citas, frases-tesis, firma): 'Cormorant Garamond', serif italic
- Cargar: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap

PERSONALIDAD VISUAL:
- Institucional pero NO frío. Cálido y autoritativo.
- Bordes conservadores: 4-8px en cards, 12px en botones, pill solo en CTAs principales
- Sombras grises neutras y suaves: 0 8px 20px rgba(26,24,20,0.08)
- Tono editorial / documento de tesis: mucho aire, jerarquías claras, citas en cursiva
- Aprovechar contrast dark→light: hero dramático, cuerpo cálido y claro

EVITAR:
- Azul corporativo o navy puro como dominante (no es la marca)
- Sombras coloreadas (eso es portfolio, no acá)
- Gradientes saturados
- Múltiples acentos simultáneos: dorado mostaza es el ÚNICO color de marca

CONCEPTO CENTRAL: "No enseñamos herramientas. Diseñamos estructuras." Modelo PCA™ = Sistema + Delegación Inteligente + Liderazgo Consciente.
```

---

## 🛠️ PROMPTS POR CASO DE USO

### Landing page nueva (Portfolio)

```
[Pegar BLOQUE 1 arriba]

Construime una landing page de una sola página para promocionar [PRODUCTO X].

Estructura:
1. Hero con tag pequeño en uppercase (--tracking-widest), titular display Syne con la palabra clave en gradiente terracota, subtítulo Outfit, dos stats grandes con números display
2. Sección "sobre" en grid 2 columnas (titular display + lista de servicios con dots terracota)
3. Sección de cards 3 columnas con icono emoji en bg pill terracota, titular Syne, body Outfit
4. CTA final centered con botón pill terracota + botón secundario con borde

Animaciones: fade-up escalonado en hero (delays 0.2s/0.4s/0.6s/0.8s), reveal on scroll para resto de secciones, blob radial pulsando suave detrás del hero.

Mobile-first. Single HTML file, sin frameworks externos.
```

### Sección de producto / case study (Portfolio)

```
[Pegar BLOQUE 1]

Diseñá una sección "Producto en acción" con grid de 2 columnas:
- Card izquierda: video preview 16:9 con autoplay on hover (muted/loop/playsinline), fallback placeholder
- Card derecha: label uppercase terracota (.label-eyebrow), titular Syne, descripción Outfit, lista de features con checks

Sombra .shadow-md de portfolio en hover. Border-radius 16px en cards. Las cards "elevan" en hover (translateY(-4px)).
```

### Pitch deck slide (Talento Impulsa)

```
[Pegar BLOQUE 2]

Diseñá una slide HTML 16:9 (1920x1080) para una presentación con esta estructura:
- Background crema #EFE9DB
- Esquina superior izquierda: marca "TALENTO IMPULSA" en Outfit semibold pequeño + "Consulting" en Cormorant italic debajo
- Centro: titular Outfit 60px bold "Modelo PCA™"
- Bajo titular: 3 columnas con iconos de columnas griegas, bajo cada columna nombre del pilar en Outfit uppercase con tracking-widest, descripción corta debajo
- Footer izquierdo: cita en Cormorant italic dorado mostaza #9A7B3D

La estética debe ser editorial-tesis, NO startup-pitch.
```

### Componente: Card de servicio (Talento Impulsa)

```
[Pegar BLOQUE 2]

Creame un componente React de "Card de Servicio Tier" que reciba props {tier, title, description}.

Tier 1, 2, 3, 4 mapean a colores --earth-tier-1 hasta --earth-tier-4.
Background del card = color del tier.
Texto siempre legible: tier 1-2 → texto #1A1814, tier 3-4 → texto blanco.
Border-radius 8px. Padding 32px. Sombra .shadow-talento-md en hover.
Titular en Outfit bold 24px. Descripción Outfit regular 16px line-height 1.65.
```

### Botón CTA (cualquiera)

```
[Pegar el bloque que corresponda]

Botón primario:
- Background: var(--brand-primary-deep)
- Color: white
- Padding: 14px 32px
- Border-radius: 9999px (pill)
- Font: Outfit 14px medium
- Hover: translateY(-2px), shadow-md de la marca
- Transition 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Dashboard interno / app web (Portfolio + IA)

```
[Pegar BLOQUE 1]

Construime un dashboard interno para [USO]. Es una app de productividad con IA integrada nativa.

Layout:
- Sidebar 240px izquierda (bg-card blanco, border derecho, items con icono lucide + label Outfit)
- Header sticky (bg con backdrop-blur, breadcrumb left, search center, avatar right)
- Main: cards con datos, charts con paleta sage/lavender/sand del accent (no neón)

Usá React + Tailwind. Importá los tokens del tailwind.config.js como [data-brand="portfolio"].

Filosofía PCA™ aplicada: la IA propone, el humano confirma. Cada acción automatizada debe tener un botón "revisar" antes de ejecutar.
```

---

## 🎯 PROMPT MAESTRO (todo el sistema en uno solo)

> Pegar este prompt cuando arranques una sesión nueva con Claude/Cursor/Cody y querés que entiendan TODO el sistema sin tener que ir bloque por bloque.

```
Sos mi asistente de diseño y desarrollo. Trabajo bajo dos sub-marcas hermanas con un design system unificado:

═══ SUB-MARCA A: PORTFOLIO (Vibe Coder & Arquitecta Digital) ═══
Color marca: #C4907C terracota (soft #D4A797, deep #A87464)
Fondo: #F5F2F0 beige cálido | Card: blanco | Borde: #DDD7D2
Texto: #2C2A2E (text-dim #7A7580)
Acentos: #ABB7A3 sage / #A48997 lavender / #1E2A47 navy / #DAD2BB sand
Tipo: Syne display + Outfit body
Radius default: 16px | Sombras con tinte terracota
Personalidad: cálida, artesanal, humana, editorial

═══ SUB-MARCA B: TALENTO IMPULSA CONSULTING (institucional) ═══
Color marca: #9A7B3D dorado mostaza (soft #B8995A, deep #75582A)
Fondo: #EFE9DB crema | Stone: #DDD8D4 | Card: blanco
Texto: #1A1814 (text-dim #6E6859)
Escala tierra (5 niveles): #E3D7D2 → #BFABA2 → #8C7D7A → #684B45 → #3B3935
Modo dark hero: bg #0A0A0A, teal #1F4A52, gold #D4B062
Tipo: Outfit (display+body) + Cormorant Garamond italic (decorativa)
Radius default: 8px | Sombras grises neutras
Personalidad: institucional cálida, autoridad, tono de tesis

═══ TOKENS COMPARTIDOS ═══
Spacing: múltiplos de 4 (1rem=16px base)
Escala tipo: xs/sm/base/md/lg/xl/2xl(30)/3xl(36)/4xl(48)/5xl(60)/6xl(72)
Container max: 1100px
Motion: 200ms fast / 300ms base / 800ms reveals
Easing: cubic-bezier(0.4,0,0.2,1) standard, cubic-bezier(0.34,1.56,0.64,1) organic

═══ REGLAS ═══
- Siempre que algo sea "para mi portfolio personal" o mencione "Vibe Coder" → SUB-MARCA A
- Siempre que sea "para Talento Impulsa", "PCA", "consultoría" → SUB-MARCA B
- Nunca uses Inter, Roboto, Arial. Nunca purple gradients. Nunca azul corporativo.
- Default a paleta cálida; los acentos se usan con moderación.
- Argentina ES, idioma rioplatense ("vos" no "tú", "querés" no "quieres").
- Primero preguntame qué sub-marca antes de elegir paleta si no lo aclaro.

¿Para qué sub-marca trabajamos hoy?
```

---

## 🧪 Mini-promtps de utilidad

### Generar variaciones de color con la paleta

```
Necesito 5 colores que armonicen con [HEX X] dentro de mi design system de portfolio (paleta cálida #C4907C/#F5F2F0/#7A7580). Devolvé HEX y caso de uso sugerido.
```

### Verificar contraste WCAG

```
Verificá contraste WCAG AA y AAA para body 16px y headings 24px+ entre estos pares:
- #2C2A2E sobre #F5F2F0 (portfolio body sobre bg)
- #FFFFFF sobre #C4907C (portfolio CTA)
- #1A1814 sobre #EFE9DB (talento body sobre bg)
- #FFFFFF sobre #9A7B3D (talento CTA)
- #FFFFFF sobre #684B45 (talento earth tier 4)
Devolvé ratio numérico y pass/fail.
```

### Adaptar componente entre marcas

```
Tomá este componente diseñado para [SUB-MARCA A] y adaptalo a [SUB-MARCA B] manteniendo estructura pero cambiando paleta, tipografía, radius y sombra. NO cambies el HTML semántico ni los breakpoints.

[Pegar componente]
```
