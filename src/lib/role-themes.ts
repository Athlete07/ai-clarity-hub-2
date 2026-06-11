import type { LucideIcon } from "lucide-react";
import { Briefcase, Crown, UserCog } from "lucide-react";

export type RoleId = "pm" | "founder" | "business-leader";

export type RoleTheme = {
  border: string;
  glow: string;
  badge: string;
  progress: string;
  textHover: string;
  pillActive: string;
  cardHover: string;
  iconBox: string;
  hoverBorder: string;
};

/** Role track colors — all values from design tokens in styles.css (light + dark). */
export const ROLE_THEMES: Record<RoleId, RoleTheme> = {
  pm: {
    border: "border-purple",
    glow: "from-purple-light/20",
    badge: "bg-purple-light text-purple-dark border border-purple/10",
    progress: "bg-purple",
    textHover: "group-hover/card:text-purple",
    pillActive: "bg-purple text-primary-foreground border-purple",
    cardHover: "hover:border-purple/40",
    iconBox: "bg-purple-light text-purple-dark",
    hoverBorder: "hover:border-purple/50 dark:hover:border-purple-dark/50",
  },
  founder: {
    border: "border-amber",
    glow: "from-amber-bg/30",
    badge: "bg-amber-bg text-amber border border-amber/10",
    progress: "bg-amber",
    textHover: "group-hover/card:text-amber",
    pillActive: "bg-amber text-primary-foreground border-amber",
    cardHover: "hover:border-amber/40",
    iconBox: "bg-amber-bg text-amber",
    hoverBorder: "hover:border-amber/50 dark:hover:border-amber/50",
  },
  "business-leader": {
    border: "border-blue",
    glow: "from-blue-bg/30",
    badge: "bg-blue-bg text-blue border border-blue/10",
    progress: "bg-blue",
    textHover: "group-hover/card:text-blue",
    pillActive: "bg-blue text-primary-foreground border-blue",
    cardHover: "hover:border-blue/40",
    iconBox: "bg-blue-bg text-blue",
    hoverBorder: "hover:border-blue/50 dark:hover:border-blue/50",
  },
};

export type Role = {
  id: RoleId;
  title: string;
  description: string;
  icon: LucideIcon;
  popular?: boolean;
};

export const ROLES: Role[] = [
  {
    id: "pm",
    title: "Product Manager",
    description:
      "Understand AI well enough to write better specs, challenge your engineering team, and spot BS in vendor pitches.",
    icon: Briefcase,
    popular: true,
  },
  {
    id: "founder",
    title: "Founder/CEO",
    description:
      "Make AI strategy, vendor, and roadmap calls with confidence — without needing to become an engineer first.",
    icon: Crown,
  },
  {
    id: "business-leader",
    title: "Business Leader",
    description:
      "Lead AI adoption in your function — vendor selection, ROI, governance, and change management without a technical background.",
    icon: UserCog,
  },
];
