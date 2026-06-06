import hero from "@/assets/hero_br230.jpg";
import logoMain from "@/assets/logo_principal.asset.json";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Vista aérea da Rodovia Transamazônica atravessando a floresta"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/65 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.14_80/0.18),transparent_60%)]" />

      <div className="container-x relative z-10 pt-28 pb-20 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Observatório de Infraestrutura · TCC 2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]"
          >
            Os impactos da{" "}
            <span className="text-gradient-gold">BR-230</span> no
            escoamento agropecuário da Região Norte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
          >
            Uma análise técnica sobre infraestrutura logística, gargalos operacionais
            e competitividade do agronegócio amazônico — comparando a Rodovia
            Transamazônica ao corredor do Arco Norte.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#sobre"
              className="inline-flex items-center rounded-md bg-white text-primary px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Explorar a pesquisa
            </a>
            <a
              href="#download"
              className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Baixar TCC (PDF)
            </a>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 max-w-lg gap-6 border-t border-white/20 pt-6">
            {[
              { k: "4.000 km", v: "Extensão da BR-230" },
              { k: "7 estados", v: "Conexões regionais" },
              { k: "+30%", v: "Custo logístico extra" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-xl md:text-2xl font-semibold text-gold">{s.k}</div>
                <div className="text-xs text-white/75 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-white/10 blur-2xl" />
            <img
              src={logoMain.url}
              alt="Logo BR-230 Transamazônica"
              className="relative w-[420px] h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-[0.3em]">
        Role para descobrir ↓
      </div>
    </section>
  );
}
