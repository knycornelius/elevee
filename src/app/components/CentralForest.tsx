import { Coworking, Forest, ForestWalk, Golf } from "../assets";
import { WORDINGS, Lang } from "../constants";

type Props = {
  lang: Lang;
};

export function CentralForest({ lang }: Props) {
  const t = WORDINGS[lang];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative h-[80vh] min-h-[540px]">
        <img
          src={Forest}
          alt="4-hectare Central Forest - the private urban forest at Elevee Residences"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.35) saturate(1.2)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,13,9,0.92) 40%, rgba(11,13,9,0.2) 100%)",
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-xl">
              <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
                {t.forest.eyebrow}
              </p>
              <h2
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  lineHeight: 1.1,
                }}
                className="text-5xl md:text-6xl font-light text-foreground mb-6"
              >
                {t.forest.headline1}
                <br />
                <em className="italic text-primary">{t.forest.headline2}</em>
              </h2>
              <p className="text-foreground/65 leading-relaxed font-light text-lg max-w-md">
                {t.forest.body}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {[
          {
            img: ForestWalk,
            alt: "Morning light through tropical canopy",
            caption: t.forest.captions[0],
          },
          {
            img: Golf,
            alt: "Tropical greenery near the residential promenade",
            caption: t.forest.captions[1],
          },
          {
            img: Coworking,
            alt: "Floor-to-ceiling windows framing forest views",
            caption: t.forest.captions[2],
          },
        ].map((item) => (
          <div
            key={item.alt}
            className="relative h-56 bg-card overflow-hidden group"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.6)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs text-foreground/70 tracking-wide">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
