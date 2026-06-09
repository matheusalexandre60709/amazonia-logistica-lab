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
  Cell,
} from "recharts";

const data = [
  { name: "Tempo de viagem", BR230: 100, ArcoNorte: 58 },
  { name: "Custo/tonelada", BR230: 100, ArcoNorte: 62 },
  { name: "Perdas em trânsito", BR230: 100, ArcoNorte: 41 },
  { name: "Previsibilidade", BR230: 45, ArcoNorte: 88 },
];

const stats = [
  { k: "+38%", v: "custo logístico médio na BR-230" },
  { k: "−47%", v: "previsibilidade no período chuvoso" },
  { k: "73%", v: "da carga depende do rodoviário" },
  { k: "2,4×", v: "tempo de viagem vs. Arco Norte" },
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

        <div className="mt-10 grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-start">
          {/* Chart */}
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Índice comparativo (BR-230 = 100)
                  </div>
                  <h3 className="mt-1 text-base sm:text-lg font-semibold">Desempenho logístico relativo</h3>
                </div>
                <div className="flex gap-4 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-primary" /> BR-230
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Arco Norte
                  </span>
                </div>
              </div>
              <div className="h-64 sm:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke="var(--muted-foreground)"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="var(--muted-foreground)"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "10px",
                        fontSize: "12px",
                        boxShadow: "0 8px 24px -8px rgba(0,0,0,0.14)",
                      }}
                      cursor={{ fill: "var(--muted)", opacity: 0.5 }}
                    />
                    <Bar dataKey="BR230" fill="var(--primary)" radius={[5, 5, 0, 0]} />
                    <Bar dataKey="ArcoNorte" fill="var(--gold)" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          {/* Stats + image */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl gradient-forest p-4 sm:p-5 text-primary-foreground shadow-elevated"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gold">{s.k}</div>
                  <div className="mt-1.5 text-xs text-white/80 leading-snug">{s.v}</div>
                </div>
              ))}
              <div className="col-span-2 overflow-hidden rounded-xl border border-border shadow-card">
                <img
                  src={unpaved}
                  alt="Caminhões em trecho não pavimentado da BR-230"
                  className="w-full h-36 sm:h-44 object-cover"
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
