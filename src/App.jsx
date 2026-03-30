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
      a: "Je nach Bedarf oft innerhalb weniger Tage.",
    },
    {
      q: "Was passiert bei Ausfall?",
      a: "Wir unterstützen mit schneller Kommunikation und Ersatzlösung.",
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
      
      {/* 🔥 YANGILANGAN HEADER */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight">Local2Global</h1>
            <p className="text-xs text-slate-500">
              Deutschsprachige Remote Support Spezialisten aus Usbekistan
            </p>
          </div>

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
        <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold">
              Deutschsprachige Remote-Mitarbeiter
            </h2>
            <p className="mt-4 text-slate-600">
              Wir verbinden deutsche Unternehmen mit geprüften Spezialisten aus Usbekistan.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093"
            className="rounded-2xl"
          />
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div key={card.title} className="border rounded-2xl overflow-hidden">
              <img src={card.image} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          {faqs.map((f) => (
            <div key={f.q} className="mb-4 border p-4 rounded-xl">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="text-sm text-slate-600 mt-2">{f.a}</p>
            </div>
          ))}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-slate-600">
        © Local2Global
      </footer>
    </div>
  );
}
