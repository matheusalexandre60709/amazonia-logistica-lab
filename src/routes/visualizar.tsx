import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import pdfAsset from "@/assets/tcc_pdf.asset.json";

export const Route = createFileRoute("/visualizar")({
  component: VisualizarPage,
  head: () => ({
    meta: [
      { title: "Visualizar TCC — BR-230 Transamazônica" },
      {
        name: "description",
        content:
          "Leia online o Trabalho de Conclusão de Curso sobre a BR-230 e a logística de exportação no Norte do Brasil.",
      },
      { property: "og:title", content: "Visualizar TCC — BR-230 Transamazônica" },
      {
        property: "og:description",
        content:
          "Leia online o Trabalho de Conclusão de Curso sobre a BR-230 e a logística de exportação no Norte do Brasil.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
});

function VisualizarPage() {
  const pdfUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${pdfAsset.url}`
      : pdfAsset.url;
  const viewerSrc = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrl,
  )}&embedded=true`;

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <header className="border-b bg-card">
        <div className="container-x flex items-center justify-between py-3 gap-3">
          <Link
            to="/"
            hash="download"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
          <a
            href={pdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-92 active:scale-[0.97] transition"
          >
            <Download className="h-4 w-4" />
            Baixar PDF
          </a>
        </div>
      </header>
      <div className="flex-1 bg-muted">
        <iframe
          src={viewerSrc}
          title="Visualização do TCC em PDF"
          className="w-full h-[calc(100vh-57px)] border-0"
        />
      </div>
    </main>
  );
}
