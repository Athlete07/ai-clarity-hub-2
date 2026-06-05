import { useEffect, useState, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";
const KEY = "factorbeam:theme";

function getInitial(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

const subscribe = (cb: () => void) => {
  const onStorage = () => cb();
  const onTheme = () => cb();
  window.addEventListener("storage", onStorage);
  window.addEventListener("factorbeam:theme", onTheme);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("factorbeam:theme", onTheme);
  };
};

const getSnapshot = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getServerSnapshot = (): Theme => "light";

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    apply(theme);
  }, [theme]);

  const setTheme = (next: Theme) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    window.dispatchEvent(new CustomEvent("factorbeam:theme", { detail: next }));
    apply(next);
  };

  return {
    theme,
    mounted,
    setTheme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
