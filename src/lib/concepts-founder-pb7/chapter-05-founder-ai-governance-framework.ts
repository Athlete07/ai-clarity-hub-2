import { buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-pb4-helpers";

export const chapter05FounderAiGovernanceFramework = buildChapter({
  slug: "founder-ai-governance-framework",
  number: 5,
  shortTitle: "AI Governance Framework",
  title: "Building Your AI Governance Framework — Not a Compliance Exercise, a Competitive Advantage",
  readingMinutes: 32,
  summary:
    "What AI governance actually is, the minimum viable governance stack for startups, red-teaming, human oversight design, audit trails, incident response, responsible AI as a sales asset, and the quarterly board governance report.",
  keyTakeaway:
    "AI governance is not a policy PDF nobody reads — it is the operational system that lets you ship AI safely, close enterprise deals, survive diligence, and recover from incidents. Founders who build governance before scale move faster at scale; founders who defer it move fast once and then stop.",
  pmCallout:
    "As a founder: your governance framework is the document enterprise buyers, investors, and your board all ask for — and your competitors probably do not have. Build it before your first enterprise deal, not after your first incident.",
  sections: [
    buildSection({
      number: "5.1",
      title: "What AI governance is — and is not",
      subtitle: "A governance framework is not a policy document nobody reads. Here is what it actually is.",
      take: "AI governance is the operational system for managing AI risk: policies with enforcement, roles with accountability, processes with cadence, and artifacts with evidence. It is not an ethics statement, not a values poster, and not a legal memo filed and forgotten.",
      why: "Founders who confuse governance with documentation produce PDFs that do not prevent incidents. Founders who build operational governance produce systems that enable faster, safer shipping — and win enterprise deals.",
      paragraphs: [
        [
          s("Governance is enforced process, not aspirational principles. "),
          x(
            "A launch checklist that blocks ship without sign-off. A risk register updated every sprint. A red-team gate before GA. An incident runbook with named owners.",
            "Principles without gates are performative. Gates without principles are bureaucratic. You need both.",
          ),
          s(" If your governance framework has no enforcement mechanism, it is marketing."),
        ],
        [
          s("Governance scales with company stage — but starts at seed. "),
          x(
            "Seed: founder-owned risk register, basic evals, counsel on retainer. Series A: dedicated safety owner, red-team program, insurance. Series B: compliance team, board reporting, external audits.",
            "Minimum viable governance at seed prevents maximum viable damage at scale.",
          ),
          s(" Start with four components — expand as revenue and risk grow."),
        ],
        [
          s("Governance is a speed enabler, not a speed blocker — when designed right. "),
          x(
            "Teams without governance ship fast once, then spend months in incident recovery. Teams with governance front-load safety in discovery and ship cleaner.",
            "Governance reduces rework, security review cycles, and incident firefighting.",
          ),
          s(" Measure governance ROI in deals closed and incidents avoided, not documents produced."),
        ],
      ],
      examples: [
        {
          title: "Ethics principles PDF vs operational governance",
          body: "Two competing AI startups pitched the same enterprise prospect. Company A had a beautiful responsible AI principles document. Company B had a risk register, red-team results, oversight UI demo, and incident runbook. Company B closed. The prospect's CISO said: 'Principles are aspirational. Artifacts are operational.'",
        },
        {
          title: "Seed-stage governance — four components",
          body: "A seed founder implemented minimum viable governance in two weeks: risk register (10 features), launch checklist (7 items), logging architecture, and quarterly counsel review. No dedicated hire. Enterprise pilot approved in security review. Total cost: 40 founder hours and $8K legal.",
        },
        {
          title: "Governance-enabled velocity",
          body: "A Series A AI company institutionalised a pre-launch safety checklist. First quarter: releases slowed 15%. Second quarter: teams front-loaded safety in discovery. Third quarter: release velocity exceeded pre-checklist baseline with zero incidents. Governance became acceleration, not friction.",
        },
      ],
    }),
    sectionWithDiagram({
      number: "5.2",
      title: "The minimum viable governance stack for a startup",
      subtitle: "The four components you need before you have a dedicated legal and compliance team",
      take: "Minimum viable AI governance has four components: (1) risk register with scored residual risk, (2) pre-launch safety checklist with enforcement, (3) logging and audit trail architecture, (4) incident response runbook with kill switch authority. Add counsel review and insurance as soon as budget allows.",
      why: "These four components answer 80% of enterprise security review questions and 80% of board concerns. They cost founder time and basic engineering — not a compliance team.",
      paragraphs: [
        [
          s("Component 1: Risk register — living document, founder-owned. "),
          x(
            "Every AI feature, harm surface, applicable regulation, mitigations, residual risk score, and owner. Updated every sprint. Reviewed monthly.",
            "The risk register is the spine of your governance framework — everything else connects to it.",
          ),
          s(" If you build nothing else, build the risk register."),
        ],
        [
          s("Component 2: Pre-launch safety checklist — enforced gate. "),
          x(
            "Before any AI feature ships: risk tier classified, failure modes documented, eval thresholds met, red-team complete for high-risk, human fallback defined, disclosure UX shipped, logging verified.",
            "No checklist exception without written founder risk acceptance.",
          ),
          s(" The checklist is your quality gate — treat violations like broken CI."),
        ],
        [
          s("Components 3 and 4: Logging architecture and incident runbook. "),
          x(
            "Log every AI decision: input, model version, output, confidence, override flag, timestamp. Incident runbook: severity ladder, kill switch authority, comms templates, counsel notification, regulatory reporting triggers.",
            "Logging is your evidence. The runbook is your reflexes. Both must exist before launch.",
          ),
          s(" The founder must have kill switch authority — no approval chain for Sev-1 harm."),
        ],
      ],
      examples: [
        {
          title: "Four-component stack — enterprise deal closed",
          body: "A seed-stage health AI startup implemented all four components in three weeks. Enterprise hospital prospect's 150-question security review mapped directly to the four components. Deal closed in five weeks. CISO cited 'operational maturity unusual for stage' as deciding factor.",
        },
        {
          title: "Checklist enforcement — prevented bad launch",
          body: "A pre-launch checklist blocked an AI email feature from shipping because red-team found prompt injection allowing exfiltration of other users' data. Feature shipped two weeks later with input sanitisation. Checklist caught a Sev-1 vulnerability that manual QA missed.",
        },
        {
          title: "Kill switch drill — 4-minute response",
          body: "A founder ran a tabletop exercise: AI feature produces harmful output at scale. Team practised kill switch activation, user notification, and counsel call. Real incident two months later: kill switch activated in 4 minutes, users notified in 30 minutes. Drill made response reflexive.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-governance-mvg",
      type: "nested",
      title: "Minimum Viable AI Governance",
      caption:
        "Inventory → risk tier → minimum controls. Start here before building a 200-page policy nobody reads.",
    }),
    sectionWithDiagram({
      number: "5.3",
      title: "Red-teaming your own AI product",
      subtitle: "How to find failure modes before your users, the press, or regulators find them",
      take: "Red-teaming is adversarial testing: deliberately probing your AI for harm, jailbreaks, bias, hallucination, and policy violations. It is not standard QA — it assumes malicious and edge-case inputs. Founders should red-team before every major launch and after every model update.",
      why: "Users, journalists, and attackers red-team your product for free after launch — and publish the results. Internal red-teaming is cheaper than external discovery by orders of magnitude.",
      paragraphs: [
        [
          s("Red-team scope: jailbreaks, harmful outputs, bias probes, hallucination traps, and data exfiltration. "),
          x(
            "Jailbreak: 'ignore previous instructions and...' Bias: identical resumes with demographic variations. Hallucination: ask for citations on obscure topics. Exfiltration: attempt to extract other users' data through prompt injection.",
            "Standard QA tests expected inputs. Red-team tests adversarial inputs.",
          ),
          s(" If your red-team finds nothing, your red-team is not trying hard enough."),
        ],
        [
          s("Who red-teams: internal team, external firm, or bug bounty — depending on stage. "),
          x(
            "Seed: founder + one engineer spend a day adversarially probing. Series A: dedicated red-team sprint before major launches. Series B: external red-team firm annually.",
            "Rotate red-teamers — the person who built the feature has blind spots.",
          ),
          s(" Document findings with severity ratings. Block launch on Sev-1 and Sev-2 findings."),
        ],
        [
          s("Red-team findings feed back into the risk register and checklist. "),
          x(
            "Every finding becomes a risk register entry with mitigation and retest. Closed findings become regression tests run before every deploy.",
            "Red-team is not a one-time event — it is a continuous practice with each model update.",
          ),
          s(" Publish red-team summary (sanitised) in enterprise security packets — it builds trust."),
        ],
      ],
      examples: [
        {
          title: "Journalist red-team — internal would have caught it",
          body: "A mental health AI was jailbroken by a journalist into providing self-harm encouragement in 20 minutes. The company had no internal red-team practice. Emergency takedown, three-month rebuild, lost health network partnership. A one-day internal red-team sprint would have found the jailbreak for $0.",
        },
        {
          title: "Bias red-team — demographic resume testing",
          body: "A hiring AI startup red-teamed by submitting identical resumes with names suggesting different ethnicities. Found 15% selection rate disparity. Fixed before launch. Published methodology in enterprise security packet. Won three Fortune 500 accounts citing proactive bias testing.",
        },
        {
          title: "Red-team regression suite — continuous protection",
          body: "A fintech AI company converted red-team findings into 200 automated regression tests run before every deploy. Model update in month six reintroduced a jailbreak — regression suite caught it in CI. Continuous red-team-as-code prevented regression.",
        },
      ],
    }, {
      kind: "diagram",
      id: "bl-governance-mvg",
      type: "nested",
      title: "AI Governance Framework",
      caption:
        "Inventory → risk tier → minimum controls. The governance path regulators and boards expect.",
    }),
    buildSection({
      number: "5.4",
      title: "Human oversight design",
      subtitle: "Where to put humans in the loop — and how to make that a product feature not a liability admission",
      take: "Human oversight is a product design choice: where humans review, override, or approve AI outputs. Done well, it is a trust feature and compliance requirement. Done poorly, it is a rubber stamp that satisfies neither users nor regulators.",
      why: "EU AI Act high-risk systems require meaningful human oversight. US employment and lending law expects human review of adverse automated decisions. Oversight UX is a competitive differentiator in enterprise sales — not a weakness admission.",
      paragraphs: [
        [
          s("Oversight spectrum: suggest → confirm → review → approve → audit. "),
          x(
            "Suggest: AI drafts, human decides. Confirm: AI proposes, human clicks to execute. Review: AI acts, human reviews within SLA. Approve: AI queues, human must approve before effect. Audit: AI acts, human reviews retrospectively.",
            "Higher stakes require higher oversight levels. Match the spectrum point to your harm surface.",
          ),
          s(" Document the oversight level for each feature in your risk register."),
        ],
        [
          s("Meaningful oversight requires usable UX — not a buried admin panel. "),
          x(
            "Reviewer sees: AI output, confidence score, input context, override button, and escalation path. Review must be possible within the SLA you commit to.",
            "Rubber-stamp oversight — approve 500 items in a queue without context — fails regulatory scrutiny.",
          ),
          s(" Invest in oversight UX as a product feature. Enterprise buyers will demo it."),
        ],
        [
          s("Frame oversight as quality assurance, not AI weakness. "),
          x(
            "Enterprise messaging: 'AI-assisted with expert review' beats 'fully automated' in regulated verticals. Human oversight is a premium tier, not a beta limitation.",
            "Customers in legal, health, and finance expect human oversight — they do not trust fully autonomous AI.",
          ),
          s(" Oversight is a sales feature in regulated markets. Price it accordingly."),
        ],
      ],
      examples: [
        {
          title: "Edtech grading — oversight as product feature",
          body: "An edtech startup built teacher review screen showing AI score, rationale, confidence, and one-click override. Marketed as 'AI-assisted grading with educator control.' EU schools adopted because oversight satisfied high-risk requirements. Oversight was the product, not a workaround.",
        },
        {
          title: "Legal AI — human review premium tier",
          body: "A legal research AI offered two tiers: 'AI suggestions' (self-service) and 'attorney-reviewed' (premium, with human verification of citations). Premium tier was 3x price and 60% of revenue. Human oversight was the monetisation strategy, not a cost centre.",
        },
        {
          title: "Rubber-stamp oversight — regulatory failure",
          body: "A hiring AI company claimed 'human in the loop' but reviewers approved 200 AI recommendations per hour with no context displayed. EEOC investigation found oversight was theatrical. Company redesigned review UX: 20 items per hour with full context, override tracking, and reviewer training. Compliance required meaningful oversight, not checkbox oversight.",
        },
      ],
    }),
    buildSection({
      number: "5.5",
      title: "Audit trails for AI decisions",
      subtitle: "What to log, how long to keep it, and when it becomes evidence",
      take: "Audit trails log every AI decision: input, model version, output, confidence, human override, timestamp, and user context. Retention periods vary by regulation (EU AI Act requires automatic logging for high-risk systems). Audit trails are your litigation defence and your compliance evidence.",
      why: "Without audit trails, you cannot demonstrate reasonable care, investigate incidents, or satisfy enterprise security reviews. With them, you can reconstruct any decision, prove oversight was exercised, and respond to regulatory inquiries with evidence.",
      paragraphs: [
        [
          s("Minimum log fields for every AI decision. "),
          x(
            "Input (or hash for privacy), model/version identifier, output, confidence score, human override flag, reviewer identity, timestamp, session/request ID.",
            "High-risk systems: additional fields per EU AI Act — input data characteristics, decision rationale.",
          ),
          s(" Design logging at architecture time — retrofitting is 4x more expensive."),
        ],
        [
          s("Retention: match regulation, exceed for litigation preparedness. "),
          x(
            "EU AI Act high-risk: logs retained for system lifetime plus defined period. US employment: EEOC recommends 2 years for hiring records. Financial: 7 years for credit decisions.",
            "When in doubt, retain longer. Storage is cheap; missing evidence in litigation is expensive.",
          ),
          s(" Document retention policy in your governance framework and privacy policy."),
        ],
        [
          s("Audit trails become evidence in litigation and regulatory inquiry. "),
          x(
            "Demonstrating reasonable care: 'Here is every decision the AI made, every override, every model version.' Absence of logs implies absence of care.",
            "Structured, searchable audit trails reduce incident investigation from days to hours.",
          ),
          s(" Test your audit trail reconstruction quarterly — can you replay any decision from last month?"),
        ],
      ],
      examples: [
        {
          title: "Audit trail — litigation defence",
          body: "A hiring AI company faced discrimination complaint. Audit trail showed: model version, input features, output score, human reviewer override on 12% of cases, and disaggregated pass rates by demographic. Evidence demonstrated reasonable care. Case settled favourably. Without logs, defence would have been 'trust us, we tried.'",
        },
        {
          title: "Logging architecture — built day one",
          body: "A credit AI startup built decision logging from architecture phase: every scoring decision logged with full input/output/version. EU conformity assessment required exactly this logging. Building from day one cost $15K. Retrofitting would have cost $60K and required migration downtime.",
        },
        {
          title: "Audit trail reconstruction drill",
          body: "A founder ran quarterly drill: 'Reconstruct the AI decision for user X on date Y.' First drill took 3 days — logging was incomplete. Engineering fixed gaps. Third drill took 15 minutes. Regulatory inquiry six months later was answered in one day because reconstruction was practised.",
        },
      ],
    }),
    buildSection({
      number: "5.6",
      title: "AI incident response plan",
      subtitle: "What to do in the first 24 hours when your AI produces a harmful output at scale",
      take: "An AI incident response plan defines: severity levels, kill switch authority, notification chain (users, customers, counsel, regulators, board), comms templates, evidence preservation, and post-incident review. The first 24 hours determine whether an incident is contained or company-defining.",
      why: "Founders who improvise incident response make it worse — delayed kill switches, wrong comms, destroyed evidence, missed regulatory notification deadlines. A written plan turns panic into procedure.",
      paragraphs: [
        [
          s("Severity ladder: Sev-1 (active harm at scale), Sev-2 (potential harm, limited scope), Sev-3 (near-miss, no user impact). "),
          x(
            "Sev-1: kill switch immediately, notify users within 1 hour, counsel within 2 hours, board within 24 hours. Sev-2: disable feature, investigate within 4 hours. Sev-3: log, fix in next sprint.",
            "Each severity has predefined actions — no deliberation about whether to act.",
          ),
          s(" Founder has pre-authorised kill switch authority for Sev-1 — no approval chain."),
        ],
        [
          s("Comms templates pre-written for each severity. "),
          x(
            "User notification: what happened, what we did, what users should do. Customer notification for B2B. Press statement if public. Regulatory notification if required.",
            "Writing comms during an incident produces defensive, late, and legally risky messaging.",
          ),
          s(" Draft templates now. Customize during incident, do not write from scratch."),
        ],
        [
          s("Post-incident review feeds governance improvement. "),
          x(
            "Within 7 days: root cause analysis, mitigation implemented, risk register updated, red-team expanded, checklist updated. Within 30 days: board report.",
            "Incidents are expensive tuition. Post-incident review ensures you only pay once per failure mode.",
          ),
          s(" Run one tabletop incident exercise annually — AI-specific scenarios."),
        ],
      ],
      examples: [
        {
          title: "Sev-1 response — 4-minute kill switch",
          body: "AI feature produced harmful medical advice to 200 users. Founder activated kill switch in 4 minutes (practised in drill). Users notified in 25 minutes. Counsel called in 1 hour. Feature remained disabled for 3 weeks during root cause analysis. No regulatory action because response demonstrated reasonable care.",
        },
        {
          title: "Improvised response — made it worse",
          body: "A competitor's AI hallucinated in a legal filing context. No incident plan. Engineering debated for 6 hours whether to disable. Journalist published before company responded. Customer churn was 40% in one month. The 6-hour delay turned a containable incident into a company-defining crisis.",
        },
        {
          title: "Tabletop exercise — board confidence",
          body: "A founder ran annual AI incident tabletop with board observers. Scenario: biased hiring output discovered by customer. Team practised kill switch, customer notification, EEOC counsel call, and board briefing. Board approved increased governance budget based on demonstrated preparedness.",
        },
      ],
    }),
    buildSection({
      number: "5.7",
      title: "Responsible AI as a commercial differentiator",
      subtitle: "How to turn your governance framework into a sales asset — especially in enterprise and regulated markets",
      take: "In enterprise and regulated markets, governance artifacts are sales assets: risk register, red-team results, bias audit reports, oversight UI demos, incident runbooks, and insurance certificates. Buyers in healthcare, finance, legal, and government require them in procurement. Competitors without them lose on security review.",
      why: "Governance is not a cost centre — it is a revenue enabler in the segments with highest willingness to pay. Founders who package governance artifacts for sales close deals competitors cannot.",
      paragraphs: [
        [
          s("Enterprise procurement asks for governance artifacts — have them ready. "),
          x(
            "Security questionnaires ask: bias testing? Human oversight? Incident response? Data governance? Logging? Insurance?",
            "Every question maps to a governance component. Missing artifacts = missing revenue.",
          ),
          s(" Package a 'Trust Packet' for enterprise sales: governance artifacts in one shareable folder."),
        ],
        [
          s("Regulated verticals pay premium for governed AI. "),
          x(
            "Healthcare, finance, legal, and government buyers cannot adopt AI without governance evidence. They will pay 20-40% premium for a vendor who has it vs one who promises it.",
            "Governance is a moat in regulated markets — not because it is hard, but because competitors skip it.",
          ),
          s(" Price governance into your enterprise tier — it is worth more than features."),
        ],
        [
          s("Publish governance transparency to build market trust. "),
          x(
            "Public model cards, bias audit summaries, incident transparency reports, and responsible AI pages on your website.",
            "Transparency signals maturity. Secrecy signals risk. Enterprise buyers notice.",
          ),
          s(" Your responsible AI page is a sales page — write it for procurement officers."),
        ],
      ],
      examples: [
        {
          title: "Trust Packet — 5-week vs 6-month sales cycle",
          body: "A B2B AI startup packaged governance artifacts into a 'Trust Packet' shared at first enterprise meeting. Average security review cycle dropped from 6 months to 5 weeks. CISO feedback: 'You are the only vendor who had this ready at first call.' Governance shortened sales cycle by 80%.",
        },
        {
          title: "Bias audit as RFP differentiator",
          body: "An HR AI startup published annual bias audit results and methodology. Won a Fortune 100 RFP where the deciding factor was documented bias testing — competitor had 'we use GPT-4 with guardrails.' Audit cost $30K. Contract value: $2M ARR.",
        },
        {
          title: "Responsible AI page — inbound enterprise leads",
          body: "A health AI startup published a detailed responsible AI page: model card, clinical validation summary, oversight design, incident history (transparent), and insurance certificate. Enterprise inbound leads increased 3x. Procurement officers shared the page internally as vendor evaluation shortcut.",
        },
      ],
    }),
    buildSection({
      number: "5.8",
      title: "Founder decision lens: the board AI governance report",
      subtitle: "What to put in front of your board quarterly to demonstrate that you own this risk",
      take: "Quarterly board AI governance report: (1) risk register summary with top 5 residual risks, (2) incidents and near-misses since last report, (3) compliance status by jurisdiction, (4) red-team findings and mitigations, (5) governance investment and gaps, (6) insurance status. One page. Honest.",
      why: "Boards are increasingly liable for AI risk oversight. Founders who proactively report governance demonstrate control. Founders who hide risk discover it in board crises after incidents.",
      paragraphs: [
        [
          s("One page, six sections, quarterly cadence. "),
          x(
            "Risk register top 5. Incidents/near-misses. Compliance matrix (green/yellow/red by jurisdiction). Red-team status. Governance budget and open gaps. Insurance coverage.",
            "Attach detailed artifacts as appendix — the board sees the summary.",
          ),
          s(" Consistency matters more than length. Same format every quarter."),
        ],
        [
          s("Honest reporting builds board trust and unlocks budget. "),
          x(
            "Yellow and red items with mitigation plans and budget requests. Boards fund gaps they can see. They fire founders for surprises they could not see.",
            "An incident reported with response documentation is a governance success. An incident discovered by the board is a governance failure.",
          ),
          s(" Bring bad news early with a plan — not late with excuses."),
        ],
        [
          s("Board governance reporting is a discipline that compounds. "),
          x(
            "Quarter one: basic risk register. Quarter four: comprehensive governance with metrics. Year two: board can assess AI risk as confidently as financial risk.",
            "Investors in diligence ask for board governance reports. Having them accelerates close.",
          ),
          s(" Start the quarterly report at seed stage — even if the board is just you and your co-founder."),
        ],
      ],
      examples: [
        {
          title: "Quarterly report — board approved governance budget",
          body: "A Series A founder presented first quarterly AI governance report: 5 residual risks (2 yellow), zero incidents, EU compliance 60% complete, red-team findings (3 closed, 1 open), $80K governance budget request. Board approved budget and commended transparency. Governance became a board-level priority with funding.",
        },
        {
          title: "Incident in board report — trust maintained",
          body: "A minor hallucination incident occurred between board meetings. Founder reported in quarterly report: incident description, 4-minute kill switch response, user notification, root cause, and mitigation. Board praised response. Same incident hidden would have destroyed trust when discovered later.",
        },
        {
          title: "Governance report in Series B diligence",
          body: "Series B investors requested 4 quarters of board AI governance reports. Founder provided them. Lead investor said governance reporting was 'the clearest signal of operational maturity in diligence.' Term sheet at upper range. Reports that seemed like board overhead became a valuation driver.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "What is AI governance — operationally?",
      options: [
        "A responsible AI principles PDF posted on the website.",
        "Enforced processes: risk register, launch gates, logging, incident runbooks, and accountability.",
        "Hiring a chief ethics officer at seed stage.",
        "Avoiding all AI features until regulation is final.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Governance is operational systems with enforcement — not aspirational documents.",
      wrongFeedback:
        "Re-read section 5.1. Governance requires gates, roles, and evidence.",
    },
    {
      q: "Which four components make up minimum viable AI governance for startups?",
      options: [
        "Office, equity, branding, and fundraising.",
        "Risk register, pre-launch checklist, logging architecture, and incident runbook.",
        "Only terms of service and privacy policy.",
        "A dedicated 10-person compliance team.",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. Four components answer 80% of enterprise and board concerns at seed stage.",
      wrongFeedback:
        "Re-read section 5.2. Minimum viable governance is four operational components.",
    },
    {
      q: "What distinguishes red-teaming from standard QA?",
      options: [
        "Red-team only tests happy-path inputs.",
        "Red-team adversarially probes for harm, jailbreaks, bias, and policy violations.",
        "Red-team replaces the need for human oversight.",
        "Red-team is only required after a public incident.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Adversarial testing finds failure modes that expected-input QA misses.",
      wrongFeedback:
        "Re-read section 5.3. Red-team assumes malicious and edge-case inputs.",
    },
    {
      kind: "categorize",
      q: "Match each governance practice to its primary purpose.",
      categories: ["Prevention", "Detection", "Response", "Commercial"],
      items: [
        { text: "Pre-launch safety checklist with enforcement.", category: 0 },
        { text: "Decision audit trail with model version logging.", category: 1 },
        { text: "Sev-1 kill switch with pre-written comms templates.", category: 2 },
        { text: "Trust Packet for enterprise security review.", category: 3 },
        { text: "Adversarial red-team before major launch.", category: 0 },
        { text: "Quarterly board AI governance report.", category: 1 },
      ],
      correctFeedback:
        "Right. Governance spans prevention, detection, response, and commercial enablement.",
      wrongFeedback:
        "Re-read sections 5.2–5.8. Each practice serves a distinct governance function.",
    },
    {
      kind: "order",
      q: "Order the AI incident response actions for a Sev-1 event (first action top).",
      prompt: "Drag to arrange the recommended Sev-1 response sequence.",
      items: [
        "Activate kill switch to stop ongoing harm.",
        "Notify affected users and customers.",
        "Contact counsel and assess regulatory notification requirements.",
        "Conduct post-incident review and update governance artifacts.",
      ],
      correctFeedback:
        "Exactly. Stop harm, notify, get legal advice, then learn and improve.",
      wrongFeedback:
        "Re-read section 5.6. Kill switch first, then notification, then legal, then review.",
    },
    {
      q: "Why is human oversight a commercial differentiator in regulated markets?",
      options: [
        "Because regulators ban all AI without humans.",
        "Enterprise buyers in regulated verticals require and pay premium for governed AI with meaningful oversight.",
        "Because human oversight eliminates all AI errors.",
        "Only because it is required by terms of service templates.",
      ],
      correct: 1,
      correctFeedback:
        "Right. Oversight is a trust feature and compliance requirement that enterprise buyers value.",
      wrongFeedback:
        "Re-read section 5.7. Governance and oversight enable enterprise revenue in regulated markets.",
    },
  ],
});
