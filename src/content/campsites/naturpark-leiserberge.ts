import type { CampsiteConfig } from "../types";

const IMG = "/campsites/naturpark-leiserberge";

const naturparkLeiserberge: CampsiteConfig = {
  name: "Wohnmobil-Stellplatz am Buschberg",
  shortName: "Buschberg",
  slug: "naturpark-leiserberge",
  ort: "Gnadendorf",
  region: "Weinviertel",
  brandKind: "Stellplatz im Naturpark",
  regionLong: "Naturpark Leiser Berge · Weinviertel · Niederösterreich",

  heroVariant: "center",

  claim: "Wohnmobil-Nächte am höchsten Punkt des Weinviertels",
  claimEmphasis: "höchsten Punkt",
  emailDetail: "eure Lage hoch oben am Buschberg",
  intro:
    "Stell dein Wohnmobil auf den befestigten Schotterplatz am Buschberg, dem höchsten Punkt der Leiser Berge — frei zugänglich, naturnah und nur 15 Gehminuten von Buschberghütte und Gipfelkreuz.",

  statement: {
    text: "Oben am Buschberg endet die Straße — und der Blick übers Weinviertel beginnt.",
    emphasis: "der Blick übers Weinviertel",
  },

  pillars: [
    {
      title: "Direkt am Buschberg",
      text: "Der höchste Punkt der Leiser Berge — bis zum Gipfelkreuz sind es nur 15 Gehminuten.",
      image: { src: `${IMG}/gallery-1d2109e4f9.webp`, alt: "Blick zum Buschberg mit der weithin sichtbaren Radarstation — höchster Punkt der Leiser Berge" },
    },
    {
      title: "Mitten in der Natur",
      text: "Rundum nur sanfte Hügel, Felder und Wald — echte Ruhe mitten im Naturpark Leiser Berge.",
      image: { src: `${IMG}/gallery-de86bb4e01.webp`, alt: "Blühende Rapsfelder und sanfte Hügel im Naturpark Leiser Berge" },
    },
    {
      title: "Im Herzen des Weinviertels",
      text: "Kellergassen, Heurige und kleine Dörfer prägen die sanfte Landschaft rund um den Platz.",
      image: { src: `${IMG}/gallery-85a3a13a46.webp`, alt: "Wanderer auf dem Jakobsweg durch eine sonnige Kellergasse im Weinviertel" },
    },
  ],

  usps: [
    "Frei zugänglich",
    "Befestigter Schotterplatz",
    "Max. 24 Stunden",
    "Picknicktische am Platz",
    "15 Min. zur Buschberghütte",
    "Höchster Punkt der Region",
  ],

  trust: {
    heading: "Warum Camper den Buschberg lieben",
    headingEmphasis: "den Buschberg",
    intro:
      "Kein Trubel, keine Schranke — nur ein ruhiger Naturplatz hoch über dem Weinviertel, von dem aus du Wandern, Radeln und die Stille der Leiser Berge direkt vor der Tür hast.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-5537a092ad.webp`, alt: "Wohnmobil-Stellplatz am Buschberg mit Picknicktisch und Blick auf die Radarstation im Naturpark Leiser Berge" },
  },

  camping: {
    heading: "Der Stellplatz am Buschberg",
    intro:
      "Ein einfacher, ehrlicher Naturplatz: fester Schotteruntergrund, Platz zum Stehen und ein paar Picknicktische — mehr braucht eine Nacht unter Sternen nicht.",
    features: [
      {
        title: "Befestigter Schotterplatz",
        text: "Der Untergrund ist befestigt und mit Schotter bedeckt — stabil und sicher für Wohnmobil und Camper.",
        image: { src: `${IMG}/gallery-942213b034.webp`, alt: "Befestigter Schotter-Stellplatz am Buschberg mit Infotafeln" },
      },
      {
        title: "Picknicktische am Platz",
        text: "Direkt am Stellplatz laden Picknicktische unter Bäumen zur Rast und zur Jause im Grünen ein.",
        image: { src: `${IMG}/gallery-59b25fb837.webp`, alt: "Picknicktische auf der Wiese beim Stellplatz am Buschberg" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Unterwegs im Naturpark",
    intro:
      "Wandern, Radeln und Ausflugsziele für jeden Tag — die Leiser Berge und das Weinviertel beginnen direkt am Platz.",
    items: [
      {
        title: "Aussichtswarte Oberleiserberg",
        text: "Die hölzerne Warte am Oberleiserberg öffnet den Blick weit über das ganze Weinviertel.",
        image: { src: `${IMG}/gallery-d82a9368c9.webp`, alt: "Hölzerne Aussichtswarte am Oberleiserberg mit geschnitzten Leiser-Berge-Sesseln" },
      },
      {
        title: "Jakobsweg Weinviertel",
        text: "Der Jakobsweg Weinviertel führt durch die sanften Hügel und Kellergassen der Region — ein Pilger- und Wanderweg direkt vor der Haustür.",
        image: { src: `${IMG}/gallery-c90404786b.webp`, alt: "Wanderer mit Trekking-Stöcken auf dem Jakobsweg Weinviertel, im Hintergrund eine Weinviertler Kapelle auf dem Hügel" },
      },
      {
        title: "MAMUZ Schloss Asparn",
        text: "Im Archäologiemuseum Schloss Asparn wird die Urgeschichte des Weinviertels lebendig.",
        image: { src: `${IMG}/gallery-246db503ea.webp`, alt: "MAMUZ Schloss Asparn an der Zaya mit Besuchern am Zugang" },
      },
    ],
  },

  anreise: {
    heading: "Anreise zum Buschberg",
    modes: [
      { title: "Mit dem Auto", text: "Über die A5 Nordautobahn bis Schrick, dann über Mistelbach Richtung Niederleis zum Buschbergparkplatz." },
      { title: "Öffentlich anreisen", text: "Bahnhof Ernstbrunn, von dort mit dem NaturparkBus Leiser Berge weiter in die Region um den Buschberg." },
    ],
  },

  galerie: {
    heading: "Bilder aus der Region",
    headingEmphasis: "Region",
    intro:
      "Vom Buschberg bis ins Weinviertel — ein paar Eindrücke aus der Umgebung deines Stellplatzes.",
    tag: "Naturpark Leiser Berge",
    images: [
      { src: `${IMG}/gallery-d799636d1c.webp`, alt: "Blick auf Gnadendorf mit Pfarrkirche und sanften Hügeln des Weinviertels" },
      { src: `${IMG}/gallery-cfe9cc497c.webp`, alt: "Nostalgieexpress Leiser Berge bei der Fahrt durch das sommerliche Weinviertel" },
      { src: `${IMG}/gallery-e0eb2a6d1f.webp`, alt: "Radfahrer auf einem Feldweg der Leiserbergeblick-Runde im Naturpark Leiser Berge" },
    ],
  },

  booking: {
    heading: "Frei stehen am Buschberg?",
    headingEmphasis: "am Buschberg",
    intro:
      "Wähle deinen Zeitraum — die Buchung des Buschberg-Parkplatzes läuft über unseren Partner like2camp.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreis — der Naturpark gibt den Buschberg-Parkplatz als frei zugänglich (max. 24 Std.) an; Buchung über like2camp. Bitte bestätigen.",
    highlight: { title: "Gipfel inklusive", text: "Nur 15 Gehminuten zur Buschberghütte und zum Gipfelkreuz." },
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 19 },
    ],
  },

  kontakt: {
    tel: "+43 2576 20341",
    telHref: "tel:+43257620341",
    mail: "info@leiserberge.com",
    adresse: "Buschbergparkplatz · 2152 Gnadendorf · Niederösterreich",
    coords: { lat: 48.5768, lng: 16.399, approx: true },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default naturparkLeiserberge;
