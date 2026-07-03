import { Menu, X } from "lucide-react";

import { Logo } from "../assets";
import { Lang, WORDINGS } from "../constants";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
};

export function Navbar({
  lang,
  setLang,
  scrolled,
  mobileOpen,
  setMobileOpen,
  scrollTo,
}: Props) {
  const t = WORDINGS[lang];

  const navLinks = [
    { label: t.nav.story, href: "#story" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.residences, href: "#residences" },
    { label: t.nav.amenities, href: "#amenities" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(11,13,9,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.13)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start leading-none"
        >
          <img
            src={Logo}
            alt={"Elevee Residences Logo"}
            className="inset-0 w-20 object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "brightness(0.6)" }}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button
            onClick={() => scrollTo("#contact")}
            className="text-xs tracking-[0.18em] uppercase px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-60"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} mobile />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-sm tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2 text-xs tracking-[0.18em] uppercase px-5 py-3 border border-primary text-primary w-full"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
  mobile,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  mobile?: boolean;
}) {
  return (
    <div className="flex items-center gap-px border border-border overflow-hidden">
      {(["ID", "EN"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`${mobile ? "px-2.5 py-1 text-[10px] tracking-[0.15em]" : "px-3 py-1.5 text-[10px] tracking-[0.18em]"} font-medium transition-all duration-200 ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground bg-transparent"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
