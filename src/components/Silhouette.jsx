import { RARITY_STYLES } from '../inventory.js';

export default function Silhouette({ eq }) {
  const RC = RARITY_STYLES;
  const skinBase = "#1a1f2e";
  const skinEdge = "#252b3d";

  const topColor    = eq.Top       ? RC[eq.Top.r].bd       : skinBase;
  const topEdge     = eq.Top       ? RC[eq.Top.r].bg       : "#0d1117";
  const bottomColor = eq.Bottom    ? RC[eq.Bottom.r].bd    : skinBase;
  const bottomEdge  = eq.Bottom    ? RC[eq.Bottom.r].bg    : "#0d1117";
  const shoeColor   = eq.Shoes     ? RC[eq.Shoes.r].bd     : skinBase;
  const shoeEdge    = eq.Shoes     ? RC[eq.Shoes.r].bg     : "#0d1117";
  const hairColor   = eq.Hair      ? RC[eq.Hair.r].bd      : "#1a1f2e";
  const accColor    = eq.Accessory ? RC[eq.Accessory.r].bd : null;

  return (
    <svg width="130" height="320" viewBox="0 0 130 320" style={{overflow:"visible"}}>
      <defs>
        <radialGradient id="faceGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a3050"/>
          <stop offset="100%" stopColor="#0d1117"/>
        </radialGradient>
      </defs>

      {eq.Hair ? (
        <ellipse cx="65" cy="28" rx="28" ry="34" fill={hairColor} opacity="0.9"/>
      ) : (
        <ellipse cx="65" cy="28" rx="26" ry="30" fill="#0d1117" stroke="#1a2030" strokeWidth="1"/>
      )}

      <rect x="58" y="68" width="14" height="18" rx="4"
        fill="url(#faceGlow)" stroke={skinEdge} strokeWidth="1"/>
      <ellipse cx="65" cy="46" rx="24" ry="28"
        fill="url(#faceGlow)" stroke={skinEdge} strokeWidth="1.5"/>

      <ellipse cx="57" cy="44" rx="3.5" ry="2.5"
        fill={eq.Face ? RC[eq.Face.r].bd : "#3b4568"}/>
      <ellipse cx="73" cy="44" rx="3.5" ry="2.5"
        fill={eq.Face ? RC[eq.Face.r].bd : "#3b4568"}/>
      <circle cx="58.5" cy="43" r="1" fill="white" opacity="0.6"/>
      <circle cx="74.5" cy="43" r="1" fill="white" opacity="0.6"/>
      <path d="M65 49 Q63 53 65 54 Q67 53 65 49" fill="none"
        stroke={skinEdge} strokeWidth="1" opacity="0.5"/>
      <path d="M60 58 Q65 61 70 58" fill="none"
        stroke={eq.Face ? RC[eq.Face.r].bd : "#3b4568"}
        strokeWidth="1.5" strokeLinecap="round"/>

      {eq.Head && (
        <text x="65" y="22" textAnchor="middle" fontSize="18"
          style={{filter:`drop-shadow(0 0 4px ${RC[eq.Head.r].bd})`}}>
          {eq.Head.e}
        </text>
      )}
      {eq.Face && (
        <text x="65" y="56" textAnchor="middle" fontSize="10" opacity="0.7">
          {eq.Face.e}
        </text>
      )}

      <path d="M41 86 Q28 90 26 105 L26 175 Q26 182 33 182 L44 182 L44 105 Q44 92 55 88 Z"
        fill={topColor} stroke={topEdge} strokeWidth="1.5"/>
      <path d="M89 86 Q102 90 104 105 L104 175 Q104 182 97 182 L86 182 L86 105 Q86 92 75 88 Z"
        fill={topColor} stroke={topEdge} strokeWidth="1.5"/>
      <path d="M44 88 Q55 84 65 84 Q75 84 86 88 L88 175 Q88 184 65 184 Q42 184 42 175 Z"
        fill={topColor} stroke={topEdge} strokeWidth="1.5"/>
      <path d="M55 88 L65 104 L75 88" fill="none"
        stroke={eq.Top ? RC[eq.Top.r].lbl : "#1a2030"}
        strokeWidth="1.5" strokeLinecap="round"/>
      {eq.Top && (
        <path d="M48 130 Q65 126 82 130" fill="none"
          stroke={RC[eq.Top.r].lbl} strokeWidth="0.8" opacity="0.4"/>
      )}

      {eq.Accessory && accColor && (
        <path d="M50 100 Q65 110 80 100" fill="none"
          stroke={accColor} strokeWidth="2" opacity="0.9"/>
      )}

      <path d="M26 105 Q22 140 24 175 Q25 183 30 183 L44 183 L44 105 Z"
        fill={topColor} stroke={topEdge} strokeWidth="1"/>
      <path d="M104 105 Q108 140 106 175 Q105 183 100 183 L86 183 L86 105 Z"
        fill={topColor} stroke={topEdge} strokeWidth="1"/>

      <rect x="42" y="181" width="46" height="8" rx="2"
        fill={eq.Bottom ? RC[eq.Bottom.r].bd : "#1a2030"}
        stroke={eq.Bottom ? RC[eq.Bottom.r].lbl : "#252b3d"}
        strokeWidth="1" opacity="0.8"/>

      <path d="M42 188 L42 265 Q42 273 52 273 L60 273 L62 188 Z"
        fill={bottomColor} stroke={bottomEdge} strokeWidth="1.5"/>
      <path d="M88 188 L88 265 Q88 273 78 273 L70 273 L68 188 Z"
        fill={bottomColor} stroke={bottomEdge} strokeWidth="1.5"/>
      <line x1="65" y1="188" x2="65" y2="265"
        stroke={eq.Bottom ? RC[eq.Bottom.r].lbl : "#1a2030"}
        strokeWidth="0.8" opacity="0.4"/>

      <path d="M42 269 L42 285 Q42 294 50 296 Q58 298 62 294 Q65 291 63 286 L60 273 L48 273 Z"
        fill={shoeColor} stroke={shoeEdge} strokeWidth="1.5"/>
      <path d="M88 269 L88 285 Q88 294 80 296 Q72 298 68 294 Q65 291 67 286 L70 273 L82 273 Z"
        fill={shoeColor} stroke={shoeEdge} strokeWidth="1.5"/>
      {eq.Shoes && (
        <>
          <path d="M44 282 Q51 279 59 281" fill="none"
            stroke={RC[eq.Shoes.r].lbl} strokeWidth="1" opacity="0.5"/>
          <path d="M86 282 Q79 279 71 281" fill="none"
            stroke={RC[eq.Shoes.r].lbl} strokeWidth="1" opacity="0.5"/>
        </>
      )}
    </svg>
  );
}
