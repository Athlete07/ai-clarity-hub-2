/**
 * Adds diagram blocks to Founder and Business Leader chapter files.
 * Run: node scripts/add-chapter-diagrams.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const libDir = path.join(__dirname, "../src/lib");

/** @type {Record<string, Record<string, { id: string; type: string; title: string; caption: string }>>} */
const MANIFEST = {
  // ── Founder PB1 (concepts-founder) ──
  "concepts-founder/chapter-03-training-vs-inference.ts": {
    "3.1": {
      id: "founder-training-inference-split",
      type: "comparison",
      title: "Training CapEx vs Inference OpEx",
      caption:
        "Training manufactures capability once; inference meters it on every user action. Founders who confuse the two misallocate capital and discover margin crisis at scale.",
    },
    "3.3": {
      id: "founder-unit-economics-trap",
      type: "flow",
      title: "The Unit Economics Trap",
      caption:
        "Flat pricing plus unbounded inference turns viral adoption into a COGS crisis — model this before launch, not after the AWS bill.",
    },
    "3.4": {
      id: "founder-api-vs-own",
      type: "comparison",
      title: "API Dependency vs Model Ownership",
      caption:
        "APIs trade margin for speed at low volume; self-hosting trades operational burden for wholesale economics at high volume.",
    },
    "3.6": {
      id: "founder-inference-optimisation",
      type: "flow",
      title: "Inference Cost Optimisation Levers",
      caption:
        "Routing, compression, caching, and distillation can cut COGS 40–80% — invest before crisis, not during a bridge round.",
    },
  },
  "concepts-founder/chapter-04-data-competitive-advantage.ts": {
    "4.1": {
      id: "founder-data-moat-layers",
      type: "nested",
      title: "The Data Moat Stack",
      caption:
        "Distribution generates proprietary data; data trains models competitors cannot replicate. Algorithms commoditize — signal compounds.",
    },
    "4.3": {
      id: "ch2-data-flywheel",
      type: "flow",
      title: "The Data Flywheel",
      caption:
        "More usage → more signal → better model → better product → more usage. Investors fund this loop when it is real, not imagined.",
    },
  },
  "concepts-founder/chapter-05-probability-confidence.ts": {
    "5.4": {
      id: "ch1-paradigm-shift",
      type: "comparison",
      title: "Deterministic Rules vs Probabilistic Outputs",
      caption:
        "Traditional software returns the same answer every time; ML returns confidence scores. Product and legal design must account for uncertainty.",
    },
  },
  "concepts-founder/chapter-06-model-evaluation.ts": {
    "6.2": {
      id: "founder-eval-framework",
      type: "flow",
      title: "The Founder Evaluation Framework",
      caption:
        "Define the task, build a golden set, set a ship gate, and monitor drift — the minimum bar before any AI feature reaches users.",
    },
    "6.5": {
      id: "ch2-fitting-comparison",
      type: "comparison",
      title: "The Fitting Spectrum",
      caption:
        "Underfitting fails users; overfitting fails in production. Optimal fit is a product decision tied to business risk tolerance.",
    },
  },
  "concepts-founder/chapter-07-bias-hallucination-liability.ts": {
    "7.3": {
      id: "founder-risk-governance",
      type: "flow",
      title: "AI Risk Management Flow",
      caption:
        "Inventory use cases, classify risk, implement controls, monitor incidents — the founder's minimum viable governance path.",
    },
  },
  "concepts-founder/chapter-08-ai-landscape.ts": {
    "8.2": {
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "The Cost-Latency-Quality Frontier",
      caption:
        "Frontier models sit at one corner; small fast models at another. Mature products route different requests to different points on this curve.",
    },
  },
  // ── Founder PB2 ──
  "concepts-founder-pb2/chapter-01-what-ai-native-means.ts": {
    "1.1": {
      id: "founder-ai-native-spectrum",
      type: "nested",
      title: "AI-Native vs AI-Powered vs AI-Washed",
      caption:
        "Three tiers with different valuations, defensibility, and hiring plans. Honest placement determines your fundraising narrative.",
    },
  },
  "concepts-founder-pb2/chapter-05-ai-culture.ts": {
    "5.2": {
      id: "bl-change-management",
      type: "flow",
      title: "Building AI Culture",
      caption:
        "Sponsor → communicate honestly → train → empower champions → measure adoption. Culture is how strategy becomes behaviour.",
    },
  },
  // ── Founder PB3 ──
  "concepts-founder-pb3/chapter-01-what-ai-strategy-is.ts": {
    "1.3": {
      id: "bl-ai-transformation",
      type: "flow",
      title: "AI Strategy Execution Path",
      caption:
        "Assess → prioritise → pilot → scale → embed. Strategy without this sequence is a slide deck, not a company capability.",
    },
  },
  "concepts-founder-pb3/chapter-03-ai-competitive-moats.ts": {
    "3.2": {
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Competitive Moat Layers",
      caption: "Distribution, proprietary data, and model advantage — the three layers investors underwrite in AI diligence.",
    },
  },
  "concepts-founder-pb4/chapter-01-how-vcs-evaluate-ai.ts": {
    "1.2": {
      id: "founder-vc-diligence-stack",
      type: "flow",
      title: "How VCs Evaluate AI Startups",
      caption:
        "Team, data moat, unit economics, market timing, risk surface — the five diligence lenses on every AI term sheet.",
    },
  },
  "concepts-founder-pb4/chapter-02-ai-valuation-premium.ts": {
    "2.3": {
      id: "founder-funding-valuation",
      type: "comparison",
      title: "AI Premium vs AI Discount",
      caption:
        "Compounding data loops earn premium multiples; API wrappers with negative unit economics trade at a discount.",
    },
  },
  // ── Founder PB5 ──
  "concepts-founder-pb5/chapter-01-founder-ai-roles-explained.ts": {
    "1.1": {
      id: "founder-ai-roles-map",
      type: "comparison",
      title: "ML Engineer vs AI Engineer vs Data Scientist",
      caption:
        "Three roles, three skill sets, three budgets. Role clarity is the first filter in a brutal AI talent market.",
    },
    "1.6": {
      id: "founder-hiring-sequence",
      type: "flow",
      title: "AI Hiring Sequence by Stage",
      caption:
        "Define your bet → hire the right first role → prove the loop → specialise. Hire for today's problem, not Series B's org chart.",
    },
  },
  "concepts-founder-pb5/chapter-04-founder-ai-org-design.ts": {
    "4.2": {
      id: "founder-org-design-stages",
      type: "flow",
      title: "AI Org Design by Stage",
      caption:
        "Seed generalist → Series A application stack → Series B platform team → scale governance. Org design follows product maturity.",
    },
  },
  // ── Founder PB6 ──
  "concepts-founder-pb6/chapter-01-founder-build-buy-partner-framework.ts": {
    "1.3": {
      id: "founder-build-buy-partner",
      type: "tree",
      title: "Build vs Buy vs Partner Decision Tree",
      caption:
        "Proprietary data advantage and task shape determine whether you build, buy APIs, or partner — not engineering preference.",
    },
  },
  "concepts-founder-pb6/chapter-04-founder-finetuning-rag-prompting.ts": {
    "4.1": {
      id: "prompting-vs-finetuning-ladder",
      type: "flow",
      title: "Prompt Before Fine-Tune Ladder",
      caption:
        "Climb the ladder only when eval proves the rung beneath has hit its ceiling — better prompts and RAG before expensive fine-tunes.",
    },
    "4.3": {
      id: "pb4-rag-pipeline",
      type: "flow",
      title: "The RAG Pipeline",
      caption:
        "Ingest → chunk → embed → index → retrieve → generate. RAG is the default architecture for knowledge-grounded AI products.",
    },
  },
  // ── Founder PB7 ──
  "concepts-founder-pb7/chapter-01-founder-ai-risk-landscape.ts": {
    "1.4": {
      id: "founder-risk-governance",
      type: "flow",
      title: "AI Risk Governance Flow",
      caption:
        "Map use cases → classify risk tier → implement controls → monitor → report. Governance is a fundraising and enterprise sales requirement.",
    },
  },
  "concepts-founder-pb7/chapter-05-founder-ai-governance-framework.ts": {
    "5.2": {
      id: "bl-governance-mvg",
      type: "nested",
      title: "Minimum Viable AI Governance",
      caption:
        "Inventory → risk tier → minimum controls. Start here before building a 200-page policy nobody reads.",
    },
  },
  // ── Founder PB8 ──
  "concepts-founder-pb8/chapter-01-founder-infrastructure-cost-curves.ts": {
    "1.3": {
      id: "founder-scaling-inflection",
      type: "flow",
      title: "Infrastructure Cost Inflection Points",
      caption:
        "API defaults work at 1K users; routing and caching become mandatory at 100K. Model your cost curve at each order of magnitude.",
    },
    "1.5": {
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "Cost-Latency-Quality Trade-offs at Scale",
      caption:
        "Different request types belong at different points on the frontier. Routing is a margin strategy, not just an engineering optimisation.",
    },
  },
};

// BL PB1 mirrors founder PB1 fundamentals
const blPb1Diagrams = {
  "concepts-bl-pb1/chapter-01-ai-vs-ml-vs-dl-business-lens.ts": {
    "1.3": {
      id: "ch1-dl-flow",
      type: "flow",
      title: "Feature Extraction in Deep Learning",
      caption:
        "Deep learning builds complex concepts from simple layers — the capability behind generative AI and the cost class behind GPU budgets.",
    },
    "1.4": {
      id: "ch1-ai-hierarchy",
      type: "nested",
      title: "The AI, ML, and DL Hierarchy",
      caption:
        "Every deep learning system is ML; every ML system is AI. Precision here is a budget and risk conversation, not pedantry.",
    },
    "1.5": {
      id: "ch1-paradigm-shift",
      type: "comparison",
      title: "Rules vs Learned Systems",
      caption:
        "Rules scale with headcount; learned systems scale with data. Vendor diligence starts with which paradigm you are actually buying.",
    },
  },
  "concepts-bl-pb1/chapter-02-how-models-learn-for-function.ts": {
    "2.3": {
      id: "ch2-training-loop",
      type: "flow",
      title: "The Training Loop",
      caption:
        "Forward pass → loss → backpropagation → weight update. Understanding this loop explains why training is CapEx, not a feature toggle.",
    },
    "2.5": {
      id: "ch2-fitting-comparison",
      type: "comparison",
      title: "The Fitting Spectrum",
      caption:
        "Underfitting, optimal fit, and overfitting — why pilot accuracy does not guarantee production performance.",
    },
  },
  "concepts-bl-pb1/chapter-03-training-vs-inference-cost.ts": {
    "3.1": {
      id: "founder-training-inference-split",
      type: "comparison",
      title: "Training CapEx vs Inference OpEx",
      caption:
        "Most organisations should rent pre-trained models. Inference is the variable COGS line that scales with every API call.",
    },
    "3.3": {
      id: "founder-unit-economics-trap",
      type: "flow",
      title: "The Unit Economics Trap",
      caption:
        "Pilot budgets routinely underestimate inference at production volume. Model 10× usage before signing usage-based contracts.",
    },
  },
  "concepts-bl-pb1/chapter-04-data-as-business-asset.ts": {
    "4.2": {
      id: "ch2-data-flywheel",
      type: "flow",
      title: "The Data Flywheel",
      caption:
        "Usage generates data; data improves models; better models drive adoption. Leaders who own data strategy own AI differentiation.",
    },
    "4.4": {
      id: "founder-data-moat-layers",
      type: "nested",
      title: "Data as Strategic Asset",
      caption:
        "Proprietary, labelled, current, domain-specific data is the durable moat when algorithms commoditize.",
    },
  },
  "concepts-bl-pb1/chapter-06-model-evaluation-leaders.ts": {
    "6.2": {
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Before Launch",
      caption:
        "Golden sets, ship gates, and drift monitoring — the minimum evaluation discipline business leaders should require from vendors.",
    },
  },
  "concepts-bl-pb1/chapter-08-ai-landscape-vendor-structure.ts": {
    "8.2": {
      id: "ch8-cost-latency-frontier",
      type: "comparison",
      title: "Model Tier Trade-offs",
      caption:
        "Frontier, mid-tier, and small models sit on a cost-latency-quality curve. Procurement should match tier to use case, not default to largest.",
    },
  },
};

Object.assign(MANIFEST, blPb1Diagrams);

// BL PB2–PB8 common patterns — apply to key chapters per playbook
const blPlaybookDefaults = [
  {
    match: /chapter-01/,
    sections: {
      "1.2": {
        id: "bl-ai-transformation",
        type: "flow",
        title: "AI Initiative Execution Path",
        caption:
          "Assess → prioritise → pilot → scale → embed. The sequence that separates successful transformations from expensive experiments.",
      },
    },
  },
  {
    match: /vendor|procurement|rfp/i,
    sections: {
      "2.1": {
        id: "bl-vendor-evaluation",
        type: "flow",
        title: "Vendor Evaluation Process",
        caption:
          "Requirements → shortlist → golden-set eval → TCO model → contract. Same process for every AI vendor pitch.",
      },
      "1.3": {
        id: "bl-procurement-rfp",
        type: "flow",
        title: "AI Procurement RFP Flow",
        caption:
          "Scope → RFP → demos on same golden set → reference calls → negotiate data rights and exit clauses.",
      },
    },
  },
  {
    match: /roi|business-case/i,
    sections: {
      "3.1": {
        id: "bl-roi-business-case",
        type: "flow",
        title: "AI Business Case Flow",
        caption:
          "Baseline → hypothesis → pilot → scale → track. ROI without baseline measurement is fiction.",
      },
      "5.1": {
        id: "bl-roi-business-case",
        type: "flow",
        title: "Building the AI Business Case",
        caption:
          "Measure before, pilot with gates, attribute after — the CFO's required sequence for AI investment approval.",
      },
    },
  },
  {
    match: /change|transformation|adoption|resistance/i,
    sections: {
      "2.1": {
        id: "bl-change-management",
        type: "flow",
        title: "AI Change Management",
        caption:
          "Executive sponsor → honest communication → training → champions → adoption metrics.",
      },
      "1.2": {
        id: "bl-change-management",
        type: "flow",
        title: "Leading Through AI Change",
        caption:
          "Sponsor, communicate, train, champion, measure — the adoption sequence that prevents transformation failure.",
      },
    },
  },
  {
    match: /governance|risk|compliance/i,
    sections: {
      "1.3": {
        id: "bl-governance-mvg",
        type: "nested",
        title: "Minimum Viable AI Governance",
        caption:
          "Inventory AI in use → classify risk tier → implement minimum controls. Start here before enterprise policy theatre.",
      },
      "5.1": {
        id: "founder-risk-governance",
        type: "flow",
        title: "AI Risk Management Flow",
        caption:
          "Inventory → classify → control → monitor → report. The governance sequence regulators and boards expect.",
      },
    },
  },
  {
    match: /talent|team|skills|roles/i,
    sections: {
      "1.2": {
        id: "founder-ai-roles-map",
        type: "comparison",
        title: "AI Roles for Function Leaders",
        caption:
          "ML Engineer, AI Engineer, Data Scientist — three roles business leaders must distinguish before approving headcount.",
      },
      "3.1": {
        id: "founder-hiring-sequence",
        type: "flow",
        title: "AI Talent Strategy Sequence",
        caption:
          "Assess skills gap → upskill vs hire → prove pilot → scale team. Talent strategy follows use-case maturity.",
      },
    },
  },
  {
    match: /function|finance|marketing|sales|hr|operations|legal/i,
    sections: {
      "1.2": {
        id: "bl-function-ai-map",
        type: "comparison",
        title: "AI by Business Function",
        caption:
          "Each function has different ROI profiles, risk surfaces, and adoption patterns. One-size-fits-all AI strategy fails.",
      },
    },
  },
];

function collectBlFiles() {
  const dirs = fs
    .readdirSync(libDir)
    .filter((d) => d.startsWith("concepts-bl-pb"))
    .sort();
  const files = [];
  for (const dir of dirs) {
    const chapterDir = path.join(libDir, dir);
    for (const f of fs.readdirSync(chapterDir)) {
      if (f.startsWith("chapter-") && f.endsWith(".ts")) {
        files.push(`${dir}/${f}`);
      }
    }
  }
  return files;
}

function getBlManifestEntry(relPath) {
  if (MANIFEST[relPath]) return MANIFEST[relPath];
  const basename = path.basename(relPath);
  for (const rule of blPlaybookDefaults) {
    if (rule.match.test(relPath) || rule.match.test(basename)) {
      return rule.sections;
    }
  }
  return null;
}

function ensureImports(content, isBl) {
  let updated = content;
  const helper = isBl ? "../concepts-bl-helpers" : "../concepts-pb4-helpers";

  const addToImport = (helperPath) => {
    const re = new RegExp(`import \\{([^}]+)\\} from "${helperPath.replace(/\//g, "\\/")}";`);
    if (re.test(updated)) {
      updated = updated.replace(re, (m, imports) => {
        const parts = imports.split(",").map((s) => s.trim());
        if (!parts.includes("sectionWithDiagram")) parts.push("sectionWithDiagram");
        return `import { ${parts.join(", ")} } from "${helperPath}";`;
      });
    }
  };

  if (updated.includes("sectionWithDiagram(") && !updated.match(/import[^;]*sectionWithDiagram/)) {
    addToImport("../concepts-bl-helpers");
    addToImport("../concepts-pb4-helpers");
    if (!updated.includes("sectionWithDiagram")) {
      updated = updated.replace(
        /^import /m,
        `import { buildChapter, buildSection, sectionWithDiagram, s, x } from "${helper}";\nimport `,
      );
    }
  }

  // Remove local insertDiagram helper blocks
  updated = updated.replace(
    /import type \{ ConceptBodyBlock \} from "\.\.\/concepts";\n\nfunction insertDiagram\([\s\S]*?\n\}\n\n/,
    "",
  );

  return updated;
}

function applyDiagrams(content, sectionMap) {
  let updated = content;
  let changes = 0;

  for (const [sectionNum, diagram] of Object.entries(sectionMap)) {
    // Skip if this section already has a diagram nearby
    const sectionWithDiagramRegex = new RegExp(
      `number: "${sectionNum.replace(".", "\\.")}"[\\s\\S]{0,8000}?kind: "diagram"`,
    );
    if (sectionWithDiagramRegex.test(updated)) continue;

    const sectionStartRegex = new RegExp(
      `buildSection\\(\\{\\s*number: "${sectionNum.replace(".", "\\.")}",`,
    );
    const swdStartRegex = new RegExp(
      `sectionWithDiagram\\(\\{\\s*number: "${sectionNum.replace(".", "\\.")}",`,
    );
    if (!sectionStartRegex.test(updated) && !swdStartRegex.test(updated)) continue;

    updated = updated.replace(
      new RegExp(`buildSection\\(\\{\\s*number: "${sectionNum.replace(".", "\\.")}",`),
      `sectionWithDiagram({\n      number: "${sectionNum}",`,
    );

    const startMarker = `number: "${sectionNum}",`;
    const startIdx = updated.indexOf(startMarker);
    if (startIdx === -1) continue;

    const closePattern = /      \],\r?\n    \}\),/;
    const slice = updated.slice(startIdx);
    const closeMatch = slice.match(closePattern);
    if (!closeMatch || closeMatch.index === undefined) continue;

    const closeIdx = startIdx + closeMatch.index + closeMatch[0].length - 4; // position before `}),`

    const diagramObj = `    }, {\n      kind: "diagram",\n      id: "${diagram.id}",\n      type: "${diagram.type}",\n      title: "${diagram.title.replace(/"/g, '\\"')}",\n      caption:\n        "${diagram.caption.replace(/"/g, '\\"')}",\n    })`;

    updated = updated.slice(0, closeIdx) + diagramObj + updated.slice(closeIdx + 3); // replace `}),`
    changes++;
  }

  return { updated, changes };
}

function processFile(relPath, sectionMap, isBl) {
  const fullPath = path.join(libDir, relPath);
  if (!fs.existsSync(fullPath)) return 0;
  let content = fs.readFileSync(fullPath, "utf8");
  if (content.includes('kind: "diagram"') && !sectionMap) return 0;

  const map = sectionMap || {};
  if (Object.keys(map).length === 0) return 0;

  content = ensureImports(content, isBl);
  const { updated, changes } = applyDiagrams(content, map);
  if (changes > 0) {
    fs.writeFileSync(fullPath, updated);
    console.log(`  ✓ ${relPath} (+${changes} diagrams)`);
  }
  return changes;
}

// Process explicit manifest
let total = 0;
console.log("Adding diagrams from manifest...");
for (const [relPath, sections] of Object.entries(MANIFEST)) {
  total += processFile(relPath, sections, relPath.includes("concepts-bl"));
}

// Process BL files with rule-based defaults
console.log("\nAdding diagrams to remaining BL chapters...");
for (const relPath of collectBlFiles()) {
  if (MANIFEST[relPath]) continue;
  const sections = getBlManifestEntry(relPath);
  if (sections) {
    // Only add if file has no diagrams yet
    const fullPath = path.join(libDir, relPath);
    const content = fs.readFileSync(fullPath, "utf8");
    if (!content.includes('kind: "diagram"')) {
      total += processFile(relPath, sections, true);
    }
  }
}

/** Infer diagrams from filename keywords when no explicit manifest exists. */
const KEYWORD_RULES = [
  { re: /vendor|procurement|contract|sla|lock-in|due-diligence|rfp|red-flag/i, diagram: { id: "bl-vendor-evaluation", type: "flow", title: "Vendor Evaluation Process", caption: "Requirements → shortlist → golden-set eval → TCO → contract. Run this process on every AI vendor pitch." } },
  { re: /roi|business-case|attribution|baseline|tco|cost-model/i, diagram: { id: "bl-roi-business-case", type: "flow", title: "AI ROI Framework", caption: "Baseline → hypothesis → pilot → scale → track. ROI without baseline measurement is fiction." } },
  { re: /change|transformation|adoption|resistance|fear|communicat|champion|momentum|workforce/i, diagram: { id: "bl-change-management", type: "flow", title: "AI Change Management", caption: "Sponsor → communicate → train → champions → measure adoption." } },
  { re: /governance|risk|compliance|gdpr|eu-ai|audit|incident|ethical|board-report/i, diagram: { id: "bl-governance-mvg", type: "nested", title: "AI Governance Framework", caption: "Inventory → risk tier → minimum controls. The governance path regulators and boards expect." } },
  { re: /talent|team|hiring|roles|skills|upskill|coe|centre-of-excellence|literacy/i, diagram: { id: "founder-hiring-sequence", type: "flow", title: "AI Talent Strategy", caption: "Assess gap → upskill or hire → prove pilot → scale team." } },
  { re: /org-design|retaining|first-hire/i, diagram: { id: "founder-org-design-stages", type: "flow", title: "AI Org by Stage", caption: "Generalist → application stack → platform → governance as the company scales." } },
  { re: /build-buy|api-dependency|finetun|rag|prompt/i, diagram: { id: "founder-build-buy-partner", type: "tree", title: "Build vs Buy Decision", caption: "Data advantage and task shape determine build, buy, or partner — not engineering preference." } },
  { re: /funding|valuation|vc|investor|due-diligence|metrics-investor|story/i, diagram: { id: "founder-vc-diligence-stack", type: "flow", title: "Investor Diligence Stack", caption: "Team → data moat → unit economics → timing → risk. The five lenses on every AI term sheet." } },
  { re: /strategy|wedge|moat|market-structure|stress-test|competitive/i, diagram: { id: "founder-data-moat-layers", type: "nested", title: "Strategic Moat Layers", caption: "Distribution → proprietary data → model advantage. Strategy lives in the data loop." } },
  { re: /infrastructure|scaling|performance|cost-curve|unit-economics|data-quality/i, diagram: { id: "founder-scaling-inflection", type: "flow", title: "Scaling Inflection Points", caption: "Cost and architecture choices compound at each order-of-magnitude in usage." } },
  { re: /feedback|flywheel|data-arch|ai-native|culture/i, diagram: { id: "ch2-data-flywheel", type: "flow", title: "The Data Flywheel", caption: "Usage → signal → better model → better product → more usage." } },
  { re: /finance|cfo|marketing|sales|hr|operations|legal|customer-service|product-engineering|supply-chain/i, diagram: { id: "bl-function-ai-map", type: "comparison", title: "AI by Function", caption: "Each function has distinct ROI, risk, and adoption patterns." } },
  { re: /pilot|scale|enterprise/i, diagram: { id: "bl-ai-transformation", type: "flow", title: "Pilot to Scale Path", caption: "Assess → prioritise → pilot → scale → embed." } },
];

const FALLBACK_DIAGRAM = {
  id: "bl-ai-transformation",
  type: "flow",
  title: "AI Initiative Execution Path",
  caption:
    "Assess → prioritise → pilot → scale → embed. The sequence that turns AI ambition into measurable outcomes.",
};

function getSectionNumbers(content) {
  const matches = [...content.matchAll(/number: "(\d+\.\d+)"/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

function sectionHasDiagram(content, sectionNum) {
  return new RegExp(
    `number: "${sectionNum.replace(".", "\\.")}"[\\s\\S]{0,8000}?kind: "diagram"`,
  ).test(content);
}

function inferDiagramsForFile(relPath, content) {
  const sections = getSectionNumbers(content);
  if (sections.length === 0) return {};

  const basename = path.basename(relPath);
  let diagram = { ...FALLBACK_DIAGRAM };
  for (const rule of KEYWORD_RULES) {
    if (rule.re.test(relPath) || rule.re.test(basename)) {
      diagram = { ...rule.diagram };
      break;
    }
  }

  const existing = (content.match(/kind: "diagram"/g) || []).length;
  const targetCount = existing >= 2 ? 0 : existing === 1 ? 1 : 2;
  if (targetCount === 0) return {};

  const available = sections.filter((s) => !sectionHasDiagram(content, s));
  const pickSections = [];
  const preferred = ["1.2", "1.3", "2.1", "3.1", "4.1", "5.1", "6.1", "7.1", "8.1"];
  for (const p of preferred) {
    if (available.includes(p) && !pickSections.includes(p)) pickSections.push(p);
    if (pickSections.length >= targetCount) break;
  }
  for (const s of available) {
    if (pickSections.length >= targetCount) break;
    if (!pickSections.includes(s)) pickSections.push(s);
  }

  const result = {};
  const altDiagrams = [
    diagram,
    { id: "founder-eval-framework", type: "flow", title: "Evaluation Framework", caption: "Define task → golden set → ship gate → monitor drift." },
    { id: "ch8-cost-latency-frontier", type: "comparison", title: "Cost-Quality Trade-off", caption: "Match model tier to use case — not every query needs the frontier." },
  ];

  pickSections.forEach((sec, i) => {
    result[sec] = altDiagrams[i] || diagram;
  });
  return result;
}

function collectFounderFiles() {
  const dirs = fs
    .readdirSync(libDir)
    .filter((d) => d.startsWith("concepts-founder"))
    .sort();
  const files = [];
  for (const dir of dirs) {
    for (const f of fs.readdirSync(path.join(libDir, dir))) {
      if (f.startsWith("chapter-") && f.endsWith(".ts")) files.push(`${dir}/${f}`);
    }
  }
  return files;
}

// Fill remaining founder + BL chapters to at least 2 diagrams where possible
console.log("\nFilling remaining founder and BL chapters...");
for (const relPath of [...collectFounderFiles(), ...collectBlFiles()]) {
  const fullPath = path.join(libDir, relPath);
  const content = fs.readFileSync(fullPath, "utf8");
  const diagramCount = (content.match(/kind: "diagram"/g) || []).length;
  if (diagramCount >= 2) continue;

  const inferred = inferDiagramsForFile(relPath, content);
  if (Object.keys(inferred).length === 0) continue;
  total += processFile(relPath, inferred, relPath.includes("concepts-bl"));
}

console.log(`\nDone. ${total} diagram insertions.`);
