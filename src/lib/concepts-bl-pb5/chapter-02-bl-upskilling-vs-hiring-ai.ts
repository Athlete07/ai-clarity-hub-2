import { BL_CALLOUT, buildChapter, buildSection, s, x, sectionWithDiagram } from "../concepts-bl-helpers";

export const chapter02BlUpskillingVsHiringAi = buildChapter({
  slug: "bl-upskilling-vs-hiring-ai",
  number: 2,
  shortTitle: "Upskilling vs Hiring AI",
  title: "Upskilling vs Hiring for AI Capability",
  readingMinutes: 27,
  summary:
    "The most consequential talent decision a business leader makes during AI adoption is whether to build AI capability by upskilling existing employees or by bringing in new AI hires. The answer is not universal — it depends on the type of capability gap, the speed required, the cost of each path, and the cultural implications of each choice. Leaders who default to hiring without modelling the build option systematically overpay and underinvest in the organisation's long-term adaptive capacity.",
  keyTakeaway:
    "Upskilling existing employees is typically faster, cheaper, and more culturally sustainable for AI working knowledge and practitioner roles. External hiring is the right answer for net-new specialist skills that do not exist in the organisation and cannot be built within the deployment timeline. Most organisations need a deliberate mix of both — and the mix should be decided by the gap type, not by HR convention.",
  pmCallout: BL_CALLOUT,
  sections: [
    sectionWithDiagram({
      number: "2.1",
      title: "The upskill vs hire decision framework",
      subtitle: "A structured approach to the most consequential AI talent decision",
      take: "The upskill vs hire decision should be driven by four variables: the type of capability gap (new knowledge, new skill, or entirely new role), the time available before the gap becomes a deployment blocker, the total cost of each path including hidden costs, and the cultural message each choice sends to the existing workforce. Any decision made without analysing all four variables produces a suboptimal outcome.",
      why: "Business leaders who treat this as a simple cost comparison miss the cultural variable — which often determines whether an AI adoption programme succeeds or fails. A workforce that sees leadership default to external AI hiring rather than investing in internal capability development responds with lower engagement and higher resistance to AI tools.",
      paragraphs: [
        [
          s("The gap type is the first filter. "),
          x(
            "New knowledge gaps (understanding what AI can do, how to use specific tools) are almost always faster and cheaper to close through upskilling. New skill gaps (configuring AI tools, prompt engineering, output evaluation) can be closed through upskilling with the right programme design. Entirely new role gaps (ML engineers, AI architects, data scientists) require external hiring or long-lead development programmes.",
            "The mistake is classifying working knowledge gaps as entirely new role gaps because they feel unfamiliar — and then hiring when training would have been the right answer.",
          ),
          s(" Classify the gap before comparing costs. The gap type determines which paths are viable."),
        ],
        [
          s("Time urgency constrains the viable paths. "),
          x(
            "Upskilling takes time: a working knowledge programme runs 4–8 weeks; a practitioner development programme runs 3–6 months; a foundational data skills programme can take 12–18 months. If a critical AI deployment is happening in 8 weeks, upskilling is not viable for practitioner-level gaps. If the timeline is 12 months, upskilling is almost always the better choice for non-specialist roles.",
            "Many organisations hire AI talent under time pressure and then discover the deployment timeline shifted — leaving them with a hired specialist whose role no longer matches the revised plan.",
          ),
          s(" Before committing to hiring under time pressure, verify that the deployment timeline is firm. Hiring under a false urgency is an expensive mistake."),
        ],
        [
          s("Cultural signal is the variable most often ignored in upskill vs hire calculations. "),
          x(
            "When a business leader announces an AI talent hiring programme without a parallel upskilling commitment, the message received by the existing workforce is: 'we do not believe you can develop the skills needed for our AI future.' This message produces the highest resistance to AI adoption that any adoption programme will face.",
            "Existing employees are the people who know the organisation's context, processes, customers, and culture. AI specialists hired externally know AI but not the organisation. The combination of internal context and AI skill is more valuable than AI skill alone.",
          ),
          s(" Announce upskilling commitment before or alongside any AI hiring programme to prevent the cultural damage that hiring-first sends."),
        ],
      ],
      examples: [
        {
          title: "Financial services — gap type misclassification costs £2M",
          body: "A bank classified its AI skills gap as a specialist role gap and hired 18 AI specialists in 12 months at an average fully loaded cost of £140K per hire. Post-implementation review revealed that 14 of the 18 hires were filling roles that required working knowledge and practitioner skill in existing banking systems — skills that existing employees could have developed in 12 weeks at £8,000 per person. The misclassification cost approximately £1.9M in hiring costs that upskilling would have avoided.",
        },
        {
          title: "Retailer — time urgency validated before hiring",
          body: "A retailer faced a perceived urgent need for an AI data analyst for a Q4 demand forecasting deployment. Before posting the role, the deployment team validated the timeline. The Q4 deadline had shifted to Q1 due to a systems integration delay. With a 7-month runway, the retailer instead ran an intensive data skills programme for two existing business analysts. Both were production-ready in 14 weeks, at 22% of the hiring cost and with deep familiarity with the retailer's data structures.",
        },
        {
          title: "Professional services — upskilling commitment prevents attrition",
          body: "A consulting firm announced a plan to hire 40 AI specialists over 18 months. The announcement was followed by a spike in retention risk flags from senior consultants in a staff survey conducted one month later. The firm responded by launching a parallel AI practitioner programme for 200 existing consultants. Retention risk indicators returned to baseline within three months. The upskilling programme cost £480,000; analyst estimates of the talent attrition avoided — based on average replacement cost of £85,000 per consultant — exceeded £2.5M.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-hiring-sequence",
      type: "flow",
      title: "AI Talent Strategy",
      caption:
        "Assess gap → upskill or hire → prove pilot → scale team.",
    }),
    sectionWithDiagram({
      number: "2.2",
      title: "When upskilling is the right answer",
      subtitle: "The five conditions under which investing in existing employees beats external hiring",
      take: "Upskilling outperforms hiring when the gap is in working knowledge or practitioner skill (not specialist technical roles), when the deployment timeline allows 4–6 months for development, when the organisation has capable employees who lack only AI-specific knowledge, when the cultural cost of hiring-first is high, and when the organisation's AI tools are domain-specific and require deep contextual knowledge to use effectively.",
      why: "Business leaders who default to hiring for AI capability systematically underestimate how much domain knowledge matters in AI tool effectiveness. An experienced operations manager who learns to use AI forecasting tools effectively outperforms a new AI hire who is learning the domain at the same time they are deploying the tool.",
      paragraphs: [
        [
          s("Domain knowledge combined with AI skill is more productive than AI skill alone. "),
          x(
            "A supply chain manager with 10 years of logistics experience who completes a 6-week AI tools practitioner programme can typically extract more value from AI forecasting tools than an AI specialist hired without logistics domain knowledge. The AI specialist must learn the domain while deploying the tool; the upskilled manager already knows what good looks like.",
            "Studies of AI adoption in professional services consistently show that domain experts upskilled in AI outperform AI specialists hired into domain roles by 15–40% on business outcome metrics at the 12-month mark.",
          ),
          s(" When the AI use case is domain-intensive, upskilling domain experts is the higher-returning investment."),
        ],
        [
          s("Upskilled employees have higher retention rates in AI roles than externally hired AI specialists. "),
          x(
            "The AI talent market is the highest-turnover professional market in most industries. Average tenure for externally hired AI specialists in non-technology companies is 18–24 months. Employees who are upskilled into AI roles typically have organisational tenure of 4–7 years and show lower voluntary turnover than their externally hired counterparts.",
            "An upskilled employee who leaves takes institutional knowledge with them, not AI capability alone. An externally hired AI specialist who leaves takes AI capability that the organisation now must replace — often at a higher cost than the first hire because the market has tightened.",
          ),
          s(" Factor expected tenure into the cost comparison. An upskilled employee retained for 4 years delivers more value per £ of development cost than an external hire retained for 18 months."),
        ],
        [
          s("Organisation-specific AI customisation benefits accumulate in upskilled employees over time. "),
          x(
            "An upskilled employee who uses an AI tool in their specific workflow for 12 months develops a tacit understanding of the tool's strengths, failure modes, and optimal use cases that cannot be taught in a programme or transferred during onboarding. This tacit expertise compounds.",
            "Organisations that rotate external AI hires across roles before they develop tool-specific mastery forfeit the compounding returns of deep practitioner expertise. Retention of upskilled practitioners in stable roles for at least 12 months is a strategic choice, not just an HR preference.",
          ),
          s(" Build a retention plan for upskilled AI practitioners before the programme begins, not after they develop skills others want to hire."),
        ],
      ],
      examples: [
        {
          title: "Healthcare — clinician upskilling outperforms specialist hiring",
          body: "A hospital trust hired two AI clinical informatics specialists to lead an AI-assisted diagnostics deployment. After 6 months, adoption among clinicians was 18%. A parallel programme was launched to upskill 12 senior clinicians as AI champions. At 12 months, the champion-led wards had 61% adoption versus 22% in non-champion wards. Post-implementation analysis: clinician AI champions had credibility with peers that external specialists lacked — they could say 'I reviewed 300 cases with this tool and here is when to trust it.'",
        },
        {
          title: "Logistics — upskilling retention advantage",
          body: "A logistics company compared the 3-year total cost of upskilling 5 experienced operations managers in AI data analysis versus hiring 5 AI data analysts. Upskilling cost: £180,000 (programme costs plus 15% salary premium for new responsibilities). Hiring cost: £420,000 (recruitment, onboarding, market salaries). By year two, 3 of the 5 external hires had left; all 5 upskilled managers remained. The upskilling investment continued to deliver returns while the hiring investment required replacement spend.",
        },
        {
          title: "Professional services — domain-AI combination",
          body: "A law firm faced a choice: hire AI legal technologists to integrate AI into client work, or upskill senior associates. The firm piloted both approaches in parallel. After 12 months, associates upskilled in AI produced client deliverables rated 22% higher in quality by partners than deliverables produced with AI specialist support — because the associates understood the legal requirements and could evaluate AI outputs against professional standards. The AI specialists consistently produced technically accurate AI outputs that missed client context.",
        },
      ],
    }, {
      kind: "diagram",
      id: "founder-eval-framework",
      type: "flow",
      title: "Evaluation Framework",
      caption:
        "Define task → golden set → ship gate → monitor drift.",
    }),
    buildSection({
      number: "2.3",
      title: "When external hiring delivers faster ROI",
      subtitle: "The four gap types where hiring outperforms upskilling on time-to-value",
      take: "External hiring is the right answer when the gap is a net-new technical role that does not exist in the organisation (ML engineer, AI architect, data scientist), when the deployment timeline is shorter than any viable upskilling programme, when the organisation lacks the internal capability to design or deliver the upskilling required, or when the strategic value of specialised AI experience (from AI-native companies or competitor environments) outweighs the integration cost.",
      why: "Leaders who delay hiring for specialist AI roles in the name of cultural preference or internal development orthodoxy slow their AI deployment programmes by 6–18 months and absorb the cost of that delay. Hiring discipline is not a preference for external talent — it is a recognition that some capability gaps require it.",
      paragraphs: [
        [
          s("Net-new technical roles have no internal build path without a multi-year investment. "),
          x(
            "An ML engineer who designs model architectures, fine-tunes foundation models, and builds inference pipelines requires 3–5 years of specialist technical education to develop from scratch. An organisation that does not have this capability and needs it in the next 12 months has no viable upskilling path. Hiring is the only option.",
            "The boundary between practitioner (upskillable) and specialist (hire) is not always obvious. The test is: does this role require deep mathematical understanding of how models work, or does it require the ability to use, evaluate, and configure AI tools? The former is a specialist; the latter is a practitioner.",
          ),
          s(" Apply the practitioner vs specialist test to every AI role before classifying it as requiring external hiring."),
        ],
        [
          s("Hiring competitor AI experience compresses learning curves significantly. "),
          x(
            "An AI transformation lead hired from an organisation that has completed a successful AI deployment at scale brings a playbook: implementation patterns, failure modes, vendor assessment experience, and change management approaches that took 24 months to learn. Building that knowledge internally requires living through the learning curve — at the same cost in time and mistakes.",
            "AI transformation experience is not replicable through training — it is acquired through doing. Hiring someone who has already done it is a shortcut that is explicitly worth the premium.",
          ),
          s(" When hiring AI transformation leadership, prioritise candidates who have completed a deployment at scale over candidates with technical credentials alone."),
        ],
        [
          s("Seed hiring — hiring 2–3 specialists to build internal capability — is the highest-ROI hiring pattern. "),
          x(
            "Hiring one ML engineer does not build organisational AI capability. Hiring an ML engineer who will spend 40% of their time on knowledge transfer, mentoring, and documentation does. Seed hiring frames the external hire's role as capability multiplication, not just individual contribution.",
            "Seed hires who are not given a knowledge transfer mandate become individual contributors. Their departure removes the capability they brought with them, returning the organisation to the same gap.",
          ),
          s(" Specify knowledge transfer responsibilities in every AI specialist job description, not just technical delivery responsibilities."),
        ],
      ],
      examples: [
        {
          title: "Media company — no build path for ML engineering",
          body: "A media company's AI recommendation engine required a team of 3 ML engineers to build and maintain. The company had no ML engineering capability and a 9-month deployment deadline. An 18-month upskilling programme for software engineers was viable for the long term but could not close the immediate gap. The company hired 3 ML engineers with 40% knowledge transfer mandates, deployed the recommendation engine on time, and ran a parallel 18-month programme that produced 4 internal ML engineers who took over maintenance and iteration at month 24.",
        },
        {
          title: "Manufacturer — transformation experience hire",
          body: "A manufacturer hired an AI transformation director from a competitor who had completed a £30M AI deployment across 12 manufacturing sites. In 6 months, the director produced a deployment playbook, identified the two most common failure modes from their previous role, and established vendor relationships that reduced procurement time by 40%. The internal candidate for the role had strong technical credentials but no deployment-at-scale experience. The hiring decision saved an estimated 18 months on the learning curve.",
        },
        {
          title: "Financial services — seed hire model",
          body: "A wealth management firm hired a single AI architect with a 50% knowledge transfer mandate. Over 18 months, the architect developed 4 internal engineers to practitioner level, documented the firm's AI architecture standards, and ran 6 lunch-and-learn sessions for 120 technology staff. When the architect left at month 24 for a larger role, the firm had 4 internal practitioners who maintained and extended the AI infrastructure. The seed hire model produced a 4× return on capability investment compared to hiring 4 specialists who would not have had a knowledge transfer mandate.",
        },
      ],
    }),
    buildSection({
      number: "2.4",
      title: "Cost modelling upskill vs hire",
      subtitle: "The full cost comparison including hidden costs most organisations ignore",
      take: "Upskilling and hiring cost comparisons that exclude hidden costs consistently underestimate the hiring cost and overestimate the upskilling cost. A full cost model for hiring includes recruitment fees, onboarding, productivity ramp, retention risk premium, and replacement cost. A full cost model for upskilling includes training design, delivery, management time, temporary productivity dip, and opportunity cost. When all costs are included, upskilling is typically 30–60% cheaper than hiring for working knowledge and practitioner roles.",
      why: "Most organisations compare hiring cost (salary and recruitment fee) against upskilling cost (training programme) without including the hidden costs on both sides. This comparison systematically undervalues upskilling as a strategic choice.",
      paragraphs: [
        [
          s("The full cost of an AI external hire has seven components. "),
          x(
            "Recruitment fee (15–25% of first-year salary); time-to-hire cost (interviews, HR time, delayed deployment); relocation or remote premium; onboarding cost (buddy time, system access, documentation); productivity ramp (6–12 months to full productivity, typically costed at 50% of salary during ramp); salary premium over internal equivalent (AI talent typically commands 20–40% market premium); and replacement probability cost (18–24 month average tenure means 30–50% probability of replacing within 3 years).",
            "Including all seven components typically doubles or triples the first-year salary figure that most organisations use as the hiring cost.",
          ),
          s(" Build a 3-year total cost model for every AI hire before comparing to upskilling. Single-year salary comparisons are systematically misleading."),
        ],
        [
          s("The full cost of upskilling has five components. "),
          x(
            "Programme design and delivery cost (internal or vendor); manager time during the programme (typically 10% of manager's time for 12–16 weeks); temporary productivity dip during learning (typically 15–20% productivity reduction for 6–8 weeks); opportunity cost of the employee's training time; and retention incentive cost if skills development creates counter-offer risk from competitors.",
            "Most organisations include only programme delivery cost in their upskilling cost model — which represents 40–60% of the true cost. Including management time and productivity dip typically increases the upskilling cost estimate by 60–80% but still leaves it below the hiring equivalent for most practitioner roles.",
          ),
          s(" Include management time and productivity dip in every upskilling cost model to produce a credible comparison."),
        ],
        [
          s("Break-even analysis determines at what timeline upskilling and hiring have equivalent total cost. "),
          x(
            "A typical upskilling programme has a higher cost in months 1–6 (programme investment) and a lower cost in months 7–36 (no recruitment premium, no ramp cost, higher retention). A typical external hire has a lower cost in months 1–3 (no programme cost) and a higher cost in months 4–36 (ramp cost, salary premium, replacement probability). The break-even point — where cumulative upskilling cost equals cumulative hiring cost — is typically 8–14 months for practitioner roles.",
            "If you need the capability for longer than the break-even timeline, upskilling produces a better financial return. If you need it only for a short engagement (under 12 months), hiring or contracting may be more efficient.",
          ),
          s(" Calculate the break-even timeline for each gap before deciding. Short-term gaps favour contracting; medium- and long-term gaps favour upskilling."),
        ],
      ],
      examples: [
        {
          title: "Insurance — true hiring cost reveals upskilling advantage",
          body: "An insurer compared the cost of hiring an AI operations analyst (£72K base salary) versus upskilling an existing operations analyst. Initial comparison: hire £72K vs upskill £15K — hire loses. Full 3-year cost model: hire £285K (salary × 3 + recruitment fee £18K + onboarding £8K + ramp cost £36K + 40% replacement probability × £110K replacement cost). Full 3-year upskilling model: £42K (programme + manager time + productivity dip + 15% salary increase). The actual comparison was £285K versus £42K — a factor of 6.8× difference that changed the decision.",
        },
        {
          title: "Technology company — break-even analysis clarifies contracting decision",
          body: "A technology company needed AI prompt engineering expertise for a 6-month content migration project. Full cost model: upskilling existing content team (£28K programme, 8 weeks to productive) — total 3-month productive period before project ends. Contracting a specialist: £85K for 6 months, productive from week 2. Break-even analysis showed contracting was cheaper for a 6-month engagement with a 2-month ramp for upskilling. The company contracted, completed the migration, and then ran a smaller upskilling programme to retain the capability for future projects.",
        },
        {
          title: "Retailer — 3-year model presented to CFO",
          body: "A retailer's HR director presented a 3-year cost model comparing hiring 8 AI category managers versus upskilling 8 existing category managers. The model showed: hiring £1.76M over 3 years (salaries, recruitment, ramp, 50% replacement probability); upskilling £380,000 over 3 years (programme, management time, productivity dip, salary increases). The CFO, previously resistant to training investment, approved the upskilling programme immediately. The 3-year model was the difference between a rejected training request and an approved strategic investment.",
        },
      ],
    }),
    buildSection({
      number: "2.5",
      title: "Hybrid approaches: train insiders, hire specialists",
      subtitle: "Designing a talent strategy that combines internal development with targeted external expertise",
      take: "The most effective AI talent strategy for most organisations is not a choice between upskilling and hiring — it is a deliberate hybrid that upskills the majority of AI-relevant roles while hiring a small number of specialist anchors who set technical standards, transfer knowledge, and raise internal capability over time. The ratio is typically 80:20 — 80% of AI capability built internally, 20% sourced externally.",
      why: "Organisations that pursue pure upskilling lack the specialist expertise to design effective AI systems and set technical standards. Organisations that pursue pure hiring lack the cultural embeddedness and domain knowledge to apply AI effectively. The hybrid model combines the advantages of both while managing the costs and risks of each.",
      paragraphs: [
        [
          s("The hybrid model has three tiers of talent: anchor specialists, internal practitioners, and AI-aware generalists. "),
          x(
            "Anchor specialists (hired externally): ML engineers, AI architects, data scientists. Their role is to build systems, set standards, and transfer knowledge. 2–6 per function. Internal practitioners (developed from existing staff): power users, AI champions, team leads with AI configuration skills. Developed through practitioner programmes. 10–20% of the team. AI-aware generalists (broad upskilling): all team members who use AI tools in their workflows. Developed through working knowledge programmes.",
            "The three tiers create a capability pyramid: specialists enable and support practitioners; practitioners enable and support generalists. The pyramid scales: each specialist can develop 5–8 practitioners; each practitioner can develop 8–15 generalists.",
          ),
          s(" Design your hybrid talent model as a pyramid before deciding how many external hires are needed."),
        ],
        [
          s("Knowledge transfer must be a formal accountabilty in the hybrid model, not an assumption. "),
          x(
            "Anchor specialists hired without explicit knowledge transfer goals become technical silos. They deliver value individually but do not multiply it through the organisation. Formal knowledge transfer accountability includes: documented architecture and standards, regular tech talks, designated mentoring relationships with internal practitioners, and learning objectives included in quarterly performance reviews.",
            "Knowledge transfer is the mechanism that makes the hybrid model financially viable. Without it, you are paying specialist salaries permanently for capability that should migrate to a lower-cost internal talent base over time.",
          ),
          s(" Include 'knowledge transfer' as a formal KPI for every external AI specialist hire, weighted at 20–30% of their performance review."),
        ],
        [
          s("Manage the boundary between specialist and practitioner roles to prevent capability concentration risk. "),
          x(
            "Capability concentration risk occurs when critical AI knowledge is held by one or two individuals. If an anchor specialist leaves and has not transferred their knowledge, the organisation's AI capability drops significantly. Mitigations include documentation standards, pair programming between specialists and practitioners, and rotation of practitioners through specialist-adjacent tasks.",
            "The hybrid model is only resilient when the knowledge transfer has actually occurred. A hybrid model with specialists who have not transferred their knowledge is effectively a pure-hiring model with a training programme label.",
          ),
          s(" Audit knowledge transfer quarterly: if any AI system is understood by only one person, that is a risk item, not just a talent preference."),
        ],
      ],
      examples: [
        {
          title: "Logistics — pyramid model at scale",
          body: "A logistics company with 6,000 employees designed a three-tier hybrid model: 4 anchor specialists (ML engineers hired externally), 40 internal practitioners (trained from existing IT and operations teams), and 400 AI-aware generalists (working knowledge programme for operations roles). Over 24 months: the 4 specialists built 3 AI systems and developed 40 practitioners; the 40 practitioners supported adoption across 400 generalists; AI tool adoption reached 72%. Total talent investment: £1.8M versus an estimated £4.2M to hire for equivalent capability through external hires alone.",
        },
        {
          title: "Financial services — knowledge transfer KPI in practice",
          body: "A bank's AI architecture team included knowledge transfer as a formal KPI for its 3 external ML engineers: each engineer was required to run one internal tech talk per quarter, document all system design decisions, and designate one internal practitioner per project as a co-developer. At month 18, one ML engineer resigned. The project they had been leading was handed to two internal practitioners who had co-developed the system. The transition took 3 weeks rather than the 6–9 months a cold handover would have required.",
        },
        {
          title: "Healthcare — concentration risk averted",
          body: "A hospital trust discovered that all its AI diagnostic tool configuration knowledge was held by a single data scientist. An audit flagged this as a critical dependency. The trust ran a 6-month practitioner rotation: two clinical informatics specialists shadowed the data scientist, co-configured three new tool deployments, and documented the configuration standards. When the data scientist moved to a research role 8 months later, the concentration risk had been eliminated. The trust also identified that 4 of its 7 AI systems had single-person dependency — producing a 12-month knowledge distribution programme.",
        },
      ],
    }),
    buildSection({
      number: "2.6",
      title: "Retention risk in AI talent markets",
      subtitle: "Why AI-skilled employees are your most flight-prone talent and what to do about it",
      take: "AI skills are the most liquid professional skills in the current market — employees who develop AI practitioner or specialist skills become significantly more marketable, receive unsolicited external offers within months, and face a salary market that moves faster than most organisations' compensation cycles. Leaders who invest in AI upskilling without a parallel retention strategy fund their competitors' talent pipelines.",
      why: "The most expensive outcome of an AI upskilling programme is training your best employees for competitors to hire. Retention risk is not a reason to avoid upskilling — it is a reason to build retention mechanisms before the programme begins, not after the first departure.",
      paragraphs: [
        [
          s("AI-upskilled employees receive a market wage premium of 20–45% above their pre-upskilling external market value. "),
          x(
            "An operations analyst earning £45,000 who completes a practitioner-level AI programme can expect external offers in the £55,000–£65,000 range within 12 months of the programme. If the organisation's internal salary uplift is £3,000, the employee is looking at a £10,000–£17,000 external premium that compounds with each passing month.",
            "AI skills are compounding assets: the longer an employee holds them, the more they are worth in the external market. The risk of departure does not plateau — it increases annually until addressed.",
          ),
          s(" Build salary adjustment into the upskilling programme cost model before the first employee completes the programme."),
        ],
        [
          s("Non-financial retention factors are as important as compensation in AI talent retention. "),
          x(
            "AI-skilled employees are motivated by problem complexity, tool access, autonomy, and community. Organisations that provide access to the latest AI tools, assign AI practitioners to genuinely complex problems, give them autonomy to innovate, and connect them to internal and external AI communities retain at higher rates than organisations that match compensation alone.",
            "An employee who is paid at market rate but is using 18-month-old tools on repetitive tasks will leave. An employee who is 5% below market rate but is working on the most complex AI problems in their function with access to the latest tools will typically stay.",
          ),
          s(" Design an AI practitioner career path — not just a training programme — with a visible progression of problem complexity, tool access, and autonomy."),
        ],
        [
          s("Retention agreements for employer-funded AI upskilling are a standard and accepted practice. "),
          x(
            "A retention agreement for AI upskilling typically requires the employee to remain for 12–24 months after programme completion or repay a proportion of the training cost. This is not coercive — it is a mutual investment agreement. The employee receives valuable training; the employer receives a commitment window to recoup the investment.",
            "Retention agreements work best when framed as mutual investment rather than liability protection. Present the agreement alongside the career development offer, not as a condition attached to training.",
          ),
          s(" Use retention agreements for all AI upskilling programmes costing over £5,000 per person. Frame them as partnership agreements, not legal constraints."),
        ],
      ],
      examples: [
        {
          title: "Retailer — upskilling funds competitor pipeline",
          body: "A national retailer upskilled 24 store operations managers in AI forecasting tools over 16 weeks at £7,000 per person. No salary adjustments were made post-programme. Within 18 months, 11 of the 24 managers had accepted external positions with AI-specialist salary premiums. The retailer had invested £168,000 in training and lost 46% of the cohort. The HR director estimated the replacement and re-training cost at £380,000. Post-analysis: a 15% salary adjustment and structured career path for AI-capable managers would have cost £82,000 per year and retained the majority of the cohort.",
        },
        {
          title: "Technology company — non-financial retention wins",
          body: "A software company upskilled 15 software engineers in ML engineering. Two received external salary offers within 6 months. Rather than counter-offering on salary alone, the company offered both a move to the AI platform team, direct access to frontier AI tools 6 months before general availability, and participation in the company's external AI conference programme. Both engineers declined the external offers. Both remain with the company 3 years later. Neither received a market-rate salary adjustment — they received market-rate career development.",
        },
        {
          title: "Financial services — retention agreement at scale",
          body: "A bank implemented retention agreements for its 40-person AI practitioner cohort. Agreements required 18-month post-programme commitment with pro-rata repayment of £8,000 training cost for early departure. In the two years post-programme, 4 employees left before 18 months — 3 repaid the training cost, 1 was released without repayment for extenuating circumstances. The 90% retention rate was the bank's highest for any technical skills programme, and the 40 retained practitioners delivered an estimated 6× return on the training investment in the first 18 months.",
        },
      ],
    }),
    buildSection({
      number: "2.7",
      title: "Building the business case for your chosen approach",
      subtitle: "How to present the upskill vs hire decision to leadership with evidence that wins budget",
      take: "The business case for AI talent strategy must answer three questions in a language leadership can fund: what is the gap (defined precisely by role, function, and deployment impact), what are the costs and returns of each path over 3 years, and what is the risk of inaction. Cases that answer only the first two questions receive further questions. Cases that answer all three with evidence receive decisions.",
      why: "AI talent budget decisions compete with AI tool budget decisions for the same capital. A talent business case that does not demonstrate equivalent rigour to a tool procurement business case will lose. Applying the same evidence standard — ROI model, risk assessment, success metrics — to talent decisions as to technology decisions is the upgrade most HR and L&D teams need to make.",
      paragraphs: [
        [
          s("The business case structure mirrors a technology investment case: problem, options, evidence, recommendation, and success metrics. "),
          x(
            "Problem: the specific gap, its deployment impact, and the cost of leaving it unaddressed. Options: upskill only, hire only, hybrid — each with a 3-year total cost model and projected returns. Evidence: benchmarks from comparable organisations, expected adoption rates with and without the programme, and any internal pilot data. Recommendation: the preferred option with explicit reasoning. Success metrics: three measurable outcomes at defined time horizons.",
            "Using the same structure as a technology investment case signals to the CFO and CHRO that this is a capital allocation decision, not a training request. This framing change is often sufficient to move a previously rejected request into approval.",
          ),
          s(" Submit the AI talent business case through the same approval pathway as technology investments, not through the L&D training budget process."),
        ],
        [
          s("Benchmark your cost and return assumptions against external data. "),
          x(
            "Leadership teams that have not seen a well-evidenced AI talent business case will default to scepticism about ROI claims. Benchmarking your assumptions against external data — published upskilling ROI studies, industry talent market reports, peer organisation data — converts scepticism into verification. You are not asking leadership to trust your models; you are asking them to evaluate models built from external data.",
            "The strongest AI talent business cases cite 2–3 external ROI benchmarks for the specific type of capability being built. Generic claims like 'AI adoption increases productivity by 30%' are rejected because they are unspecific. Specific benchmarks like 'McKinsey 2024 study shows AI practitioner programmes deliver 4.2× ROI in financial services over 3 years' are harder to dismiss.",
          ),
          s(" Research 2–3 relevant external benchmarks for your industry and role type before writing the business case."),
        ],
        [
          s("Quantify the cost of inaction explicitly — not as a rhetorical device but as a calculated estimate. "),
          x(
            "The cost of inaction for an AI talent gap has three components: deployment delay cost (every week of delayed AI adoption has a calculable revenue or cost impact), competitive disadvantage cost (if competitors deploy AI capability that you delay, market share or talent attraction is affected), and replacement cost (if the gap is not closed proactively, you will close it reactively — typically at higher cost and lower effectiveness).",
            "The cost of inaction is almost always larger than the cost of action. Making this explicit converts the decision from 'should we spend money on training?' to 'do we pay now or pay more later?'",
          ),
          s(" State the cost of inaction as a specific estimate, not a general warning. 'Estimated £X per month in delayed deployment ROI' is fundable evidence; 'falling behind competitors' is not."),
        ],
      ],
      examples: [
        {
          title: "Insurance — technology case framing secures approval",
          body: "An insurer's L&D team had submitted AI training budget requests through the HR training budget process for two years without approval. After restructuring the case as a technology investment — with a 3-year ROI model, risk assessment, and deployment impact analysis — and submitting it through the IT project investment committee, the request was approved in the first cycle it was submitted. The content was largely unchanged; the framing and submission channel made the difference.",
        },
        {
          title: "Manufacturer — external benchmark converts CFO",
          body: "A manufacturer's CFO had rejected three AI training investment requests as 'unsubstantiated.' The fourth request included three external benchmarks: a McKinsey study on AI adoption ROI in manufacturing, a Deloitte study on AI practitioner programme returns, and a peer organisation's publicly available skills development results. The CFO's response: 'If your assumptions match these benchmarks, this looks defensible.' The budget was approved in the next cycle — the first AI training investment the manufacturer had made.",
        },
        {
          title: "Retailer — cost of inaction calculation",
          body: "A retailer quantified its AI talent gap inaction cost: £2.3M per year in delayed AI forecasting adoption (based on an existing inventory accuracy model showing AI would improve accuracy by 12% and the financial value of each percentage point). The training investment to close the gap was £340,000. The CFO's view: 'We are losing £2.3M per year to save £340,000. That is not a sensible trade-off.' The business case was the first AI training request at the company that was approved without negotiation on scope.",
        },
      ],
    }),
    buildSection({
      number: "2.8",
      title: "BL decision lens: upskill vs hire",
      subtitle: "The three decisions you need to make in your next leadership meeting on AI talent strategy",
      take: "The upskill vs hire decision is not a one-time choice — it is an ongoing portfolio decision that your organisation should revisit every 6 months as AI capability requirements evolve, as internal capability matures, and as the external AI talent market shifts. The three leadership decisions that matter are: classify every current AI capability gap by gap type, agree the talent strategy mix for the next 12 months, and set a retention plan before the first upskilling programme begins.",
      why: "Leaders who leave the upskill vs hire question to HR or L&D to resolve independently end up with talent strategies that are tactically sound but strategically incoherent — good training programmes that are not connected to AI deployment plans, and AI hires that are not connected to knowledge transfer goals. The business leader must own the strategy; HR enables it.",
      paragraphs: [
        [
          s("Decision 1: classify every AI capability gap in your function as a knowledge gap, a skill gap, or a specialist role gap. "),
          x(
            "Knowledge gaps and skill gaps are almost always addressable through upskilling within 3–9 months. Specialist role gaps require external hiring. A functional leader who classifies gaps correctly prevents the most common mistake: hiring specialists for roles that could have been filled by upskilled employees.",
            "This classification takes 2–3 hours in a structured session with your HR business partner and the results of a gap assessment. It is the single most valuable AI talent planning activity you can do.",
          ),
          s(" Complete the gap classification before any AI job requisition is approved or any AI training budget is allocated."),
        ],
        [
          s("Decision 2: set the talent strategy mix for your function for the next 12 months. "),
          x(
            "Express the mix as a concrete plan: X people to be developed through internal programmes, Y specialist roles to be hired externally, Z roles to be converted from generalist to AI-aware through broad upskilling. The mix should be driven by gap classifications, deployment timelines, and the 3-year cost model — not by convention or convenience.",
            "A talent strategy mix expressed as percentages is more useful than a narrative: '80% internal development, 15% external hiring, 5% contracting' is a fundable strategy. 'We plan to train people and hire where necessary' is not.",
          ),
          s(" Express the talent strategy mix as a concrete allocation before presenting to the CHRO and CFO."),
        ],
        [
          s("Decision 3: build the retention plan before the first upskilling investment is made. "),
          x(
            "The retention plan must address three elements: compensation review schedule (when will salary be adjusted post-programme and by how much), career path design (what progression is available for AI-capable employees), and recognition mechanisms (how will AI capability be visibly valued in the organisation). Without all three, upskilling investment has a predictable 40–60% leakage rate to the external market.",
            "The retention plan is not an HR nice-to-have — it is the mechanism that converts a training cost into a long-term capability asset.",
          ),
          s(" Approve the retention plan in the same leadership meeting that approves the upskilling investment."),
        ],
      ],
      examples: [
        {
          title: "Gap classification in 2 hours",
          body: "A financial services business leader ran a 2-hour gap classification session with the HR business partner and AI programme lead. The session reviewed 23 AI-related capability needs identified in the gap assessment. Result: 17 were classified as knowledge or skill gaps (addressable through upskilling), 4 were specialist role gaps (requiring hiring), and 2 were uncertain (requiring further scoping). This classification enabled immediate action on 21 of 23 gaps and focused hiring resources on the 4 genuinely specialist roles.",
        },
        {
          title: "Talent mix as fundable strategy",
          body: "A manufacturer's operations director presented a concrete talent strategy mix to the CHRO and CFO: 12 practitioners to be developed internally through a 6-month programme (£192,000 investment), 2 ML engineers to be hired externally (£280,000 first-year cost), and 80 AI-aware generalists to be developed through a 3-day working knowledge workshop (£48,000). Total: £520,000 versus the previous year's request for 'AI talent investment' at £1.1M, which had been rejected as vague. The concrete mix secured approval in one review cycle.",
        },
        {
          title: "Retention plan before training prevents attrition",
          body: "A law firm approved an AI practitioner programme for 20 senior associates with a parallel retention plan: 20% salary uplift post-programme, a newly created 'AI Practice Lead' career path, and quarterly recognition in leadership communications. Of the 20 associates who completed the programme, 18 were still with the firm at 24 months — compared to the firm's historical 55% retention rate for promoted senior associates. The retention plan cost £220,000 per year in salary uplifts; the estimated replacement cost for 8 lost associates at the historical rate would have been £640,000.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "A business leader needs an AI working knowledge programme for 50 operations managers within 8 months. Which talent strategy is most appropriate?",
      options: [
        "Hire 50 AI-specialist operations managers to replace the existing team",
        "Upskill existing operations managers through a structured working knowledge programme",
        "Contract external AI specialists to run operations for the next 12 months",
        "Defer the AI deployment until the talent market produces sufficient candidates",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Working knowledge — the ability to use specific AI tools in defined workflows — is a skill gap, not a specialist role gap. An 8-month timeline is sufficient for a working knowledge programme. Upskilling existing employees preserves domain knowledge, costs less, and sends a positive cultural signal.",
      wrongFeedback:
        "Working knowledge gaps (using AI tools in existing workflows) are upskillable in 4–8 weeks. This is not a specialist role requiring external hiring. Upskilling existing employees who already have operational domain knowledge is faster, cheaper, and more likely to produce adoption.",
    },
    {
      q: "Which element of the full hiring cost is most commonly excluded from upskill vs hire comparisons, leading to an underestimate of hiring cost?",
      options: [
        "Recruitment agency fee",
        "First-year salary",
        "Productivity ramp cost during the 6–12 month adjustment period",
        "Interview time for hiring managers",
      ],
      correct: 2,
      correctFeedback:
        "Correct. Productivity ramp cost — typically modelled as 50% of annual salary for the ramp period — is the largest hidden cost in external hiring. A new AI hire earning £80K with a 9-month ramp contributes an additional £30K in productivity ramp cost that most hiring budgets do not include.",
      wrongFeedback:
        "Recruitment fees and salaries are typically included. The largest overlooked cost is productivity ramp: a new external hire is not fully productive for 6–12 months. At 50% productivity during ramp on an £80K salary, that is a £30–40K hidden cost excluded from most comparisons.",
    },
    {
      kind: "categorize",
      q: "Categorise these AI capability needs as either 'Upskill (existing employees)' or 'Hire (external specialist)':",
      categories: ["Upskill (existing employees)", "Hire (external specialist)"],
      items: [
        { text: "Operations managers learning to use AI forecasting dashboards", category: 0 },
        { text: "Marketing team members using AI content generation tools", category: 0 },
        { text: "Sales reps using AI CRM recommendations", category: 0 },
        { text: "ML engineer to build a custom recommendation model", category: 1 },
        { text: "AI architect to design enterprise data pipeline infrastructure", category: 1 },
        { text: "Data scientist to develop and validate predictive models", category: 1 },
      ],
      correctFeedback:
        "Correct. Working knowledge and practitioner tool use (forecasting, content generation, CRM tools) are upskillable in weeks to months. Specialist roles requiring deep technical training (ML engineering, AI architecture, data science) require external hiring or long-lead development programmes.",
      wrongFeedback:
        "The boundary is between tool use (upskillable) and system building (specialist hire). Roles that use, configure, and evaluate AI tools can be developed internally. Roles that design, train, and build AI systems require specialist technical backgrounds that cannot be created through short programmes.",
    },
    {
      q: "What is 'seed hiring' in the context of AI talent strategy?",
      options: [
        "Hiring junior AI graduates to grow into senior roles over time",
        "Hiring a small number of AI specialists with explicit knowledge transfer mandates to build internal capability",
        "Planting AI advocates across business units to promote adoption",
        "Hiring AI contractors for short-term projects to test the technology before committing to permanent roles",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Seed hiring involves bringing in a small number of AI specialists (typically 2–3 per function) with a formal mandate to transfer knowledge to internal staff through mentoring, documentation, and co-development. The goal is to use external expertise as a catalyst for internal capability development.",
      wrongFeedback:
        "Seed hiring is a deliberate knowledge transfer strategy: hire specialist anchors who are accountable for developing internal capability, not just delivering individual technical contributions. Without a knowledge transfer mandate, specialists become dependencies rather than multipliers.",
    },
    {
      q: "A business leader upskills 30 employees in AI at £8,000 each with no retention plan. 12 receive external offers within 18 months at significant salary premiums. What was the primary preventable error?",
      options: [
        "The training programme was too long",
        "The cost per person was too high for a reasonable ROI",
        "No retention plan was built before the upskilling investment to address the inevitable salary premium",
        "Upskilling was the wrong strategy — these employees should have been replaced",
      ],
      correct: 2,
      correctFeedback:
        "Correct. AI-upskilled employees become significantly more marketable and receive external offers within months of completing programmes. A retention plan — including salary adjustment schedules, career path design, and recognition mechanisms — must be approved before the first programme begins to prevent funding competitor talent pipelines.",
      wrongFeedback:
        "The error was not in the decision to upskill — it was in failing to build a retention plan before the programme began. AI skills create a 20–45% external salary premium quickly. Without a retention plan, upskilling investment leaks to competitors at high probability.",
    },
    {
      kind: "order",
      q: "Order these steps to build an AI talent strategy business case:",
      items: [
        "Classify each AI capability gap as knowledge gap, skill gap, or specialist role gap",
        "Build a 3-year total cost model for upskilling and hiring options",
        "Research 2–3 external benchmark studies for your industry and role type",
        "Quantify the cost of inaction (delayed deployment, competitive disadvantage)",
        "Present recommendation with success metrics to leadership via investment approval pathway",
      ],
      prompt: "Drag to arrange in the correct sequence",
      correctFeedback:
        "Correct. Gap classification determines which options are viable. Cost modelling makes them comparable. External benchmarks validate the assumptions. Cost of inaction establishes urgency. The investment pathway framing secures approval.",
      wrongFeedback:
        "Start with gap classification — it determines which paths are viable. Then model costs to compare options. Benchmark externally to validate your assumptions. Quantify inaction cost to establish urgency. Submit through the investment approval channel to signal that this is a capital decision, not a discretionary training request.",
    },
  ],
});
