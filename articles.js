/* ════════════════════════════════════════════════════════════════
   JAM Intelligence — shared article data + card renderer
   Loaded via <script src="articles.js"> by index.html, insight.html,
   insights.html and the per-sector listing pages.

   PUBLISHING A NEW ARTICLE (Workflow 1):
   add one entry at the TOP of ARTICLES — object insertion order is
   display order (newest first). The card then appears automatically
   on the homepage, the insights hub, its sector listing page and
   related grids. No other file needs editing.
   ════════════════════════════════════════════════════════════════ */

const SECTORS = {
  ai: {
    num: 'Sector A — 01',
    name: 'AI Transformation for SMEs',
    page: 'insights_ai.html',
    standfirst: "A marathon race needs mental and physical preparation. AI transformation demands the same discipline — not excitement about the destination, but honest preparation for what the journey actually costs."
  },
  eu: {
    num: 'Sector B — 02',
    name: 'EU Tech and Economics Landscapes',
    page: 'insights_eu.html',
    standfirst: "Political intent is not resource allocation. Financial services AI, life sciences, and regulatory expertise are Europe's natural positions in the AI value chain."
  },
  energy: {
    num: 'Sector C — 03',
    name: 'Energy & AI Buildout',
    page: 'insights_energy.html',
    standfirst: "Whoever controls the energy distribution layer of AI has a structural advantage that pure software companies cannot replicate. Energy is the binding constraint."
  }
};

const ARTICLES = {
  'ai-hype-migrating-constraints': {
    tag: 'Energy',
    sectorKey: 'energy',
    date: '14 Jul 2026',
    read: '7 min read',
    title: 'Fueling the AI Hype: The Migrating Constraints',
    dek: "At this scale, the real question isn't whether the capital shows up — it's what scarce input all that capital is ultimately competing for. Today it is memory; next, undoubtedly, the power.",
    body: [
      { t: 'lead', x: "Analysts in investment banks estimated that Hyperscalers will spend over $800 billion in 2026, with capex reaching over $1 trillion in 2027 and more than $5.5 trillion in combined capex through 2030. On the other hand, data centre buildout growth has gone from doubling year-over-year to roughly 15%, meaning the cost per megawatt is rising, and more capital is chasing per gigawatt's capacity. At this scale, the real question isn't whether the capital shows up, it's what scarce input all that capital is ultimately competing for." },
      { t: 'p', x: "For now, it's the memory. 30% of this year's roughly $1 trillion capex is going to memory, rising to 40–50% next year. However, it is still a strong cyclical market: Micron is building 5 fabs right now; SK Hynix is raising a lot of money for this, and Samsung has announced its own expansion, plus Micron's push to lock half its contracts into long-term deals, and the volatility in the stock index mainly driven by memory chips — all showing a prior memory boom-bust cycle. Data centres are taking 2–3 years to build on average, and the analysts are looking into a supply-demand equilibrium until 2028–2029. Once the massive buildout is completed, or throughout the building, the next constraint is migrating undoubtedly, to the power." },
      { t: 'h2', x: "Pricing AI choke points: power is the power" },
      { t: 'p', x: "Power is determined by the intangible financial and tangible physical constraints beneath the capex number. Capex spending, funding sources, and Fed policy sit on the one side, shaping how much capacity gets funded. On-site generation, grid interconnection, and behind-the-meter execution on the other side determine how fast it actually gets built." },
      { t: 'h2', x: "Capital markets are generous to the off-taker's big name" },
      { t: 'p', x: "Hyperscalers with the deepest cash reserves are burning their cash flow to zero. The analyst from Bloomberg stated that credit markets fund 75–95% of that for IG-hyperscaler deals, led by global money-centre banks. The remaining 25% splits between sponsor equity: the developer's own stake and preferred equity from infrastructure players like Brookfield and Blackstone." },
      { t: 'p', x: "The debt market is absorbing the bulk of the $1 trillion buildout almost exclusively through investment-grade bonds. Amazon's $25 billion IG bond deal and SpaceX's $25 billion debt raise show the shape of that channel: AI data centres cost roughly $12–15 million per megawatt to build, so a single 100MW project runs $1.2–1.5 billion. Private credit fills the pre-lease financing gap before a tenant is secured, and Apollo and Blackstone's roughly $35 billion private-credit facility for Broadcom's data-centre build-out shows this channel isn't just serving smaller, unrated borrowers anymore — it's now competing directly with IG bond markets even for elite, IG-quality names that don't strictly need it, on the strength of speed and certainty of execution." },
      { t: 'p', x: "On the equity side, Alphabet raised roughly $80 billion selling shares to Berkshire Hathaway, earmarked for both TSMC chip purchases and data-centre construction, a sign that this capex cycle is large enough that even Big Tech's own free cash flow isn't fully absorbing it without external equity. The more interesting capital, though, is private equity's push into the ancillary ecosystem: GPU installation, cabling, power and cooling infrastructure, betting that data centre growth creates a durable services business, not just a construction cycle. SK Hynix's $28 billion US IPO and SpaceX's roughly $75 billion funding round are both, in part, capital reloading for that bet." },
      { t: 'p', x: "The opportunities here are large and, on current evidence, durable, and analysts aren't yet seeing a single slow-down signal in the Mag 7's capex competition — but the financing structure itself concentrates real fragility in hyperscaler balance sheet health and in the private-credit funds now underwriting growth stories rather than rated credit." },
      { t: 'h2', x: "Physical scarcity is the choke point capital can't fix" },
      { t: 'p', x: "Unlike the traditional co-location data centres and Bitcoin mining data centres, AI data centres require enough power that drives small towns and cities. EPRI estimates that data centres could hit 17% of US power consumption by 2030 from 5% today. Morgan Stanley's analyst described the largest and longest energy investment cycle in Asia in history, with $5.4 trillion by 2030 driven by AI data centre demand converging with energy security." },
      { t: 'p', x: "Physical scarcity is driving developers to extreme lengths to secure dedicated energy — not just grid, but entire wind farms, and even deploying jet engine turbines or micro-nuclear reactors, and the ambitious space-based solar solutions. Where solar and wind lead capacity can't provide constant 24/7 power, nuclear becomes one of the only around-the-clock sources but the most expensive, and the slowest infrastructure to build. The US government set a goal of quadrupling nuclear capacity to 400GW to meet the demand, where gas turbines have multiyear wait times and rising prices, and nuclear reactor vessels taking years to manufacture and deliver are the real practical constraints sitting in the physical supply for powering data centres." },
      { t: 'p', x: "And after two decades of stagnant electricity demand, US power requirements are projected to surge by up to 25% by 2030 solely to support this infrastructure, driving US energy and utility M&A to a record-breaking $204 billion in just the first five months of 2026, while still facing scarcity in critical resources imported from Russia, such as uranium and HALEU. The powering supply chain for AI buildouts is controlled by geopolitical rivals, and every Asian head of state now treats energy security as a priority after three oil shocks in six years." },
      { t: 'quote', x: "Nationals are paying resilience premiums over efficiency in both compute and power because the two have merged: AI sovereignty, and sovereign power." },
      { t: 'h2', x: "States are entering as claimants — enterprises shouldn't read it as endorsement" },
      { t: 'p', x: "Data centres have shifted from a capital-market-stress story to a sovereign-power story. But the scale of capital required has consequences beyond finance: when funding at this scale becomes an expression of sovereign power, the states enter the picture to claim a stake. The US is capturing and dominating this landscape — Steven Siesser at Lowenstein Sandler has stated explicitly that the US is gripping infrastructure on its own soil to maintain a global leading position, while widely absorbing foreign capital to fund it. Macquarie and Brookfield are bringing Canadian capital in; a Middle Eastern sovereign wealth fund has backstopped a European deal; sovereign funds are increasingly choosing to fund US centres over their own domestic ones. Even government equity is entering the picture. OpenAI's offer of a 5% stake to Washington is the clearest sign yet that the state itself now wants a direct claim on the upside, not just a regulatory role." },
      { t: 'p', x: "However, enterprises should not follow the government's move blindly: government backing does show robust headwind growth, but is not proof that AI investment pays off — which may confuse the board that AI adoption has been officially endorsed, and skip the diligence on whether it actually creates value for their business. <strong>The use-case math still needs to be done, deal by deal.</strong>" },
      { t: 'h2', x: "Next to watch: the Gulf fix and its premium" },
      { t: 'p', x: "The key is this: whoever can supply cheap, abundant resources to fund data-centre build-out at scale converts that supply into a negotiating voice. That's why the next opportunity for tackling the power constraint sits in the Gulf." },
      { t: 'p', x: "As the primary bottleneck in AI infrastructure migrates from memory and compute to power and physical capacity, the Gulf region is aggressively positioning itself as the global supply-side enabler. Where US infrastructure expansion is hindered by higher energy costs ($0.09–0.15/kWh) and slow permitting, the Middle East offers a structural advantage through deeply discounted power ($0.05–0.06/kWh) and rapid scale-up commitments, like the Stargate UAE 5GW build-out and HUMAIN's capacity expansion." },
      { t: 'p', x: "Crucially, the region brings an estimated $6 trillion in patient sovereign capital to the table, including the $100 billion MGX fund that does double duty — funding the physical build-out while also de-risking the broader financial ecosystem by relieving the refinancing pressure straining highly levered Western developers. As the remote data centres are unlikely to take latency or sovereign-bounded workloads, the realistic resolution is a workload split: the state power for latency-bound inference, and Gulf for power-hungry, latency-tolerant training over time." },
      { t: 'p', x: "This fix does carry a real cost: offshoring the most critical layer of AI infrastructure to the Middle East consolidates supply chains in a volatile corridor, baking a “war-risk premium” into global AI development. However, some argue that despite the re-escalating warfare in the Strait of Hormuz, the market has already derisked this corridor as the stock's floating regardless of the geographic volatility. Markets pricing calm and systems being resilient are not the same thing — the premium is dominant, not dead." }
    ],
    takeaways: [
      "Memory is today's constraint — 30% of this year's ~$1tn capex, rising to 40–50% next year — but equilibrium is expected by 2028–29; the constraint then migrates to power.",
      "Credit markets fund 75–95% of IG-hyperscaler deals; fragility concentrates in hyperscaler balance sheets and the private-credit funds underwriting growth stories.",
      "Physical scarcity — grid interconnection, gas turbines, nuclear vessels, uranium/HALEU — is the choke point capital can't fix; data centres could hit 17% of US power by 2030.",
      "The Gulf's discounted power ($0.05–0.06/kWh) and ~$6tn of patient sovereign capital make it the next supply-side enabler — at the cost of a war-risk premium baked into global AI development."
    ]
  },

  'ai-stress-points-capital': {
    tag: 'AI Transformation',
    sectorKey: 'ai',
    date: '1 Jul 2026',
    read: '8 min read',
    title: "AI's Three Stress Points in Capital Markets",
    dek: "One disruption, three balance sheets. The AI bubble is treated as one question; it is really real-economy software disruption transmitting into three capital-market structures that absorb it differently and in sequence.",
    body: [
      { t: 'lead', x: "The public IPO window gates private-equity exits; credit conditions gate refinancing for both. The noise is loudest where the danger is least — public equity; the real systemic transmitter is credit." },
      { t: 'h2', x: "1. Public equity — concentration misread as a bubble" },
      { t: 'p', x: "Recent selloffs revived the bubble chorus, but the move was a positioning unwind, not a demand collapse: Micron guided to $50bn revenue (16% above consensus) on 16 contracts worth ~$100bn to 2030, and Apple's price hike reflects memory-cost pass-through, not slowing demand. Russell 1000 Growth trades at a P/E of 22 sitting at the bottom 30% of its 10-year range, so the de-rating is done, and over $1T of buybacks make corporates net buyers." },
      { t: 'p', x: "The real flag is dispersion, not valuation: a concentrated, hyperscaler-led tape where single-stock volatility hides beneath a calm index (the Mag 7 fell 10% in June, turning into the “Lag Seven”). The unproven profitability sits with the user, not the builder: the rally prices the chipmakers' real profits, while the 29% hyperscaler cash-return measures selling compute, not enterprises earning a return deploying it (Salesforce: 8–9% organic). Leadership is already broadening to equal-weight, small caps and cyclicals, as the AI trade's rate of change peaks." },
      { t: 'h2', x: "2. Private equity — the exit machine seizes" },
      { t: 'p', x: "Around 30% of PE sits in software, the cohort most exposed to AI disruption, and the symptoms are in the plumbing: DPI is gummed at 8–10% against a 15–20% norm, holding periods have stretched to 7 years, and executives are borrowing against personal carry (broker Enness Global reports inquiries up threefold). Part distress, part conviction financing the wait." },
      { t: 'p', x: "The R1000G de-rating and OpenAI's delayed IPO keep the exit window shut. Medallia is the template: Thoma Bravo refused fresh equity and handed the business to Blackstone-led creditors, signalling the first major AI-driven software-LBO write-off. It crystallises PE losses, tests private credit, and threatens broader write-downs as private marks catch down to weaker public comparables." },
      { t: 'h2', x: "3. Credit — the transmitter, and where the real risk concentrates" },
      { t: 'p', x: "This is the leg to watch. Morgan Stanley flags an expected $500bn of AI-related debt issuance for 2026; the financing of the buildout is migrating from equity to debt, arriving faster than the market can absorb it, and the composition is deteriorating. The clearest sign: the hyperscalers, once prized as “bond-equivalents” — stable, cash-gushing, high-margin — are now selling debt to fund capex, a different and more fragile business model the equity market is actively repricing." },
      { t: 'p', x: "Debt now funds every layer of the stack: the chips (Apollo and Blackstone's $35bn private-credit package behind Broadcom), the labs (Anthropic's $35bn debt-funded buildout), launch and infrastructure (SpaceX's $25bn investment-grade bond), and the hardware vendors (HPE's $13bn customer-financing arm) — with high-yield and first-time data-centre issuance alone jumping from $0 last autumn to $40bn and heading toward $60bn." },
      { t: 'quote', x: "Co-existence holds only while the chain is fed by real cash flow; if it is fed by recycled capital, limited liquidity is the kill switch." },
      { t: 'p', x: "Three readings turn those numbers into a warning. First, the concentration is in the intermediaries, not just the issuers: the same sponsors financing the chip buildout are absorbing disrupted-software losses (Medallia) and issuing their own bonds — so the risk is correlated across one book, exactly the “circular financing” the BIS has now flagged. Second, the form of the debt is the tell: HPE lending customers money to buy HPE gear is vendor financing, the classic late-cycle move that manufactures demand out of debt. Third, backlog is only as good as its independence from the loop that created it: Nvidia's $1tn of revenue visibility reassures only if that demand is funded by real end-revenue, not by the same capital cycling through the system." },
      { t: 'h2', x: "4. Where it breaks, and where it resolves" },
      { t: 'p', x: "The chain has four roles: enablers (chip and compute winners), builders (hyperscalers and neo-clouds, free cash flow falling), monetisers (enterprise users whose ROI is still unproven), and financiers (the IPO, PE and private-credit machinery). These are not rivals but two ends of one flow — the market only rotates which end it rewards: enablers first on realised revenue, builders later on monetisation proof." },
      { t: 'p', x: "<strong>The directional call:</strong> public-equity stress is dispersion, not a bubble — the de-rating is done. Private equity is a slow grind: the exit backlog persists. Credit is where a rate or liquidity shock would actually cascade. Watch the credit tells: issuance, refinancing walls and private-credit redemptions, not the index." },
      { t: 'p', x: "The froth clears only when real enterprises' demand is actually paying and earning ROI — replacing recycled capital with real cash. It will accrue to whoever owns the enterprise control point: Microsoft's install base, not the commoditising model. Until then, capital markets simply reprice, day to day, whether the two ends of the chain connect before the levered builders run out of runway." }
    ],
    takeaways: [
      "Public equity stress is dispersion and a positioning unwind, not a bubble — the de-rating is already done.",
      "PE's exit machine is seized: DPI at 8–10% against a 15–20% norm, holding periods stretched to 7 years.",
      "Credit is the real transmitter: $500bn AI-related debt issuance expected in 2026, quality deteriorating and risk correlated across intermediary books.",
      "Liquidity is the master risk; real end-demand must replace recycled capital for the chain to hold."
    ]
  },

  'ai-marathon': {
    tag: 'AI Transformation',
    sectorKey: 'ai',
    date: 'Jun 2026',
    read: '6 min read',
    title: 'AI Transformation: A Marathon Race Needs Mental and Physical Preparation',
    dek: "The companies struggling most with AI adoption aren't the ones who moved too slowly — they're the ones who committed before they were ready.",
    body: [
      { t: 'lead', x: "A marathon runner doesn't show up on race day having only trained for a sprint. They've studied the course and built endurance over months to reach the goal. AI transformation demands the same discipline — not excitement about the destination, but honest preparation for what the journey actually costs." },
      { t: 'p', x: "The companies struggling most with AI adoption aren't the ones who moved too slowly. They're the ones who committed before they were ready. When Fortune 500 CEOs are gathered in rooms by institutional investors, they're asking a simple question: <strong>when does the AI investment actually pay back?</strong> If the world's largest companies are still working this out, SMEs rushing into AI transformation without a framework are taking on risk they haven't fully priced." },
      { t: 'h2', x: "Make sure you're stepping into the right story" },
      { t: 'p', x: "While the hyperscalers carry the AI hype, most companies sit beneath the success stories as followers trying hard to keep up. The AI leaders — Nvidia, Broadcom, Anthropic — are genuinely profitable and growing at extraordinary rates. The enterprise adopters are a different story. Even a name like Salesforce shows only 8–9% organic growth once acquisitions are stripped out." },
      { t: 'quote', x: "The productivity-to-profit conversion at the AI adopter layer is still unproven at scale." },
      { t: 'p', x: "SMEs should know which economy they're being invited into — the one building the picks and shovels, or the one still trying to prove the gold is there." },
      { t: 'h2', x: "Why are you lagging on AI transformation?" },
      { t: 'p', x: "When legacy systems, entrenched workflows, established habits and incompatible data architectures built over years meet AI implementation, it creates genuine friction. Workers have to change how they do things, learn new interfaces, trust outputs they can't fully verify, and integrate tools that don't usually speak to each other." },
      { t: 'p', x: "The drag is real and measurable — and it's the heart of the question everyone is asking: why aren't the productivity gains materialising, and why isn't it generating the revenue I expected?" },
      { t: 'h2', x: "The bottleneck is data infrastructure" },
      { t: 'p', x: "Enterprise AI requires your proprietary data to be clean, integrated and accessible. Most SMEs have their data scattered across incompatible legacy systems. Deploying AI before solving the data-architecture problem is building a race car without wheels. Three questions belong before any AI transformation:" },
      { t: 'list', x: [
        "<strong>What you want AI to know</strong> — define the proprietary insight the business needs, and the goal you need AI to help achieve.",
        "<strong>What must happen to the data first</strong> — cleansing, standardisation, integration, labelling, governance.",
        "<strong>Which AI tool</strong>, trained on what, deployed where, and measured how."
      ]},
      { t: 'h2', x: "Be selective" },
      { t: 'p', x: "Pricing power sits on the other side. GPU pricing is set by Nvidia. Cloud compute rates are set by the hyperscalers. The supply chain is concentrated among a handful of providers with extraordinary pricing power that will persist for the foreseeable future. Value-sensitive businesses should model their AI costs at current prices — not assume competition will drive them down soon." },
      { t: 'p', x: "Not all AI investment is equal. Core capabilities — the models, the memory, the compute — are where genuine value is being built. Peripheral AI adjacency, where everyone can package themselves as an 'AI company' with nice framing, is where the risk of overpaying for hype lives. SMEs should ask whether the tool they're adopting solves a genuine bottleneck in their operations, or merely creates demand that burns cash to chase a trend and avoid feeling left behind." },
      { t: 'h2', x: "Join the race with a clear goal" },
      { t: 'p', x: "For enterprises evaluating AI vendors, that has a practical implication: be cautious of vendors whose pitch is driven by what the market currently rewards rather than what your specific business actually needs. The coding-agent wave is real, but not every business needs coding agents — and vendors optimising their messaging for investor narratives rather than client outcomes are a warning sign." }
    ],
    takeaways: [
      "AI's profits today sit with the infrastructure leaders, not the enterprise adopters — know which economy you're entering.",
      "Fix data architecture before deploying AI; scattered legacy data is the real bottleneck.",
      "Model AI costs at today's prices — pricing power sits with Nvidia and the hyperscalers.",
      "Buy capability that solves a real bottleneck, not AI-adjacency sold on hype."
    ]
  },

  'london-ai-value-chain': {
    tag: 'EU Tech',
    sectorKey: 'eu',
    date: 'Jun 2026',
    read: '5 min read',
    title: 'Where Does London Actually Fit in the AI Value Chain?',
    dek: "The EU Tech Sovereign Package and London Tech Week are promising — but they promise too much.",
    body: [
      { t: 'lead', x: "The EU Tech Sovereign Package, arriving on 3 June, covers four pillars: a Cloud and Data Act (CADAA), Chips Act 2.0, open-source software promotion and AI data-centre investment — ideally to 'carve out a protected slice of the market before geopolitical disruption forces the issue.' Alongside it, London Tech Week is trying to position the UK as the European AI hub and find its place in the global AI value chain." },
      { t: 'p', x: "Both are positive political signals for AI development on a continent that has been left out of the dominant AI discourse for a while. They're promising — but they promise too much, creating funding black holes before the resource-allocation question is resolved." },
      { t: 'quote', x: "The value of this continent isn't capital itself, but the government credibility it confers." },
      { t: 'p', x: "Isomorphic Labs, an Alphabet unit, says the UK government stamp is genuinely meaningful for business development. The UK's strength in research, finance and regulatory agility — Waymo launching outside the US for the first time in the UK — are genuine assets that pure capital comparisons miss." },
      { t: 'h2', x: "London's natural position" },
      { t: 'p', x: "Imagine London as an enterprise accelerating AI adoption. The evidence points toward three positions: <strong>financial-services AI</strong>, <strong>life-sciences and drug-discovery AI</strong>, and <strong>regulatory and governance expertise</strong> — the one area where Europe genuinely leads the US." },
      { t: 'p', x: "These are London's natural positions in the AI value chain. Not infrastructure buildout competing with Texas data centres; not chip manufacturing competing with Asia. The energy-cost disadvantage — roughly 3× the US — makes infrastructure an even worse bet." },
      { t: 'h2', x: "The sovereign-data moat" },
      { t: 'p', x: "The concerns also point to the next move. The NHS holds one of the world's largest sovereign health datasets — a genuine moat no private company can replicate. Successfully integrating AI into that system would position London at the frontier of sovereign AI in healthcare, ahead of every market where the big players are still competing for data access they don't yet have." }
    ],
    takeaways: [
      "EU and UK AI policy signals are welcome but over-promise before resource allocation is settled.",
      "The UK's real edge is credibility, research, finance and regulatory agility — not capital scale.",
      "London should target financial-services AI, life sciences and governance — not infrastructure or chips.",
      "The NHS sovereign health dataset is a moat no private company can replicate."
    ]
  },

  'energy-beneath-ai': {
    tag: 'Energy',
    sectorKey: 'energy',
    date: 'Jun 2026',
    read: '6 min read',
    title: 'The Energy Beneath the AI Wave: Opportunity, Risk, and the Race for Infrastructure Control',
    dek: "Energy is not a peripheral theme in the AI buildout. It's the binding constraint that determines how fast the whole thing can scale.",
    body: [
      { t: 'lead', x: "The AI boom is driving growth across memory, semiconductors and energy. With $700bn of capex invested — expected to reach $800bn by the end of 2026 — large data-centre buildout is intensifying energy-supply constraints across the entire chain, making the energy transition a critical issue now." },
      { t: 'p', x: "Solar inverters, EV powertrains and grid-management systems have all seen rising demand in recent months, and that will only surge as hyperscalers keep burning huge cash flows on capex." },
      { t: 'h2', x: "The parallel story" },
      { t: 'p', x: "Another, equally significant story runs in parallel: war-driven energy inflation is compressing discretionary spending, deteriorating government fiscal positions, and pushing the K-shaped economy even wider. The greatest disruption to the global supply chain in history is escalating fears and lifting inflation — bond yields rising, stocks falling, indices moving together." },
      { t: 'p', x: "You might point to the all-time highs in the S&P 500 and Nasdaq, but the advance-decline line is slower than in February and April. More stocks are falling than rising, masked by the extraordinary performance of the top 30 companies — which now account for two-thirds of market cap." },
      { t: 'quote', x: "Whoever controls the energy-distribution layer of AI has a structural advantage that pure software companies cannot replicate." },
      { t: 'h2', x: "Where the opportunity emerges" },
      { t: 'p', x: "Opportunity emerges when energy catches the AI tailwind. An energy story can be framed as an AI story: compute requires power, power requires infrastructure, and whoever controls the energy-distribution layer holds a structural advantage that pure software companies cannot replicate." },
      { t: 'p', x: "Consider SpaceX's dominant control over its own energy distribution; the vertical integration of energy in sovereign AI as a service opportunity; even the emergence of CAT bonds financing data-centre energy risk, creating an entirely new insurance market around AI infrastructure." },
      { t: 'p', x: "Energy is not a peripheral theme in the AI buildout. It's the binding constraint that determines how fast the whole thing can actually scale — even as all eyes turn to the largest IPO in history." }
    ],
    takeaways: [
      "$700bn AI capex (heading to $800bn by end-2026) is tightening energy supply across the chain.",
      "Energy inflation is widening the K-shaped economy; market breadth is narrowing beneath record indices.",
      "Control of the energy-distribution layer is a structural advantage software can't replicate.",
      "New financing — e.g. CAT bonds on data-centre energy risk — is building an insurance market around AI infrastructure."
    ]
  }
};

/* ════════ SHARED HELPERS ════════ */

function articlesBySector(key) {
  return Object.keys(ARTICLES).filter(id => ARTICLES[id].sectorKey === key);
}

function articleCard(id, extraClass) {
  const a = ARTICLES[id];
  return `<a class="insight-card reveal ${extraClass || ''}" href="insight.html?id=${id}">
    <div class="ic-meta">
      <span class="ic-tag">${a.tag}</span>
      <span class="ic-date">${a.date}</span>
    </div>
    <h3>${a.title}</h3>
    <p>${a.dek}</p>
    <span class="ic-link">Read Brief</span>
  </a>`;
}
