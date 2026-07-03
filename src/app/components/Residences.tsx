import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { WORDINGS, Lang } from "../constants";

import {
  BedLumiere,
  BedVivre,
  DiningLumiere,
  DiningVivre,
  LivingLumiere,
  LivingVivre,
  FloorLumiere,
  FloorVivre,
} from "../assets";
import ImageViewer from "./ImageViewer";

const vivre = [
  { type: "Vivre 1", size: "138 sqm", bed: "3", bath: "2", study: "1" },
  { type: "Vivre 2", size: "149 sqm", bed: "3+1", bath: "2+1", study: "1" },
  { type: "Vivre 3", size: "156 sqm", bed: "3+1", bath: "2+1", study: "1" },
];

const lumiere = [
  { type: "Lumière 1", size: "87.8 sqm", bed: "2", bath: "1", study: "1" },
  { type: "Lumière 2", size: "111.7 sqm", bed: "2", bath: "2", study: "1" },
];

type Props = {
  lang: Lang;
  scrollTo: (href: string) => void;
};

export function Residences({ lang, scrollTo }: Props) {
  const [activeTab, setActiveTab] = useState<"vivre" | "lumiere">("vivre");
  const t = WORDINGS[lang];

  return (
    <section id="residences" className="py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
            {t.residences.eyebrow}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              style={{
                fontFamily: "'Crimson Pro', serif",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-light text-foreground"
            >
              {t.residences.headline1}
              <br />
              {t.residences.headline2}
            </h2>
            <div className="flex gap-px bg-border w-fit">
              {(["vivre", "lumiere"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    letterSpacing: "0.2em",
                  }}
                >
                  {tab === "vivre"
                    ? t.residences.tab_vivre
                    : t.residences.tab_lumiere}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative h-80 lg:h-full min-h-[340px] overflow-hidden bg-card">
              <img
                src={activeTab === "vivre" ? LivingVivre : BedVivre}
                alt={
                  activeTab === "vivre"
                    ? "Vivre residence - spacious open-plan living"
                    : "Lumière residence - efficient, light-filled living"
                }
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{ filter: "brightness(0.65)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                <div
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    letterSpacing: "0.2em",
                  }}
                  className="text-2xl text-primary mb-1"
                >
                  {activeTab === "vivre"
                    ? t.residences.tab_vivre
                    : t.residences.tab_lumiere}
                </div>
                <p className="text-xs text-muted-foreground tracking-wide">
                  {activeTab === "vivre"
                    ? t.residences.vivre_sub
                    : t.residences.lumiere_sub}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    {t.residences.table_headers.map((h) => (
                      <th
                        key={h}
                        className="text-left text-xs tracking-[0.15em] uppercase text-muted-foreground pb-4 pr-6 font-normal"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === "vivre" ? vivre : lumiere).map((row) => (
                    <tr
                      key={row.type}
                      className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                    >
                      <td className="py-5 pr-6">
                        <span
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                          }}
                          className="text-base text-foreground"
                        >
                          {row.type}
                        </span>
                      </td>
                      <td className="py-5 pr-6 text-primary font-medium">
                        {row.size}
                      </td>
                      <td className="py-5 pr-6 text-muted-foreground">
                        {row.bed} · {row.bath}
                      </td>
                      <td className="py-5 text-muted-foreground">
                        {row.study}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed font-light border-l-2 border-primary/40 pl-5">
              {t.residences.note}
            </p>

            <div className="flex items-center gap-4">
              <ImageViewer
                src={activeTab === "vivre" ? FloorVivre : FloorLumiere}
                alt="Photo"
              >
                <div className="mt-8 px-7 py-3.5 border border-primary text-primary text-xs tracking-[0.18em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2">
                  {activeTab === "vivre"
                    ? t.residences.floor_vivre
                    : t.residences.floor_lumiere}
                </div>
              </ImageViewer>

              <button
                onClick={() => scrollTo("#contact")}
                className="mt-8 px-7 py-3.5 border border-primary text-primary text-xs tracking-[0.18em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
              >
                {activeTab === "vivre"
                  ? t.residences.cta_vivre
                  : t.residences.cta_lumiere}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
