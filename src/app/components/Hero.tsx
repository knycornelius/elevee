import { ArrowRight, ChevronDown } from "lucide-react";

import { Hero as HeroAsset } from "../assets";
import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
  scrollTo: (href: string) => void;
};

export function Hero({ lang, scrollTo }: Props) {
  const t = WORDINGS[lang];

  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden bg-background">
      <img
        src={HeroAsset}
        alt="Elevee tower silhouette rising through forest canopy at golden hour"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.45)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(11,13,9,0.98) 0%, rgba(11,13,9,0.4) 55%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-6">
            {t.hero.location}
          </p>
          <h1
            style={{
              fontFamily: "'Crimson Pro', serif",
              lineHeight: 1.08,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6"
          >
            {t.hero.headline1}
            <br />
            <em className="italic text-primary">{t.hero.headline2}</em>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.18em] uppercase hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              {t.hero.cta1} <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollTo("#residences")}
              className="px-7 py-3.5 border border-foreground/30 text-foreground text-xs tracking-[0.18em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.25em] uppercase">
          {t.hero.scroll}
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
