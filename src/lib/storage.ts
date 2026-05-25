import { useEffect, useState, useCallback } from "react";

const PROGRESS_KEY = "factorbeam:progress";
const GLOSSARY_KEY = "factorbeam:glossary";
const STREAK_KEY = "factorbeam:streak";
const READ_MODE_KEY = "factorbeam:readMode";
const SECTIONS_VIEWED_KEY = "factorbeam:sectionsViewed";
const SAVED_DEPTH_KEY = "factorbeam:savedDepth";

export type ReadMode = "deep" | "skim";

export function useReadMode(): [ReadMode, (m: ReadMode) => void] {
  const [mode, setMode] = useState<ReadMode>("deep");
  useEffect(() => {
    setMode(readJson<ReadMode>(READ_MODE_KEY, "deep"));
    const onChange = () => setMode(readJson<ReadMode>(READ_MODE_KEY, "deep"));
    window.addEventListener("factorbeam:storage", onChange);
    return () => window.removeEventListener("factorbeam:storage", onChange);
  }, []);
  const update = useCallback((m: ReadMode) => {
    writeJson(READ_MODE_KEY, m);
    setMode(m);
  }, []);
  return [mode, update];
}

export type Progress = {
  // slug -> "in-progress" | "done"
  [slug: string]: "in-progress" | "done";
};

export type GlossaryEntry = {
  id: string;
  term: string;
  explanation: string;
  addedAt: number;
};

export type StreakState = {
  count: number;
  lastVisit: string; // YYYY-MM-DD
};

const isBrowser = () => typeof window !== "undefined";

function readJson<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("factorbeam:storage", { detail: { key } }));
  } catch {
    // ignore
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    setProgress(readJson<Progress>(PROGRESS_KEY, {}));
    const onChange = () => setProgress(readJson<Progress>(PROGRESS_KEY, {}));
    window.addEventListener("factorbeam:storage", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("factorbeam:storage", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const markDone = useCallback((slug: string) => {
    const next = { ...readJson<Progress>(PROGRESS_KEY, {}), [slug]: "done" as const };
    writeJson(PROGRESS_KEY, next);
    setProgress(next);
  }, []);

  const markInProgress = useCallback((slug: string) => {
    const current = readJson<Progress>(PROGRESS_KEY, {});
    if (current[slug] === "done") return;
    const next = { ...current, [slug]: "in-progress" as const };
    writeJson(PROGRESS_KEY, next);
    setProgress(next);
  }, []);

  return { progress, markDone, markInProgress };
}

export function useGlossary() {
  const [entries, setEntries] = useState<GlossaryEntry[]>([]);

  useEffect(() => {
    setEntries(readJson<GlossaryEntry[]>(GLOSSARY_KEY, []));
    const onChange = () => setEntries(readJson<GlossaryEntry[]>(GLOSSARY_KEY, []));
    window.addEventListener("factorbeam:storage", onChange);
    return () => window.removeEventListener("factorbeam:storage", onChange);
  }, []);

  const add = useCallback((term: string, explanation: string) => {
    const list = readJson<GlossaryEntry[]>(GLOSSARY_KEY, []);
    if (list.some((e) => e.term.trim().toLowerCase() === term.trim().toLowerCase())) return;
    const next = [{ id: crypto.randomUUID(), term, explanation, addedAt: Date.now() }, ...list];
    writeJson(GLOSSARY_KEY, next);
    setEntries(next);
  }, []);

  const remove = useCallback((id: string) => {
    const next = readJson<GlossaryEntry[]>(GLOSSARY_KEY, []).filter((e) => e.id !== id);
    writeJson(GLOSSARY_KEY, next);
    setEntries(next);
  }, []);

  return { entries, add, remove };
}

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00");
  const db = new Date(b + "T00:00:00");
  return Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
}

export function useStreak(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = today();
    const state = readJson<StreakState>(STREAK_KEY, { count: 0, lastVisit: "" });
    let next: StreakState;
    if (!state.lastVisit) {
      next = { count: 1, lastVisit: t };
    } else {
      const diff = daysBetween(state.lastVisit, t);
      if (diff === 0) next = state;
      else if (diff === 1) next = { count: state.count + 1, lastVisit: t };
      else next = { count: 1, lastVisit: t };
    }
    writeJson(STREAK_KEY, next);
    setCount(next.count);
  }, []);

  return count;
}

// Sections viewed: { [slug]: string[] of section numbers like "1.2" }
export function useSectionsViewed(slug: string) {
  const [viewed, setViewed] = useState<string[]>([]);
  useEffect(() => {
    const all = readJson<Record<string, string[]>>(SECTIONS_VIEWED_KEY, {});
    setViewed(all[slug] || []);
    const onChange = () => {
      const a = readJson<Record<string, string[]>>(SECTIONS_VIEWED_KEY, {});
      setViewed(a[slug] || []);
    };
    window.addEventListener("factorbeam:storage", onChange);
    return () => window.removeEventListener("factorbeam:storage", onChange);
  }, [slug]);
  const markViewed = useCallback(
    (sectionNum: string) => {
      const all = readJson<Record<string, string[]>>(SECTIONS_VIEWED_KEY, {});
      const list = all[slug] || [];
      if (list.includes(sectionNum)) return;
      all[slug] = [...list, sectionNum];
      writeJson(SECTIONS_VIEWED_KEY, all);
    },
    [slug],
  );
  return { viewed, markViewed };
}

// Saved depth folds: { slug, sectionNum, title }[]
export type SavedDepth = { slug: string; sectionNum: string; title: string; savedAt: number };
export function useSavedDepth() {
  const [items, setItems] = useState<SavedDepth[]>([]);
  useEffect(() => {
    setItems(readJson<SavedDepth[]>(SAVED_DEPTH_KEY, []));
    const onChange = () => setItems(readJson<SavedDepth[]>(SAVED_DEPTH_KEY, []));
    window.addEventListener("factorbeam:storage", onChange);
    return () => window.removeEventListener("factorbeam:storage", onChange);
  }, []);
  const toggle = useCallback((slug: string, sectionNum: string, title: string) => {
    const list = readJson<SavedDepth[]>(SAVED_DEPTH_KEY, []);
    const exists = list.some((i) => i.slug === slug && i.sectionNum === sectionNum);
    const next = exists
      ? list.filter((i) => !(i.slug === slug && i.sectionNum === sectionNum))
      : [{ slug, sectionNum, title, savedAt: Date.now() }, ...list];
    writeJson(SAVED_DEPTH_KEY, next);
    setItems(next);
  }, []);
  const isSaved = useCallback(
    (slug: string, sectionNum: string) =>
      items.some((i) => i.slug === slug && i.sectionNum === sectionNum),
    [items],
  );
  return { items, toggle, isSaved };
}
