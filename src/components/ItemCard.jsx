import { RARITY_STYLES } from '../inventory.js';

export default function ItemCard({ item, equipped, onEquip }) {
  const r = RARITY_STYLES[item.r];
  return (
    <div onClick={() => onEquip(item)} style={{
      background:   equipped ? r.bg : "#090d15",
      border:       `2px solid ${equipped ? r.bd : "#1a2030"}`,
      borderRadius: 11, padding: "9px 7px",
      cursor: "pointer", userSelect: "none",
      transition: "all 0.15s",
      display: "flex", flexDirection: "column", gap: 5,
      transform: equipped ? "scale(1.04)" : "scale(1)",
      boxShadow: equipped ? `0 0 12px ${r.bd}55` : "none",
    }}>
      <div style={{
        aspectRatio: "1", borderRadius: 7, fontSize: 24,
        background: `linear-gradient(135deg,${r.bg},${r.bd}22)`,
        border: `1px solid ${r.bd}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>{item.e}</div>
      <div style={{ fontSize:10, fontWeight:700, color:"#f1f5f9", lineHeight:1.2 }}>
        {item.name}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:8, padding:"1px 5px", borderRadius:20,
          background:`${r.bd}22`, color:r.lbl, border:`1px solid ${r.bd}33` }}>
          {item.slot}
        </span>
        <span style={{ fontSize:8, color:r.lbl, fontWeight:700, textTransform:"uppercase" }}>
          {item.r}
        </span>
      </div>
      {equipped && (
        <div style={{ fontSize:9, color:"#60a5fa", textAlign:"center", fontWeight:800, letterSpacing:1 }}>
          ✓ ON
        </div>
      )}
    </div>
  );
}
