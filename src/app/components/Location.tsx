import { MapPin, Car, Train, Bus, Zap } from "lucide-react";
import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
};

export function Location({ lang }: Props) {
  const t = WORDINGS[lang];

  return (
    <section id="location" className="py-28 lg:py-36 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
              {t.location.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', serif",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-light text-foreground mb-8"
            >
              {t.location.headline1}
              <br />
              {t.location.headline2}
            </h2>
            <p className="text-foreground/65 leading-relaxed font-light mb-10 max-w-lg">
              {t.location.body}
            </p>

            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { icon: Car, ...t.location.stats[0] },
                { icon: Train, ...t.location.stats[1] },
                { icon: Bus, ...t.location.stats[2] },
                { icon: Zap, ...t.location.stats[3] },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card px-6 py-7 flex flex-col gap-3 hover:bg-secondary transition-colors duration-300"
                >
                  <s.icon size={18} className="text-primary" />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                      }}
                      className="text-2xl font-light text-foreground"
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 leading-snug">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
                {t.location.districtEyebrow}
              </p>
              <h3
                style={{ fontFamily: "'Crimson Pro', serif" }}
                className="text-2xl font-light text-foreground mb-6"
              >
                {t.location.districtHeadline}
              </h3>
            </div>

            {t.location.groups.map((group) => (
              <div key={group.category} className="border-t border-border pt-6">
                <p className="text-xs tracking-[0.2em] text-primary uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted-foreground bg-card border border-border px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 border-t border-border pt-6">
              <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.location.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
