import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { WORDINGS, WHATSAPP_URL, Lang, TEL_URL } from "../constants";
import { buildWhatsAppLink } from "../helpers/cta";

type Props = {
  lang: Lang;
};

export function Contact({ lang }: Props) {
  const t = WORDINGS[lang];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    collection: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = buildWhatsAppLink({
      name: form.name,
      phoneNumber: form.phone,
      collection: form.collection,
    });

    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-5">
              {t.contact.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: "'Crimson Pro', serif",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-5xl font-light text-foreground mb-8"
            >
              {t.contact.headline1}
              <br />
              <em className="italic text-primary">{t.contact.headline2}</em>
            </h2>
            <p className="text-foreground/60 leading-relaxed font-light mb-10 max-w-md">
              {t.contact.body}
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground mb-1">
                    {t.contact.addressLabel}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                    {t.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground mb-1">
                    {t.contact.hoursLabel}
                  </p>
                  <p className="text-sm text-foreground/80">
                    {t.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href={TEL_URL}
                className="flex items-center gap-2 px-5 py-3 border border-primary text-primary text-xs tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone size={13} /> {t.contact.callUs}
              </a>
              <a
                href={WHATSAPP_URL}
                className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={13} /> {t.contact.whatsapp}
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16 bg-secondary/30 border border-border">
                <Leaf size={28} className="text-primary" />
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                  }}
                  className="text-2xl font-light text-foreground"
                >
                  {t.contact.successTitle}
                </p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  {t.contact.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                  }}
                  className="text-xl font-light text-foreground mb-2"
                >
                  {t.contact.formHeadline}
                </p>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-[0.18em] uppercase text-muted-foreground"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="bg-input-background border border-border text-foreground text-sm px-4 py-3.5 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs tracking-[0.18em] uppercase text-muted-foreground"
                  >
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={t.contact.phonePlaceholder}
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="bg-input-background border border-border text-foreground text-sm px-4 py-3.5 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="collection"
                    className="text-xs tracking-[0.18em] uppercase text-muted-foreground"
                  >
                    {t.contact.collectionLabel}
                  </label>
                  <select
                    id="collection"
                    required
                    value={form.collection}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        collection: e.target.value,
                      })
                    }
                    className="bg-input-background border border-border text-foreground text-sm px-4 py-3.5 outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      {t.contact.collectionPlaceholder}
                    </option>
                    <option value="vivre">{t.contact.collectionVivre}</option>
                    <option value="lumiere">
                      {t.contact.collectionLumiere}
                    </option>
                    <option value="undecided">
                      {t.contact.collectionUndecided}
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 px-7 py-4 bg-primary text-primary-foreground text-xs tracking-[0.18em] uppercase hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t.contact.submit} <ArrowRight size={14} />
                </button>

                <p className="text-xs text-muted-foreground/50 text-center">
                  {t.contact.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
