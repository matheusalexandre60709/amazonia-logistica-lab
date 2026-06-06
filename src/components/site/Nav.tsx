import { useEffect, useState } from "react";
import logo from "@/assets/logo_horizontal.asset.json";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#problema", label: "Problema" },
  { href: "#resultados", label: "Resultados" },
  { href: "#comparacao", label: "Comparação" },
  { href: "#fluxo", label: "Fluxo" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#referencial", label: "Referencial" },
  { href: "#autores", label: "Autores" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="BR-230 Transamazônica" className="h-10 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="ml-2 inline-flex items-center rounded-md gradient-forest px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elevated hover:opacity-95"
          >
            Baixar TCC
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-md border border-border bg-card p-2"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-5 bg-foreground mb-1" />
          <span className="block h-0.5 w-5 bg-foreground mb-1" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md gradient-forest px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Baixar TCC
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
