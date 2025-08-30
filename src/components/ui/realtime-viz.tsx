import React from "react";

/**
 * RealtimeViz – lightweight SVG animation that visualizes real‑time
 * bi‑directional data flow between a teacher and multiple students.
 * No external deps; works with GitHub Pages.
 */
export function RealtimeViz() {
  // Tiny counters to suggest live activity
  const [ticks, setTicks] = React.useState({ out: 0, in: 0 });
  React.useEffect(() => {
    const id = setInterval(() => {
      setTicks((t) => ({ out: t.out + Math.ceil(Math.random() * 3), in: t.in + Math.ceil(Math.random() * 2) }));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm">
      {/* 16:9 aspect ratio box */}
      <div className="relative w-full pt-[56.25%]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 450"
          aria-label="Visualization of real-time data flow between teacher and students"
        >
          <defs>
            <linearGradient id="grad-out" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(346 77% 49%)" />
              <stop offset="100%" stopColor="hsl(14 93% 58%)" />
            </linearGradient>
            <linearGradient id="grad-in" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="hsl(221 83% 53%)" />
              <stop offset="100%" stopColor="hsl(199 89% 48%)" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Curved paths: teacher ↔ students */}
          {/* Outgoing (teacher → students) */}
          <path d="M160,225 Q360,40 640,120" fill="none" stroke="url(#grad-out)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
          <path d="M160,225 Q360,180 640,225" fill="none" stroke="url(#grad-out)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />
          <path d="M160,225 Q360,330 640,330" fill="none" stroke="url(#grad-out)" strokeWidth="3" className="animate-dash" strokeDasharray="6 10" />

          {/* Incoming (students → teacher) */}
          <path d="M640,120 Q360,80 160,225" fill="none" stroke="url(#grad-in)" strokeWidth="3" className="animate-dash " strokeDasharray="6 10" />
          <path d="M640,225 Q360,220 160,225" fill="none" stroke="url(#grad-in)" strokeWidth="3" className="animate-dash " strokeDasharray="6 10" />
          <path d="M640,330 Q360,370 160,225" fill="none" stroke="url(#grad-in)" strokeWidth="3" className="animate-dash " strokeDasharray="6 10" />

          {/* Teacher node */}
          <g transform="translate(160,225)">
            <circle r="44" fill="hsl(346 77% 49%)" opacity="0.12" filter="url(#softGlow)" />
            <circle r="34" fill="hsl(346 77% 49%)" />
            <circle r="34" className="animate-ping" fill="hsl(346 77% 49% / 0.35)" />
            <text x="0" y="5" textAnchor="middle" fontSize="13" fill="white" style={{ fontWeight: 600 }}>Teacher</text>
            {/* <g transform="translate(-50,-58)">
              <rect rx="6" ry="6" width="80" height="24" fill="hsl(0 0% 100% / 0.9)" />
              <text x="40" y="16" textAnchor="middle" fontSize="12" fill="hsl(0 0% 13%)">send {ticks.out}</text>
            </g> */}
          </g>

          {/* Student nodes */}
          {[
            { x: 640, y: 120, label: "Student A" },
            { x: 640, y: 225, label: "Student B" },
            { x: 640, y: 330, label: "Student C" },
          ].map((s, i) => (
            <g key={i} transform={`translate(${s.x},${s.y})`}>
              <circle r="40" fill="hsl(221 83% 53%)" opacity="0.12" filter="url(#softGlow)" />
              <circle r="30" fill="hsl(221 83% 53%)" />
              <circle r="30" className="animate-ping" fill="hsl(221 83% 53% / 0.35)" />
              <text x="0" y="5" textAnchor="middle" fontSize="12" fill="white" style={{ fontWeight: 600 }}>{s.label}</text>
            </g>
          ))}

          {/* Incoming packets counter near center */}
          {/* <g transform="translate(380,210)">
            <rect rx="6" ry="6" width="110" height="24" fill="hsl(0 0% 100% / 0.9)" />
            <text x="55" y="16" textAnchor="middle" fontSize="12" fill="hsl(0 0% 13%)">receive {ticks.in}</text>
          </g> */}
        </svg>
      </div>

      {/* Local styles for the dashed motion */}
      <style>{`
        @keyframes dash { to { stroke-dashoffset: -200; } }
        .animate-dash { animation: dash 1.6s linear infinite; }
        .animate-dash.reverse { animation-direction: reverse; }
      `}</style>
    </div>
  );
}