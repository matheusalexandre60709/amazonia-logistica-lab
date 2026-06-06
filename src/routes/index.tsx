import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Problem } from "@/components/site/Problem";
import { Results } from "@/components/site/Results";
import { Comparison } from "@/components/site/Comparison";
import { Flow } from "@/components/site/Flow";
import { Solutions } from "@/components/site/Solutions";
import { References } from "@/components/site/References";
import { Authors } from "@/components/site/Authors";
import { DownloadSection } from "@/components/site/DownloadSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BR-230 Transamazônica — Logística e Desenvolvimento Regional" },
      {
        name: "description",
        content:
          "TCC sobre os impactos da infraestrutura da Rodovia Transamazônica (BR-230) no escoamento da produção agropecuária da Região Norte do Brasil.",
      },
      {
        property: "og:title",
        content: "BR-230 Transamazônica — Observatório Acadêmico",
      },
      {
        property: "og:description",
        content:
          "Análise da infraestrutura logística da BR-230 e seu papel no escoamento agropecuário da Amazônia.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Problem />
        <Results />
        <Comparison />
        <Flow />
        <Solutions />
        <References />
        <Authors />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
