import { buildChapter, buildSection, s, x } from "../concepts-pb4-helpers";

export const chapter09HumanInTheLoop = buildChapter({
  slug: "pb6-human-in-the-loop",
  number: 9,
  shortTitle: "Human-in-the-Loop",
  title: "Human-in-the-Loop Design",
  readingMinutes: 27,
  summary:
    "Keeping humans in control of autonomous agents — the autonomy-oversight spectrum, interrupt points, approval workflows, escalation design, audit trails, feedback loops, trust calibration UX, progressive autonomy, and the PM liability decisions that make oversight a feature rather than friction.",
  keyTakeaway:
    "Human-in-the-loop is not a safety net you add after launch — it is a product architecture choice on the autonomy spectrum. PMs who design interrupt points, approval UX, and escalation paths before agents act make autonomy shippable in high-stakes domains.",
  pmCallout:
    "As a PM: for every agent workflow, document where humans enter, what they see, what actions they can take, and what happens when they disagree with the agent. If oversight feels theatrical — no context, no audit trail — users will bypass it or hate it.",
  sections: [
    buildSection({
      number: "9.1",
      title: "Why human-in-the-loop",
      subtitle: "The trust gap agents cannot close alone",
      take: "Human-in-the-loop (HITL) exists because agents are not reliable enough for unsupervised action in high-stakes domains — medicine, finance, legal, external communications — and even in low-stakes domains users need accountability, recourse, and calibration; HITL bridges the trust gap between demo capability and production acceptability.",
      why: "PMs face pressure to remove 'friction' from agent UX. HITL is often the product — not overhead — in regulated and reputation-sensitive workflows.",
      paragraphs: [
        [
          s("Autonomy without oversight is a liability promise. "),
          x(
            "When agent sends wrong email to 10,000 users, 'the model made a mistake' is not a legal or PR strategy. HITL assigns accountability to a human decision point.",
            "Domains with duty of care — healthcare, financial advice, hiring — require human judgment on record.",
          ),
          s(" PM maps regulatory and contractual requirements to mandatory HITL touchpoints."),
        ],
        [
          s("Users want control even when they don't exercise it. "),
          x(
            "Studies show users trust agents more when they could intervene — even if they rarely do. Visible oversight increases adoption paradoxically.",
            "Absence of override feels like black box; thoughtful HITL feels like copilot.",
          ),
          s(" Design for perceived control — pause buttons, edit-before-send, undo windows."),
        ],
        [
          s("HITL is a data flywheel, not just risk reduction. "),
          x(
            "Every human correction is labelled signal for eval, fine-tune, and prompt improvement. Oversight funds the path to higher autonomy later.",
            "PMs who capture corrections in structured form compound product quality — those who don't repeat incidents.",
          ),
          s(" Budget reviewer time as training data investment — not pure cost center."),
        ],
      ],
      examples: [
        {
          title: "Insurance claim agent — mandatory review",
          body: "Regulator required licensed adjuster sign-off on denials. PM designed HITL as core flow — agent drafts, human approves. Launched on time; competitor's full-auto agent blocked. HITL was gating requirement, not delay.",
        },
        {
          title: "Users trusted edit-before-send",
          body: "Email agent with mandatory preview had 2.3× adoption vs auto-send variant in A/B test. Users rarely edited — but preview reduced anxiety. PM kept preview as default; 'skip preview' power-user setting later.",
        },
        {
          title: "Incident without HITL",
          body: "Auto-refund agent over-credited $400K before kill switch. Postmortem: no human gate on Tier 3 action. PM instituted approval workflow; CFO approved reliability over speed narrative.",
        },
      ],
    }),
    buildSection({
      number: "9.2",
      title: "The autonomy-oversight spectrum",
      subtitle: "Manual → on-the-loop → in-the-loop → autonomous",
      take: "The autonomy-oversight spectrum runs from fully manual (human does everything, AI suggests) through human-on-the-loop (AI acts, human monitors and can intervene) and human-in-the-loop (AI pauses for approval at key points) to fully autonomous (AI acts within guardrails) — and PMs choose position per task stakes, reversibility, and demonstrated reliability.",
      why: "One-size autonomy fails across use cases. PMs segment workflows on the spectrum instead of binary 'agent on/off.'",
      paragraphs: [
        [
          s("Fully manual — AI as autocomplete. "),
          x(
            "Human authors; AI suggests next sentence, completion, or search result. No agent loop. Lowest risk, lowest leverage.",
            "Right for: novel creative work, legally sensitive first drafts, user learning mode.",
          ),
          s(" Many products should stay here longer than eng wants."),
        ],
        [
          s("Human-on-the-loop — monitor and interrupt. "),
          x(
            "Agent runs end-to-end; human watches dashboard or receives async notification; can stop or rollback. Async oversight.",
            "Right for: batch processing, internal ops, low-stakes high-volume with good audit.",
          ),
          s(" PM defines alert thresholds that trigger human attention — not 'check dashboard sometimes.'"),
        ],
        [
          s("Human-in-the-loop — synchronous approval gates. "),
          x(
            "Agent pauses before irreversible or low-confidence actions; human approves, edits, or rejects; agent resumes with decision in state.",
            "Right for: external comms, money movement, medical content, new user onboarding.",
          ),
          s(" Fully autonomous only when metrics + domain risk justify — progressive promotion."),
        ],
      ],
      examples: [
        {
          title: "Spectrum across one product",
          body: "PM mapped: internal doc summary = on-the-loop; customer email = in-the-loop; spell-check = manual assist. Single agent platform, three autonomy levels by workflow. Reduced one-size-fits-none backlash.",
        },
        {
          title: "Premature full autonomy",
          body: "Team shipped autonomous ticket closer — 23% wrong resolution. Rolled back to in-the-loop approve for close action. PM published autonomy roadmap: in-the-loop until 92% approval-without-edit rate.",
        },
        {
          title: "On-the-loop for batch jobs",
          body: "Nightly data enrichment ran autonomous; anomaly alert pinged ops if >5% rows flagged. Human reviewed exceptions only — 95% untouched. PM matched spectrum to job shape: batch vs interactive.",
        },
      ],
    }),
    buildSection({
      number: "9.3",
      title: "Interrupt points",
      subtitle: "Where to pause the agent loop",
      take: "Interrupt points are deliberate pauses in the agent graph — before irreversible actions, at confidence thresholds, at task milestones, or when scope boundaries blur — implemented via framework interrupts (LangGraph), workflow engines, or application-level gates that freeze state until human input arrives.",
      why: "Wrong interrupt placement frustrates users (too many) or creates incidents (too few). PMs map interrupts to risk and user mental model of the task.",
      paragraphs: [
        [
          s("High-risk interrupts are non-negotiable. "),
          x(
            "Before: send external message, charge payment, delete data, publish publicly, modify permissions. Interrupt shows preview + confirm.",
            "Framework support: LangGraph interrupt(), Temporal signals, custom await_human node.",
          ),
          s(" PM checklist: list every Tier 3 tool — each needs interrupt or waiver with legal sign-off."),
        ],
        [
          s("Confidence-based interrupts scale oversight. "),
          x(
            "When model or tool returns confidence < threshold, pause for human. OCR low confidence → user verifies amount.",
            "Calibrate thresholds from production data — too sensitive = alert fatigue; too loose = incidents.",
          ),
          s(" Show confidence reason in interrupt UI — 'amount unclear on receipt line 3.'"),
        ],
        [
          s("Milestone interrupts for long tasks. "),
          x(
            "Multi-step research: pause after outline for user direction before full draft. Prevents 20-minute run in wrong direction.",
            "Milestone = cheap course correction vs expensive full redo.",
          ),
          s(" User setting: 'ask me at each stage' vs 'run until blocked' — autonomy preference."),
        ],
      ],
      examples: [
        {
          title: "LangGraph interrupt before send",
          body: "Graph paused at send_email node; state checkpointed. User edited body, approved; graph resumed with approval token. PM spec'd 24h checkpoint expiry — stale approvals rejected.",
        },
        {
          title: "Confidence interrupt reduced errors",
          body: "Expense OCR <0.85 confidence triggered user verify screen. Auto-approve above threshold. Error rate on amounts down 67%. PM tuned threshold monthly from false positive/negative tradeoff.",
        },
        {
          title: "Too many interrupts churned users",
          body: "Agent paused every tool call for approval — users abandoned. PM reduced to Tier 3 + low confidence only. Completion up 40%. Interrupt design is UX, not maximize pauses.",
        },
      ],
    }),
    buildSection({
      number: "9.4",
      title: "Approval workflows",
      subtitle: "What the agent surfaces and how humans respond",
      take: "Approval workflows define the UX contract at interrupt points — what context the agent surfaces (summary, diffs, citations, tool args), what actions the human can take (approve, edit, reject, reassign, request more info), and how the agent resumes with the decision encoded in durable state.",
      why: "Bad approval UX makes HITL theater — humans rubber-stamp unread cards. PMs design for informed decisions in under 30 seconds.",
      paragraphs: [
        [
          s("Surface the minimum viable context for decision. "),
          x(
            "Show: what agent wants to do, why (citations, reasoning summary), impact (who affected, cost), diff from draft.",
            "Hide: raw tool JSON, 40-step scratchpad — link 'view details' for experts.",
          ),
          s(" PM reviews approval card mockups with CS — 'would you approve from this?'"),
        ],
        [
          s("Human actions must branch the graph clearly. "),
          x(
            "Approve → continue with args. Edit → continue with human-modified args. Reject → cancel task or alternative path. Reassign → route to specialist queue.",
            "Each action logged with user_id and timestamp.",
          ),
          s(" Reject should explain optional reason — feeds feedback loop."),
        ],
        [
          s("SLA and queue management for approvals. "),
          x(
            "Pending approvals expire; escalate to manager; notify via Slack/email. Batch approve for similar low-risk items with safeguards.",
            "PM defines SLA: e.g., refund approval < 4 hours — agent holds state until then.",
          ),
          s(" Approval backlog is product metric — staffing signal for ops."),
        ],
      ],
      examples: [
        {
          title: "Diff-based approval for CRM update",
          body: "Card showed field-by-field diff: agent proposed phone change. Rep edited one digit, approved. 12-second median review. PM replaced paragraph summary — reps ignored it.",
        },
        {
          title: "Reject reason improved agent",
          body: "Reject required reason dropdown + optional text. Reasons fed weekly eval review — top 'wrong tone' drove prompt fix. Approval workflow closed feedback loop.",
        },
        {
          title: "Approval SLA breach",
          body: "Support approvals queued 18 hours — customers angry. PM added escalation after 2h and weekend on-call rotation. HITL requires ops capacity planning.",
        },
      ],
    }),
    buildSection({
      number: "9.5",
      title: "Escalation design",
      subtitle: "When agents hand off to humans cleanly",
      take: "Escalation design defines when agents recognise task beyond capability — low confidence, repeated failures, policy edge case, user request — and how they hand off with full context bundle to human queue without forcing users to repeat their story.",
      why: "Bad escalation feels like 'chatbot failure.' Good escalation feels like efficient routing. PMs own handoff UX and ops integration.",
      paragraphs: [
        [
          s("Escalation triggers — explicit and implicit. "),
          x(
            "Explicit: user says 'talk to human.' Implicit: 3 failed tool attempts, safety flag, out-of-policy request, confidence below floor.",
            "Triggers documented in agent policy — not model improvisation.",
          ),
          s(" PM aligns triggers with support tier structure — what queue receives what."),
        ],
        [
          s("Context bundle on handoff. "),
          x(
            "Pass: original goal, steps taken, tool results summary, agent recommendation, user sentiment, trace ID. Human sees agent work — doesn't start cold.",
            "Integration: Zendesk sidebar, Salesforce case pre-fill, internal ops console.",
          ),
          s(" 'Explain what you tried' in user message reduces user frustration."),
        ],
        [
          s("Seamless channel transition. "),
          x(
            "Same thread ID across agent and human chat where possible. User shouldn't re-authenticate or re-upload files.",
            "If async: email with case number and expected response time.",
          ),
          s(" Measure escalation rate and resolution time — optimize agent, not hide escalation."),
        ],
      ],
      examples: [
        {
          title: "Warm handoff with trace",
          body: "Agent failed refund policy edge case — escalated with trace link. Human resolved in 4 min without re-asking account ID. PM KPI: re-contact rate on escalations <10%.",
        },
        {
          title: "Cold handoff churn",
          body: "Early version said 'contact support' with no context. CSAT tanked. PM required context bundle; CS handle time dropped 35%. Escalation design is retention.",
        },
        {
          title: "User-initiated escalation always available",
          body: "Persistent 'Get human help' button — even mid-agent-run. PM resisted eng push to hide until failure. Trust metric: users who knew escape hatch tried agent more.",
        },
      ],
    }),
    buildSection({
      number: "9.6",
      title: "Audit trails and explainability",
      subtitle: "Logs that make human review meaningful",
      take: "Audit trails record what the agent did, in what order, with what inputs and outputs, under which model/prompt versions, and which human approved — turning oversight from rubber-stamping into accountable review and satisfying compliance requirements for agent systems.",
      why: "Without audit trails, HITL is theater and postmortems are impossible. PMs specify log fields before launch — retrofit is painful.",
      paragraphs: [
        [
          s("Minimum viable agent audit log. "),
          x(
            "Per step: timestamp, tool name, args hash, result summary, model version, prompt version, user_id, session_id. Per approval: approver, decision, edits.",
            "Retention per regulatory requirement — often 1–7 years for finance.",
          ),
          s(" PM legal review on log fields — PII redaction in stored args."),
        ],
        [
          s("Explainability for human reviewers. "),
          x(
            "Show reasoning summary and citations — not raw chain-of-thought if policy restricts. Link to source documents agent used.",
            "Reviewer answers: 'Would I have done the same?' — needs evidence, not vibes.",
          ),
          s(" EU AI Act and enterprise security questionnaires ask for this — prepare standard answer."),
        ],
        [
          s("User-facing activity history. "),
          x(
            "Users see what agent did on their behalf — settings > agent activity. Revoke access, dispute action.",
            "Transparency builds trust; hiding actions breeds scandal.",
          ),
          s(" PM: parity between internal audit and user-visible history where feasible."),
        ],
      ],
      examples: [
        {
          title: "Audit trail won compliance audit",
          body: "Auditor sampled 50 agent actions — full trace with approver on each Tier 3. Clean pass. PM cited audit design in next enterprise RFP — reduced security review 4 weeks.",
        },
        {
          title: "Missing approval_id in logs",
          body: "Post-incident couldn't prove human approved wire transfer. PM mandated approval_id on execution log; pipeline blocked deploy without it. Governance via tooling.",
        },
        {
          title: "User activity feed prevented panic",
          body: "User thought agent 'hacked' calendar — activity feed showed three agent-created events with labels. Deleted unwanted; kept agent. Transparency defused support ticket.",
        },
      ],
    }),
    buildSection({
      number: "9.7",
      title: "Feedback as training signal",
      subtitle: "Turning corrections into labelled data",
      take: "Human-in-the-loop generates high-value labelled data — approvals, edits, rejections, escalations — and PMs must design capture pipelines that feed eval sets, fine-tune datasets, and prompt iteration without losing structure, privacy, or reviewer intent.",
      why: "Oversight is expensive; ROI comes from learning. PMs who don't close the feedback loop pay for HITL forever without autonomy gains.",
      paragraphs: [
        [
          s("Structure feedback at capture time. "),
          x(
            "Reject reasons as taxonomy. Edits as diffs stored for training. Thumbs down linked to trace ID.",
            "Avoid free-text only — hard to aggregate; combine with categories.",
          ),
          s(" PM owns feedback taxonomy; review monthly for emerging failure themes."),
        ],
        [
          s("Privacy and consent for training use. "),
          x(
            "Enterprise contracts may prohibit using customer data for model training. Anonymise, aggregate, or opt-in.",
            "Internal reviewer edits on synthetic data — safer fine-tune path.",
          ),
          s(" Legal sign-off on feedback → training pipeline — especially GDPR."),
        ],
        [
          s("Close the loop visibly. "),
          x(
            "When user correction fixes behaviour next release, tell them — 'We improved based on feedback like yours.'",
            "Track: corrections per week → eval cases added → metric lift. PM reports flywheel health.",
          ),
          s(" Stale feedback sitting in DB unmined is wasted HITL cost."),
        ],
      ],
      examples: [
        {
          title: "Edit diffs to fine-tune set",
          body: "Human-edited email drafts exported weekly — 2K examples/quarter. Fine-tune reduced edit rate 31%. PM funded reviewer time with ROI model: edits → dataset → less review needed.",
        },
        {
          title: "Reject taxonomy drove prompt fix",
          body: "'Wrong policy cited' = 40% of rejects one month. Added 30 policy edge cases to golden eval; prompt update cut rejects 22%. Structured feedback beat vibe-based iteration.",
        },
        {
          title: "GDPR block on training",
          body: "EU customer contract prohibited training on their corrections. PM split pipeline: EU logs eval-only; US opt-in for training. Feedback flywheel regional — plan for it.",
        },
      ],
    }),
    buildSection({
      number: "9.8",
      title: "Designing for appropriate trust",
      subtitle: "Confidence, citations, and uncertainty UX",
      take: "Appropriate trust means users calibrate reliance on agent output — neither over-trusting hallucinations nor ignoring good work — through UX patterns: confidence indicators, source citations, uncertainty flags, capability disclaimers, and explicit boundaries on what agent cannot do.",
      why: "Miscalibrated trust causes incidents (over-trust) or abandonment (under-trust). PMs design trust UX as carefully as feature UX.",
      paragraphs: [
        [
          s("Citations and source linking. "),
          x(
            "RAG agents show chunk sources inline — user verifies. Unsourced factual claims get 'verify independently' badge.",
            "Citation click-through rate is PM metric — are users checking?",
          ),
          s(" No citation = lower displayed confidence — product rule, not optional."),
        ],
        [
          s("Confidence and uncertainty communication. "),
          x(
            "Verbal: 'I'm not sure, but…' Visual: low/medium/high bands. Avoid false precision — 73.2% confidence misleads.",
            "Calibrate displayed confidence to actual error rates per slice — honesty over marketing.",
          ),
          s(" A/B test trust UI — measure task success and over-reliance incidents."),
        ],
        [
          s("Capability boundaries in product copy. "),
          x(
            "Onboarding: what agent can/cannot do. Persistent 'Not legal advice' where needed.",
            "Surprise capability causes misuse — user asks agent to do out-of-scope harmful thing.",
          ),
          s(" PM partners with legal on disclaimer placement — not bolted on after incident."),
        ],
      ],
      examples: [
        {
          title: "Citation reduced hallucination complaints",
          body: "Inline doc citations added — 'made up answer' tickets down 44%. Users self-served verification. PM invested in citation UI polish — high ROI trust feature.",
        },
        {
          title: "Overconfidence badge experiment",
          body: "Claims without retrieval support showed amber badge. Users sought second source 2.1× more; completion slightly down but error reports down more. PM chose appropriate trust over false speed.",
        },
        {
          title: "Disclaimer prevented misuse",
          body: "Medical agent clear boundary: 'not diagnosis.' User lawsuit avoided when agent refused and escalated. PM legal credited onboarding boundary copy in deposition.",
        },
      ],
    }),
    buildSection({
      number: "9.9",
      title: "Progressive autonomy",
      subtitle: "Earning trust through demonstrated reliability",
      take: "Progressive autonomy starts with heavy oversight — approve everything — and relaxes gates as reliability metrics prove out per workflow slice, user segment, or action tier — a trust-building roadmap that lets PMs ship early without betting full autonomy on day one.",
      why: "Binary launch decisions stall products. Progressive autonomy frames HITL as phase one, not forever — with explicit promotion criteria.",
      paragraphs: [
        [
          s("Autonomy promotion criteria. "),
          x(
            "Example: auto-approve OCR amounts when >95% match human edit-free for 30 days on slice. Promote per action type — not whole agent at once.",
            "Demotion criteria too — metric regression re-enables gates automatically.",
          ),
          s(" PM publishes autonomy roadmap to customers — 'what will automate next quarter.'"),
        ],
        [
          s("Segment by user expertise and risk. "),
          x(
            "Power users earn skip-preview after N successful reviews. New users keep full HITL longer.",
            "Enterprise may contractually require permanent human on denials — respect segment rules.",
          ),
          s(" Personalisation of autonomy — not one global setting."),
        ],
        [
          s("Communicate autonomy changes. "),
          x(
            "When promoting to less oversight, notify users what changed and how to re-enable strict mode.",
            "Silent autonomy expansion feels like loss of control — backlash risk.",
          ),
          s(" Opt-down always available — user chooses more oversight."),
        ],
      ],
      examples: [
        {
          title: "Graduated email autonomy",
          body: "Month 1: all sends approved. Month 3: internal emails auto at 97% edit-free rate. Month 6: external with preview only. PM shared roadmap; enterprise opted out of auto-external — retained revenue.",
        },
        {
          title: "Auto-demote on regression",
          body: "Wrong-send rate spiked 0.1% → 1.2% — system re-enabled approval on all sends within 1 hour. PM postmortem: vendor drift. Progressive autonomy includes automatic retreat.",
        },
        {
          title: "Power user bypass",
          body: "Users with 50+ approved actions unlocked 'fast mode' — fewer interrupts. Churn among power users down 18%. PM balanced efficiency with new-user safety.",
        },
      ],
    }),
    buildSection({
      number: "9.10",
      title: "PM decision lens: HITL as product and liability",
      subtitle: "Oversight as feature, legal requirement, and handoff design",
      take: "PMs decide where HITL is a competitive feature (quality, trust, compliance), where it is a legal requirement (regulated decisions), and how handoffs feel — users in control rather than overridden — weighing oversight cost against incident cost, support load, and time-to-autonomy on the product roadmap.",
      why: "HITL decisions are business decisions — staffing, liability, positioning. PMs own the tradeoff frame, not just eng implementation.",
      paragraphs: [
        [
          s("Liability and insurance framing. "),
          x(
            "Who is responsible when agent errs with human in loop? Approver? Vendor? Company? Legal clarity before launch.",
            "Some insurers require HITL for AI coverage — PM checks policy.",
          ),
          s(" Document decision authority matrix — agent proposes, human disposes, company accountable."),
        ],
        [
          s("Oversight staffing and unit economics. "),
          x(
            "If 40% tasks need 2-min review, calculate reviewer FTE and cost per task. Price product accordingly or invest in autonomy promotion.",
            "HITL-heavy product without ops plan fails at scale.",
          ),
          s(" PM business case: HITL cost vs incident cost vs churn from no agent."),
        ],
        [
          s("Handoff philosophy: copilot, not autopilot with eject button. "),
          x(
            "User should feel augmented — agent does draft work, human decides. Language, defaults, and interrupt timing reinforce partnership.",
            "Positioning: 'AI prepares, you approve' sells enterprise; 'fully autonomous' scares and regulates.",
          ),
          s(" PM messaging aligned with actual autonomy spectrum — no oversell."),
        ],
      ],
      examples: [
        {
          title: "HITL as enterprise differentiator",
          body: "Competitor pitched full autonomy; we pitched 'licensed professional in loop.' Won three healthcare deals. PM leaned into oversight as feature in sales — honesty beat hype.",
        },
        {
          title: "Unit economics forced autonomy push",
          body: "Review cost $1.40/task at scale — margins negative. PM chartered autonomy promotion program with explicit 6-month gate targets. HITL economics drove reliability investment.",
        },
        {
          title: "Liability matrix in MSA",
          body: "Enterprise MSA defined: agent outputs are recommendations; customer approver bears decision liability after review. Legal approved product with clear HITL. PM involved in contract language early.",
        },
      ],
    }),
  ],
  quiz: [
    {
      q: "Human-in-the-loop is primarily needed because:",
      options: [
        "Agents are too slow without humans typing for them",
        "Agents lack sufficient reliability for unsupervised high-stakes action — and users need accountability and control",
        "Regulators ban all autonomous software regardless of domain",
        "HITL eliminates the need for eval testing",
      ],
      correct: 1,
      correctFeedback:
        "Right. HITL bridges the trust gap — risk, accountability, and a path to better training data.",
      wrongFeedback:
        "HITL addresses reliability limits and trust — not speed. Re-read section 9.1.",
    },
    {
      q: "Human-on-the-loop differs from human-in-the-loop in that:",
      options: [
        "On-the-loop means the human must approve every tool call synchronously",
        "On-the-loop means the agent runs while humans monitor and can interrupt asynchronously",
        "In-the-loop means no human involvement is possible",
        "They are identical terms",
      ],
      correct: 1,
      correctFeedback:
        "Correct. On-the-loop = async monitoring; in-the-loop = synchronous approval gates.",
      wrongFeedback:
        "Review the autonomy spectrum. Re-read section 9.2.",
    },
    {
      q: "Tier 3 irreversible actions in agent workflows should use:",
      options: [
        "No interrupts — speed is paramount",
        "Mandatory interrupt points with approval workflow before execution",
        "Only post-hoc weekly review",
        "Automatic retry until success",
      ],
      correct: 1,
      correctFeedback:
        "Exactly. High-risk actions need synchronous approval interrupts — non-negotiable for most domains.",
      wrongFeedback:
        "Irreversible actions require interrupt points. Re-read section 9.3.",
    },
    {
      kind: "order",
      q: "Order the progressive autonomy path from first phase to mature phase.",
      prompt: "Drag to arrange first (top) to last (bottom).",
      items: [
        "Heavy HITL — approve most actions while measuring edit-free rate",
        "Relax gates per slice as metrics hit promotion criteria",
        "Auto-demote when regression triggers fire",
        "Publish autonomy roadmap and offer opt-down for users wanting more oversight",
      ],
      correctFeedback:
        "Right. Start supervised, promote with evidence, demote on regression, communicate changes.",
      wrongFeedback:
        "Progressive autonomy earns trust with metrics and retreats when needed. Re-read section 9.9.",
    },
    {
      q: "Audit trails for agent systems should include:",
      options: [
        "Only the final user-visible message",
        "Per-step tool calls, versions, approvals, and session linkage for accountable review",
        "Raw model weights each request",
        "Nothing — audit trails violate privacy always",
      ],
      correct: 1,
      correctFeedback:
        "Correct. Meaningful audit logs cover steps, versions, and human decisions — with PII policy.",
      wrongFeedback:
        "Oversight requires detailed action logs. Re-read section 9.6.",
    },
    {
      kind: "categorize",
      q: "Match each HITL design element to its primary purpose.",
      categories: ["Interrupt point", "Escalation", "Feedback capture"],
      items: [
        { text: "Pause before send_email for human edit and approve.", category: 0 },
        { text: "Transfer to support queue with full trace after 3 failed tool attempts.", category: 1 },
        { text: "Store reject reason taxonomy linked to session ID.", category: 2 },
        { text: "Low-confidence OCR triggers verify screen.", category: 0 },
        { text: "User clicks 'Get human help' mid-task.", category: 1 },
        { text: "Human edit diff exported to fine-tune dataset.", category: 2 },
      ],
      correctFeedback:
        "Right. Interrupts pause for approval; escalation hands off; feedback captures learning signal.",
      wrongFeedback:
        "Interrupts gate action; escalation routes to humans; feedback feeds improvement. Re-read sections 9.3, 9.5, and 9.7.",
    },
  ],
});
