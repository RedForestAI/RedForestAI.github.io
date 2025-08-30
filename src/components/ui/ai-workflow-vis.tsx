import React from "react";

/**
 * AIWorkflowViz – SVG hero that *shows* how the lab uses AI to assist teacher workflows:
 * Teacher → LLM Orchestrator → { Item Generator, Difficulty Adapter, Dashboard }.
 * Animated dashed flows + live counters/bars. No external deps; GH Pages friendly.
 */
export function AIWorkflowViz() {
  const [items, setItems] = React.useState(0);
  const [difficulty, setDifficulty] = React.useState(0.6); // 0..1
  const [mastery, setMastery] = React.useState(0.72); // 0..1
  const [alerts, setAlerts] = React.useState(3);

  React.useEffect(() => {
    const id = setInterval(() => {
      setItems((n) => n + Math.ceil(Math.random() * 3));
      // Oscillate difficulty gently between 0.35 and 0.9
      setDifficulty((d) => {
        const next = d + (Math.random() * 0.18 - 0.09);
        return Math.max(0.35, Math.min(0.9, next));
      });
      // Drift mastery 0.55..0.92
      setMastery((m) => {
        const next = m + (Math.random() * 0.08 - 0.04);
        return Math.max(0.55, Math.min(0.92, next));
      });
      // Alerts bounce 1..6
      setAlerts((a) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = a + delta;
        return Math.max(1, Math.min(6, next));
      });
    }, 1100);
    return () => clearInterval(id);
  }, []);

  const pct = (x: number) => Math.round(x * 100);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
      {/* 16:9 aspect ratio */}
      <div className="relative w-full pt-[56.25%]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 900 506"
          aria-label="AI assisting teacher workflows visualization"
        >
          <defs>
            <linearGradient id="from-teacher" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(346 77% 49%)" />
              <stop offset="100%" stopColor="hsl(14 93% 58%)" />
            </linearGradient>
            <linearGradient id="to-tools" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(221 83% 53%)" />
              <stop offset="100%" stopColor="hsl(199 89% 48%)" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Teacher node (left) */}
          <g transform="translate(130,253)">
            <circle r="46" fill="hsl(346 77% 49%)" opacity="0.12" filter="url(#glow)" />
            <circle r="36" fill="hsl(346 77% 49%)" />
            <circle r="36" className="animate-ping" fill="hsl(346 77% 49% / 0.35)" />
            <text x="0" y="5" fontSize="13" textAnchor="middle" fill="white" style={{ fontWeight: 600 }}>Teacher</text>
          </g>

          {/* LLM Orchestrator (center) */}
          <g transform="translate(450,253)">
            <rect x="-95" y="-40" rx="14" ry="14" width="190" height="80" fill="hsl(260 80% 60%)" opacity="0.12" filter="url(#glow)" />
            <rect x="-85" y="-32" rx="10" ry="10" width="170" height="64" fill="hsl(260 80% 60%)" />
            <text x="0" y="4" fontSize="14" textAnchor="middle" fill="white" style={{ fontWeight: 700 }}>LLM Collaborator</text>
            <text x="0" y="22" fontSize="11" textAnchor="middle" fill="white" opacity="0.9">prompting • checking • routing</text>
          </g>

          {/* Tools (right) */}
          {/* Item Generator */}
          <g transform="translate(760,140)">
            <rect x="-82" y="-40" rx="10" ry="10" width="164" height="80" fill="hsl(210 15% 92% / 0.9)" stroke="hsl(210 16% 82%)" />
            <text x="0" y="-12" fontSize="13" textAnchor="middle" fill="hsl(210 10% 20%)" style={{ fontWeight: 600 }}>Item Generator</text>
            <text x="0" y="10" fontSize="11" textAnchor="middle" fill="hsl(210 10% 30%)">items: {items}</text>
            {/* tiny item bar */}
            <rect x="-60" y="20" width="120" height="6" rx="3" fill="hsl(210 16% 90%)" />
            <rect x="-60" y="20" width={Math.min(120, 20 + (items % 100))} height="6" rx="3" fill="hsl(14 93% 58%)" />
          </g>

          {/* Difficulty Adapter */}
          <g transform="translate(760,253)">
            <rect x="-82" y="-40" rx="10" ry="10" width="164" height="80" fill="hsl(210 15% 92% / 0.9)" stroke="hsl(210 16% 82%)" />
            <text x="0" y="-12" fontSize="13" textAnchor="middle" fill="hsl(210 10% 20%)" style={{ fontWeight: 600 }}>Difficulty Adapter</text>
            <text x="0" y="10" fontSize="11" textAnchor="middle" fill="hsl(210 10% 30%)">target: {pct(difficulty)}%</text>
            {/* gauge */}
            <rect x="-60" y="20" width="120" height="6" rx="3" fill="hsl(210 16% 90%)" />
            <rect x="-60" y="20" width={Math.round(120 * difficulty)} height="6" rx="3" fill="hsl(221 83% 53%)" />
          </g>

          {/* Dashboard */}
          <g transform="translate(760,366)">
            <rect x="-82" y="-40" rx="10" ry="10" width="164" height="80" fill="hsl(210 15% 92% / 0.9)" stroke="hsl(210 16% 82%)" />
            <text x="0" y="-12" fontSize="13" textAnchor="middle" fill="hsl(210 10% 20%)" style={{ fontWeight: 600 }}>Dashboard</text>
            <text x="0" y="10" fontSize="11" textAnchor="middle" fill="hsl(210 10% 30%)">mastery: {pct(mastery)}%</text>
            <text x="0" y="26" fontSize="11" textAnchor="middle" fill="hsl(210 10% 30%)">alerts: {alerts}</text>
          </g>

          {/* Flows */}
          {/* Teacher → LLM */}
          <path d="M176,253 C250,253 350,252 360,253" fill="none" stroke="url(#from-teacher)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
          {/* LLM → Item Generator */}
          <path d="M498,246 C580,210 650,176 706,160" fill="none" stroke="url(#to-tools)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
          {/* LLM → Difficulty */}
          <path d="M498,253 C590,253 660,254 706,253" fill="none" stroke="url(#to-tools)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
          {/* LLM → Dashboard */}
          <path d="M498,260 C580,296 650,330 706,346" fill="none" stroke="url(#to-tools)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
        </svg>
      </div>

      <style>{`
        @keyframes dash { to { stroke-dashoffset: -200; } }
        .animate-dash { animation: dash 1.6s linear infinite; }
      `}</style>
    </div>
  );
}
