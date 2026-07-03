import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
  scrollTo: (href: string) => void;
};

export function Footer({ lang, scrollTo }: Props) {
  const t = WORDINGS[lang];

  const navLinks = [
    { label: t.nav.story, href: "#story" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.residences, href: "#residences" },
    { label: t.nav.amenities, href: "#amenities" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span
            style={{
              fontFamily: "'Crimson Pro', serif",
              letterSpacing: "0.25em",
            }}
            className="text-lg font-light text-primary"
          >
            ELEVEE
          </span>
          <span className="text-[9px] tracking-[0.35em] text-muted-foreground uppercase mt-0.5">
            {t.footer.sub}
          </span>
        </div>
        <p className="text-xs text-muted-foreground/50 text-center">
          {t.footer.credit}
        </p>
        <div className="flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50 hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
