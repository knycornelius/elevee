import { WORDINGS, Lang } from "../constants";

import {
  Cafe,
  Golf,
  Gym,
  Landscape,
  Playground,
  Tennis,
  Yoga,
} from "../assets";

type Props = {
  lang: Lang;
};

export function Gallery({ lang }: Props) {
  const t = WORDINGS[lang];

  const images = [
    {
      src: Landscape,
      alt: t.gallery.alts[0],
      span: "col-span-2 row-span-2",
    },
    {
      src: Cafe,
      alt: t.gallery.alts[1],
      span: "col-span-1 row-span-1",
    },
    {
      src: Playground,
      alt: t.gallery.alts[2],
      span: "col-span-1 row-span-1",
    },
    {
      src: Gym,
      alt: t.gallery.alts[3],
      span: "col-span-1 row-span-1",
    },
    {
      src: Tennis,
      alt: t.gallery.alts[4],
      span: "col-span-1 row-span-1",
    },
    {
      src: Yoga,
      alt: t.gallery.alts[5],
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
            {t.gallery.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Crimson Pro', serif",
              lineHeight: 1.15,
            }}
            className="text-4xl md:text-5xl font-light text-foreground"
          >
            {t.gallery.headline}
          </h2>
        </div>

        <div
          className="grid grid-cols-3 grid-rows-3 gap-px bg-border"
          style={{ height: "640px" }}
        >
          {images.map((img) => (
            <div
              key={img.alt}
              className={`${img.span} relative bg-card overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: `brightness(0.7)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
