import { NodeStatus, type AgentId } from "./types";

export type DrillPhase = "watch" | "livelock" | "lock" | "path" | "release" | "done";

export interface DrillNode {
  id: string;
  label: string;
  status: NodeStatus;
  x: number;
  y: number;
}

/**
 * Interactive 3-node tutorial drill — isolated from main session engine.
 */
export class TutorialDrill {
  nodes: DrillNode[] = [
    { id: "t1", label: "Ingest", status: NodeStatus.COMPLETED, x: 120, y: 60 },
    { id: "t2", label: "Infer", status: NodeStatus.RUNNING, x: 280, y: 60 },
    { id: "t3", label: "Emit", status: NodeStatus.PENDING, x: 440, y: 60 },
  ];
  phase: DrillPhase = "watch";
  selectedId: string | null = null;
  pathConfirmed = false;
  private startedAt = Date.now();

  tick(): void {
    const elapsed = Date.now() - this.startedAt;
    if (this.phase === "watch" && elapsed > 2200) {
      this.nodes[1].status = NodeStatus.LIVELOCK;
      this.phase = "livelock";
    }
  }

  select(id: string): void {
    this.selectedId = id;
    if (this.phase === "livelock" && id === "t2") this.phase = "lock";
  }

  applyMutex(): boolean {
    if (this.phase !== "lock" || this.selectedId !== "t2") return false;
    this.nodes[1].status = NodeStatus.LOCKED;
    this.phase = "path";
    return true;
  }

  serializePath(): boolean {
    if (this.phase !== "path") return false;
    this.pathConfirmed = true;
    this.phase = "release";
    return true;
  }

  release(): boolean {
    if (this.phase !== "release" || !this.pathConfirmed) return false;
    this.nodes[1].status = NodeStatus.COMPLETED;
    this.nodes[2].status = NodeStatus.READY;
    this.phase = "done";
    return true;
  }

  getPath(): string[] {
    return ["t1", "t2"];
  }

  dispatch(_agent: AgentId, nodeId: string): boolean {
    if (nodeId !== "t3" || this.phase !== "done") return false;
    this.nodes[2].status = NodeStatus.RUNNING;
    return true;
  }
}
