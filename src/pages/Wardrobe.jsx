import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Silhouette from '../components/Silhouette.jsx';
import ItemCard from '../components/ItemCard.jsx';
import { INVENTORY, SLOTS, SLOT_EMOJI, RARITY_STYLES } from '../inventory.js';
import { CLIENT_ID, REVOKE_URL } from '../config.js';

export default function Wardrobe({ user, accessToken, onLogout }) {
  const [tab,   setTab]  = useState('All');
  const [eq,    setEq]   = useState({});
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const items = tab === 'All' ? INVENTORY : INVENTORY.filter(i => i.slot === tab);
  const count = Object.keys(eq).length;

  function equip(item) {
    setEq(prev => {
      if (prev[item.slot]?.id === item.id) {
        const next = { ...prev }; delete next[item.slot];
        showToast(`Removed ${item.name}`); return next;
      }
      showToast(`Equipped ${item.name} ✓`);
      return { ...prev, [item.slot]: item };
    });
  }

  function showToast(msg) {
    setToast(msg); setTimeout(() => setToast(null), 2000);
  }

  async function handleLogout() {
    try {
      await fetch(REVOKE_URL, { method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ token: accessToken, client_id: CLIENT_ID }),
      });
    } catch {}
    onLogout(); navigate('/', { replace: true });
  }

  const initials = (user?.name || user?.preferred_username || '?')
    .split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div style={{ minHeight:'100vh', background:'#090d15',
      fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", color:'#f1f5f9' }}>
      <div style={{ padding:'12px 16px', background:'#0d1117',
        borderBottom:'1px solid #1a2030', display:'flex',
        alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:10 }}>
        <div>
          <div style={{ fontSize:16, fontWeight:800, letterSpacing:'-0.5px' }}>Avatar Wardrobe</div>
          <div style={{ fontSize:10, color:'#374151' }}>{count}/7 slots filled</div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:12, fontWeight:600 }}>{user?.name || user?.preferred_username}</div>
            <button onClick={handleLogout} style={{ background:'transparent', border:'none',
              color:'#374151', fontSize:10, cursor:'pointer', padding:0 }}>Sign out</button>
          </div>
          {user?.profile_picture
            ? <img src={user.profile_picture} alt="" style={{ width:34, height:34,
                borderRadius:'50%', border:'2px solid #1a2030', objectFit:'cover' }}/>
            : <div style={{ width:34, height:34, borderRadius:'50%',
                background:'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:12, fontWeight:800, border:'2px solid #1a2030' }}>{initials}</div>
          }
        </div>
      </div>
      {toast && (
        <div style={{ position:'fixed', bottom:24, left:'50%', transform:'translateX(-50%)',
          background:'#1e3a5f', border:'1px solid #3b82f6', borderRadius:20,
          padding:'8px 18px', fontSize:11, color:'#93c5fd', zIndex:100,
          whiteSpace:'nowrap', animation:'fadeIn 0.2s ease' }}>{toast}</div>
      )}
      <div style={{ display:'flex', maxWidth:820, margin:'0 auto', padding:12, gap:12 }}>
        <div style={{ width:154, flexShrink:0, display:'flex', flexDirection:'column',
          alignItems:'center', gap:8, paddingTop:4, position:'sticky', top:60, alignSelf:'flex-start' }}>
          <Silhouette eq
