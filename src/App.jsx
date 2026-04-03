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

  const faqs = [
    {
      q: "Arbeiten Sie als klassische Agentur?",
      a: "Nein. Der Mitarbeiter arbeitet direkt mit dem Kunden.",
    },
    {
      q: "Wie schnell können Profile vorgestellt werden?",
      a: "Oft innerhalb weniger Tage.",
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

      {/* ✅ HEADER EXACT LIKE THE REFERENCE IMAGE */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">
          
          {/* Logo + Subtitle */}
          <div>
            <h1 className="text-xl font-semibold">Local2Global</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Deutschsprachige Remote Support Spezialisten
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
            <a href="#leistungen" className="hover:text-slate-900">Leistungen</a>
            <a href="#ablauf" className="hover:text-slate-900">Ablauf</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>

            {legalLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href} 
                className="hover:text-slate-900"
              >
                {link.title}
              </a>
            ))}

            <a
              href="#kontakt"
              className="rounded-xl bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* ======================= MAIN ======================= */}
      <main>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Deutschsprachige Remote-Mitarbeiter für Kundenservice und IT
            </h2>

            <p className="mt-6 text-slate-600">
              Arbeiten Sie direkt mit geprüften Spezialisten aus Usbekistan.
            </p>

            <div className="mt-8 flex gap-3">
              <button className="bg-slate-900 text-white px-5 py-3 rounded-xl">
                Pilot starten
              </button>
              <button className="border px-5 py-3 rounded-xl">
                Mehr erfahren
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093"
            className="rounded-3xl shadow-lg"
          />
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-6xl px-6 grid sm:grid-cols-3 gap-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border p-4 rounded-2xl">
              <div className="font-bold">{value}</div>
              <div className="text-sm text-slate-600">{label}</div>
            </div>
          ))}
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
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
