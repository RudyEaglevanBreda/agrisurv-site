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
    services: "What you get",
    app: "The app",
    boundary: "Your hectares",
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
    whatsapp: "WhatsApp us",
    home: "AgriSurv home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Free farm app · drone surveys from R75/ha",
    headline: { pre: "Every rand you spend", highlight: " is per hectare. ", post: "Know your hectares." },
    sub: "Map your farm free — every field, satellite crop health, and a spray window each morning. Fly a block when it pays, and get the stress you can't see from the bakkie, its true size, and a spray file your machine reads.",
    trust: [
      { value: "Free to start", label: "Map your farm today" },
      { value: "From R75/ha", label: "Drone survey, 48–72 hrs" },
      { value: "SACAA licensed", label: "UASOC.0001.2004" },
    ],
    cardTitle: "Centre pivot · 62 ha",
    cardMeta: "Crop-health map from a drone survey",
    annTitle: "Stress detected",
    annBody: "Low vigour — flagged for scouting",
  },

  offer: {
    eyebrow: "What you get",
    heading: "Free to start. Fly when it pays.",
    sub: "You do not buy anything to begin. Map your farm, watch it from space and get your spray windows — free, for good. A drone survey is what you add when you need to see detail the satellite cannot.",
    free: {
      label: "No monthly fee",
      price: "Free",
      title: "Your farm on a map",
      items: [
        "Draw your fields, or adopt your official Surveyor-General boundary in one click",
        "Satellite crop health for every block, updated as new images come in",
        "Daily spray windows — wind, rain and Delta-T for your field, not the nearest town",
        "Growing degree days and crop stage from your planting date",
        "Works on the phone in your pocket, and keeps working when the signal drops",
      ],
      cta: "Register your farm — free",
    },
    paid: {
      label: "With a drone survey",
      price: "From R75/ha",
      title: "Detail a satellite cannot give you",
      items: [
        "Crop-health maps at centimetre detail — see single plants, not 10 m blocks",
        "Under- and over-watered zones, and failing pivots, before the damage sets in",
        "Plant stand and gaps after emergence, so you can plan replanting",
        "Terrain, water flow and the hollows that will pond after rain",
        "Your blocks' true size measured off the imagery — the boundary audit",
        "Spray and spreader files, plus a job sheet your operator can follow",
      ],
      cta: "Get a quote",
    },
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

  boundary: {
    eyebrow: "Know your hectares",
    heading: "How big is that block, really?",
    sub: "Most farm records come from a title deed, a memory, or a line traced on a satellite photo. Everything you buy and every rand you count per hectare sits on top of that one number — and it is usually wrong.",
    phones: [
      {
        title: "The number you farm on",
        body: "Every field carries a size in the app. Until you measure it, that figure came from a deed or a rough outline — and it drives your inputs, your contractor invoices and your yield per hectare.",
      },
      {
        title: "What the drone actually measured",
        body: "Green is the boundary on record. Amber is the crop edge our survey traced at centimetre level. In our own demo pivot the record said 93.3 ha; the growing crop was 69.6 ha — a quarter of the field, billed and sprayed as if it were planted.",
      },
      {
        title: "Yours to fine-tune",
        body: "Zoom in on any corner and drag it. Add a corner where a headland cuts in, pull the line off a track or a dam. When it fits, one tap updates the size everywhere in the app.",
      },
    ],
    costHeading: "What a wrong hectare costs you",
    costs: [
      {
        title: "You over-order every season",
        body: "Fertiliser, chemical and seed are all bought per hectare. If your block reads 25% bigger than it is, you buy 25% more than the land can use — season after season.",
      },
      {
        title: "You over-apply per real hectare",
        body: "Spread a fixed tank over fewer hectares than you planned for and the rate on the ground goes up. That is money on the soil and, for some products, a compliance problem.",
      },
      {
        title: "Your benchmarks are off",
        body: "Tons per hectare, cost per hectare, margin per hectare — every figure you compare between blocks and between seasons is divided by a number that was never measured.",
      },
    ],
    priceLine: "Every block you have flown gets measured — included with any survey. Want only the hectares checked? We quote a boundary-only flight per farm.",
    note: "This gives you a working boundary for farming maths — the true cropped area of the block. It is not a legal survey; cadastral boundaries stay the work of a licensed land surveyor.",
    cta: "Ask for a boundary audit",
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "The app is free. You pay to fly.",
    sub: "Mapping your farm, satellite crop health and daily spray windows cost nothing and always will. Surveys are priced per hectare, and the rate drops the more you fly.",
    popular: "Most popular",
    freeRow: {
      label: "Start here",
      name: "The Farm Vision app",
      price: "Free",
      blurb: "Map your fields, watch them from space, and get spray windows every day. No card, no trial period, no call with a salesperson.",
      cta: "Register your farm — free",
    },
    example: {
      label: "What that looks like",
      body: "A 40 ha block, flown once: about R3 000 for the survey. The same block on a season plan of five flights: about R11 000 for the season. We quote before anything is booked.",
    },
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
      "AgriSurv is the precision-agriculture division of Techno Survey Solutions, a SACAA-licensed drone operator (UASOC.0001.2004/G1240D) whose team has flown surveys for some of South Africa's biggest names in mining, energy and construction — including Anglo American, Eskom and Assmang. We bring that same survey-grade discipline to your farm.",
      "That is the point of this company: the technology that measures a mine to the centimetre should not be locked away in corporate budgets while a farmer guesses at the size of his own block. Same instruments, same discipline, aimed at the people growing the food.",
      "We are based in Worcester and fly across South Africa, from a single problem field to a whole-farm programme across the season.",
    ],
    values: [
      {
        title: "Measured, not estimated",
        body: "Survey-grade positioning and calibration, so the numbers hold up season after season.",
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
    sub: "The app, the flying and what you walk away with.",
    items: [
      {
        q: "Is the app really free, or is it a trial?",
        a: "Really free. Mapping your fields, satellite crop health, daily spray windows and growing degree days cost nothing, with no card and no time limit. We make our money when you decide a block is worth flying — and you can use the app for a whole season without ever booking one.",
      },
      {
        q: "Do I need to install anything?",
        a: "No app store needed. Open the site on your phone and add it to your home screen — it installs in seconds and opens like any other app. Fields you have already opened keep working when the signal drops in the middle of a block.",
      },
      {
        q: "Who owns my farm data?",
        a: "You do. Your boundaries, notes and survey layers are yours; we don't sell them or share them with input suppliers. You can share a field with your foreman or agronomist by sending them a link, and you can ask us to delete your account and its data at any time.",
      },
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
      "A free farm-mapping app for South African farmers, and centimetre-accurate drone surveys when a block is worth flying.",
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
        title: "Every layer lands in your farm account",
        intro:
          "The survey doesn't arrive as a folder of files. It appears as layers on the farm you already mapped for free — flip between them here.",
        bullets: [
          "Zoom from farm level down to individual plants on the high-resolution imagery",
          "View your field in true 3D — spin and tilt the actual surface of your land",
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
        body: "The drone crop-health map over a barley pivot. Weak rows are found automatically, and “Take me there” navigates you to the exact spot on foot or by bakkie. (The size in the corner is the one on record — the next section is about how wrong it is.)",
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
      title: "Phone in the field, desktop for the deep work",
      body: "Farm Vision lives on your phone — that's where farming happens. It installs straight from the browser in seconds (no app store), and fields you've opened keep working when the signal drops in the middle of a block. Then, when you're back at the desk, the same farm opens in your browser with the full toolbox: every drone and satellite layer, planting rows, contours and water flow, season records, AI analysis and one-click PDF reports.",
    },
    note: "Every screen here is the real app. Register free and you can open the same tools on your own farm today.",
    cta: "Register your farm — free",
    share: {
      heading: "From the app to the machine in three steps",
      sub: "No software to learn, no cables, no GIS degree. If you can send a WhatsApp, you can get a prescription into a sprayer.",
      steps: [
        {
          title: "Send it from your phone",
          body: "The moment you save a prescription, two buttons appear: the job sheet (a one-page instruction PDF with the map, rates and tank mix) and the sprayer file. Both share straight to WhatsApp — send them to whoever sprays.",
        },
        {
          title: "Onto a USB stick",
          body: "The operator saves the sprayer file onto a USB stick and plugs it into the terminal in the cab — or loads it through the brand's own app. It's the standard prescription format these machines already understand.",
        },
        {
          title: "Import and spray",
          body: "On the terminal: Import → Prescription (Rx) → choose the field. The machine then varies the rate on its own as it drives — more where you said more, nothing in the no-go areas. The job sheet tells the operator exactly what to load.",
        },
      ],
      systemsHeading: "Works with the terminals farmers actually run",
      systemsNote:
        "We export the industry-standard shapefile — the prescription format the major terminals and spray drones import. Run something else? If your controller takes prescription maps, it almost certainly reads our file — send us the model and we'll confirm before you commit to anything.",
    },
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
    services: "Wat jy kry",
    app: "Die app",
    boundary: "Jou hektare",
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
    whatsapp: "WhatsApp ons",
    home: "AgriSurv tuis",
    openMenu: "Maak kieslys oop",
    closeMenu: "Maak kieslys toe",
  },

  hero: {
    eyebrow: "Gratis plaas-app · droneopnames vanaf R75/ha",
    headline: { pre: "Elke rand wat jy spandeer", highlight: " is per hektaar. ", post: "Ken jou hektare." },
    sub: "Karteer jou plaas gratis — elke land, satelliet-gewasgesondheid, en elke oggend 'n spuitvenster. Vlieg 'n blok wanneer dit betaal, en kry die stremming wat jy nie van die bakkie af sien nie, sy ware grootte, en 'n spuitlêer wat jou masjien lees.",
    trust: [
      { value: "Gratis om te begin", label: "Karteer jou plaas vandag" },
      { value: "Vanaf R75/ha", label: "Droneopname, 48–72 uur" },
      { value: "SACAA-gelisensieer", label: "UASOC.0001.2004" },
    ],
    cardTitle: "Spilpunt · 62 ha",
    cardMeta: "Gewasgesondheidskaart uit 'n droneopname",
    annTitle: "Stremming bespeur",
    annBody: "Lae groeikrag — gemerk vir verkenning",
  },

  offer: {
    eyebrow: "Wat jy kry",
    heading: "Gratis om te begin. Vlieg wanneer dit betaal.",
    sub: "Jy koop niks om te begin nie. Karteer jou plaas, hou dit uit die ruimte dop en kry jou spuitvensters — gratis, vir altyd. 'n Droneopname is wat jy byvoeg wanneer jy detail nodig het wat die satelliet nie kan gee nie.",
    free: {
      label: "Geen maandelikse fooi",
      price: "Gratis",
      title: "Jou plaas op 'n kaart",
      items: [
        "Trek jou lande, of neem jou amptelike Landmeter-generaal-grens met een klik oor",
        "Satelliet-gewasgesondheid vir elke blok, bygewerk soos nuwe beelde inkom",
        "Daaglikse spuitvensters — wind, reën en Delta-T vir jou land, nie die naaste dorp nie",
        "Groeigraaddae en gewasstadium vanaf jou plantdatum",
        "Werk op die foon in jou sak, en hou aan werk wanneer die sein wegraak",
      ],
      cta: "Registreer jou plaas — gratis",
    },
    paid: {
      label: "Met 'n droneopname",
      price: "Vanaf R75/ha",
      title: "Detail wat 'n satelliet nie kan gee nie",
      items: [
        "Gewasgesondheidskaarte op sentimeterdetail — sien enkele plante, nie 10 m-blokke nie",
        "Onder- en oorbesproeide sones, en falende spilpunte, voordat die skade insink",
        "Plantstand en gapings ná opkoms, sodat jy herplanting kan beplan",
        "Terrein, watervloei en die holtes wat ná reën water gaan hou",
        "Jou blokke se ware grootte gemeet uit die beelde — die grensoudit",
        "Spuit- en strooierlêers, plus 'n werkkaart wat jou operateur kan volg",
      ],
      cta: "Kry 'n kwotasie",
    },
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

  boundary: {
    eyebrow: "Ken jou hektare",
    heading: "Hoe groot is daardie blok régtig?",
    sub: "Die meeste plaasrekords kom uit 'n transportakte, uit geheue, of uit 'n lyn wat op 'n satellietfoto getrek is. Alles wat jy koop en elke rand wat jy per hektaar tel, rus op daardie een syfer — en dit is gewoonlik verkeerd.",
    phones: [
      {
        title: "Die syfer waarop jy boer",
        body: "Elke land dra 'n grootte in die app. Totdat jy dit meet, kom daardie syfer uit 'n akte of 'n growwe buitelyn — en dit dryf jou insette, jou kontrakteursrekeninge en jou opbrengs per hektaar.",
      },
      {
        title: "Wat die drone werklik gemeet het",
        body: "Groen is die grens op rekord. Amber is die gewasrand wat ons opname op sentimetervlak getrek het. In ons eie demonstrasiespilpunt het die rekord 93,3 ha gesê; die groeiende gewas was 69,6 ha — 'n kwart van die land wat gefaktureer en gespuit is asof dit geplant is.",
      },
      {
        title: "Joune om fyn te stel",
        body: "Zoem in op enige hoek en sleep dit. Voeg 'n hoek by waar 'n wenakker insny, trek die lyn weg van 'n pad of 'n dam. Wanneer dit pas, werk een tik die grootte oral in die app by.",
      },
    ],
    costHeading: "Wat 'n verkeerde hektaar jou kos",
    costs: [
      {
        title: "Jy oorbestel elke seisoen",
        body: "Kunsmis, chemie en saad word almal per hektaar gekoop. As jou blok 25% groter lees as wat dit is, koop jy 25% meer as wat die land kan gebruik — seisoen ná seisoen.",
      },
      {
        title: "Jy pas te veel toe per werklike hektaar",
        body: "Sprei 'n vaste tenk oor minder hektare as wat jy beplan het en die tempo op die grond gaan op. Dit is geld op die grond en, vir sommige produkte, 'n voldoeningsprobleem.",
      },
      {
        title: "Jou maatstawwe is skeef",
        body: "Ton per hektaar, koste per hektaar, marge per hektaar — elke syfer wat jy tussen blokke en tussen seisoene vergelyk, word gedeel deur 'n getal wat nooit gemeet is nie.",
      },
    ],
    priceLine: "Elke blok wat jy laat vlieg het, word gemeet — ingesluit by enige opname. Wil jy net die hektare laat nagaan? Ons kwoteer 'n grens-alleen vlug per plaas.",
    note: "Dit gee jou 'n werksgrens vir boerderywiskunde — die ware beplante oppervlakte van die blok. Dit is nie 'n wetlike opmeting nie; kadastrale grense bly die werk van 'n gelisensieerde landmeter.",
    cta: "Vra vir 'n grensoudit",
  },

  pricing: {
    eyebrow: "Pryse",
    heading: "Die app is gratis. Jy betaal om te vlieg.",
    sub: "Om jou plaas te karteer, satelliet-gewasgesondheid en daaglikse spuitvensters kos niks en sal altyd niks kos nie. Opnames word per hektaar geprys, en die tarief daal hoe meer jy vlieg.",
    popular: "Gewildste",
    freeRow: {
      label: "Begin hier",
      name: "Die Farm Vision-app",
      price: "Gratis",
      blurb: "Karteer jou lande, hou hulle uit die ruimte dop, en kry elke dag spuitvensters. Geen kaart, geen proeftydperk, geen oproep met 'n verkoopsman nie.",
      cta: "Registreer jou plaas — gratis",
    },
    example: {
      label: "Wat dit in die praktyk beteken",
      body: "'n Blok van 40 ha, een keer gevlieg: ongeveer R3 000 vir die opname. Dieselfde blok op 'n seisoenplan van vyf vlugte: ongeveer R11 000 vir die seisoen. Ons kwoteer voordat enigiets bespreek word.",
    },
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
      "AgriSurv is die presisieboerdery-afdeling van Techno Survey Solutions, 'n SACAA-gelisensieerde drone-operateur (UASOC.0001.2004/G1240D) wie se span opnames gevlieg het vir van Suid-Afrika se grootste name in mynbou, energie en konstruksie — insluitend Anglo American, Eskom en Assmang. Ons bring daardie selfde opname-gehalte dissipline na jou plaas.",
      "Dít is die punt van hierdie maatskappy: die tegnologie wat 'n myn tot op die sentimeter meet, behoort nie in korporatiewe begrotings weggesluit te wees terwyl 'n boer raai hoe groot sy eie blok is nie. Dieselfde instrumente, dieselfde dissipline, gemik op die mense wat die kos verbou.",
      "Ons is in Worcester gebaseer en vlieg dwarsoor Suid-Afrika, van 'n enkele probleemland tot 'n heelplaas-program oor die seisoen.",
    ],
    values: [
      {
        title: "Gemeet, nie geskat nie",
        body: "Opname-gehalte posisionering en kalibrasie, sodat die syfers seisoen ná seisoen hou.",
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
    sub: "Die app, die vlieg, en wat jy daaruit kry.",
    items: [
      {
        q: "Is die app régtig gratis, of is dit 'n proeflopie?",
        a: "Régtig gratis. Om jou lande te karteer, satelliet-gewasgesondheid, daaglikse spuitvensters en groeigraaddae kos niks, sonder kaart en sonder tydsbeperking. Ons maak geld wanneer jy besluit 'n blok is die moeite werd om te vlieg — en jy kan die app 'n hele seisoen gebruik sonder om ooit een te bespreek.",
      },
      {
        q: "Moet ek iets installeer?",
        a: "Geen toepassingswinkel nodig nie. Maak die werf op jou foon oop en voeg dit by jou tuisskerm — dit installeer binne sekondes en maak oop soos enige ander app. Lande wat jy reeds oopgemaak het, werk voort wanneer die sein in die middel van 'n blok wegraak.",
      },
      {
        q: "Wie besit my plaasdata?",
        a: "Jy. Jou grense, notas en opnamelae is joune; ons verkoop dit nie en deel dit nie met insetverskaffers nie. Jy kan 'n land met jou voorman of agronoom deel deur vir hulle 'n skakel te stuur, en jy kan ons enige tyd vra om jou rekening en sy data te skrap.",
      },
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
      "'n Gratis plaaskarteringsapp vir Suid-Afrikaanse boere, en sentimeter-akkurate droneopnames wanneer 'n blok die moeite werd is om te vlieg.",
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
        title: "Elke laag land in jou plaasrekening",
        intro:
          "Die opname kom nie as 'n vouer vol lêers aan nie. Dit verskyn as lae op die plaas wat jy reeds gratis gekarteer het — wissel hier tussen hulle.",
        bullets: [
          "Zoem van plaasvlak af tot by individuele plante op die hoëresolusie-beelde",
          "Bekyk jou land in ware 3D — draai en kantel die werklike oppervlak van jou grond",
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
        body: "Die drone-gewasgesondheidskaart oor 'n garsspilpunt. Swak rye word vanself gevind, en “Vat my soontoe” lei jou te voet of per bakkie tot op die presiese kol. (Die grootte in die hoek is dié op rekord — die volgende afdeling gaan oor hoe verkeerd dit is.)",
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
      title: "Foon in die land, lessenaar vir die dieper werk",
      body: "Farm Vision leef op jou foon — dis waar boerdery gebeur. Dit installeer binne sekondes direk uit die blaaier (geen app-winkel nie), en lande wat jy al oopgemaak het, werk voort wanneer die sein in die middel van 'n land wegval. Terug by die lessenaar maak dieselfde plaas in jou blaaier oop met die volle gereedskapkis: elke hommeltuig- en satellietlaag, plantrye, kontoere en watervloei, seisoenrekords, KI-ontleding en PDF-verslae met een klik.",
    },
    note: "Elke skerm hier is die regte app. Registreer gratis en jy kan vandag dieselfde gereedskap op jou eie plaas oopmaak.",
    cta: "Registreer jou plaas — gratis",
    share: {
      heading: "Van die app tot by die masjien in drie stappe",
      sub: "Geen sagteware om aan te leer nie, geen kabels nie, geen GIS-graad nie. As jy 'n WhatsApp kan stuur, kan jy 'n voorskrif in 'n spuit kry.",
      steps: [
        {
          title: "Stuur dit van jou foon af",
          body: "Die oomblik as jy 'n voorskrif stoor, verskyn twee knoppies: die werkkaart ('n een-bladsy instruksie-PDF met die kaart, dosisse en tenkmengsel) en die spuitlêer. Albei deel direk na WhatsApp — stuur dit vir wie ook al spuit.",
        },
        {
          title: "Op 'n USB-stokkie",
          body: "Die operateur stoor die spuitlêer op 'n USB-stokkie en druk dit in die terminaal in die kajuit — of laai dit deur die handelsmerk se eie app. Dit is die standaard voorskrifformaat wat dié masjiene reeds verstaan.",
        },
        {
          title: "Voer in en spuit",
          body: "Op die terminaal: Voer in → Voorskrif (Rx) → kies die land. Die masjien wissel dan self die dosis soos hy ry — meer waar jy meer gesê het, niks in die no-go-kolle nie. Die werkkaart sê vir die operateur presies wat om te laai.",
        },
      ],
      systemsHeading: "Werk met die terminale wat boere werklik gebruik",
      systemsNote:
        "Ons voer die industrie-standaard shapefile uit — die voorskrifformaat wat die groot terminale en spuithommeltuie invoer. Gebruik jy iets anders? As jou beheerder voorskrifkaarte kan vat, lees hy heel waarskynlik ons lêer — stuur vir ons die model en ons bevestig voor jy jou aan enigiets verbind.",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { en, af };
