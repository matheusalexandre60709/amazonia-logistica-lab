import { Reveal } from "./Reveal";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import pdfAsset from "@/assets/tcc_pdf.asset.json";

export function DownloadSection() {
  return (
    <section id="download" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 gradient-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_top_right,oklch(0.78_0.14_80/0.38),transparent)]" />
      {/* subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-x relative">
        <Reveal className="text-center max-w-3xl mx-auto text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Documento completo
          </div>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-tight">
            Acesse a pesquisa na íntegra
          </h2>
          <p className="mt-4 text-white/83 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Baixe o Trabalho de Conclusão de Curso em PDF, com metodologia,
            análise de dados, tabelas comparativas e referencial bibliográfico completo.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={pdfAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/92 active:scale-[0.97] transition shadow-elevated"
            >
              <Download className="h-4 w-4" />
              Baixar TCC (PDF)
            </a>
            <Link
              to="/visualizar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:bg-white/18 active:scale-[0.97] transition"
            >
              <ExternalLink className="h-4 w-4" />
              Visualizar online
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
