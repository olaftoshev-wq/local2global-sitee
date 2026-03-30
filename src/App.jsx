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
      a: "Nein. Der Mitarbeiter arbeitet direkt mit dem Kunden. Wir unterstützen bei Auswahl, Vorbereitung und lokaler Koordination.",
    },
    {
      q: "Wie schnell können Profile vorgestellt werden?",
      a: "Je nach Bedarf oft innerhalb weniger Tage. Für ein Pilotprojekt können wir in der Regel schnell 1–2 passende Profile vorbereiten.",
    },
    {
      q: "Was passiert bei Ausfall?",
      a: "Wir unterstützen mit schneller Kommunikation und, falls vereinbart, mit einer Ersatzlösung.",
    },
  ];

  const legalLinks = [
    { title: "Impressum", href: "#impressum" },
    { title: "Datenschutz", href: "#datenschutz" },
  ];

  const stats = [
    ["DE", "Deutschsprachige Profile"],
    ["24–72h", "erste passende Vorschläge"],
    ["Pilot", "einfacher Einstieg"],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ✅ FAQAT HEADER KICHRAYTIRILDI */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-2">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Local2Global</h1>
            <p className="text-xs text-slate-600 leading-tight">
              Deutschsprachige Remote Support Spezialisten aus Usbekistan
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#leistungen" className="transition hover:text-slate-900">
              Leistungen
            </a>
            <a href="#ablauf" className="transition hover:text-slate-900">
              Ablauf
            </a>
            <a href="#faq" className="transition hover:text-slate-900">
              FAQ
            </a>
            {legalLinks.map((link) => (
              <a key={link.title} href={link.href} className="transition hover:text-slate-900">
                {link.title}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-2xl bg-slate-900 px-4 py-2 font-medium text-white shadow-sm transition hover:opacity-90"
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
                  Wir helfen deutschen Unternehmen dabei, direkt mit geprüften deutschsprachigen
                  Spezialisten aus Usbekistan zu arbeiten. Wir unterstützen bei Vorauswahl,
                  Sprachprüfung, Onboarding und lokaler Koordination.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@local2global.de?subject=Pilotprojekt%20anfragen"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                  >
                    Pilotprojekt anfragen
                  </a>
                  <a
                    href="#leistungen"
                    className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    Mehr erfahren
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                    >
                      <div className="text-lg font-bold text-slate-900">{value}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative self-start md:-mt-10">
                <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-slate-100 blur-2xl md:block" />
                <div className="absolute -bottom-6 -right-4 hidden h-28 w-28 rounded-full bg-slate-200 blur-2xl md:block" />
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=80"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl overflow-hidden rounded-2xl">
              <video
                src="https://sy0feekclhe6fenn.public.blob.vercel-storage.com/logic.mp4"
                controls
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* qolgan hamma sectionlar o‘zgarmagan */}
      </main>

      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-medium text-slate-900">Local2Global</p>
            <p>Deutschsprachige Remote Support Spezialisten aus Usbekistan</p>
          </div>
          <div className="mt-4 text-left md:mt-0 md:text-right">
            <p>E-Mail: hello@local2global.de</p>
            <p>Standort: Viethstraße 6, 06844 Dessau-Roßlau</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
