import { loadLeaderboard } from "@/lib/agent-overseer/storage";
import { useEffect, useState } from "react";
import type { LeaderboardEntry } from "@/lib/agent-overseer/types";

export function LeaderboardPanel({ entries }: { entries?: LeaderboardEntry[] }) {
  const [board, setBoard] = useState<LeaderboardEntry[]>(entries ?? []);

  useEffect(() => {
    if (!entries?.length) setBoard(loadLeaderboard());
    else setBoard(entries);
  }, [entries]);

  if (!board.length) return null;

  return (
    <div className="mt-4 rounded-lg border border-[#0D1B2A] bg-[#0D1B2A]/40 p-3 text-left">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A7FA5]">
        Local Leaderboard
      </p>
      <ol className="mt-2 space-y-1 font-mono text-[11px]">
        {board.slice(0, 5).map((e, i) => (
          <li key={`${e.timestamp}-${i}`} className="flex justify-between text-[#E8F4FD]">
            <span>
              #{i + 1} {e.playerId}
            </span>
            <span className="text-[#00F5FF]">{e.score.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
