import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo_transamazonica.jpg.asset.json";
const logoImg = logoAsset.url;
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#problema", label: "Problema" },
  { href: "#resultados", label: "Resultados" },
  { href: "#comparacao", label: "Comparação" },
  { href: "#mapa", label: "Mapa" },
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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 dark:bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logoImg}
            alt="BR-230 Transamazônica"
            className="h-11 w-11 object-contain rounded-sm"
          />
          <span className={`hidden sm:block text-sm font-semibold leading-tight transition-colors ${scrolled || open ? "text-foreground" : "text-white"}`}>
            BR-230<br />
            <span className="text-gold font-bold">Transamazônica</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-colors hover:text-primary hover:bg-primary/8 ${
                scrolled ? "text-foreground/75" : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="ml-3 inline-flex items-center rounded-md gradient-forest px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Baixar TCC
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-lg p-2 transition-colors ${
            scrolled || open
              ? "border border-border bg-card text-foreground hover:bg-muted"
              : "border border-white/30 bg-white/10 text-white hover:bg-white/20"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-white dark:bg-card">
          <div className="container-x py-4 flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/8 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center rounded-md gradient-forest px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Baixar TCC (PDF)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
