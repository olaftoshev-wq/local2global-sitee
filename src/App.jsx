export default function App() {
  const serviceCards = [
    {
      title: "Kundenservice",
      text: "Deutschsprachiger Support per Telefon, E-Mail und Chat für wachsende Unternehmen.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Call Center",
      text: "Remote Inbound- und Outbound-Support mit vorgeprüften deutschsprachigen Spezialisten.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "1st Level IT Support",
      text: "Zuverlässige Unterstützung für Helpdesk, Ticketsysteme und technische Erstbearbeitung.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
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

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <section className="border-b bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Local2Global</h1>
            <p className="text-sm text-slate-600">
              Deutschsprachige Remote Support Spezialisten aus Usbekistan
            </p>
          </div>

          <a
            href="mailto:hello@local2global.de"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            Kontakt
          </a>
        </div>
      </section>

      {/* HERO SECTION */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Direct contract. Background support.
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Deutschsprachige Remote-Mitarbeiter für Kundenservice und IT-Support
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Wir helfen deutschen Unternehmen dabei, direkt mit geprüften deutschsprachigen
              Spezialisten aus Usbekistan zu arbeiten. Wir unterstützen bei Vorauswahl,
              Sprachprüfung, Onboarding und lokaler Koordination.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@local2global.de?subject=Pilotprojekt%20anfragen"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm"
              >
                Pilotprojekt anfragen
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
              >
                Mehr erfahren
              </a>
            </div>

            {/* === 🔥 VIDEO EXACTLY HERE (QIZIL RAMKA JOYI) === */}
            <div className="my-16 w-full flex justify-center">
  https://sy0fekeclh6efqnn.public.blob.vercel-storage.com/loglo.mp4"
    className="w-full max-w-5xl rounded-2xl shadow-2xl"
  >
    Your browser does not support the video tag.
  </video>
</div>
            {/* === END VIDEO === */}

          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=80"
              alt="Professionelles Remote Support Team in einer modernen Arbeitsumgebung"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WARUM SECTION */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Warum Local2Global</h3>
            <p className="mt-4 max-w-2xl text-slate-600 leading-7">
              Wir verbinden deutsche Unternehmen mit motivierten deutschsprachigen Remote-
              Spezialisten und reduzieren gleichzeitig den operativen Aufwand durch strukturierte
              Auswahl, Vorbereitung und Koordination.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm border border-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm bg-white">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              alt="Geschäftspartner bei einem professionellen Meeting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-3xl font-bold tracking-tight">Unsere Einsatzbereiche</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <img src={card.image} alt={card.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{card.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REST OF YOUR ORIGINAL SECTIONS (UNCHANGED) */}

      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          <p className="font-medium text-slate-900">Local2Global</p>
          <p>Deutschsprachige Remote Support Spezialisten aus Usbekistan</p>
          <p className="mt-2">E-Mail: hello@local2global.de</p>
          <p>Standort: Dessau-Roßlau / Berlin</p>
        </div>
      </footer>
    </div>
  );
}
