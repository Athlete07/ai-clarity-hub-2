import { useEffect, useRef, useState } from "react";
import { Share2, Link as LinkIcon, Check, Twitter, Linkedin, Mail } from "lucide-react";

type Props = {
  title: string;
  summary: string;
  slug?: string;
  url?: string;
  variant?: "pill" | "ghost";
};

export function ShareMenu({ title, summary, slug, url: urlProp, variant = "pill" }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const url =
    urlProp ??
    (typeof window !== "undefined"
      ? `${window.location.origin}/playbook/${slug}`
      : `/playbook/${slug}`);
  const shareText = `${title} — ${summary}`;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClick = async () => {
    // Native share on mobile / supported browsers
    if (typeof navigator !== "undefined" && "share" in navigator && /Mobi|Android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({ title, text: summary, url });
        return;
      } catch {
        // user cancelled — fall through to menu
      }
    }
    setOpen((o) => !o);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const triggerCls =
    variant === "pill"
      ? "hairline inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      : "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        className={triggerCls}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Share this page"
      >
        <Share2 size={12} />
        Share
      </button>

      {open && (
        <div
          role="menu"
          className="animate-fade-in-down hairline absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-lg bg-popover p-1 shadow-lg"
        >
          <button
            role="menuitem"
            onClick={copyLink}
            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-[13px] text-foreground hover:bg-muted"
          >
            {copied ? (
              <>
                <Check size={14} className="text-success" />
                <span>Link copied</span>
              </>
            ) : (
              <>
                <LinkIcon size={14} />
                <span>Copy link</span>
              </>
            )}
          </button>
          <a
            role="menuitem"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-foreground hover:bg-muted"
          >
            <Twitter size={14} />
            Share on X
          </a>
          <a
            role="menuitem"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-foreground hover:bg-muted"
          >
            <Linkedin size={14} />
            Share on LinkedIn
          </a>
          <a
            role="menuitem"
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${summary}\n\n${url}`)}`}
            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-foreground hover:bg-muted"
          >
            <Mail size={14} />
            Email
          </a>
        </div>
      )}
    </div>
  );
}
