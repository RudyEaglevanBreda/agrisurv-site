/**
 * Bilingual content for the AgriSurv site (English / Afrikaans).
 *
 * `en` is the canonical shape; `af` is typed against it (`Dict`), so the build
 * fails if a translation key is ever missing. Icons and non-text data stay in
 * the components — only copy lives here.
 */

const en = {
  tagline: "Crop health. Data insights. Better yields.",

  lang: {
    choose: "Choose language",
    english: "English",
    afrikaans: "Afrikaans",
  },

  common: {
    low: "Low",
    highNdvi: "High NDVI",
    serviceArea: "South Africa",
    mapAria:
      "Sample NDVI crop-health map showing healthy canopy in green and stressed zones highlighted in orange and red",
  },

  nav: {
    services: "Services",
    how: "How it works",
    equipment: "Equipment",
    pricing: "Pricing",
    about: "About",
    faq: "FAQ",
  },

  cta: {
    quote: "Get a quote",
    seeHow: "See how it works",
    home: "AgriSurv home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Precision agriculture, from above",
    headline: { pre: "See crop stress", highlight: " weeks before ", post: "the eye can." },
    sub: "AgriSurv flies state-of-the-art multispectral drones over your lands and turns the imagery into clear NDVI crop-health maps — so you can scout smarter, fix problems early, and protect your yield.",
    trust: [
      { value: "Multispectral", label: "Calibrated sensors" },
      { value: "48–72 hrs", label: "Report turnaround" },
      { value: "Licensed", label: "RPAS-compliant flights" },
    ],
    cardTitle: "Pivot 7 · Maize",
    cardMeta: "NDVI · 38.4 ha scanned",
    annTitle: "Stress detected · SW corner",
    annBody: "Likely water stress — flagged for scouting",
  },

  services: {
    eyebrow: "What we do",
    heading: "Aerial insights for every stage of the season",
    sub: "One flight, many answers. We tailor each survey to the crop, the growth stage and the decision you need to make.",
    cards: [
      {
        title: "NDVI crop-health mapping",
        body: "Field-wide vegetation index maps that reveal vigour differences invisible from the ground — so you scout the right rows, not every row.",
      },
      {
        title: "Water & drought stress",
        body: "Spot under- and over-irrigated zones and failing pivots early, before stress turns into permanent yield loss.",
      },
      {
        title: "Stand & emergence counts",
        body: "Plant population and gap analysis after planting, so you can assess establishment and plan replanting with confidence.",
      },
      {
        title: "Variable-rate prescriptions",
        body: "Zone maps and shapefiles you can load straight into your spreader or sprayer for variable-rate fertiliser and inputs.",
      },
      {
        title: "Whole-farm surveys",
        body: "Repeat flights across the season to track how each land responds — building a record of what's working and what isn't.",
      },
      {
        title: "Agronomy-ready reports",
        body: "Clear PDF and GIS deliverables your agronomist can act on — annotated hotspots, zone stats and field notes.",
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    heading: "From take-off to decision in days",
    sub: "A simple, repeatable process — we handle the flying and the data, you get answers you can use.",
    steps: [
      {
        title: "Plan the flight",
        body: "We agree on the fields, timing and what you want to learn, then schedule flights around your crop's growth stage and the weather window.",
      },
      {
        title: "Capture the data",
        body: "Our licensed pilots fly calibrated multispectral drones over your lands, capturing every hectare at centimetre-level resolution.",
      },
      {
        title: "Process & analyse",
        body: "Imagery is stitched, radiometrically calibrated and turned into NDVI and zone maps — then reviewed for the patterns that matter.",
      },
      {
        title: "Deliver insights",
        body: "You receive clear maps, prescription files and a plain-language report within 48–72 hours — ready to act on in the field.",
      },
    ],
  },

  sample: {
    eyebrow: "The deliverable",
    heading: "Imagery is nice. Decisions are better.",
    sub: "We don't just hand over pretty pictures. Every survey becomes a practical set of insights your team can act on the same week.",
    cardTitle: "Sample NDVI deliverable",
    cardMeta: "Wheat · 64 ha · flown at flag-leaf stage",
    insights: [
      {
        title: "Pinpointed hotspots",
        body: "Every stressed zone is located by GPS so your team drives straight to the problem.",
      },
      {
        title: "Season-over-season trends",
        body: "Compare repeat flights to see whether an intervention actually moved the needle.",
      },
      {
        title: "Management zones",
        body: "Fields split into clear vigour zones for targeted scouting and variable-rate inputs.",
      },
      {
        title: "Ready-to-use files",
        body: "Annotated PDF report plus GeoTIFF and shapefile exports for your GIS or controller.",
      },
    ],
  },

  equipment: {
    eyebrow: "The kit",
    heading: "State-of-the-art sensors, survey-grade data",
    p1: "The quality of an NDVI map is only as good as the sensor and the calibration behind it. We fly professional multispectral platforms with proper radiometric calibration — not consumer cameras with a filter glued on.",
    p2: "That means your maps are accurate, repeatable and genuinely comparable across the season — the foundation for trustworthy agronomic decisions.",
    specs: [
      {
        label: "Multispectral imaging",
        value: "5-band sensor",
        detail: "Green, Red, Red-Edge, Near-Infrared + RGB for true NDVI & NDRE.",
      },
      {
        label: "RTK positioning",
        value: "cm-level accuracy",
        detail: "Survey-grade georeferencing so maps line up flight after flight.",
      },
      {
        label: "Calibrated reflectance",
        value: "Sun + panel calibrated",
        detail: "Down-welling light sensor and reflectance panel for comparable data.",
      },
      {
        label: "Resolution",
        value: "Down to ~2 cm/px",
        detail: "Fine enough to resolve individual plants and narrow stress strips.",
      },
      {
        label: "Coverage",
        value: "100s of ha / day",
        detail: "Efficient flight planning to cover whole operations quickly.",
      },
      {
        label: "Professional platform",
        value: "Enterprise-grade UAV",
        detail: "Redundant, weather-aware drones flown by licensed RPAS pilots.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, per-hectare pricing",
    sub: "Pay for what you fly. Rates scale with area and frequency — the more you survey, the lower the per-hectare cost.",
    popular: "Most popular",
    disclaimer:
      "Indicative rates in ZAR, excl. VAT. Minimum call-out applies. Final quote depends on area, location and flight frequency.",
    tiers: [
      {
        name: "Single Survey",
        price: "From R75",
        unit: "/ ha",
        blurb: "A once-off, whole-field snapshot — ideal for diagnosing a problem or trialling the service.",
        features: [
          "One multispectral flight",
          "NDVI crop-health map",
          "Annotated PDF report",
          "GeoTIFF + shapefile export",
          "48–72 hr turnaround",
        ],
        cta: "Book a survey",
      },
      {
        name: "Season Plan",
        price: "From R55",
        unit: "/ ha · flight",
        blurb: "Scheduled flights across the growing season so you can track and respond as the crop develops.",
        features: [
          "4–6 flights per season",
          "Everything in Single Survey",
          "Season-over-season comparisons",
          "Management-zone maps",
          "Variable-rate prescription files",
          "Priority scheduling",
        ],
        cta: "Plan my season",
      },
      {
        name: "Whole-Farm Partner",
        price: "Custom",
        unit: "",
        blurb: "For large operations and agribusinesses running multiple crops and lands across the year.",
        features: [
          "Unlimited fields & crops",
          "Tailored flight calendar",
          "Agronomist-ready data feeds",
          "GIS / FMS integration support",
          "Dedicated account contact",
        ],
        cta: "Talk to us",
      },
    ],
  },

  about: {
    eyebrow: "About AgriSurv",
    heading: "Precision agriculture, made practical for South African farmers",
    paragraphs: [
      "AgriSurv was founded on a simple idea: the technology that lets you see crop stress from above shouldn't be locked away in research labs and big-corporate budgets. It belongs in the hands of the people growing the food.",
      "We pair state-of-the-art multispectral drones with proper agronomic interpretation, so every flight ends with insight you can act on — not a folder of images you have to decode yourself.",
      "From a single problem field to a whole-farm programme across the season, we're here to help you protect yield, cut waste and farm with confidence.",
    ],
    values: [
      {
        title: "Decisions, not just data",
        body: "We translate imagery into clear actions a farmer can take this week.",
      },
      {
        title: "Built for the field",
        body: "Practical deliverables that fit how you already farm and the kit you run.",
      },
      {
        title: "Accurate & repeatable",
        body: "Calibrated, survey-grade data you can trust season after season.",
      },
      {
        title: "Local & responsive",
        body: "A South African team that knows local crops, conditions and pressures.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    heading: "Frequently asked",
    sub: "Everything you need to know before your first flight.",
    items: [
      {
        q: "How quickly do I get my results?",
        a: "Most surveys are processed and delivered within 48–72 hours of the flight. Larger or multi-field jobs may take a little longer — we'll confirm a timeline when we quote.",
      },
      {
        q: "What area can you cover?",
        a: "We're based in and fly across South Africa. A single drone can map hundreds of hectares in a day, so from a few pivots to a whole farm, we can scale the flight plan to your operation.",
      },
      {
        q: "Which crops do you work with?",
        a: "NDVI and multispectral analysis works across most field and tree crops — maize, wheat, soya, sugarcane, citrus, vines, vegetables and more. We tailor the timing and indices to suit the crop.",
      },
      {
        q: "What happens if the weather is bad?",
        a: "Flights need reasonable conditions for safe, accurate imagery. We monitor the forecast and reschedule around wind and cloud at no penalty — getting clean data right is more important than rushing.",
      },
      {
        q: "What formats do I receive?",
        a: "You get a plain-language PDF report plus GIS-ready exports — GeoTIFF rasters and shapefiles — that drop straight into most farm-management and variable-rate systems.",
      },
      {
        q: "Do you fly legally?",
        a: "Yes. All flights are carried out by appropriately licensed RPAS pilots in line with South African civil-aviation regulations, with the necessary approvals and insurance in place.",
      },
      {
        q: "Can you work with my agronomist?",
        a: "Absolutely. We're happy to deliver data directly to your agronomist or consultant in the format they prefer, so the insights slot into your existing advice and planning.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Ready to see your fields clearly?",
    sub: "Tell us about your farm and what you'd like to learn. We'll come back with a tailored quote and the next available flight window — usually within one business day.",
    methods: {
      email: "Email",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat to us",
      phone: "Phone",
      serviceArea: "Service area",
    },
    whatsappBtn: "Message us on WhatsApp",
    formTitle: "Request a quote",
    fields: {
      name: "Name",
      farm: "Farm / business",
      email: "Email",
      phone: "Phone",
      hectares: "Approx. hectares",
      crop: "Crop(s)",
      message: "What would you like to know?",
    },
    placeholders: {
      name: "Jan van der Merwe",
      farm: "Sandfontein Boerdery",
      email: "you@example.co.za",
      phone: "082 123 4567",
      hectares: "120",
      crop: "Maize, wheat",
      message: "We've got a maize block that looks patchy and want to find out what's going on…",
    },
    send: "Send request",
    sending: "Sending…",
    successTitle: "Thanks — we've got it.",
    successBodyConfigured:
      "Your request is on its way. We'll be in touch within one business day.",
    successBodyFallbackPre: "Your email app should have opened with the details ready to send. If not, email us directly at ",
    sendAnother: "Send another enquiry",
    errorPre: "Something went wrong sending your message. Please try again, or email us directly at ",
    preferEmailPre: "Prefer email? Reach us any time at ",
  },

  footer: {
    description:
      "Drone-based NDVI crop-stress analysis for South African farmers. We turn state-of-the-art aerial imagery into decisions that protect your yield.",
    explore: "Explore",
    contact: "Contact",
    whatsappUs: "WhatsApp us",
    quote: "Get a quote",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;
export type Locale = "en" | "af";

const af: Dict = {
  tagline: "Gewasgesondheid. Data-insigte. Beter opbrengste.",

  lang: {
    choose: "Kies taal",
    english: "Engels",
    afrikaans: "Afrikaans",
  },

  common: {
    low: "Laag",
    highNdvi: "Hoë NDVI",
    serviceArea: "Suid-Afrika",
    mapAria:
      "Voorbeeld NDVI-gewasgesondheidskaart wat gesonde plantegroei in groen wys en gestremde sones in oranje en rooi uitlig",
  },

  nav: {
    services: "Dienste",
    how: "Hoe dit werk",
    equipment: "Toerusting",
    pricing: "Pryse",
    about: "Oor ons",
    faq: "Vrae",
  },

  cta: {
    quote: "Kry 'n kwotasie",
    seeHow: "Sien hoe dit werk",
    home: "AgriSurv tuis",
    openMenu: "Maak kieslys oop",
    closeMenu: "Maak kieslys toe",
  },

  hero: {
    eyebrow: "Presisieboerdery, van bo af",
    headline: { pre: "Sien gewasstremming", highlight: " weke voordat ", post: "die oog dit raaksien." },
    sub: "AgriSurv vlieg moderne multispektraal-drones oor jou lande en omskep die beelde in duidelike NDVI-gewasgesondheidskaarte — sodat jy slimmer kan verken, probleme vroeg kan regstel en jou opbrengs kan beskerm.",
    trust: [
      { value: "Multispektraal", label: "Gekalibreerde sensors" },
      { value: "48–72 uur", label: "Verslag-omkeertyd" },
      { value: "Gelisensieer", label: "RPAS-voldoende vlugte" },
    ],
    cardTitle: "Spilpunt 7 · Mielies",
    cardMeta: "NDVI · 38.4 ha geskandeer",
    annTitle: "Stremming bespeur · SW-hoek",
    annBody: "Waarskynlik waterstremming — gemerk vir verkenning",
  },

  services: {
    eyebrow: "Wat ons doen",
    heading: "Lugkundige insigte vir elke stadium van die seisoen",
    sub: "Een vlug, baie antwoorde. Ons pas elke opname aan by die gewas, die groeistadium en die besluit wat jy moet neem.",
    cards: [
      {
        title: "NDVI-gewasgesondheidskaarte",
        body: "Veldwye plantegroei-indekskaarte wat groeikragverskille uitwys wat van die grond af onsigbaar is — sodat jy die regte rye verken, nie elke ry nie.",
      },
      {
        title: "Water- en droogtestremming",
        body: "Bespeur onder- en oorbesproeide sones en falende spilpunte vroeg, voordat stremming in permanente opbrengsverlies verander.",
      },
      {
        title: "Stand- en opkomstellings",
        body: "Plantbevolking- en gapingsontleding ná planting, sodat jy vestiging kan beoordeel en herplanting met vertroue kan beplan.",
      },
      {
        title: "Veranderlike-tempo voorskrifte",
        body: "Sonekaarte en shapefiles wat jy direk in jou strooier of spuit kan laai vir veranderlike-tempo kunsmis en insette.",
      },
      {
        title: "Heelplaas-opnames",
        body: "Herhaalde vlugte oor die seisoen om te volg hoe elke land reageer — wat 'n rekord bou van wat werk en wat nie.",
      },
      {
        title: "Agronomie-gereed verslae",
        body: "Duidelike PDF- en GIS-aflewerbares waarop jou agronoom kan reageer — geannoteerde brandpunte, sonestatistiek en veldnotas.",
      },
    ],
  },

  process: {
    eyebrow: "Hoe dit werk",
    heading: "Van opstyg tot besluit binne dae",
    sub: "'n Eenvoudige, herhaalbare proses — ons hanteer die vlieg en die data, jy kry antwoorde wat jy kan gebruik.",
    steps: [
      {
        title: "Beplan die vlug",
        body: "Ons kom ooreen oor die lande, tydsberekening en wat jy wil uitvind, en skeduleer dan vlugte rondom jou gewas se groeistadium en die weervenster.",
      },
      {
        title: "Vang die data vas",
        body: "Ons gelisensieerde vlieëniers vlieg gekalibreerde multispektraal-drones oor jou lande en vang elke hektaar teen sentimeter-vlak resolusie vas.",
      },
      {
        title: "Verwerk & ontleed",
        body: "Beelde word saamgevoeg, radiometries gekalibreer en in NDVI- en sonekaarte omskep — en dan nagegaan vir die patrone wat saak maak.",
      },
      {
        title: "Lewer insigte",
        body: "Jy ontvang duidelike kaarte, voorskriflêers en 'n verslag in eenvoudige taal binne 48–72 uur — gereed om in die veld op te tree.",
      },
    ],
  },

  sample: {
    eyebrow: "Die aflewerbare",
    heading: "Beelde is mooi. Besluite is beter.",
    sub: "Ons oorhandig nie net mooi prente nie. Elke opname word 'n praktiese stel insigte waarop jou span dieselfde week kan reageer.",
    cardTitle: "Voorbeeld NDVI-aflewerbare",
    cardMeta: "Koring · 64 ha · gevlieg op vlagblaarstadium",
    insights: [
      {
        title: "Presiese brandpunte",
        body: "Elke gestremde sone word met GPS opgespoor sodat jou span reguit na die probleem ry.",
      },
      {
        title: "Seisoen-tot-seisoen tendense",
        body: "Vergelyk herhaalde vlugte om te sien of 'n ingryping werklik 'n verskil gemaak het.",
      },
      {
        title: "Bestuurssones",
        body: "Lande verdeel in duidelike groeikragsones vir gerigte verkenning en veranderlike-tempo insette.",
      },
      {
        title: "Gebruiksgereed lêers",
        body: "Geannoteerde PDF-verslag plus GeoTIFF- en shapefile-uitvoere vir jou GIS of beheerder.",
      },
    ],
  },

  equipment: {
    eyebrow: "Die toerusting",
    heading: "Moderne sensors, opname-gehalte data",
    p1: "Die kwaliteit van 'n NDVI-kaart is net so goed soos die sensor en die kalibrasie daaragter. Ons vlieg professionele multispektraal-platforms met behoorlike radiometriese kalibrasie — nie verbruikerskameras met 'n filter daarop gegom nie.",
    p2: "Dit beteken jou kaarte is akkuraat, herhaalbaar en werklik vergelykbaar oor die seisoen — die grondslag vir betroubare agronomiese besluite.",
    specs: [
      {
        label: "Multispektraal-beelding",
        value: "5-band sensor",
        detail: "Groen, Rooi, Rooi-rand, Naby-infrarooi + RGB vir ware NDVI & NDRE.",
      },
      {
        label: "RTK-posisionering",
        value: "cm-vlak akkuraatheid",
        detail: "Opname-gehalte geoverwysing sodat kaarte vlug ná vlug ooreenstem.",
      },
      {
        label: "Gekalibreerde refleksie",
        value: "Son + paneel gekalibreer",
        detail: "Inkomende-lig sensor en refleksiepaneel vir vergelykbare data.",
      },
      {
        label: "Resolusie",
        value: "Tot ~2 cm/px",
        detail: "Fyn genoeg om individuele plante en smal stremmingstroke te onderskei.",
      },
      {
        label: "Dekking",
        value: "100'e ha / dag",
        detail: "Doeltreffende vlugbeplanning om hele bedrywighede vinnig te dek.",
      },
      {
        label: "Professionele platform",
        value: "Onderneming-gehalte UAV",
        detail: "Oortollige, weerbewuste drones gevlieg deur gelisensieerde RPAS-vlieëniers.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pryse",
    heading: "Eenvoudige pryse, per hektaar",
    sub: "Betaal vir wat jy vlieg. Tariewe skaal met oppervlakte en frekwensie — hoe meer jy opneem, hoe laer die koste per hektaar.",
    popular: "Gewildste",
    disclaimer:
      "Aanduidende tariewe in ZAR, BTW uitgesluit. Minimum uitroeptarief geld. Finale kwotasie hang af van oppervlakte, ligging en vlugfrekwensie.",
    tiers: [
      {
        name: "Enkele opname",
        price: "Vanaf R75",
        unit: "/ ha",
        blurb: "'n Eenmalige, heelveld-momentopname — ideaal om 'n probleem te diagnoseer of die diens te toets.",
        features: [
          "Een multispektraal-vlug",
          "NDVI-gewasgesondheidskaart",
          "Geannoteerde PDF-verslag",
          "GeoTIFF + shapefile-uitvoer",
          "48–72 uur omkeertyd",
        ],
        cta: "Bespreek 'n opname",
      },
      {
        name: "Seisoenplan",
        price: "Vanaf R55",
        unit: "/ ha · vlug",
        blurb: "Geskeduleerde vlugte oor die groeiseisoen sodat jy kan volg en reageer soos die gewas ontwikkel.",
        features: [
          "4–6 vlugte per seisoen",
          "Alles in Enkele opname",
          "Seisoen-tot-seisoen vergelykings",
          "Bestuurssone-kaarte",
          "Veranderlike-tempo voorskriflêers",
          "Voorkeur-skedulering",
        ],
        cta: "Beplan my seisoen",
      },
      {
        name: "Heelplaas-vennoot",
        price: "Pasgemaak",
        unit: "",
        blurb: "Vir groot bedrywighede en landbou-ondernemings met veelvuldige gewasse en lande deur die jaar.",
        features: [
          "Onbeperkte lande & gewasse",
          "Pasgemaakte vlugkalender",
          "Agronoom-gereed datavoere",
          "GIS / FMS-integrasie-ondersteuning",
          "Toegewyde rekeningkontak",
        ],
        cta: "Praat met ons",
      },
    ],
  },

  about: {
    eyebrow: "Oor AgriSurv",
    heading: "Presisieboerdery, prakties gemaak vir Suid-Afrikaanse boere",
    paragraphs: [
      "AgriSurv is op 'n eenvoudige idee gebou: die tegnologie wat jou gewasstremming van bo af laat sien, behoort nie in navorsingslaboratoriums en groot korporatiewe begrotings weggesluit te wees nie. Dit hoort in die hande van die mense wat die kos verbou.",
      "Ons kombineer moderne multispektraal-drones met behoorlike agronomiese interpretasie, sodat elke vlug eindig met insig waarop jy kan reageer — nie 'n vouer vol beelde wat jy self moet ontsyfer nie.",
      "Van 'n enkele probleemland tot 'n heelplaas-program oor die seisoen, ons is hier om jou te help om opbrengs te beskerm, vermorsing te sny en met vertroue te boer.",
    ],
    values: [
      {
        title: "Besluite, nie net data nie",
        body: "Ons vertaal beelde in duidelike aksies wat 'n boer hierdie week kan neem.",
      },
      {
        title: "Gebou vir die veld",
        body: "Praktiese aflewerbares wat pas by hoe jy reeds boer en die toerusting wat jy gebruik.",
      },
      {
        title: "Akkuraat & herhaalbaar",
        body: "Gekalibreerde, opname-gehalte data wat jy seisoen ná seisoen kan vertrou.",
      },
      {
        title: "Plaaslik & responsief",
        body: "'n Suid-Afrikaanse span wat plaaslike gewasse, toestande en druk ken.",
      },
    ],
  },

  faq: {
    eyebrow: "Vrae",
    heading: "Algemene vrae",
    sub: "Alles wat jy moet weet voor jou eerste vlug.",
    items: [
      {
        q: "Hoe vinnig kry ek my resultate?",
        a: "Die meeste opnames word binne 48–72 uur ná die vlug verwerk en gelewer. Groter of meerveld-werke kan 'n bietjie langer neem — ons bevestig 'n tydlyn wanneer ons kwoteer.",
      },
      {
        q: "Watter area kan julle dek?",
        a: "Ons is in Suid-Afrika gebaseer en vlieg dwarsoor die land. 'n Enkele drone kan honderde hektaar in 'n dag karteer, so van 'n paar spilpunte tot 'n hele plaas — ons skaal die vlugplan by jou bedryf aan.",
      },
      {
        q: "Met watter gewasse werk julle?",
        a: "NDVI- en multispektraal-ontleding werk vir die meeste land- en boomgewasse — mielies, koring, soja, suikerriet, sitrus, wingerd, groente en meer. Ons pas die tydsberekening en indekse aan om by die gewas te pas.",
      },
      {
        q: "Wat gebeur as die weer sleg is?",
        a: "Vlugte het redelike toestande nodig vir veilige, akkurate beelde. Ons hou die voorspelling dop en herskeduleer rondom wind en wolke sonder boete — om skoon data reg te kry is belangriker as om te jaag.",
      },
      {
        q: "In watter formate ontvang ek dit?",
        a: "Jy kry 'n PDF-verslag in eenvoudige taal plus GIS-gereed uitvoere — GeoTIFF-rasters en shapefiles — wat reguit in die meeste plaasbestuur- en veranderlike-tempo stelsels inpas.",
      },
      {
        q: "Vlieg julle wettig?",
        a: "Ja. Alle vlugte word deur behoorlik gelisensieerde RPAS-vlieëniers uitgevoer in ooreenstemming met Suid-Afrikaanse burgerlugvaartregulasies, met die nodige goedkeurings en versekering in plek.",
      },
      {
        q: "Kan julle saam met my agronoom werk?",
        a: "Beslis. Ons lewer graag data direk aan jou agronoom of konsultant in die formaat wat hulle verkies, sodat die insigte inpas by jou bestaande advies en beplanning.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontak ons",
    heading: "Gereed om jou lande duidelik te sien?",
    sub: "Vertel ons van jou plaas en wat jy wil uitvind. Ons kom terug met 'n pasgemaakte kwotasie en die volgende beskikbare vlugvenster — gewoonlik binne een werksdag.",
    methods: {
      email: "E-pos",
      whatsapp: "WhatsApp",
      whatsappValue: "Gesels met ons",
      phone: "Foon",
      serviceArea: "Diensarea",
    },
    whatsappBtn: "Stuur vir ons 'n WhatsApp",
    formTitle: "Versoek 'n kwotasie",
    fields: {
      name: "Naam",
      farm: "Plaas / besigheid",
      email: "E-pos",
      phone: "Foon",
      hectares: "Ongeveer hektaar",
      crop: "Gewas(se)",
      message: "Wat wil jy graag weet?",
    },
    placeholders: {
      name: "Jan van der Merwe",
      farm: "Sandfontein Boerdery",
      email: "jy@voorbeeld.co.za",
      phone: "082 123 4567",
      hectares: "120",
      crop: "Mielies, koring",
      message: "Ons het 'n mielieblok wat vlekkerig lyk en wil uitvind wat aangaan…",
    },
    send: "Stuur versoek",
    sending: "Stuur tans…",
    successTitle: "Dankie — ons het dit ontvang.",
    successBodyConfigured:
      "Jou versoek is op pad. Ons sal binne een werksdag in aanraking wees.",
    successBodyFallbackPre: "Jou e-postoepassing behoort oop te gemaak het met die besonderhede gereed om te stuur. Indien nie, e-pos ons direk by ",
    sendAnother: "Stuur nog 'n navraag",
    errorPre: "Iets het verkeerd geloop met die stuur van jou boodskap. Probeer asseblief weer, of e-pos ons direk by ",
    preferEmailPre: "Verkies jy e-pos? Kontak ons enige tyd by ",
  },

  footer: {
    description:
      "Drone-gebaseerde NDVI-gewasstremmingontleding vir Suid-Afrikaanse boere. Ons omskep moderne lugbeelde in besluite wat jou opbrengs beskerm.",
    explore: "Verken",
    contact: "Kontak",
    whatsappUs: "WhatsApp ons",
    quote: "Kry 'n kwotasie",
    rights: "Alle regte voorbehou.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, af };
