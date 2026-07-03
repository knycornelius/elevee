import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
};

export function BrandStory({ lang }: Props) {
  const t = WORDINGS[lang];

  return (
    <section id="story" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
              {t.story.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', serif",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-light text-foreground"
            >
              {t.story.headline1}
              <br />
              <em className="italic text-primary">{t.story.headline2}</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-foreground/75 text-lg leading-relaxed font-light mb-10">
              {t.story.body}
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {[
                {
                  fr: t.story.vivre_fr,
                  en: t.story.vivre_en,
                  desc: t.story.vivre_desc,
                },
                {
                  fr: t.story.lumiere_fr,
                  en: t.story.lumiere_en,
                  desc: t.story.lumiere_desc,
                },
              ].map((item) => (
                <div
                  key={item.fr}
                  className="bg-card p-8 group hover:bg-secondary transition-colors duration-300"
                >
                  <div className="flex items-end gap-3 mb-4">
                    <span
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        letterSpacing: "0.2em",
                      }}
                      className="text-2xl font-light text-primary"
                    >
                      {item.fr}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase pb-0.5">
                      ({item.en})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
