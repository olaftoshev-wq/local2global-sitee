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
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

          {/* LOGO */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl font-bold tracking-tight">Local2Global</h1>
            <p className="hidden md:block text-xs text-slate-500">
              Deutschsprachige Remote Support Spezialisten
            </p>
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
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
              className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <main>
        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2">

              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Direct contract. Background support.
                </p>

                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                  Deutschsprachige Remote-Mitarbeiter für Kundenservice und IT-Support
                </h2>

                <p className="mt-6 text-slate-600">
                  Wir helfen deutschen Unternehmen dabei, direkt mit geprüften
                  Spezialisten aus Usbekistan zu arbeiten.
                </p>

                <div className="mt-8 flex gap-3">
                  <a className="rounded-xl bg-slate-900 px-5 py-3 text-white">
                    Pilotprojekt anfragen
                  </a>
                  <a className="rounded-xl border px-5 py-3">
                    Mehr erfahren
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093"
                  className="w-full"
                />
              </div>
            </div>

            {/* STATS */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="border rounded-2xl p-4">
                  <div className="font-bold">{value}</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow">
                <img src={card.image} className="h-52 w-full object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="font-semibold">{card.title}</h4>
                  <p className="text-sm text-slate-600 mt-2">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="mx-auto max-w-4xl px-6 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="border p-5 rounded-2xl">
                <h4 className="font-semibold">{item.q}</h4>
                <p className="text-sm text-slate-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h3 className="text-2xl font-bold">Kontakt</h3>
            <p className="mt-2 text-slate-300">hello@local2global.de</p>
          </div>
        </section>

      </main>
    </div>
  );
}
