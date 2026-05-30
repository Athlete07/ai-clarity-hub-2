import { useHasConsent } from "@/lib/consent";

type Props = {
  slot?: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Renders an ad placeholder only after the user has granted the "ads" consent.
 * Wrap any real ad-network script (AdSense, GAM, etc.) inside this component
 * so it never loads without consent.
 */
export function AdSlot({ slot, className, children }: Props) {
  const allowed = useHasConsent("ads");
  if (!allowed) return null;
  return (
    <div
      data-ad-slot={slot}
      className={className ?? "hairline rounded-md bg-muted/40 p-3 text-[12px] text-muted-foreground"}
    >
      {children ?? <span>Advertisement</span>}
    </div>
  );
}
