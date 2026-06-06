import logo from "@/assets/logo_horizontal.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/85">
      <div className="container-x py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo.url} alt="BR-230 Transamazônica" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-white/70 max-w-sm">
            Observatório acadêmico sobre infraestrutura logística e escoamento
            agropecuário na Amazônia brasileira.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gold font-semibold">Pesquisa</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-white">Sobre a BR-230</a></li>
            <li><a href="#resultados" className="hover:text-white">Principais resultados</a></li>
            <li><a href="#solucoes" className="hover:text-white">Soluções propostas</a></li>
            <li><a href="#referencial" className="hover:text-white">Referencial teórico</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gold font-semibold">Instituição</div>
          <p className="mt-3 text-sm text-white/75 leading-relaxed">
            Centro Estadual de Educação Tecnológica Paula Souza
            <br />
            Etec Maria Cristina Medeiros
            <br />
            Ribeirão Pires — SP · 2026
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-4 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© 2026 TCC BR-230 Transamazônica. Todos os direitos reservados.</span>
          <span>Logística e Desenvolvimento Regional</span>
        </div>
      </div>
    </footer>
  );
}
