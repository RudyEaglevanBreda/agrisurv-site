/**
 * A stylised NDVI raster, generated deterministically so it reads like a real
 * crop-health heatmap (healthy canopy in green, stressed zones in orange/red).
 * Used as a brand motif in the hero and the sample-report section.
 */

function ndviColor(v: number): string {
  if (v >= 0.78) return "#1a7a3f";
  if (v >= 0.66) return "#39963f";
  if (v >= 0.55) return "#5aad46";
  if (v >= 0.46) return "#86c14a";
  if (v >= 0.38) return "#bcd24c";
  if (v >= 0.31) return "#e7d24a";
  if (v >= 0.24) return "#e89a3a";
  return "#d6533a";
}

type Blob = { cx: number; cy: number; strength: number; radius: number };

const STRESS_BLOBS: Blob[] = [
  { cx: 0.31, cy: 0.66, strength: 0.6, radius: 0.17 }, // main stress patch
  { cx: 0.8, cy: 0.32, strength: 0.34, radius: 0.13 }, // secondary dry zone
  { cx: 0.62, cy: 0.82, strength: 0.22, radius: 0.1 },
];

/** Field health at a normalised point, 0 (bare/dead) → 1 (vigorous). */
function health(nx: number, ny: number): number {
  let v = 0.82 - 0.1 * ny; // slight north-to-south gradient
  for (const b of STRESS_BLOBS) {
    const dx = nx - b.cx;
    const dy = ny - b.cy;
    const d2 = dx * dx + dy * dy;
    v -= b.strength * Math.exp(-d2 / (2 * b.radius * b.radius));
  }
  return Math.max(0.06, Math.min(0.94, v));
}

export default function NdviField({
  className = "",
  cols = 22,
  rows = 16,
  showFlightPath = true,
  rounded = true,
  ariaLabel = "Sample NDVI crop-health map showing healthy canopy in green and stressed zones highlighted in orange and red",
}: {
  className?: string;
  cols?: number;
  rows?: number;
  showFlightPath?: boolean;
  rounded?: boolean;
  ariaLabel?: string;
}) {
  const W = 660;
  const H = 480;
  const pad = 14;
  const gap = 2;
  const cellW = (W - pad * 2 - gap * (cols - 1)) / cols;
  const cellH = (H - pad * 2 - gap * (rows - 1)) / rows;

  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const nx = (c + 0.5) / cols;
      const ny = (r + 0.5) / rows;
      const v = health(nx, ny);
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={pad + c * (cellW + gap)}
          y={pad + r * (cellH + gap)}
          width={cellW}
          height={cellH}
          rx={rounded ? 1.5 : 0}
          fill={ndviColor(v)}
        />,
      );
    }
  }

  // Marker sits over the main stress patch.
  const markerX = pad + 0.31 * (W - pad * 2);
  const markerY = pad + 0.66 * (H - pad * 2);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <clipPath id="fieldClip">
          <rect x={pad - 4} y={pad - 4} width={W - pad * 2 + 8} height={H - pad * 2 + 8} rx={16} />
        </clipPath>
      </defs>

      <rect x="0" y="0" width={W} height={H} rx="20" fill="#0f1f17" />
      <g clipPath="url(#fieldClip)">
        {cells}

        {showFlightPath && (
          <path
            d={`M ${pad + 6} ${pad + cellH}
                H ${W - pad - 6}
                M ${W - pad - 6} ${pad + cellH * 3.4}
                H ${pad + 6}
                M ${pad + 6} ${pad + cellH * 5.8}
                H ${W - pad - 6}`}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            strokeLinecap="round"
          />
        )}
      </g>

      {/* Stress marker */}
      <g transform={`translate(${markerX}, ${markerY})`}>
        <circle r="26" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.85" />
        <circle r="26" fill="#d6533a" opacity="0.12" />
        <circle r="4" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function NdviLegend({
  className = "",
  lowLabel = "Low",
  highLabel = "High NDVI",
}: {
  className?: string;
  lowLabel?: string;
  highLabel?: string;
}) {
  const stops = ["#d6533a", "#e89a3a", "#e7d24a", "#bcd24c", "#86c14a", "#39963f", "#1a7a3f"];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-xs font-medium text-forest-600">{lowLabel}</span>
      <div className="flex h-2.5 w-40 overflow-hidden rounded-full">
        {stops.map((c) => (
          <span key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
      <span className="text-xs font-medium text-forest-600">{highLabel}</span>
    </div>
  );
}
