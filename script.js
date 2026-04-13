document.body.classList.add("is-loading");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const langButtons = document.querySelectorAll("[data-lang-btn]");
const htmlEl = document.documentElement;
const pageLoader = document.getElementById("pageLoader");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

const translations = {
  fi: {
    navProduct: "Tuote",
    navShowcase: "Dashboard",
    navFeatures: "Ominaisuudet",
    navPricing: "Hinnoittelu",
    navProcess: "Käyttöönotto",
    navContact: "Varaa keskustelu",

    heroEyebrow: "AUTOCLIENT B2B-MYYNNIN ALKUVAIHEESEEN",
    heroTitle: "Vähemmän manuaalista työtä. Enemmän oikeita myyntikeskusteluja.",
    heroText: "AutoClient rakentaa teille hallittavan outbound-järjestelmän: prospektit, ostosignaalit, personoidut yhteydenotot ja läpinäkyvä dashboard samassa kokonaisuudessa.",
    heroBtnPrimary: "Varaa demo",
    heroBtnSecondary: "Katso dashboard",
    heroBadge1: "Prospektitietokanta",
    heroBadge2: "Ostosignaalit",
    heroBadge3: "Personoitu outbound",
    heroBadge4: "CRM-integraatio",

    proof1Label: "Prospektit",
    proof1Text: "Ajantasainen tietokanta",
    proof2Label: "Kontaktoidut liidit",
    proof2Text: "Validoitu ennen lähetystä",
    proof3Label: "Aikaa säästetty",
    proof3Text: "Manuaalinen työ vähenee",
    scrollText: "Scrollaa alas",

    dashboardLive: "Live",
    metric1Label: "Prospektit löydetty",
    metric1Text: "Ajantasainen tietokanta",
    metric2Label: "Liidejä kontaktoitu",
    metric2Text: "Validoitu ennen lähetystä",
    metric3Label: "Tapaamisia buukattu",
    metric3Text: "Korkean intentin liidejä",
    metric4Label: "Aikaa säästetty",
    metric4Text: "Manuaalinen työ vähenee",

    lead1Text: "Ostosignaali: rekrytointi + laajentuminen",
    lead2Text: "Päättäjä tunnistettu",
    lead3Text: "Kampanjavalmis kontaktijoukko",
    chartTitle: "Kampanjan suorituskyky",
    chartRange: "Viimeiset 30 pv",
    bar1Label: "Avausaste",
    bar2Label: "Vastausaste",
    bar3Label: "Tapaamiskonversio",
    float1Title: "Pipeline näkyvissä",
    float1Value: "Selkeä dashboard",
    float2Title: "Prosessi rullaa",
    float2Value: "Systemaattisesti",

    strip1: "Suunniteltu moderneille B2B-tiimeille",
    strip2: "Ostosignaalit ja prospektointi",
    strip3: "Personoitu outbound",
    strip4: "Läpinäkyvä analytiikka",
    strip5: "CRM-valmis toimintamalli",

    productEyebrow: "MITÄ AUTOCLIENT TEKEE",
    productTitle: "Systemaattinen ratkaisu myyntiprosessin alkuvaiheeseen",
    productText: "AutoClient auttaa poistamaan myynnin alkuvaiheen toistuvaa käsityötä ja rakentaa prosessin, joka tuottaa tasaisemmin uusia keskusteluja.",
    productCard1Title: "Vähemmän käsityötä",
    productCard1Text: "Prospektointi, rikastus ja outboundin rutiinit eivät jää enää manuaalisen työn varaan.",
    productCard2Title: "Ajankohtaisemmat liidit",
    productCard2Text: "Ostosignaalit auttavat tunnistamaan, keihin kannattaa olla yhteydessä juuri nyt.",
    productCard3Title: "Parempi näkyvyys",
    productCard3Text: "Dashboard ja integraatiot tekevät prosessista läpinäkyvän ja helposti seurattavan.",

    showcaseEyebrow: "DASHBOARD",
    showcaseTitle: "AutoClient käytännössä",
    showcaseText: "Asiakasportaali näyttää kampanjat, yritykset, kontaktit, syväanalyysin ja visualisoinnit yhdestä ympäristöstä.",
    showcaseBox1Label: "Selkeä käyttöliittymä",
    showcaseBox1Title: "Dashboard, joka tekee prosessista läpinäkyvän",
    showcaseBox1Text: "Näet mitä tapahtuu, mitä on tehty, ketkä ovat seuraavat prioriteetit ja miten kampanjat oikeasti suoriutuvat.",
    showcaseBox2Label: "Parempi päätöksenteko",
    showcaseBox2Title: "Data auttaa optimoimaan strategiaa",
    showcaseBox2Text: "Yritysten tila, kontaktit, reply-prosentit ja visualisoinnit tekevät kehityskohdista nopeasti näkyviä.",
    gallery1Title: "Kirjautuminen ja käyttöliittymä",
    gallery1Text: "Selkeä ja moderni portaali, josta kokonaisuus avautuu heti hallittavana.",
    gallery2Title: "Yritykset, kontaktit ja syväanalyysi",
    gallery2Text: "Kampanjat, löydetyt yritykset, kontaktit ja yrityskohtainen analyysi samassa näkymässä.",
    gallery3Title: "Analytiikka ja visualisoinnit",
    gallery3Text: "Toimialajakaumat, aluekartta ja muu data auttavat optimoinnissa.",

    featuresEyebrow: "OMINAISUUDET",
    featuresTitle: "Yksinkertainen rakenne, vahva toteutus",
    featuresText: "AutoClient yhdistää prospektitietokannan, analytiikan, personoidut yhteydenotot ja jatkuvan operoinnin yhdeksi järjestelmäksi.",
    f1Title: "Prospektitietokanta",
    f1Text: "Rakentaa asiakasprofiiliinne perustuvan tietokannan yrityksistä ja päättäjistä.",
    f2Title: "Ostosignaalihaku",
    f2Text: "Päivittää dataa säännöllisesti ja auttaa löytämään ajankohtaiset prospektit.",
    f3Title: "Datan rikastus",
    f3Text: "Analysoi prospektin tilannetta, kipupisteitä ja prioriteettia ennen yhteydenottoa.",
    f4Title: "Personoidut viestit",
    f4Text: "Viestit kirjoitetaan teidän kontekstilla, teidän mallien ja strategian pohjalta.",
    f5Title: "Jatkuva outbound",
    f5Text: "Follow-upit, uudelleenkontaktointi ja useiden päättäjien lähestyminen kuuluvat prosessiin.",
    f6Title: "Dashboard ja CRM",
    f6Text: "Kaikki data, aktiviteetit ja suorituskyky näkyvät selkeästi yhdessä paikassa.",

    useEyebrow: "MITÄ HYÖTYÄ TÄSTÄ ON",
    useTitle: "Enemmän kontrollia, vähemmän sekavaa outboundia",
    useText: "Järjestelmä hoitaa raskaat ja toistuvat vaiheet, jotta myynti voi keskittyä keskusteluihin, klousaamiseen ja prosessin optimointiin.",
    whatWeHandleTitle: "Mitä AutoClient hoitaa",
    wh1: "Prospektien etsintä ja tietokannan ylläpito",
    wh2: "Ostosignaalien tunnistus",
    wh3: "Datan rikastus ja analyysi",
    wh4: "Personoitujen viestien valmistelu",
    wh5: "Yhteydenotot, follow-upit ja vastausten hallinta",
    wh6: "Dashboard ja integraatiot",
    yourTeamTitle: "Mihin teidän tiimi keskittyy",
    yt1: "Tarjouksen ja kohderyhmän suunta",
    yt2: "Viestistrategian linjaukset",
    yt3: "Myyntikeskustelut ja klousaus",
    yt4: "Tulosten arviointi ja kehitys",
    yt5: "Liiketoiminnan kasvun ohjaaminen",
    calloutText: "AutoClient ei korvaa myyntitiimiä. Se rakentaa jatkuvan ja hallittavan outbound-järjestelmän myynnin alkuvaiheeseen.",

    pricingEyebrow: "HINNOITTELU",
    pricingTitle: "Aloita pilotilla tai rakenna jatkuva toimintamalli",
    pricingText: "Yhteistyö voidaan käynnistää kevyesti pilotilla, jonka jälkeen kokonaisuutta voidaan laajentaa yrityksenne tarpeiden mukaan.",
    planPilot: "Pilotti",
    planVat: " + alv",
    pilotSub: "Matala kynnys testata konsepti käytännössä",
    pilot1: "Prospekti-databasen rakentaminen",
    pilot2: "Vähintään 500 prospektin kontaktointi",
    pilot3: "Follow-upit, vastausten hallinta ja buukkaus",
    pilot4: "Datan rikastus ja ostosignaalit",
    featuredBadge: "Suositeltu",
    planQuarter: " / 3 kk",
    basicSub: "Tai 6000€ / vuosi + provisio",
    basic1: "Koko asiakasprofiilin kartoitus",
    basic2: "Jopa 1000 päättäjään kontaktointi kuukaudessa",
    basic3: "Ostosignaalihaku 2 viikon välein",
    basic4: "Prospektitietokannan säännöllinen päivitys",
    basic5: "CRM-integraatio",
    basic6: "Vastaustenhallinta ja tapaamisten buukkaus",
    planScale: "Laajennukset",
    customPlan: "Custom",
    customSub: "Skaalataan tarpeen mukaan",
    custom1: "Suurempi outbound-volyymi",
    custom2: "Useampi asiakassegmentti",
    custom3: "Useammin tapahtuva ostosignaalihaku",
    custom4: "Inbound / outbound-infran ulkoistaminen",
    custom5: "Domainit, inboxit ja Workspace-ylläpito",

    processEyebrow: "KÄYTTÖÖNOTTO",
    processTitle: "Järjestelmä käyntiin noin 10 päivässä",
    processText: "Käyttöönotto on rakennettu nopeaksi: tiedot, kickoff, räätälöinti ja käynnistys selkeällä aikataululla.",
    day1: "Päivä 2",
    proc1Title: "Esitäytetty asiakas- ja ICP-lomake",
    proc1Text: "Lähetämme lomakkeen valmiiksi pohjustettuna, ja te tarkastatte sen.",
    day2: "Päivä 4",
    proc2Title: "Aloitustapaaminen",
    proc2Text: "Suunnitellaan yhteydenottostrategia, asiakassegmentit ja integraatiot.",
    day3: "Päivä 6",
    proc3Title: "Räätälöinti ja asiakasportaali",
    proc3Text: "AutoClient mukautetaan teidän tarpeisiin ja pääsette dashboardiin.",
    day4: "Päivä 9",
    proc4Title: "Prospektointi käyntiin",
    proc4Text: "Kaikki on valmista, prospektointi alkaa ja ensimmäiset viestit lähtevät pian.",

    ctaEyebrow: "SEURAAVA ASKEL",
    ctaTitle: "Valitse AutoClient, jos haluat yhdistää laadukkaan toteutuksen ja skaalautuvan järjestelmän",
    ctaText: "Katsotaan yhdessä, miten AutoClient sopii teidän myyntiprosessiin, asiakasprofiiliin ja kasvutavoitteisiin.",
    ctaPrimary: "Ota yhteyttä",
    ctaSecondary: "Varaa keskustelu",

    footerText: "Scalera Solutions rakentaa AI-avusteisia järjestelmiä, jotka tekevät B2B-prospektoinnista, outboundista ja myynnin alkuvaiheesta systemaattisempaa ja läpinäkyvämpää.",
    footerNav: "Navigaatio",
    footerContact: "Yhteys"
  },

  en: {
    navProduct: "Product",
    navShowcase: "Dashboard",
    navFeatures: "Features",
    navPricing: "Pricing",
    navProcess: "Implementation",
    navContact: "Book a call",

    heroEyebrow: "AUTOCLIENT FOR EARLY-STAGE B2B SALES",
    heroTitle: "Less manual work. More real sales conversations.",
    heroText: "AutoClient builds a controlled outbound system for your team: prospects, buying signals, personalized outreach and a transparent dashboard in one system.",
    heroBtnPrimary: "Book a demo",
    heroBtnSecondary: "View dashboard",
    heroBadge1: "Prospect database",
    heroBadge2: "Buying signals",
    heroBadge3: "Personalized outbound",
    heroBadge4: "CRM integration",

    proof1Label: "Prospects",
    proof1Text: "Up-to-date database",
    proof2Label: "Contacted leads",
    proof2Text: "Validated before send",
    proof3Label: "Time saved",
    proof3Text: "Manual work reduced",
    scrollText: "Scroll down",

    dashboardLive: "Live",
    metric1Label: "Prospects found",
    metric1Text: "Up-to-date database",
    metric2Label: "Leads contacted",
    metric2Text: "Validated before sending",
    metric3Label: "Meetings booked",
    metric3Text: "High-intent leads",
    metric4Label: "Time saved",
    metric4Text: "Manual work reduced",

    lead1Text: "Buying signal: hiring + expansion",
    lead2Text: "Decision-maker identified",
    lead3Text: "Campaign-ready contact set",
    chartTitle: "Campaign performance",
    chartRange: "Last 30 days",
    bar1Label: "Open rate",
    bar2Label: "Reply rate",
    bar3Label: "Meeting conversion",
    float1Title: "Pipeline visible",
    float1Value: "Clear dashboard",
    float2Title: "Process running",
    float2Value: "Systematically",

    strip1: "Built for modern B2B teams",
    strip2: "Buying signals and prospecting",
    strip3: "Personalized outbound",
    strip4: "Transparent analytics",
    strip5: "CRM-ready operating model",

    productEyebrow: "WHAT AUTOCLIENT DOES",
    productTitle: "A systematic solution for early-stage sales execution",
    productText: "AutoClient removes repetitive manual work from early-stage sales and builds a process that generates conversations more consistently.",
    productCard1Title: "Less manual work",
    productCard1Text: "Prospecting, enrichment and outbound routines no longer depend on heavy manual work.",
    productCard2Title: "More timely leads",
    productCard2Text: "Buying signals help identify who should be contacted right now.",
    productCard3Title: "Better visibility",
    productCard3Text: "Dashboard and integrations make the process transparent and easy to follow.",

    showcaseEyebrow: "DASHBOARD",
    showcaseTitle: "AutoClient in practice",
    showcaseText: "The client portal brings campaigns, companies, contacts, deep analysis and visual insights into one environment.",
    showcaseBox1Label: "Clear interface",
    showcaseBox1Title: "A dashboard that makes the process transparent",
    showcaseBox1Text: "You see what is happening, what has been done, who is next and how campaigns are actually performing.",
    showcaseBox2Label: "Better decision-making",
    showcaseBox2Title: "Data helps optimize strategy",
    showcaseBox2Text: "Company status, contacts, reply rates and visual insights make improvement areas visible quickly.",
    gallery1Title: "Login and interface",
    gallery1Text: "A clear and modern portal that makes the whole system feel manageable immediately.",
    gallery2Title: "Companies, contacts and deep analysis",
    gallery2Text: "Campaigns, discovered companies, contacts and company-specific analysis in one view.",
    gallery3Title: "Analytics and visualizations",
    gallery3Text: "Industry splits, regional map and other insights help optimize the process.",

    featuresEyebrow: "FEATURES",
    featuresTitle: "Simple structure, strong execution",
    featuresText: "AutoClient combines a prospect database, analytics, personalized outreach and continuous execution into one system.",
    f1Title: "Prospect database",
    f1Text: "Builds an ICP-based database of companies and decision-makers.",
    f2Title: "Buying signal search",
    f2Text: "Keeps data fresh and helps identify timely prospects.",
    f3Title: "Data enrichment",
    f3Text: "Analyzes prospect context, pain points and priority before outreach.",
    f4Title: "Personalized messaging",
    f4Text: "Messages are written using your context, templates and strategy.",
    f5Title: "Continuous outbound",
    f5Text: "Follow-ups, re-contacting and reaching multiple decision-makers are part of the process.",
    f6Title: "Dashboard and CRM",
    f6Text: "All data, activity and performance are visible in one place.",

    useEyebrow: "WHAT THIS CHANGES",
    useTitle: "More control, less chaotic outbound",
    useText: "The system handles the heavy repetitive stages so sales can focus on conversations, closing and optimization.",
    whatWeHandleTitle: "What AutoClient handles",
    wh1: "Prospect sourcing and database maintenance",
    wh2: "Buying signal detection",
    wh3: "Data enrichment and analysis",
    wh4: "Preparation of personalized messages",
    wh5: "Outreach, follow-ups and reply handling",
    wh6: "Dashboard and integrations",
    yourTeamTitle: "What your team focuses on",
    yt1: "Offer direction and target audience",
    yt2: "Messaging and strategic decisions",
    yt3: "Sales calls and closing",
    yt4: "Reviewing and improving results",
    yt5: "Driving business growth",
    calloutText: "AutoClient does not replace your sales team. It builds a continuous and controlled outbound system for early-stage sales.",

    pricingEyebrow: "PRICING",
    pricingTitle: "Start with a pilot or build a continuous operating model",
    pricingText: "Engagement can begin with a light pilot and then scale based on your company’s needs.",
    planPilot: "Pilot",
    planVat: " + VAT",
    pilotSub: "A low-risk way to test the concept in practice",
    pilot1: "Build the prospect database",
    pilot2: "Contact at least 500 prospects",
    pilot3: "Follow-ups, reply handling and meeting booking",
    pilot4: "Data enrichment and buying signals",
    featuredBadge: "Recommended",
    planQuarter: " / 3 months",
    basicSub: "Or €6000 / year + performance fee",
    basic1: "Full ICP mapping",
    basic2: "Up to 1000 decision-makers contacted per month",
    basic3: "Buying signal search every 2 weeks",
    basic4: "Regular prospect database updates",
    basic5: "CRM integration",
    basic6: "Reply handling and meeting booking",
    planScale: "Extensions",
    customPlan: "Custom",
    customSub: "Scaled to your needs",
    custom1: "Higher outbound volume",
    custom2: "Multiple customer segments",
    custom3: "More frequent buying signal search",
    custom4: "Outbound infrastructure outsourcing",
    custom5: "Domains, inboxes and Workspace maintenance",

    processEyebrow: "IMPLEMENTATION",
    processTitle: "System live in around 10 days",
    processText: "Implementation is designed to be fast: input, kickoff, customization and launch in a clear sequence.",
    day1: "Day 2",
    proc1Title: "Pre-filled business and ICP form",
    proc1Text: "We send a prepared form and you review it.",
    day2: "Day 4",
    proc2Title: "Kickoff session",
    proc2Text: "We define outreach strategy, customer segments and integrations.",
    day3: "Day 6",
    proc3Title: "Customization and client portal",
    proc3Text: "AutoClient is tailored to your needs and dashboard access is opened.",
    day4: "Day 9",
    proc4Title: "Prospecting starts",
    proc4Text: "Everything is ready, prospecting begins and first messages go out shortly after.",

    ctaEyebrow: "NEXT STEP",
    ctaTitle: "Choose AutoClient if you want to combine strong execution with scalable control",
    ctaText: "Let’s look at how AutoClient fits your sales process, ICP and growth goals.",
    ctaPrimary: "Contact us",
    ctaSecondary: "Book a call",

    footerText: "Scalera Solutions builds AI-assisted systems that make B2B prospecting, outbound and early-stage sales more systematic and transparent.",
    footerNav: "Navigation",
    footerContact: "Contact"
  }
};

function setLanguage(lang) {
  const selected = translations[lang];
  if (!selected) return;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (selected[key]) {
      element.textContent = selected[key];
    }
  });

  htmlEl.lang = lang;
  localStorage.setItem("siteLanguage", lang);

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang-btn");
    setLanguage(lang);
  });
});

const savedLang = localStorage.getItem("siteLanguage") || "fi";
setLanguage(savedLang);

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("load", () => {
  setTimeout(() => {
    if (pageLoader) {
      pageLoader.classList.add("hidden");
    }
    document.body.classList.remove("is-loading");
  }, 850);
});
