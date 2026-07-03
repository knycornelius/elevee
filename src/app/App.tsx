import { useState, useEffect } from "react";

import {
  Amenities,
  BrandStory,
  CentralForest,
  Contact,
  Footer,
  Gallery,
  Hero,
  Location,
  Navbar,
  Residences,
  StatsBand,
} from "./components";
import { Lang } from "./constants";

export default function App() {
  const [lang, setLang] = useState<Lang>("ID");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />
      <Hero lang={lang} scrollTo={scrollTo} />
      <BrandStory lang={lang} />
      <Location lang={lang} />
      <CentralForest lang={lang} />
      <Residences lang={lang} scrollTo={scrollTo} />
      <Amenities lang={lang} />
      <Gallery lang={lang} />
      <StatsBand lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} scrollTo={scrollTo} />
    </div>
  );
}
