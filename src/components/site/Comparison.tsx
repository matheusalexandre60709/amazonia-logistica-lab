import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import arco from "@/assets/arco_norte.jpg";
import { Check, X } from "lucide-react";

const rows = [
  ["Pavimentação contínua", false, true],
  ["Integração multimodal", false, true],
  ["Previsibilidade operacional", false, true],
  ["Acesso direto a portos exportadores", false, true],
  ["Cobertura territorial do interior", true, false],
  ["Importância para integração nacional", true, true],
];

export function Comparison() {
  return (
    <section id="comparacao" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="BR-230 × Arco Norte"
          title="Dois corredores, dois desempenhos logísticos"
          description="O Arco Norte combina rodovias, hidrovias e portos exportadores em uma malha multimodal, enquanto a Transamazônica permanece refém de um único modal sob condições adversas."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src={arco}
                alt="Estrutura portuária do corredor logístico do Arco Norte"
                className="w-full h-72 object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
              <div className="bg-card p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Corredor Arco Norte
                </div>
                <h3 className="mt-1 text-xl font-semibold">
                  Multimodalidade portuária de alto desempenho
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Conecta a produção do Centro-Oeste e Norte aos portos de
                  Itaqui, Vila do Conde, Barcarena e Santarém, integrando rodovias,
                  hidrovias e ferrovias.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-primary text-primary-foreground text-sm font-semibold">
                <div className="p-4">Critério</div>
                <div className="p-4 text-center border-l border-white/15">BR-230</div>
                <div className="p-4 text-center border-l border-white/15 bg-gold/20">
                  Arco Norte
                </div>
              </div>
              {rows.map(([label, br, ar], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] text-sm ${
                    i % 2 ? "bg-surface" : "bg-card"
                  }`}
                >
                  <div className="p-4 font-medium text-foreground">{label as string}</div>
                  <div className="p-4 flex justify-center border-l border-border">
                    {br ? (
                      <Check className="h-5 w-5 text-accent" />
                    ) : (
                      <X className="h-5 w-5 text-destructive/70" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center border-l border-border">
                    {ar ? (
                      <Check className="h-5 w-5 text-accent" />
                    ) : (
                      <X className="h-5 w-5 text-destructive/70" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
