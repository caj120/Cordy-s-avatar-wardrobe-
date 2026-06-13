export const SLOTS = ["All","Head","Hair","Face","Top","Bottom","Shoes","Accessory"];
export const SLOT_EMOJI = {
  Head:"👑", Hair:"💇", Face:"😊", Top:"👕",
  Bottom:"👖", Shoes:"👟", Accessory:"💍"
};
export const RARITY_STYLES = {
  common:    { bg:"#111827", bd:"#374151", lbl:"#9ca3af" },
  rare:      { bg:"#0f2240", bd:"#3b82f6", lbl:"#60a5fa" },
  epic:      { bg:"#1e0f40", bd:"#8b5cf6", lbl:"#a78bfa" },
  legendary: { bg:"#281500", bd:"#f59e0b", lbl:"#fbbf24" },
};
export const INVENTORY = [
  { id:"h1", name:"Crystal Crown",   slot:"Head",      r:"legendary", e:"👑" },
  { id:"h2", name:"Cyber Visor",     slot:"Head",      r:"epic",      e:"🥽" },
  { id:"h3", name:"Bucket Hat",      slot:"Head",      r:"common",    e:"🪖" },
  { id:"h4", name:"Halo Ring",       slot:"Head",      r:"rare",      e:"✨" },
  { id:"a1", name:"Neon Dreads",     slot:"Hair",      r:"epic",      e:"💜" },
  { id:"a2", name:"Silver Waves",    slot:"Hair",      r:"rare",      e:"🌊" },
  { id:"a3", name:"Afro Gold",       slot:"Hair",      r:"legendary", e:"⭐" },
  { id:"a4", name:"Buzz Cut",        slot:"Hair",      r:"common",    e:"✂️" },
  { id:"f1", name:"Galaxy Freckles", slot:"Face",      r:"rare",      e:"🌌" },
  { id:"f2", name:"Neon Liner",      slot:"Face",      r:"epic",      e:"💅" },
  { id:"f3", name:"Sun Blush",       slot:"Face",      r:"common",    e:"🌸" },
  { id:"f4", name:"Diamond Tears",   slot:"Face",      r:"legendary", e:"💎" },
  { id:"t1", name:"Neon Bomber",     slot:"Top",       r:"epic",      e:"🧥" },
  { id:"t2", name:"Holographic Tee", slot:"Top",       r:"rare",      e:"👕" },
  { id:"t3", name:"Shadow Hoodie",   slot:"Top",       r:"legendary", e:"🌑" },
  { id:"t4", name:"Basic White",     slot:"Top",       r:"common",    e:"🤍" },
  { id:"b1", name:"Void Cargo",      slot:"Bottom",    r:"rare",      e:"👖" },
  { id:"b2", name:"Chrome Skirt",    slot:"Bottom",    r:"epic",      e:"🔮" },
  { id:"b3", name:"Golden Shorts",   slot:"Bottom",    r:"legendary", e:"✨" },
  { id:"b4", name:"Grey Joggers",    slot:"Bottom",    r:"common",    e:"🩳" },
  { id:"s1", name:"Shadow Kicks",    slot:"Shoes",     r:"legendary", e:"👟" },
  { id:"s2", name:"Cloud Slides",    slot:"Shoes",     r:"common",    e:"🩴" },
  { id:"s3", name:"Neon Boots",      slot:"Shoes",     r:"epic",      e:"👢" },
  { id:"s4", name:"Aqua Runners",    slot:"Shoes",     r:"rare",      e:"💧" },
  { id:"c1", name:"Prism Chain",     slot:"Accessory", r:"epic",      e:"⛓️" },
  { id:"c2", name:"Star Earrings",   slot:"Accessory", r:"rare",      e:"⭐" },
  { id:"c3", name:"Void Backpack",   slot:"Accessory", r:"legendary", e:"🎒" },
  { id:"c4", name:"Simple Ring",     slot:"Accessory", r:"common",    e:"💍" },
];
