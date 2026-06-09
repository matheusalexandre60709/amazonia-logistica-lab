import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { MapPin, Route, Calendar, Truck } from "lucide-react";

const facts = [
  { icon: Route, label: "Extensão total", value: "≈ 4.000 km" },
  { icon: MapPin, label: "Estados atravessados", value: "PB · CE · PI · MA · TO · PA · AM" },
  { icon: Calendar, label: "Início da construção", value: "1970" },
  { icon: Truck, label: "Modal predominante", value: "Rodoviário" },
];

export function About() {
  return (
    <section id="sobre" className="section-y bg-surface">
      <div className="container-x grid lg:grid-cols-[1fr_1.15fr] gap-10 xl:gap-16 items-start">
        <div>
          <SectionTitle
            eyebrow="Sobre a BR-230"
            title="A espinha dorsal rodoviária da Amazônia brasileira"
            description="Concebida na década de 1970 como projeto de integração nacional, a Rodovia Transamazônica conecta o Nordeste ao Norte do país e atravessa biomas, fronteiras agrícolas e comunidades ribeirinhas. Hoje é peça-chave — e gargalo — da logística regional."
          />
          <Reveal delay={0.1} className="mt-7 space-y-4 text-foreground/78 leading-relaxed text-sm md:text-base">
            <p>
              A BR-230 cruza sete estados, ligando João Pessoa (PB) a Lábrea (AM).
              Sua função estratégica é viabilizar o escoamento da produção
              agropecuária do Norte rumo a portos exportadores e centros urbanos.
            </p>
            <p>
              Apesar da importância geopolítica, trechos significativos permanecem
              sem pavimentação, dependendo de manutenção sazonal e tornando a
              rodovia vulnerável a chuvas, deslizamentos e interrupções operacionais.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={0.06 * i}>
              <div className="h-full rounded-xl border border-border bg-card p-5 sm:p-6 shadow-card hover:shadow-elevated transition-shadow">
                <div className="flex items-center justify-center h-11 w-11 rounded-lg gradient-forest text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[0.68rem] uppercase tracking-wider text-muted-foreground font-semibold">
                  {f.label}
                </div>
                <div className="mt-1 text-base sm:text-lg font-semibold text-foreground leading-snug">{f.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
