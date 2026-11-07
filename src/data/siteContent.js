/**
 * Verified Content and Copy for Kinetiq
 * Enterprise Generative AI Platform Built for Institutional Finance
 */

export const siteContent = {
  brand: {
    name: "Kinetiq",
    tagline: "Built for Finance",
    subheadline: "Kinetiq is the secure, purpose-built generative AI platform engineered for the world's leading investment banks, private equity firms, and global asset managers.",
    copyright: "© 2026 Kinetiq Technologies, Inc. All rights reserved.",
    disclaimer: "Kinetiq is a proprietary technology platform. Financial information provided through the platform is for institutional decision-support and does not constitute investment advice."
  },

  navigation: {
    links: [
      { label: "Product", href: "#product" },
      { label: "Solutions", href: "#solutions" },
      { label: "Partnership", href: "#partnership" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Security", href: "#security" },
      { label: "Newsroom", href: "#newsroom" }
    ],
    cta: {
      primary: "Request Demo",
      secondary: "Log in"
    }
  },

  hero: {
    eyebrow: "The Enterprise AI Platform for Capital Markets",
    headline: "Built for Finance",
    headlineItalic: "Finance",
    subheadline: "Kinetiq is the secure generative AI platform built for the world's leading investment banks, private equity firms, and hedge funds.",
    primaryCta: "Request Demo",
    secondaryCta: "Explore Platform",
    badge: "SOC 2 Type II Certified • Zero Data Retention"
  },

  ecosystem: {
    heading: "Trusted by leaders across institutional finance",
    subheading: "Deployed by managing directors, partners, and investment committees managing over $2T in assets.",
    // Formatted for typographic name rendering as requested by client (easy to swap with SVG logos later)
    clients: [
      {
        id: "jefferies",
        name: "Jefferies",
        ticker: "NYSE: JEF",
        style: "font-serif tracking-wider font-semibold text-lg"
      },
      {
        id: "lazard",
        name: "LAZARD",
        ticker: "Advisory & Asset Mgmt",
        style: "font-sans tracking-[0.25em] font-medium text-base"
      },
      {
        id: "rothschild",
        name: "ROTHSCHILD & CO",
        ticker: "Global Advisory",
        style: "font-serif tracking-[0.18em] font-medium text-base uppercase"
      },
      {
        id: "baird",
        name: "Robert W. Baird",
        ticker: "Private Wealth & Banking",
        style: "font-serif tracking-wide font-normal text-lg italic"
      },
      {
        id: "nomura",
        name: "NOMURA",
        ticker: "Wholesale & Capital Markets",
        style: "font-sans tracking-[0.3em] font-semibold text-base"
      },
      {
        id: "point72",
        name: "Point72",
        ticker: "Multi-Strategy Fund",
        style: "font-sans tracking-tight font-bold text-lg"
      },
      {
        id: "guggenheim",
        name: "Guggenheim Partners",
        ticker: "Global Investment & Advisory",
        style: "font-serif tracking-normal font-normal text-base"
      },
      {
        id: "moelis",
        name: "MOELIS & COMPANY",
        ticker: "Independent Investment Bank",
        style: "font-sans tracking-[0.2em] font-medium text-sm"
      },
      {
        id: "blackstone",
        name: "Blackstone",
        ticker: "Alternative Asset Mgmt",
        style: "font-serif tracking-wide font-normal text-lg"
      },
      {
        id: "balyasny",
        name: "Balyasny Asset Mgmt",
        ticker: "Quantitative & Fundamental",
        style: "font-sans tracking-wider font-medium text-sm uppercase"
      }
    ]
  },

  valueProp: {
    heading: "The future of financial work",
    subheading: "General-purpose models fail on financial nuance. Kinetiq is trained natively on capital market terminology, complex debt structures, and regulatory rigor.",
    features: [
      {
        id: "accelerate",
        number: "01",
        title: "Accelerate your output",
        summary: "Generate complex LBO models, DCFs, merger consequences, and institutional pitch books in minutes with continuous formula integrity.",
        detail: "Automate repetitive data collection and financial mechanics while retaining 100% control over cell references, dynamic multipliers, and capital structure schedules.",
        metrics: "85% reduction in model build time",
        viewData: {
          title: "Project Apex — Buyout Financial Model",
          type: "LBO Valuation & Returns Summary",
          status: "Audited & Verified",
          rows: [
            { metric: "Total Revenue ($M)", y1: "842.0", y2: "926.2", y3: "1,018.8", y4: "1,120.7", cagr: "+10.0%" },
            { metric: "Adj. EBITDA ($M)", y1: "218.9", y2: "250.1", y3: "285.3", y4: "325.0", cagr: "+14.1%" },
            { metric: "EBITDA Margin (%)", y1: "26.0%", y2: "27.0%", y3: "28.0%", y4: "29.0%", cagr: "+300 bps" },
            { metric: "Free Cash Flow ($M)", y1: "142.5", y2: "168.0", y3: "198.4", y4: "232.1", cagr: "+17.6%" },
            { metric: "Net Debt / EBITDA", y1: "4.2x", y2: "3.4x", y3: "2.5x", y4: "1.7x", cagr: "-2.5x" }
          ],
          returns: {
            irr: "28.4%",
            moic: "2.85x",
            exitYear: "Year 5",
            exitMultiple: "12.5x EV/EBITDA"
          }
        }
      },
      {
        id: "data-rooms",
        number: "02",
        title: "Rely on your data in one place",
        summary: "Synthesize virtual data rooms, internal historical deal archives, SharePoint, S&P Global, and SEC filings without leaving your workflow.",
        detail: "Eliminate context switching. Kinetiq bridges private institutional memory with real-time public market intelligence under unified governance.",
        metrics: "Unified access across 500k+ documents",
        viewData: {
          title: "Multi-Source Knowledge Graph",
          type: "Data Room & Market Synthesis",
          status: "Live Synchronized",
          rows: [
            { metric: "Confidential CIM Analysis", y1: "Connected", y2: "142 pgs", y3: "18 Ex-Tabs", y4: "Indexed", cagr: "Private" },
            { metric: "Historical Firm M&A Decks", y1: "Indexed", y2: "1,240 Decks", y3: "Internal", y4: "Governed", cagr: "Proprietary" },
            { metric: "SEC 10-K / 10-Q EDGAR", y1: "Real-Time", y2: "15 Years", y3: "Footnotes", y4: "Parsed", cagr: "Public" },
            { metric: "S&P Global Market Data", y1: "API Active", y2: "Consensus", y3: "Estimates", y4: "Live", cagr: "External" }
          ],
          returns: {
            irr: "Instant",
            moic: "100%",
            exitYear: "Zero Latency",
            exitMultiple: "Full Auditability"
          }
        }
      },
      {
        id: "agents",
        number: "03",
        title: "An expert partner that cooperates",
        summary: "Powered by Felix, Kinetiq's autonomous financial agent engineered to plan, execute, and verify multi-step capital market workflows.",
        detail: "Felix doesn't just answer prompts—it conducts multi-stage equity research, cross-checks balance sheets against footnote disclosures, and builds presentation-ready slides.",
        metrics: "Multi-step reasoning across 12 tools",
        viewData: {
          title: "Autonomous Agent Execution (Felix)",
          type: "Multi-Stage Valuation Task",
          status: "Executing Step 4 of 4",
          rows: [
            { metric: "Step 1: Parse 10-K & CIM Data", y1: "Complete", y2: "100%", y3: "Verified", y4: "0 Errors", cagr: "14s" },
            { metric: "Step 2: Build Public Comps Set", y1: "Complete", y2: "12 Peers", y3: "Normalized", y4: "Adjusted", cagr: "22s" },
            { metric: "Step 3: Dynamic Sensitivity Grid", y1: "Complete", y2: "WACC ± 1%", y3: "Term ± 0.5x", y4: "Computed", cagr: "18s" },
            { metric: "Step 4: Draft Investment Memo", y1: "Synthesizing", y2: "Section 3", y3: "Citations Added", y4: "In Review", cagr: "Active" }
          ],
          returns: {
            irr: "Active",
            moic: "Autonomous",
            exitYear: "Stage 4",
            exitMultiple: "Verified Citations"
          }
        }
      },
      {
        id: "confidence",
        number: "04",
        title: "Deploy with confidence",
        summary: "Every calculation, quote, and chart includes click-to-verify citations linked directly to source documents and spreadsheet formulas.",
        detail: "Wall Street cannot accept black-box hallucinations. Kinetiq guarantees institutional transparency: inspect the mathematical logic behind every single figure.",
        metrics: "Zero-hallucination formula audit trail",
        viewData: {
          title: "Audit Provenance Engine",
          type: "Traceable Source Footnotes",
          status: "100% Provenance Coverage",
          rows: [
            { metric: "FY24 Revenue Citation", y1: "SEC 10-K", y2: "Item 7, p.42", y3: "Table 4.1", y4: "Verified", cagr: "Direct Link" },
            { metric: "Cost of Goods Sold", y1: "SEC 10-K", y2: "Note 3, p.68", y3: "Inventory", y4: "Verified", cagr: "Direct Link" },
            { metric: "Stock-Based Comp Addback", y1: "Press Release", y2: "Non-GAAP Rec", y3: "Exhibit 99.1", y4: "Audited", cagr: "Exact Line" },
            { metric: "Debt Covenant Tranches", y1: "Credit Agmt", y2: "Section 6.02", y3: "EBITDA Cap", y4: "Verified", cagr: "Governed" }
          ],
          returns: {
            irr: "Verified",
            moic: "Traceable",
            exitYear: "Complete",
            exitMultiple: "Zero Guesswork"
          }
        }
      }
    ]
  },

  brandStory: {
    heading: "Partnership tailored to your firm",
    subheading: "We do not believe in off-the-shelf software for bespoke high-finance transactions. Kinetiq pairs forward-deployed engineers and former investment bankers directly with your deal teams.",
    video: {
      title: "Why we built Kinetiq for Wall Street",
      speaker1: "Gabriel Stengel",
      role1: "Chief Executive Officer & Co-Founder",
      speaker2: "Elena Vasquez",
      role2: "Head of Institutional Deployment (Ex-Goldman Sachs)",
      duration: "03:45",
      caption: "Inside our bespoke deployment architecture for tier-1 advisory firms and private equity sponsors."
    },
    pillars: [
      {
        title: "Former Bankers On-Site",
        desc: "Our forward-deployed teams have lived the late nights in banking bullpen rooms. They speak the exact dialect of debt covenants, multiples, and pitch formatting."
      },
      {
        title: "Proprietary Model Calibration",
        desc: "We calibrate Kinetiq to your firm's specific Excel templates, formatting standards, and color palettes so every model looks natively crafted by your analysts."
      },
      {
        title: "Continuous Governance Audits",
        desc: "Dedicated enterprise security architects conduct ongoing compliance testing against FINRA, SEC, and internal risk management protocols."
      }
    ]
  },

  testimonial: {
    quote: "The results speak for themselves. Kinetiq has quickly become an indispensable part of our daily workflow, accelerating research and productivity across our investment teams. We couldn't imagine conducting research or building financial models without it.",
    author: "Senior Managing Director",
    role: "Global Head of Technology Investment Banking",
    firm: "Tier-1 Global Investment Bank",
    stat: "4.2 Hours Saved Daily per Analyst"
  },

  caseStudies: {
    heading: "How firms work with Kinetiq",
    subheading: "Explore real-world deployments across advisory, private equity, and multi-strategy credit.",
    items: [
      {
        id: "investment-banking",
        clientType: "Investment Banking",
        firmCategory: "Tier-1 Global Advisory",
        title: "Deploying AI at Scale in Investment Banking: Role & Scope",
        description: "How a bulge-bracket investment bank deployed Kinetiq across 1,400+ junior bankers to automate comparable company analysis, pitch books, and dynamic DCF models without compromising compliance.",
        results: [
          { label: "Analyst Time Saved", value: "4.5 hrs/day" },
          { label: "Comps Generation", value: "From 6 hrs to 15 mins" },
          { label: "Formula Audit Accuracy", value: "100%" }
        ],
        theme: "limestone"
      },
      {
        id: "private-equity",
        clientType: "Private Equity",
        firmCategory: "Large-Cap Buyout Sponsor",
        title: "Accelerating Due Diligence in Multi-Billion Dollar Acquisitions",
        description: "How a top-tier private equity fund utilized Kinetiq to ingest 250+ CIMs per quarter, stress-test debt capacity schedules, and extract key customer concentration risks in minutes.",
        results: [
          { label: "CIM Review Velocity", value: "4x Faster" },
          { label: "Data Room Ingestion", value: "Sub-5 Minute" },
          { label: "LBO Scenario Sensitivity", value: "Instantaneous" }
        ],
        theme: "skyscraper"
      },
      {
        id: "hedge-funds",
        clientType: "Asset Management",
        firmCategory: "Multi-Strategy Hedge Fund",
        title: "Real-Time Earnings Call & 10-K Footnote Intelligence",
        description: "How portfolio managers and quantitative research teams track real-time management sentiment shifts, footnote changes, and supply-chain commentary across 4,000 global equities.",
        results: [
          { label: "Transcript Synthesis", value: "< 30 Seconds" },
          { label: "Footnote Discrepancy Alert", value: "Automated" },
          { label: "Alpha Generation Edge", value: "Significant" }
        ],
        theme: "quantitative"
      }
    ]
  },

  metrics: {
    heading: "Results at enterprise scale",
    subheading: "Adopted by elite institutions to transform execution speed, accuracy, and junior banker retention.",
    stats: [
      {
        value: 60,
        suffix: "K+",
        label: "Daily Queries Executed",
        description: "High-stakes financial queries processed daily across leading global investment institutions."
      },
      {
        value: 200,
        suffix: "K+",
        label: "Analyst Hours Saved",
        description: "Reclaimed from manual Excel data entry, transcript transcription, and pitch deck formatting."
      },
      {
        value: 450,
        suffix: "+",
        label: "Institutional Deployments",
        description: "Active enterprise agreements across Wall Street, London, and international financial hubs."
      }
    ]
  },

  security: {
    heading: "Security built for institutional finance",
    subheading: "Architected to protect Material Non-Public Information (MNPI) with zero-compromise institutional governance, end-to-end encryption, and isolated enterprise tenants.",
    features: [
      {
        id: "soc2",
        title: "SOC 2 Type II Certified",
        description: "Rigorously audited by independent third-party CPA firms verifying our security, confidentiality, and availability controls."
      },
      {
        id: "iso",
        title: "ISO 27001 Standard",
        description: "Adherence to international standards for information security management systems (ISMS) across all data pipelines."
      },
      {
        id: "zero-retention",
        title: "Zero Data Retention",
        description: "Customer deal data and proprietary documents are never stored to train foundational or shared public models."
      },
      {
        id: "chinese-wall",
        title: "Information Barriers",
        description: "Enforce strict organizational boundaries, client ethical walls, and granular role-based access controls (RBAC)."
      },
      {
        id: "encryption",
        title: "Military-Grade Encryption",
        description: "All data encrypted in transit using TLS 1.3 and at rest with AES-256 keys, with customer-managed encryption key (CMEK) options."
      },
      {
        id: "audit-logs",
        title: "Immutable Audit Trails",
        description: "Exportable SIEM-ready logs recording every prompt, document retrieval, and user session for internal compliance officers."
      }
    ]
  },

  newsroom: {
    heading: "From the newsroom",
    subheading: "Industry coverage, strategic milestones, and major announcements.",
    articles: [
      {
        id: "bloomberg",
        source: "Bloomberg",
        date: "December 2024",
        category: "Enterprise AI & Finance",
        title: "Kinetiq Accelerates Wall Street AI Adoption with Purpose-Built Financial Intelligence",
        summary: "Bloomberg examines how Kinetiq has cut down manual grunt work traditionally assigned to investment banking analysts, earning major backing and enterprise contracts.",
        linkText: "Read on Bloomberg",
        badge: "Press Coverage"
      },
      {
        id: "wsj",
        source: "The Wall Street Journal / Dow Jones",
        date: "January 2025",
        category: "Strategic Partnership",
        title: "Dow Jones and Kinetiq Partner to Deliver Real-Time Newsfeed to AI Platform",
        summary: "Dow Jones and The Wall Street Journal announce direct integration of Dow Jones Newswires into Kinetiq's agentic financial platform for verified real-time journalism.",
        linkText: "Read Announcement",
        badge: "Partnership"
      },
      {
        id: "ft",
        source: "Financial Times",
        date: "February 2025",
        category: "Capital Markets Analysis",
        title: "The Battle for Wall Street's AI Desktop: Why Generalist Chatbots Are Falling Short",
        summary: "An in-depth analysis of why high-finance workflows demand specialized models that understand EBITDA adjustments, debt tranches, and strict Chinese-wall compliance.",
        linkText: "Read Article",
        badge: "Industry Feature"
      }
    ]
  },

  finalCta: {
    heading: "Accelerate your firm with Kinetiq",
    subheading: "Join leading investment banks, private equity sponsors, and asset managers already transforming high-finance workflows with verified enterprise AI.",
    primaryCta: "Request Private Demo",
    secondaryCta: "Contact Enterprise Sales",
    notice: "Enterprise onboarding typically takes less than two weeks with dedicated forward-deployed engineers."
  },

  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Felix AI Agent", href: "#product" },
          { label: "Dynamic Financial Modeling", href: "#product" },
          { label: "Data Room Synthesis", href: "#product" },
          { label: "Public Comps Engine", href: "#product" },
          { label: "CIM Screener", href: "#product" },
          { label: "Release Notes", href: "#" }
        ]
      },
      {
        title: "Solutions",
        links: [
          { label: "Investment Banking", href: "#case-studies" },
          { label: "Private Equity", href: "#case-studies" },
          { label: "Hedge Funds", href: "#case-studies" },
          { label: "Equity Research", href: "#case-studies" },
          { label: "Sponsor Finance", href: "#case-studies" }
        ]
      },
      {
        title: "Security & Trust",
        links: [
          { label: "Security Architecture", href: "#security" },
          { label: "SOC 2 Type II", href: "#security" },
          { label: "ISO 27001 Certified", href: "#security" },
          { label: "Zero-Retention Policy", href: "#security" },
          { label: "Compliance Whitepaper", href: "#security" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Kinetiq", href: "#partnership" },
          { label: "Careers (We're Hiring)", href: "#" },
          { label: "Newsroom", href: "#newsroom" },
          { label: "Leadership", href: "#partnership" },
          { label: "Contact Sales", href: "#cta" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Security Addendum", href: "#" },
          { label: "Responsible AI", href: "#" },
          { label: "Regulatory Disclosures", href: "#" }
        ]
      }
    ]
  }
};

