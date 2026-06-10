type Sfx = "dispatch" | "complete" | "livelock" | "mutex" | "release" | "wave" | "penalty";

let ctx: AudioContext | null = null;
let audioEnabled = false;
const activeNodes = new Set<AudioScheduledSourceNode>();

function getCtx(): AudioContext | null {
  if (typeof window === "undefined" || !audioEnabled) return null;
  if (!ctx || ctx.state === "closed") {
    try {
      ctx = new AudioContext();
    } catch {
      return null;
    }
  }
  return ctx;
}

function trackSource(node: AudioScheduledSourceNode): void {
  activeNodes.add(node);
  node.addEventListener(
    "ended",
    () => {
      activeNodes.delete(node);
    },
    { once: true },
  );
}

function tone(freq: number, duration: number, type: OscillatorType = "sine", gain = 0.06): void {
  if (!audioEnabled) return;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const ac = getCtx();
  if (!ac) return;
  void ac.resume();
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gain;
  osc.connect(g);
  g.connect(ac.destination);
  trackSource(osc);
  osc.start();
  g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + duration);
  osc.stop(ac.currentTime + duration);
}

/** Call when the game route mounts / engine starts. */
export function initGameAudio(): void {
  audioEnabled = true;
}

/** Stop all sounds and release audio resources when leaving the game. */
export function disposeGameAudio(): void {
  audioEnabled = false;
  for (const node of activeNodes) {
    try {
      node.stop();
    } catch {
      // Already stopped.
    }
    try {
      node.disconnect();
    } catch {
      // ignore
    }
  }
  activeNodes.clear();
  if (ctx && ctx.state !== "closed") {
    void ctx.close();
  }
  ctx = null;
}

export function playSfx(kind: Sfx): void {
  if (!audioEnabled) return;
  switch (kind) {
    case "dispatch":
      tone(520, 0.08, "triangle");
      break;
    case "complete":
      tone(660, 0.1);
      tone(880, 0.12);
      break;
    case "livelock":
      tone(180, 0.25, "sawtooth", 0.08);
      break;
    case "mutex":
      tone(320, 0.15, "square", 0.04);
      break;
    case "release":
      tone(440, 0.1);
      tone(554, 0.14);
      break;
    case "wave":
      tone(523, 0.12);
      tone(659, 0.12);
      tone(784, 0.18);
      break;
    case "penalty":
      tone(140, 0.2, "sawtooth", 0.07);
      break;
  }
}
