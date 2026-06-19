import type { CampsiteConfig } from "../types";

/**
 * Wohnmobil-Stellplatz am Buschberg — Naturpark Leiser Berge, Weinviertel.
 * Ehrlicher, frei zugänglicher öffentlicher Stellplatz (kostenlos, max. 24 Std.,
 * keine Anschlüsse/Entsorgung). Eigene Platzfotos (©Bernhard Zechner) für Hero/
 * Pillars/Camping; die Region-Ausflugsziele sind als solche benannt. Quelle: eigene
 * Website (naturpark-leiserberge.at), Stand Juni 2026.
 */
const IMG = "/campsites/naturpark-leiserberge";

const naturparkLeiserberge: CampsiteConfig = {
  name: "Wohnmobil-Stellplatz am Buschberg",
  shortName: "Buschberg",
  slug: "naturpark-leiserberge",
  ort: "Gnadendorf",
  region: "Weinviertel",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Naturpark Leiser Berge · Weinviertel · Niederösterreich",

  heroVariant: "center",

  claim: "Frei stehen am höchsten Punkt der Leiser Berge",
  claimEmphasis: "höchsten Punkt",
  emailDetail: "die ruhige Lage am Buschberg hoch über dem Weinviertel",
  intro:
    "Ein einfacher, frei zugänglicher Stellplatz am Buschberg — befestigter Schotter, Picknicktische und Ruhe. Keine Anschlüsse, keine Entsorgung, dafür Natur pur und Wanderwege direkt vor dem Wohnmobil.",

  statement: {
    text: "Hier stehst du frei am Buschberg — dort, wo der Blick weit über das Weinviertel reicht.",
    emphasis: "frei am Buschberg",
  },

  pillars: [
    {
      title: "Frei & unkompliziert stehen",
      text: "Der Platz ist jederzeit frei zugänglich — ohne Buchung, ohne Eintritt, maximal 24 Stunden.",
      image: { src: `${IMG}/gallery-942213b034.webp`, alt: "Frei zugänglicher Schotter-Stellplatz am Buschberg" },
    },
    {
      title: "Gipfel des Buschbergs",
      text: "Der Buschberg ist der höchste Punkt der Leiser Berge — sein weißes Radom ist weithin sichtbar.",
      image: { src: `${IMG}/gallery-1d2109e4f9.webp`, alt: "Buschberg mit dem weißen Radom unter blauem Himmel" },
    },
    {
      title: "Weitblick über das Weinviertel",
      text: "Von den Höhenrücken ringsum schweift der Blick weit über das sanfte Weinviertel hinaus.",
      image: { src: `${IMG}/hero-9feeebba91.webp`, alt: "Aussichtsplatz mit Holzbänken und Panorama über die Leiser Berge" },
    },
  ],

  usps: [
    "Jederzeit frei zugänglich",
    "Befestigter Schotterplatz",
    "Picknicktische vor Ort",
    "Wanderwege ab Platz",
    "Buschberghütte in 15 Min.",
    "Gipfelkreuz nahe der Hütte",
  ],

  trust: {
    heading: "Schlicht, frei und mitten in der Natur",
    headingEmphasis: "mitten in der Natur",
    intro:
      "Kein Luxus, kein Trubel: Der Stellplatz am Buschberg ist ein einfacher, kostenfreier Platz für alle, die autark reisen und die Ruhe des Naturparks suchen — ganzjährig frei zugänglich.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-5537a092ad.webp`, alt: "Picknicktisch am Stellplatz mit dem Radom des Buschbergs im Hintergrund" },
  },

  camping: {
    heading: "Der Stellplatz am Buschberg",
    intro:
      "Befestigter Schotteruntergrund, ein paar Picknicktische und Wanderwege ab Platz — mehr braucht es hier nicht. Ein ehrlicher Stopp für alle, die autark unterwegs sind.",
    features: [
      {
        title: "Befestigter Schotterplatz",
        text: "Der ebene Untergrund ist befestigt und geschottert — dein Wohnmobil steht sicher und stabil.",
        image: { src: `${IMG}/gallery-4c3895dbe9.webp`, alt: "Befestigter Schotter-Stellplatz mit Straße am Buschberg" },
      },
      {
        title: "Picknicktische im Grünen",
        text: "Robuste Holztische am Wiesenrand laden zur Rast mit Blick auf den bewaldeten Buschberg.",
        image: { src: `${IMG}/gallery-e9f14c54bc.webp`, alt: "Picknicktisch und Mülltrennstation am Stellplatz Buschberg" },
      },
      {
        title: "Wanderwege ab Platz",
        text: "Direkt am Platz beginnen beschilderte Wege — etwa zum Wildpark Ernstbrunn und zur Buschberghütte.",
        image: { src: `${IMG}/gallery-59b25fb837.webp`, alt: "Wegweiser zum Wildpark Ernstbrunn am Stellplatz Buschberg" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Der Naturpark vor der Tür",
    intro:
      "Vom Stellplatz aus erreichst du die Höhepunkte des Naturparks Leiser Berge — von der Aussichtswarte über den Wildpark bis zum Schloss.",
    items: [
      {
        title: "Aussichtswarte Oberleiser Berg",
        text: "Vom hölzernen Turm im Rapsfeld reicht der Blick weit über das Weinviertel und die Leiser Berge.",
        image: { src: `${IMG}/activity-458a6167ea.webp`, alt: "Hölzerne Aussichtswarte am Oberleiser Berg im Rapsfeld" },
      },
      {
        title: "Wildpark Ernstbrunn",
        text: "Rotwild, Mufflons und Wölfe aus nächster Nähe — ein Ausflug für die ganze Familie.",
        image: { src: `${IMG}/gallery-cc9981f99e.webp`, alt: "Damhirsch und Kind im Wildpark Ernstbrunn" },
      },
      {
        title: "Weinviertel-Draisine",
        text: "Auf der alten Bahntrasse von Ernstbrunn nach Asparn radelst du mit der Draisine durchs Land.",
        image: { src: `${IMG}/gallery-4ac53d257b.webp`, alt: "Gruppe auf der Weinviertel-Draisine durch die herbstliche Landschaft" },
      },
      {
        title: "Alpaka-Freizeitpark",
        text: "Geführte Alpakawanderungen und Bauernolympiade sorgen für einen aktiven Tag im Grünen.",
        image: { src: `${IMG}/gallery-49a0a97e33.webp`, alt: "Kinder führen Alpakas im Alpaka-Freizeitpark Leiser Berge" },
      },
      {
        title: "MAMUZ Schloss Asparn/Zaya",
        text: "Im Urgeschichtemuseum tauchst du in Stein- und Bronzezeit ein — drinnen wie im Freigelände.",
        image: { src: `${IMG}/gallery-5d358f93a5.webp`, alt: "Schloss Asparn an der Zaya mit dem MAMUZ" },
      },
    ],
  },

  anreise: {
    heading: "Hinauf zum Buschberg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A5 oder B6 Richtung Mistelbach, dann über Gnadendorf den Wegweisern zum Buschberg-Parkplatz folgen.",
      },
      {
        title: "Öffentlich anreisen",
        text: "Der Bahnhof Ernstbrunn liegt in der Region — die letzten Kilometer zum Buschberg am besten per Rad oder zu Fuß.",
      },
    ],
  },

  galerie: {
    heading: "Naturpark Leiser Berge in Bildern",
    headingEmphasis: "Leiser Berge",
    intro:
      "Sanfte Hügel, weite Felder und Ausflugsziele rund um den Buschberg — ein paar Eindrücke aus dem Naturpark.",
    tag: "Weinviertel · Niederösterreich",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-9c2bd23610.webp`, alt: "Steinbock im Wildpark Ernstbrunn" },
      { src: `${IMG}/gallery-4fe421c0f7.webp`, alt: "Unterwegs mit der Weinviertel-Draisine" },
      { src: `${IMG}/gallery-462dbd6b03.webp`, alt: "Schaugarten Köhler in Ladendorf" },
      { src: `${IMG}/gallery-d82a9368c9.webp`, alt: "Aussichtsplatz mit Blick über die Leiser Berge" },
    ],
  },

  booking: {
    heading: "Kostenlos stehen am Buschberg",
    headingEmphasis: "Kostenlos",
    intro:
      "Der Stellplatz ist frei zugänglich und kostenlos — für Fragen zum Platz oder zur Region melden wir uns gern persönlich bei dir.",
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 0 },
    ],
    pricesArePlaceholder: false,
    priceNote:
      "Der Stellplatz am Buschberg ist kostenfrei und frei zugänglich · max. 24 Stunden · keine Strom-/Wasseranschlüsse oder Entsorgung.",
    highlight: {
      title: "Kostenlos & frei zugänglich",
      text: "Kein Buchen, kein Eintritt — einfach hinfahren und maximal 24 Stunden bleiben.",
    },
  },

  kontakt: {
    tel: "+43 2576 20341",
    telHref: "tel:+43257620341",
    mail: "info@leiserberge.com",
    adresse: "Buschberg · 2152 Gnadendorf · Niederösterreich",
    coords: { lat: 48.576788, lng: 16.398997, approx: true },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Naturpark", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preis & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default naturparkLeiserberge;
