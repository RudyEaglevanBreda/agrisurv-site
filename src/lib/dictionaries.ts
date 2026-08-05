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
    serviceArea: "Worcester, Western Cape · flying nationwide",
    enlarge: "Enlarge image",
    close: "Close",
    mapAria:
      "NDVI crop-health map from a drone survey — healthy canopy in green, stressed zones in orange and red",
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
    portal: "Register your farm — free",
    portalLogin: "Farmer sign-in",
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
      { value: "SACAA licensed", label: "Certified drone operator" },
    ],
    cardTitle: "Centre pivot · 62 ha",
    cardMeta: "NDVI crop health · multispectral drone survey",
    annTitle: "Stress detected",
    annBody: "Low vigour — flagged for scouting",
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
    cardTitle: "The dashboard in action",
    cardMeta: "One field, every layer — satellite, crop health, terrain & water",
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
      "AgriSurv is the precision-agriculture division of Techno Survey Solutions, a SACAA-licensed drone operator (UASOC.0001.2004/G1240D) whose team has flown surveys for some of South Africa's biggest names in mining, energy and construction — including Anglo American, Eskom and Assmang. We bring that same survey-grade discipline to your farm.",
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
        a: "We're based in Worcester in the Western Cape and fly across South Africa. A single drone can map hundreds of hectares in a day, so from a few pivots to a whole farm, we can scale the flight plan to your operation.",
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
    divisionPre: "A division of ",
    licence: "SACAA-licensed drone operator",
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "From take-off to decision — the whole process",
    sub: "Here's exactly what happens between a drone landing in your field and a decision you can act on.",
    layers: {
      satellite: "Satellite",
      health: "Crop health",
      terrain: "Terrain & water",
    },
    steps: [
      {
        num: "01",
        title: "We fly your fields",
        intro:
          "Every survey starts with a drone flight on RTK precision positioning — the same GPS-correction technology land surveyors use. Our survey drone maps your fields at centimetre accuracy, while our multispectral drone captures what the eye can't: the light signature of crop stress, before it shows on the ground.",
        bullets: [
          "RTK base and rover for survey-grade, centimetre-level positioning",
          "RGB and multispectral capture in a single visit",
          "A typical field takes minutes to fly, with zero disruption to your operations",
        ],
        media: [
          { caption: "Survey drone, ready for take-off", callouts: ["RGB + multispectral"] },
          { caption: "RTK base station set up on site", callouts: [] },
          { caption: "Ground control, measured with the RTK rover", callouts: [] },
        ],
      },
      {
        num: "02",
        title: "We turn thousands of photos into maps",
        intro:
          "Back at the office, professional photogrammetry software stitches the flight into three foundation products.",
        bullets: [
          "A true-to-scale aerial map (orthomosaic), sharp enough to see individual plants, wheel tracks and problem patches",
          "Crop-health (NDVI) maps that colour-grade your field from thriving to struggling",
          "A precision terrain model of the bare earth beneath the crop, accurate to a few centimetres",
        ],
        media: [
          { caption: "Orthomosaic — sharp enough to see plants, tracks and problem patches", callouts: ["Erosion channel"] },
          { caption: "NDVI crop health — red patches flag stressed crop", callouts: [] },
          { caption: "Centimetre-accurate 3D terrain model", callouts: [] },
        ],
      },
      {
        num: "03",
        title: "We analyse — so you get answers, not just pictures",
        intro:
          "This is where we go beyond pretty maps. We run your terrain and crop data through agronomic analysis.",
        bullets: [
          "Water flow & drainage — we model where rain runs, where it channels, and where it ponds, down to the depth and volume of every hollow",
          "Contours, slope & elevation — for drainage works, erosion control and machinery routes",
          "Management zones & variable-rate maps — turning crop variation into prescriptions your spreader or sprayer can act on",
        ],
        media: [
          { caption: "Contours, water-flow lines and ponding areas", callouts: ["Water flow", "Contours"] },
          { caption: "Zoning the field in the prescription tool", callouts: [] },
          { caption: "Variable-rate map, export-ready for tractor or drone", callouts: [] },
        ],
      },
      {
        num: "04",
        title: "Your farm, live in your dashboard",
        intro:
          "No PDFs gathering dust. You get a login to an interactive map of your farm, where every layer is one tap away.",
        bullets: [
          "Zoom from farm level down to individual plants on the high-resolution imagery",
          "Flip between crop-health, terrain, drainage and prescription layers",
          "View your field in true 3D — spin and tilt the actual surface of your land",
          "Drop pins and notes on obstacles, pipelines and problem spots",
          "Daily spray windows (wind, rain, Delta-T), a 7-day outlook and growing degree days — for your field, not the nearest town",
          "Ponding alerts before heavy rain: which mapped hollows are likely to hold water",
        ],
        media: [
          { caption: "Spray windows, 7-day outlook and growing degree days", callouts: [] },
        ],
      },
    ],
    closing: {
      title: "Decisions, not data",
      body:
        "You walk into the season knowing where water will stand, where the crop is struggling, where to vary your inputs, and when to spray. Fly again later in the season and you see exactly what changed.",
      cta: "Get a quote",
    },
  },

  appTour: {
    eyebrow: "The app — real screens, real field",
    heading: "From your pocket to the sprayer",
    sub: "Every screenshot below is the actual Farm Vision app over our Swellendam demo field — nothing mocked up. This is what you and your foreman work with.",
    phones: [
      {
        title: "Your farm, every morning",
        body: "Open the app and it tells you what needs your eye today: crop-health drops, spray windows, ponding risk before rain — ranked by urgency.",
      },
      {
        title: "Centimetre-level crop health",
        body: "The drone NDVI over a 93 ha barley pivot. Weak rows are found automatically, and “Take me there” navigates you to the exact spot on foot or by bakkie.",
      },
      {
        title: "Tap what you want to spray",
        body: "The prescription wizard grids the field, you tap examples of what to treat and what to protect, and it finds every matching cell in seconds.",
      },
      {
        title: "Zones, rates and the tank mix",
        body: "Split the field by crop health, set a rate per zone, and the app works out the mix ratio, water and total product to load.",
      },
    ],
    desktop: {
      title: "The full toolbox on your desktop",
      body: "The same field in the browser: drone and satellite layers, planting rows, contours and water flow, season records, AI analysis and one-click PDF reports. Everything the phone captures, the desk can study.",
    },
    note: "Prescription maps export as shapefiles for your sprayer or spreader terminal, and job sheets share straight to your foreman's WhatsApp.",
    cta: "Register your farm — free",
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
    serviceArea: "Worcester, Wes-Kaap · vlieg landwyd",
    enlarge: "Vergroot beeld",
    close: "Maak toe",
    mapAria:
      "NDVI-gewasgesondheidskaart uit 'n drone-opname — gesonde plantegroei in groen, gestremde sones in oranje en rooi",
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
    portal: "Registreer jou plaas — gratis",
    portalLogin: "Boer-aanmelding",
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
      { value: "SACAA-gelisensieer", label: "Gesertifiseerde drone-operateur" },
    ],
    cardTitle: "Spilpunt · 62 ha",
    cardMeta: "NDVI-gewasgesondheid · multispektraal-droneopname",
    annTitle: "Stremming bespeur",
    annBody: "Lae groeikrag — gemerk vir verkenning",
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
    cardTitle: "Die dashboard in aksie",
    cardMeta: "Een land, elke laag — satelliet, gewasgesondheid, terrein & water",
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
      "AgriSurv is die presisieboerdery-afdeling van Techno Survey Solutions, 'n SACAA-gelisensieerde drone-operateur (UASOC.0001.2004/G1240D) wie se span opnames gevlieg het vir van Suid-Afrika se grootste name in mynbou, energie en konstruksie — insluitend Anglo American, Eskom en Assmang. Ons bring daardie selfde opname-gehalte dissipline na jou plaas.",
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
        a: "Ons is in Worcester in die Wes-Kaap gebaseer en vlieg dwarsoor Suid-Afrika. 'n Enkele drone kan honderde hektaar in 'n dag karteer, so van 'n paar spilpunte tot 'n hele plaas — ons skaal die vlugplan by jou bedryf aan.",
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
    divisionPre: "'n Afdeling van ",
    licence: "SACAA-gelisensieerde drone-operateur",
  },

  howItWorks: {
    eyebrow: "Hoe dit werk",
    heading: "Van opstyg tot besluit — die hele proses",
    sub: "Hier is presies wat gebeur tussen 'n drone wat in jou land land en 'n besluit waarop jy kan reageer.",
    layers: {
      satellite: "Satelliet",
      health: "Gewasgesondheid",
      terrain: "Terrein & water",
    },
    steps: [
      {
        num: "01",
        title: "Ons vlieg jou lande",
        intro:
          "Elke opname begin met 'n dronevlug op RTK-presisieposisionering — dieselfde GPS-korreksietegnologie wat landmeters gebruik. Ons opname-drone karteer jou lande tot op sentimeter-akkuraatheid, terwyl ons multispektraal-drone vasvang wat die oog nie kan sien nie: die ligtekening van gewasstremming, voordat dit op die grond wys.",
        bullets: [
          "RTK-basis en -rover vir opname-gehalte, sentimeter-vlak posisionering",
          "RGB- en multispektraal-opname in 'n enkele besoek",
          "'n Tipiese land neem minute om te vlieg, met geen onderbreking van jou bedrywighede nie",
        ],
        media: [
          { caption: "Opname-drone, gereed om op te styg", callouts: ["RGB + multispektraal"] },
          { caption: "RTK-basisstasie op die perseel opgestel", callouts: [] },
          { caption: "Grondbeheer, met die RTK-rover gemeet", callouts: [] },
        ],
      },
      {
        num: "02",
        title: "Ons omskep duisende foto's in kaarte",
        intro:
          "Terug by die kantoor stik professionele fotogrammetrie-sagteware die vlug saam tot drie grondslagprodukte.",
        bullets: [
          "'n Ware-skaal lugkaart (ortomosaïek), skerp genoeg om individuele plante, wielspore en probleemkolle te sien",
          "Gewasgesondheidskaarte (NDVI) wat jou land kleurgradeer van florerend tot sukkelend",
          "'n Presiese terreinmodel van die kaal grond onder die gewas, akkuraat tot 'n paar sentimeter",
        ],
        media: [
          { caption: "Ortomosaïek — skerp genoeg vir plante, spore en probleemkolle", callouts: ["Erosiesloot"] },
          { caption: "NDVI-gewasgesondheid — rooi kolle merk gestremde gewas", callouts: [] },
          { caption: "Sentimeter-akkurate 3D-terreinmodel", callouts: [] },
        ],
      },
      {
        num: "03",
        title: "Ons ontleed — sodat jy antwoorde kry, nie net prente nie",
        intro:
          "Dít is waar ons verder gaan as mooi kaarte. Ons stuur jou terrein- en gewasdata deur agronomiese ontleding.",
        bullets: [
          "Watervloei en dreinering — ons modelleer waar reën loop, waar dit in kanale saamtrek en waar dit poel, tot op die diepte en volume van elke holte",
          "Kontoere, helling en hoogte — vir dreineringswerke, erosiebeheer en masjienroetes",
          "Bestuurssones en veranderlike-tempo kaarte — wat gewasvariasie omskep in voorskrifte waarop jou strooier of spuit kan reageer",
        ],
        media: [
          { caption: "Kontoere, watervloeilyne en poelareas", callouts: ["Watervloei", "Kontoere"] },
          { caption: "Die land word in die voorskrif-instrument in sones verdeel", callouts: [] },
          { caption: "Veranderlike-tempo kaart, uitvoergereed vir trekker of drone", callouts: [] },
        ],
      },
      {
        num: "04",
        title: "Jou plaas, lewendig in jou dashboard",
        intro:
          "Geen PDF's wat stof vergaar nie. Jy kry 'n aanmelding by 'n interaktiewe kaart van jou plaas, waar elke laag een tik ver is.",
        bullets: [
          "Zoem van plaasvlak af tot by individuele plante op die hoëresolusie-beelde",
          "Wissel tussen gewasgesondheid-, terrein-, dreinering- en voorskriflae",
          "Bekyk jou land in ware 3D — draai en kantel die werklike oppervlak van jou grond",
          "Los penne en notas op hindernisse, pyplyne en probleemkolle",
          "Daaglikse spuitvensters (wind, reën, Delta-T), 'n 7-dag-vooruitskatting en groeigraaddae — vir jou land, nie die naaste dorp nie",
          "Poel-waarskuwings voor swaar reën: watter gekarteerde holtes waarskynlik water sal hou",
        ],
        media: [
          { caption: "Spuitvensters, 7-dag-vooruitskatting en groeigraaddae", callouts: [] },
        ],
      },
    ],
    closing: {
      title: "Besluite, nie data nie",
      body:
        "Jy stap die seisoen in met die wete waar water gaan staan, waar die gewas sukkel, waar om jou insette te wissel, en wanneer om te spuit. Vlieg later in die seisoen weer en jy sien presies wat verander het.",
      cta: "Kry 'n kwotasie",
    },
  },

  appTour: {
    eyebrow: "Die app — regte skerms, regte land",
    heading: "Van jou sak tot by die spuit",
    sub: "Elke skermskoot hieronder is die werklike Farm Vision-app oor ons Swellendam-demoland — niks opgemaak nie. Dit is waarmee jy en jou voorman werk.",
    phones: [
      {
        title: "Jou plaas, elke oggend",
        body: "Maak die app oop en dit sê wat vandag jou aandag nodig het: dalings in gewasgesondheid, spuitvensters, watervorming voor reën — gerangskik volgens dringendheid.",
      },
      {
        title: "Gewasgesondheid tot op sentimeter",
        body: "Die hommeltuig-NDVI oor 'n 93 ha garsspilpunt. Swak rye word vanself gevind, en “Vat my soontoe” lei jou te voet of per bakkie tot op die presiese kol.",
      },
      {
        title: "Tik wat jy wil spuit",
        body: "Die voorskrif-assistent lê 'n ruitnet oor die land, jy tik voorbeelde van wat behandel en wat beskerm moet word, en dit vind elke passende sel binne sekondes.",
      },
      {
        title: "Sones, dosisse en die tenkmengsel",
        body: "Verdeel die land volgens gewasgesondheid, stel 'n dosis per sone, en die app bereken die mengverhouding, water en totale produk om te laai.",
      },
    ],
    desktop: {
      title: "Die volle gereedskapkis op jou lessenaar",
      body: "Dieselfde land in die blaaier: hommeltuig- en satellietlae, plantrye, kontoere en watervloei, seisoenrekords, KI-ontleding en PDF-verslae met een klik. Alles wat die foon vaslê, kan die lessenaar bestudeer.",
    },
    note: "Voorskrifkaarte voer uit as shapefiles vir jou spuit- of strooierterminaal, en werkkaarte deel direk na jou voorman se WhatsApp.",
    cta: "Registreer jou plaas — gratis",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, af };
