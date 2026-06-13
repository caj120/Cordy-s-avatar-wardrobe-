import { RARITY_STYLES } from '../inventory.js';

export default function Silhouette({ eq }) {
  const c = s => eq[s] ? RARITY_STYLES[eq[s].r].bd : "#1f2937";
  const f = s => eq[s] ? RARITY_STYLES[eq[s].r].bg : "#080c14";
  return (
    <svg width="120" height="270" viewBox="0 0 120 270">
      <ellipse cx="60" cy="14" rx="22" ry="9"  fill={f("Hair")}   stroke={c("Hair")}   strokeWidth="1.5"/>
      <ellipse cx="60" cy="40" rx="28" ry="32" fill={f("Head")}   stroke={c("Head")}   strokeWidth="2"/>
      <rect x="52" y="69"  width="16" height="13" rx="3" fill={f("Top")}    stroke={c("Top")}    strokeWidth="1.5"/>
      <rect x="26" y="80"  width="68" height="75" rx="9" fill={f("Top")}    stroke={c("Top")}    strokeWidth="2"/>
      <rect x="7"  y="82"  width="20" height="58" rx="8" fill={f("Top")}    stroke={c("Top")}    strokeWidth="1.5"/>
      <rect x="93" y="82"  width="20" height="58" rx="8" fill={f("Top")}    stroke={c("Top")}    strokeWidth="1.5"/>
      <rect x="27" y="153" width="28" height="75" rx="7" fill={f("Bottom")} stroke={c("Bottom")} strokeWidth="2"/>
      <rect x="65" y="153" width="28" height="75" rx="7" fill={f("Bottom")} stroke={c("Bottom")} strokeWidth="2"/>
      <rect x="23" y="220" width="32" height="18" rx="6" fill={f("Shoes")}  stroke={c("Shoes")}  strokeWidth="2"/>
      <rect x="65" y="220" width="32" height="18" rx="6" fill={f("Shoes")}  stroke={c("Shoes")}  strokeWidth="2"/>
      {eq.Accessory && <circle cx="96" cy="112" r="7" fill={RARITY_STYLES[eq.Accessory.r].bd} opacity="0.85"/>}
      {eq.Hair      && <text x="60" y="19"  textAnchor="middle" fontSize="14">{eq.Hair.e}</text>}
      {eq.Head      && <text x="60" y="50"  textAnchor="middle" fontSize="22">{eq.Head.e}</text>}
      {eq.Face      && <text x="60" y="64"  textAnchor="middle" fontSize="13">{eq.Face.e}</text>}
      {eq.Top       && <text x="60" y="122" textAnchor="middle" fontSize="22">{eq.Top.e}</text>}
      {eq.Bottom    && <text x="60" y="198" textAnchor="middle" fontSize="20">{eq.Bottom.e}</text>}
      {eq.Shoes     && <text x="60" y="236" textAnchor="middle" fontSize="15">{eq.Shoes.e}</text>}
      {eq.Accessory && <text x="96" y="116" textAnchor="middle" fontSize="11">{eq.Accessory.e}</text>}
    </svg>
  );
}
