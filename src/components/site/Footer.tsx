import logoAsset from "@/assets/logo_transamazonica.jpg.asset.json";
const logoImg = logoAsset.url;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/85">
      <div className="container-x py-10 sm:py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="BR-230 Transamazônica"
              className="h-12 w-12 object-contain rounded-md brightness-0 invert opacity-90"
            />
            <div>
              <div className="text-sm font-bold text-white">BR-230</div>
              <div className="text-xs text-gold font-semibold tracking-wide">Transamazônica</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/68 max-w-xs leading-relaxed">
            Observatório acadêmico sobre infraestrutura logística e escoamento
            agropecuário na Amazônia brasileira.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Pesquisa</div>
          <ul className="space-y-2 text-sm">
            {[
              ["#sobre", "Sobre a BR-230"],
              ["#resultados", "Principais resultados"],
              ["#solucoes", "Soluções propostas"],
              ["#referencial", "Referencial teórico"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-white/70 hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Instituição</div>
          <p className="text-sm text-white/70 leading-relaxed">
            Centro Estadual de Educação Tecnológica Paula Souza
            <br />
            Etec Maria Cristina Medeiros
            <br />
            Ribeirão Pires — SP · 2026
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-4 text-xs text-white/55 flex flex-wrap justify-between gap-2">
          <span>© 2026 TCC BR-230 Transamazônica. Todos os direitos reservados.</span>
          <span>Logística e Desenvolvimento Regional</span>
        </div>
      </div>
    </footer>
  );
}
