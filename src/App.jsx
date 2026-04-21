export default function lokal2globalLandingPage() {
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
      {/* ── HEADER ── */}
      <section className="sticky top-0 z-30 border-b border-blue-900" style={{ background: '#2e5490' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
          {/* Logo + tagline inline */}
          <div className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="text-lg font-bold tracking-tight text-white">lokal2global</span>
            <span className="hidden text-xs sm:inline" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Deutschsprachige Remote Support Spezialisten aus Usbekistan
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-5 text-sm md:flex" style={{ color: 'rgba(255,255,255,0.82)' }}>
            <a href="#leistungen" className="transition hover:text-white">Leistungen</a>
            <a href="#ablauf" className="transition hover:text-white">Ablauf</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            {legalLinks.map((link) => (
              <a key={link.title} href={link.href} className="transition hover:text-white">
                {link.title}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-2xl px-4 py-1.5 font-medium shadow-sm transition hover:bg-slate-100"
              style={{ background: '#ffffff', color: '#1a3a6b' }}
            >
              Kontakt
            </a>
          </nav>
        </div>
      </section>

      <main>
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
                    href="mailto:info@lokal2global.com?subject=Pilotprojekt%20anfragen"
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
                    alt="Professionelles Remote Support Team in einer modernen Arbeitsumgebung"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-black shadow-2xl shadow-slate-300/40">
                <video
                  src="https://sy0fekeclh6efqnn.public.blob.vercel-storage.com/loglo.mp4"
                  controls
                  className="w-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-slate-50">
          <div className="mx-auto grid max-w-4xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-16">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Warum lokal2global</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Wir verbinden deutsche Unternehmen mit motivierten deutschsprachigen Remote-
                Spezialisten und reduzieren gleichzeitig den operativen Aufwand durch strukturierte
                Auswahl, Vorbereitung und Koordination.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                alt="Geschäftspartner bei einem professionellen Meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="leistungen">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold tracking-tight">Unsere Einsatzbereiche</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Unsere Kandidaten eignen sich besonders für kommunikative und strukturierte
                Remote-Rollen mit deutschsprachigem Kundenkontakt.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/40 transition duration-300 hover:-translate-y-1"
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

        <section className="border-y bg-slate-50">
          <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-2 md:items-start">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Geeignete Rollen</h3>
              <div className="mt-6 grid gap-3">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold tracking-tight">Unsere Leistungen</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Vorauswahl", "Geeignete Kandidaten nach Anforderungsprofil"],
                  ["Sprachprüfung", "Deutschkenntnisse werden im Vorfeld geprüft"],
                  ["Onboarding", "Unterstützung beim Start und bei der Einrichtung"],
                  ["Koordination", "Lokale Betreuung und schnelle Kommunikation"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h4 className="text-lg font-semibold">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ablauf">
          <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight">
                So funktioniert die Zusammenarbeit
              </h3>
              <ol className="mt-5 space-y-3 text-slate-600">
                {process.map((step, index) => (
                  <li key={step} className="rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="font-semibold text-slate-900">{index + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Remote Team arbeitet gemeinsam an Kundenservice und Support"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y bg-slate-50">
          <div className="mx-auto grid max-w-4xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt="Professionelles Gespräch über Pilotprojekt und Zusammenarbeit"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Pilotprojekt mit geringem Risiko</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Starten Sie mit einem kleinen Pilotprojekt und testen Sie die Zusammenarbeit mit
                einem deutschsprachigen Remote-Spezialisten für Kundenservice oder IT-Support.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                So erhalten Sie einen direkten Eindruck von Kommunikation, Zuverlässigkeit und
                operativer Entlastung, bevor Sie weiter skalieren.
              </p>
              <a
                href="mailto:info@lokal2global.com?subject=Pilotprojekt%20starten"
                className="mt-6 inline-block rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Jetzt Pilot anfragen
              </a>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold tracking-tight">Häufige Fragen</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Hier finden Sie die wichtigsten Antworten zur Zusammenarbeit mit deutschsprachigen
                Remote-Spezialisten aus Usbekistan.
              </p>
            </div>
            <div className="mt-8 grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold">{item.q}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt">
          <div className="mx-auto max-w-4xl px-6 pb-16">
            <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white shadow-xl shadow-slate-300/30 md:flex md:items-center md:justify-between md:gap-10">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Lassen Sie uns sprechen</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Gerne stellen wir Ihnen passende Profile für Kundenservice, Call Center,
                  Backoffice oder 1st Level IT Support vor.
                </p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate-200 md:mt-0">
                <p>E-Mail: info@lokal2global.com</p>
                <p>Standort: Viethstraße 6, 06844 Dessau-Roßlau</p>
                <a
                  href="mailto:info@lokal2global.com"
                  className="mt-2 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="impressum" className="border-t bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-3xl font-bold tracking-tight">Impressum</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Angaben gemäß § 5 TMG</span>
                </p>
                <p>
                  lokal2global<br />
                  Mekhriniso Tojieva<br />
                  Viethstraße 6<br />
                  06844 Dessau-Roßlau<br />
                  Deutschland
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Kontakt</span><br />
                  E-Mail: info@lokal2global.com<br />
                  Telefon: +49 163 7414395
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Verantwortlich für den Inhalt</span><br />
                  Mekhriniso Tojieva
                </p>
                <p className="text-xs leading-6 text-slate-500">
                  Die Angaben wurden mit den bereitgestellten Kontaktdaten ergänzt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="datenschutz" className="border-t bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold tracking-tight">Datenschutz</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Personenbezogene Daten
                  werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">1. Verantwortlicher</h4>
                  <p className="mt-2">
                    lokal2global, Mekhriniso Tojieva, Viethstraße 6, 06844 Dessau-Roßlau, E-Mail:
                    info@lokal2global.com
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">2. Erhebung von Daten</h4>
                  <p className="mt-2">
                    Beim Besuch dieser Website können technische Daten wie Browsertyp, Betriebssystem,
                    Uhrzeit des Zugriffs und IP-Adresse automatisch verarbeitet werden, soweit dies
                    für den sicheren Betrieb der Website erforderlich ist.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">3. Kontaktaufnahme</h4>
                  <p className="mt-2">
                    Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur
                    Bearbeitung Ihrer Anfrage gespeichert und verwendet.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">4. Ihre Rechte</h4>
                  <p className="mt-2">
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                    Verarbeitung sowie auf Widerspruch gegen die Verarbeitung Ihrer Daten im Rahmen
                    der gesetzlichen Bestimmungen.
                  </p>
                </div>
                <p className="text-xs leading-6 text-slate-500">
                  Diese Datenschutzerklärung ist eine einfache Vorlage und sollte vor der
                  Veröffentlichung rechtlich geprüft und an Ihre tatsächliche Nutzung angepasst werden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600 md:flex md:items-center md:justify-between">
          <div>
            <p className="font-medium text-slate-900">lokal2global</p>
            <p>Deutschsprachige Remote Support Spezialisten aus Usbekistan</p>
          </div>
          <div className="mt-4 text-left md:mt-0 md:text-right">
            <p>E-Mail: info@lokal2global.com</p>
            <p>Standort: Viethstraße 6, 06844 Dessau-Roßlau</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
