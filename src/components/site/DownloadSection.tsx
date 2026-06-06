import { Reveal } from "./Reveal";
import { Download, FileText } from "lucide-react";
import pdfAsset from "@/assets/tcc_pdf.asset.json";

export function DownloadSection() {
  return (
    <section id="download" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 gradient-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.14_80/0.35),transparent_55%)]" />
      <div className="container-x relative">
        <Reveal className="text-center max-w-3xl mx-auto text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Documento completo
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold">
            Acesse a pesquisa na íntegra
          </h2>
          <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
            Baixe o Trabalho de Conclusão de Curso em PDF, com metodologia,
            análise de dados, tabelas comparativas e referencial bibliográfico
            completo.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={pdfAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition shadow-elevated"
            >
              <Download className="h-4 w-4" />
              Baixar TCC (PDF)
            </a>
            <a
              href={pdfAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <FileText className="h-4 w-4" />
              Visualizar online
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
