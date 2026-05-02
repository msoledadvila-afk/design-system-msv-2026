/** @type {import('tailwindcss').Config} */
// ============================================================
// DESIGN SYSTEM — María Soledad Vila
// Configuración Tailwind con ambas sub-marcas como variantes
// ============================================================
//
// USO:
//   1. Pegar este archivo como tailwind.config.js
//   2. En tu HTML/JSX, aplicar data-brand="portfolio" o
//      data-brand="talento" en <html> o <body>
//   3. Las clases bg-brand, text-brand, etc. se resuelven solas
//   4. Para clases específicas: bg-portfolio-primary, bg-talento-earth-tier1
//
// EJEMPLO:
//   <body data-brand="portfolio">
//     <button class="bg-brand text-white rounded-pill">CTA</button>
//   </body>
// ============================================================

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // === Aliases dinámicos (resuelven via CSS vars según data-brand) ===
        brand: {
          DEFAULT: "var(--brand-primary)",
          soft:    "var(--brand-primary-soft)",
          deep:    "var(--brand-primary-deep)",
        },
        bg: {
          DEFAULT: "var(--bg)",
          alt:     "var(--bg-alt)",
          card:    "var(--bg-card)",
        },
        ink: {
          DEFAULT: "var(--text)",
          dim:     "var(--text-dim)",
        },

        // === Portfolio (valores hard-coded) ===
        portfolio: {
          primary:      "#C4907C",
          "primary-soft": "#D4A797",
          "primary-deep": "#A87464",
          bg:           "#F5F2F0",
          "bg-alt":     "#EAE5E1",
          text:         "#2C2A2E",
          "text-dim":   "#7A7580",
          border:       "#DDD7D2",
          "accent-sage":     "#ABB7A3",
          "accent-lavender": "#A48997",
          "accent-navy":     "#1E2A47",
          "accent-sand":     "#DAD2BB",
        },

        // === Talento Impulsa (valores hard-coded) ===
        talento: {
          primary:      "#9A7B3D",
          "primary-soft": "#B8995A",
          "primary-deep": "#75582A",
          "bg-cream":   "#EFE9DB",
          "bg-stone":   "#DDD8D4",
          "bg-warm":    "#E3D7D2",
          text:         "#1A1814",
          "text-dim":   "#6E6859",
          "earth-tier1": "#E3D7D2",
          "earth-tier2": "#BFABA2",
          "earth-tier3": "#8C7D7A",
          "earth-tier4": "#684B45",
          "earth-tier5": "#3B3935",
          "dark-bg":    "#0A0A0A",
          "dark-teal":  "#1F4A52",
          "dark-gold":  "#D4B062",
        },
      },

      fontFamily: {
        display:    ["Syne", "sans-serif"],     // portfolio default
        body:       ["Outfit", "sans-serif"],   // ambas marcas
        decorative: ["Cormorant Garamond", "serif"], // talento
      },

      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1.5" }],
        sm:   ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem",     { lineHeight: "1.65" }],
        md:   ["1.125rem", { lineHeight: "1.65" }],
        lg:   ["1.25rem",  { lineHeight: "1.5" }],
        xl:   ["1.5rem",   { lineHeight: "1.3" }],
        "2xl":["1.875rem", { lineHeight: "1.3" }],
        "3xl":["2.25rem",  { lineHeight: "1.2" }],
        "4xl":["3rem",     { lineHeight: "1.1" }],
        "5xl":["3.75rem",  { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "6xl":["4.5rem",   { lineHeight: "1.08", letterSpacing: "-0.04em" }],
      },

      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.02em",
        wide:    "0.05em",
        widest:  "0.18em",
      },

      borderRadius: {
        none: "0",
        sm:   "0.25rem",
        md:   "0.5rem",
        lg:   "0.75rem",
        xl:   "1rem",
        "2xl":"1.5rem",
        pill: "9999px",
      },

      boxShadow: {
        // Portfolio (tinte terracota)
        "portfolio-sm": "0 4px 16px rgba(196,144,124,0.12)",
        "portfolio-md": "0 8px 24px rgba(196,144,124,0.12)",
        "portfolio-lg": "0 12px 32px rgba(196,144,124,0.15)",
        "portfolio-xl": "0 24px 48px rgba(196,144,124,0.18)",
        // Talento (gris neutro)
        "talento-sm":   "0 2px 8px rgba(26,24,20,0.06)",
        "talento-md":   "0 8px 20px rgba(26,24,20,0.08)",
        "talento-lg":   "0 16px 32px rgba(26,24,20,0.10)",
        "talento-xl":   "0 24px 48px rgba(26,24,20,0.14)",
      },

      transitionTimingFunction: {
        organic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      maxWidth: {
        container: "1100px",
      },

      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.7", transform: "scale(1.08)" },
        },
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-soft": "pulse 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
