import { useState, useMemo } from "react";
import type {
  QuizQuestion,
  MCQQuestion,
  CategorizeQuestion,
  OrderQuestion,
} from "@/lib/concepts";
import { Check, HelpCircle, ArrowRight, GripVertical, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Quiz({
  questions,
  onComplete,
  nextSlug,
  nextTitle,
}: {
  questions: QuizQuestion[];
  onComplete: () => void;
  nextSlug?: string;
  nextTitle?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [solved, setSolved] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const kind = q.kind ?? "mcq";

  function reset() {
    setSolved(false);
    setFeedback(null);
  }

  function handleNext() {
    if (current === questions.length - 1) {
      setDone(true);
      onComplete();
    } else {
      setCurrent((c) => c + 1);
      reset();
    }
  }

  if (done) {
    return (
      <section className="hairline mt-8 overflow-hidden rounded-xl">
        <div className="bg-purple-light px-5 py-3 text-[13px] font-medium text-purple-dark">
          Concept check · complete
        </div>
        <div className="bg-card px-6 py-8 text-center">
          <div
            className="mx-auto mb-3 flex items-center justify-center rounded-full bg-success-bg text-success"
            style={{ width: 44, height: 44 }}
          >
            <Check size={22} />
          </div>
          <h3 className="text-[17px] font-medium text-foreground">Concept complete!</h3>
          <p className="mx-auto mt-1 max-w-md text-[13px] text-muted-foreground">
            Nicely done. You can move on, or come back to re-read anytime.
          </p>
          {nextSlug && (
            <Link
              to="/playbook/$slug"
              params={{ slug: nextSlug }}
              className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-purple px-4 py-2 text-[13px] font-medium text-white hover:bg-purple-dark"
            >
              Next: {nextTitle} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>
    );
  }

  const kindLabel =
    kind === "categorize" ? "Sort into categories" : kind === "order" ? "Put in order" : "Multiple choice";

  return (
    <section className="hairline mt-8 overflow-hidden rounded-xl">
      <div className="flex items-center justify-between gap-2 bg-purple-light px-5 py-3 text-[13px] font-medium text-purple-dark">
        <div className="flex items-center gap-2">
          <HelpCircle size={14} />
          Concept check · {current + 1} of {questions.length}
        </div>
        <span className="text-[11px] uppercase tracking-wider opacity-70">{kindLabel}</span>
      </div>
      <div className="bg-card px-6 py-6">
        <h3 className="text-[14px] font-medium text-foreground">{q.q}</h3>

        <div className="mt-4">
          {kind === "mcq" && (
            <MCQ
              key={current}
              q={q as MCQQuestion}
              solved={solved}
              feedback={feedback}
              onSolve={(ok) => {
                if (ok) {
                  setSolved(true);
                  setFeedback("correct");
                } else {
                  setFeedback("wrong");
                }
              }}
            />
          )}
          {kind === "categorize" && (
            <Categorize
              key={current}
              q={q as CategorizeQuestion}
              solved={solved}
              feedback={feedback}
              onCheck={(ok) => {
                if (ok) {
                  setSolved(true);
                  setFeedback("correct");
                } else {
                  setFeedback("wrong");
                }
              }}
              onRetry={reset}
            />
          )}
          {kind === "order" && (
            <Order
              key={current}
              q={q as OrderQuestion}
              solved={solved}
              feedback={feedback}
              onCheck={(ok) => {
                if (ok) {
                  setSolved(true);
                  setFeedback("correct");
                } else {
                  setFeedback("wrong");
                }
              }}
              onRetry={reset}
            />
          )}
        </div>

        {feedback === "wrong" && !solved && (
          <div className="mt-4 rounded-md bg-error-bg/50 px-4 py-3 text-[13px] text-error">
            {q.wrongFeedback}
          </div>
        )}

        {solved && (
          <div className="mt-5 border-t border-muted/60 pt-5">
            <div className="rounded-md bg-success-bg/50 px-4 py-3 text-[13px] text-success mb-4 leading-relaxed">
              {q.correctFeedback}
            </div>
            <button
              onClick={handleNext}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-purple px-4 py-2.5 text-[13px] font-medium text-white hover:bg-purple-dark transition-colors"
            >
              {current === questions.length - 1 ? "Complete Concept" : "Next Question"}{" "}
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------- MCQ ------------------------- */
function MCQ({
  q,
  solved,
  feedback,
  onSolve,
}: {
  q: MCQQuestion;
  solved: boolean;
  feedback: "correct" | "wrong" | null;
  onSolve: (ok: boolean) => void;
}) {
  const [wrongPick, setWrongPick] = useState<number | null>(null);
  const [pickedCorrect, setPickedCorrect] = useState<number | null>(null);

  function handlePick(i: number) {
    if (solved) return;
    if (i === q.correct) {
      setPickedCorrect(i);
      onSolve(true);
    } else {
      setWrongPick(i);
      onSolve(false);
    }
  }

  return (
    <div className="space-y-2">
      {q.options.map((opt, i) => {
        const isCorrectPick = pickedCorrect === i;
        const isWrongPick = wrongPick === i && feedback === "wrong";
        const base =
          "hairline w-full rounded-xl px-4 py-2.5 text-left text-[13px] transition-colors";
        let cls = "hover:bg-muted";
        if (isCorrectPick) cls = "border-success bg-success-bg text-success";
        else if (isWrongPick) cls = "border-error bg-error-bg text-error";
        else if (solved) cls = "text-muted-foreground opacity-50";

        return (
          <button
            key={i}
            onClick={() => handlePick(i)}
            className={`${base} ${cls}`}
            disabled={solved}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------------- Categorize ---------------------- */
function Categorize({
  q,
  solved,
  feedback,
  onCheck,
  onRetry,
}: {
  q: CategorizeQuestion;
  solved: boolean;
  feedback: "correct" | "wrong" | null;
  onCheck: (ok: boolean) => void;
  onRetry: () => void;
}) {
  // assignment: itemIndex -> categoryIndex | null
  const initial = useMemo(() => q.items.map(() => null as number | null), [q]);
  const [assign, setAssign] = useState<(number | null)[]>(initial);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  function moveTo(itemIdx: number, cat: number | null) {
    if (solved) return;
    setAssign((a) => {
      const next = [...a];
      next[itemIdx] = cat;
      return next;
    });
  }

  function handleCheck() {
    const ok = assign.every((c, i) => c === q.items[i].category);
    onCheck(ok);
  }

  function handleReset() {
    setAssign(q.items.map(() => null));
    onRetry();
  }

  const unassigned = q.items
    .map((it, i) => ({ it, i }))
    .filter(({ i }) => assign[i] === null);

  const allAssigned = assign.every((c) => c !== null);

  return (
    <div className="space-y-4">
      {/* Pool */}
      <div
        className="hairline rounded-lg bg-muted/30 p-3 min-h-[60px]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          if (dragIdx !== null) moveTo(dragIdx, null);
          setDragIdx(null);
        }}
      >
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
          Drag each item into a category
        </p>
        <div className="flex flex-wrap gap-2">
          {unassigned.length === 0 && (
            <span className="text-[12px] italic text-muted-foreground">All sorted.</span>
          )}
          {unassigned.map(({ it, i }) => (
            <Chip
              key={i}
              text={it.text}
              draggable={!solved}
              onDragStart={() => setDragIdx(i)}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className={`grid gap-3 ${q.categories.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
        {q.categories.map((cat, ci) => {
          const items = q.items
            .map((it, i) => ({ it, i }))
            .filter(({ i }) => assign[i] === ci);
          return (
            <div
              key={ci}
              className={`hairline rounded-lg p-3 min-h-[110px] transition-colors ${
                solved ? "" : "bg-card"
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragIdx !== null) moveTo(dragIdx, ci);
                setDragIdx(null);
              }}
            >
              <p className="text-[12px] font-semibold text-foreground mb-2">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(({ it, i }) => {
                  const wrong = solved && it.category !== ci; // shouldn't happen if solved, but safe
                  const showRight = feedback && !solved;
                  const isMisplaced = showRight && it.category !== ci;
                  return (
                    <Chip
                      key={i}
                      text={it.text}
                      draggable={!solved}
                      onDragStart={() => setDragIdx(i)}
                      tone={isMisplaced ? "wrong" : solved ? "right" : wrong ? "wrong" : "default"}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {!solved && (
        <div className="flex gap-2">
          <button
            onClick={handleCheck}
            disabled={!allAssigned}
            className="rounded-md bg-purple px-4 py-2 text-[13px] font-medium text-white hover:bg-purple-dark disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check
          </button>
          {feedback === "wrong" && (
            <button
              onClick={handleReset}
              className="hairline inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] text-muted-foreground hover:bg-muted"
            >
              <RotateCcw size={13} /> Reset
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------- Order ------------------------- */
function Order({
  q,
  solved,
  feedback,
  onCheck,
  onRetry,
}: {
  q: OrderQuestion;
  solved: boolean;
  feedback: "correct" | "wrong" | null;
  onCheck: (ok: boolean) => void;
  onRetry: () => void;
}) {
  // shuffle once on mount
  const initial = useMemo(() => {
    const arr = q.items.map((_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // guard against unchanged
    if (arr.every((v, i) => v === i) && arr.length > 1) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr;
  }, [q]);

  const [order, setOrder] = useState<number[]>(initial);
  const [dragPos, setDragPos] = useState<number | null>(null);

  function dropAt(pos: number) {
    if (dragPos === null || solved) return;
    setOrder((o) => {
      const next = [...o];
      const [m] = next.splice(dragPos, 1);
      next.splice(pos, 0, m);
      return next;
    });
    setDragPos(null);
  }

  function handleCheck() {
    const ok = order.every((v, i) => v === i);
    onCheck(ok);
  }

  function handleReset() {
    setOrder(initial);
    onRetry();
  }

  return (
    <div className="space-y-3">
      {q.prompt && (
        <p className="text-[12px] text-muted-foreground italic">{q.prompt}</p>
      )}
      <ol className="space-y-2">
        {order.map((itemIdx, pos) => {
          const correctHere = solved || (feedback === null ? false : itemIdx === pos);
          const wrongHere = feedback === "wrong" && itemIdx !== pos;
          return (
            <li
              key={itemIdx}
              draggable={!solved}
              onDragStart={() => setDragPos(pos)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => dropAt(pos)}
              className={`hairline flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] cursor-grab active:cursor-grabbing transition-colors ${
                solved
                  ? "border-success bg-success-bg/40"
                  : wrongHere
                    ? "border-error/50"
                    : correctHere
                      ? "border-success/60"
                      : "bg-card hover:bg-muted"
              }`}
            >
              <span className="text-[11px] font-mono text-muted-foreground w-5">{pos + 1}.</span>
              <GripVertical size={14} className="text-muted-foreground shrink-0" />
              <span className="flex-1">{q.items[itemIdx]}</span>
            </li>
          );
        })}
      </ol>

      {!solved && (
        <div className="flex gap-2">
          <button
            onClick={handleCheck}
            className="rounded-md bg-purple px-4 py-2 text-[13px] font-medium text-white hover:bg-purple-dark"
          >
            Check order
          </button>
          {feedback === "wrong" && (
            <button
              onClick={handleReset}
              className="hairline inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] text-muted-foreground hover:bg-muted"
            >
              <RotateCcw size={13} /> Reshuffle
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------------- Chip -------------------------- */
function Chip({
  text,
  draggable,
  onDragStart,
  tone = "default",
}: {
  text: string;
  draggable: boolean;
  onDragStart: () => void;
  tone?: "default" | "right" | "wrong";
}) {
  const toneCls =
    tone === "right"
      ? "border-success/60 bg-success-bg/50 text-success"
      : tone === "wrong"
        ? "border-error/60 bg-error-bg/50 text-error"
        : "bg-card hover:bg-muted";
  return (
    <span
      draggable={draggable}
      onDragStart={onDragStart}
      className={`hairline inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] ${toneCls} ${
        draggable ? "cursor-grab active:cursor-grabbing" : "cursor-default"
      }`}
    >
      <GripVertical size={11} className="text-muted-foreground" />
      {text}
    </span>
  );
}
