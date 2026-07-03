import { Waves, Users, Shield, Leaf } from "lucide-react";

import { Lobby, Pool } from "../assets";
import { WORDINGS, Lang } from "../constants";

const iconMap = { Waves, Users, Shield, Leaf } as const;

type Props = {
  lang: Lang;
};

export function Amenities({ lang }: Props) {
  const t = WORDINGS[lang];

  return (
    <section id="amenities" className="py-28 lg:py-36 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
              {t.amenities.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', serif",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-light text-foreground"
            >
              {t.amenities.headline1}
              <br />
              {t.amenities.headline2}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-foreground/60 leading-relaxed font-light max-w-md">
              {t.amenities.body}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-px bg-border">
          {[
            {
              img: Pool,
              alt: "Infinity pool with tropical palm reflections",
              caption: t.amenities.captions[0],
            },
            {
              img: Lobby,
              alt: "Grand lobby with warm wood accents and touchless entry",
              caption: t.amenities.captions[1],
            },
          ].map((item) => (
            <div
              key={item.alt}
              className="relative h-64 bg-card overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.6)" }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-xs text-foreground/70 tracking-wide">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.amenities.groups.map((group) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap];
            return (
              <div
                key={group.label}
                className="bg-card p-8 flex flex-col gap-5 hover:bg-secondary transition-colors duration-300"
              >
                <Icon size={20} className="text-primary" />
                <div>
                  <p className="text-xs tracking-[0.18em] uppercase text-primary mb-4">
                    {group.label}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground font-light flex items-start gap-2"
                      >
                        <span className="text-primary/40 mt-1">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
