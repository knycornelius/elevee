import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
};

export function StatsBand({ lang }: Props) {
  const t = WORDINGS[lang];

  return (
    <div className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-primary-foreground/20">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center md:px-10">
              <div
                style={{ fontFamily: "'Crimson Pro', serif" }}
                className="text-3xl md:text-4xl font-light text-primary-foreground mb-1"
              >
                {s.value}
              </div>
              <div className="text-xs tracking-[0.18em] uppercase text-primary-foreground/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
