import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import unpaved from "@/assets/unpaved.jpg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Tempo de viagem", BR230: 100, ArcoNorte: 58 },
  { name: "Custo por tonelada", BR230: 100, ArcoNorte: 62 },
  { name: "Perdas em trânsito", BR230: 100, ArcoNorte: 41 },
  { name: "Previsibilidade", BR230: 45, ArcoNorte: 88 },
];

export function Results() {
  return (
    <section id="resultados" className="section-y bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Principais resultados"
          title="Custos elevados, baixa previsibilidade e dependência rodoviária"
          description="A análise documental e comparativa evidenciou que a BR-230 apresenta desempenho logístico inferior, com impacto direto na competitividade do agronegócio nortista."
        />

        <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Índice comparativo (BR-230 = 100)
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">Desempenho logístico relativo</h3>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-primary" /> BR-230
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Arco Norte
                  </span>
                </div>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke="var(--muted-foreground)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="var(--muted-foreground)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="BR230" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="ArcoNorte" fill="var(--gold)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {[
                { k: "+38%", v: "custo logístico médio na BR-230" },
                { k: "−47%", v: "previsibilidade no período chuvoso" },
                { k: "73%", v: "da carga depende do rodoviário" },
                { k: "2,4×", v: "tempo de viagem vs. Arco Norte" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl gradient-forest p-6 text-primary-foreground shadow-elevated"
                >
                  <div className="text-3xl font-semibold text-gold">{s.k}</div>
                  <div className="mt-2 text-sm text-white/85">{s.v}</div>
                </div>
              ))}
              <div className="col-span-2 overflow-hidden rounded-xl border border-border">
                <img
                  src={unpaved}
                  alt="Caminhões em trecho não pavimentado da BR-230"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  width={1280}
                  height={832}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
