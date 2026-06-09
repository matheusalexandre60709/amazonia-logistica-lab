import hero from "@/assets/hero_br230.jpg";
import logoAsset from "@/assets/logo_transamazonica.jpg.asset.json";
const logoImg = logoAsset.url;
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={hero}
        alt="Vista aérea da Rodovia Transamazônica atravessando a floresta"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_top_right,oklch(0.78_0.14_80/0.22),transparent)]" />

      <div className="container-x relative z-10 pt-28 pb-24 grid lg:grid-cols-[1.35fr_1fr] gap-10 xl:gap-16 items-center">
        {/* Left: text */}
        <div className="text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Observatório de Infraestrutura · TCC 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-5 text-[clamp(2.1rem,5.5vw,4.5rem)] font-semibold leading-[1.06]"
          >
            Os impactos da{" "}
            <span className="text-gradient-gold">BR-230</span>{" "}
            no escoamento agropecuário da Região Norte
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-5 max-w-xl text-[clamp(0.9rem,2vw,1.0625rem)] text-white/82 leading-relaxed"
          >
            Uma análise técnica sobre infraestrutura logística, gargalos operacionais
            e competitividade do agronegócio amazônico — comparando a Rodovia
            Transamazônica ao corredor do Arco Norte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#sobre"
              className="inline-flex items-center rounded-lg bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/92 active:scale-[0.97] transition"
            >
              Explorar a pesquisa
            </a>
            <a
              href="#download"
              className="inline-flex items-center rounded-lg border border-white/40 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 active:scale-[0.97] transition backdrop-blur-sm"
            >
              Baixar TCC (PDF)
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 grid grid-cols-3 max-w-md gap-6 border-t border-white/18 pt-7"
          >
            {[
              { k: "4.000 km", v: "Extensão da BR-230" },
              { k: "7 estados", v: "Conexões regionais" },
              { k: "+30%", v: "Custo logístico extra" },
            ].map((s) => (
              <div key={s.k} className="space-y-0.5">
                <div className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold text-gold">{s.k}</div>
                <div className="text-[0.7rem] text-white/70 leading-snug">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -inset-5 rounded-full bg-white/8 blur-xl" />
            <img
              src={logoImg}
              alt="Logo BR-230 Transamazônica"
              className="relative w-[min(360px,38vw)] h-auto drop-shadow-2xl rounded-2xl ring-1 ring-white/20"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Descobrir</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
