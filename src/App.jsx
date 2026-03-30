export default function Local2GlobalLandingPage() {
  const serviceCards = [
    {
      title: "Kundenservice",
      text: "Deutschsprachiger Support per Telefon, E-Mail und Chat für wachsende Unternehmen.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Call Center",
      text: "Remote Inbound- und Outbound-Support mit vorgeprüften deutschsprachigen Spezialisten.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "1st Level IT Support",
      text: "Zuverlässige Unterstützung für Helpdesk, Ticketsysteme und technische Erstbearbeitung.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const benefits = [
    "Vorgeprüfte deutschsprachige Kandidaten",
    "Schnelle Verfügbarkeit",
    "Unterstützung beim Onboarding",
    "Lokale Koordination und Erreichbarkeit",
    "Ersatz bei Ausfall",
    "Pilotprojekt mit geringem Risiko",
  ];

  const process = [
    "Sie teilen uns Ihr Profil und Ihren Bedarf mit.",
    "Wir stellen 1–2 passende Kandidaten vor.",
    "Der Mitarbeiter arbeitet direkt mit Ihrem Unternehmen.",
    "Wir unterstützen im Hintergrund bei Qualität und Koordination.",
  ];

  const roles = [
    "Kundenservice per Telefon, E-Mail und Chat",
    "Call Center Inbound / Outbound",
    "Backoffice Support",
    "1st Level IT Support",
  ];

  const faqs = [
    {
      q: "Arbeiten Sie als klassische Agentur?",
      a: "Nein. Der Mitarbeiter arbeitet direkt mit dem Kunden.",
    },
    {
      q: "Wie schnell können Profile vorgestellt werden?",
      a: "Oft innerhalb weniger Tage.",
    },
    {
      q: "Was passiert bei Ausfall?",
      a: "Schnelle Kommunikation va Ersatz.",
    },
  ];

  const legalLinks = [
    { title: "Impressum", href: "#impressum" },
    { title: "Datenschutz", href: "#datenschutz" },
  ];

  const stats = [
    ["DE", "Deutschsprachige Profile"],
    ["24–72h", "erste Vorschläge"],
    ["Pilot", "einfacher Einstieg"],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ✅ YANGI PREMIUM HEADER */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          
          {/* LOGO + TEXT INLINE */}
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold tracking-tight">Local2Global</h1>
            <span className="hidden sm:block text-xs text-slate-500">
              Deutschsprachige Remote Support Spezialisten
            </span>
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#leistungen" className="hover:text-slate-900">Leistungen</a>
            <a href="#ablauf" className="hover:text-slate-900">Ablauf</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>

            {legalLinks.map((link) => (
              <a key={link.title} href={link.href} className="hover:text-slate-900">
                {link.title}
              </a>
            ))}

            <a
              href="#kontakt"
              className="rounded-xl bg-slate-900 px-3 py-1.5 text-sm text-white"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </section>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
          <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Direct contract. Background support.
                </p>
                <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  Deutschsprachige Remote-Mitarbeiter für Kundenservice und IT-Support
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                  Wir helfen deutschen Unternehmen dabei, direkt mit geprüften Spezialisten zu arbeiten.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@local2global.de"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm text-white"
                  >
                    Pilotprojekt anfragen
                  </a>
                  <a
                    href="#leistungen"
                    className="rounded-2xl border px-5 py-3 text-sm"
                  >
                    Mehr erfahren
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map(([v, l]) => (
                    <div key={l} className="border rounded-2xl p-4">
                      <div className="font-bold">{v}</div>
                      <div className="text-xs text-slate-500">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093"
                className="rounded-2xl"
              />
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
              <video
                src="https://sy0feekclhe6fenn.public.blob.vercel-storage.com/logic.mp4"
                controls
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-slate-600">
        © Local2Global
      </footer>
    </div>
  );
}
