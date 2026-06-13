import { useState } from 'react';
import { generatePKCE, randomState } from '../pkce.js';
import { CLIENT_ID, REDIRECT_URI, AUTH_URL, SCOPES } from '../config.js';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  async function handleLogin() {
    setLoading(true);
    setError('');
    try {
      const { verifier, challenge } = await generatePKCE();
      const state = randomState();
      sessionStorage.setItem('pkce_verifier', verifier);
      sessionStorage.setItem('oauth_state', state);
      const params = new URLSearchParams({
        response_type: 'code', client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI, scope: SCOPES, state,
        code_challenge: challenge, code_challenge_method: 'S256',
      });
      window.location.href = `${AUTH_URL}?${params}`;
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight:'100vh', background:'#090d15',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
      gap:24, padding:24,
    }}>
      <div style={{ textAlign:'center', marginBottom:8 }}>
        <div style={{ fontSize:44, marginBottom:14 }}>✦</div>
        <div style={{ fontSize:28, fontWeight:800, color:'#f1f5f9', letterSpacing:'-1px' }}>
          Avatar Wardrobe
        </div>
        <div style={{ fontSize:13, color:'#374151', marginTop:8, maxWidth:260, lineHeight:1.6 }}>
          Dress your avatar. Own your items.<br/>Powered by OASIS + Flowsta.
        </div>
      </div>
      <button onClick={handleLogin} disabled={loading} style={{
        display:'flex', alignItems:'center', gap:12,
        background:loading?'#1a2030':'#0d1117',
        border:'2px solid #3b82f6', borderRadius:50, padding:'14px 32px',
        cursor:loading?'not-allowed':'pointer', transition:'all 0.2s',
        boxShadow:'0 0 24px #3b82f633',
      }}>
        <span style={{ fontSize:18 }}>✦</span>
        <span style={{ fontSize:14, fontWeight:700, color:'#f1f5f9' }}>
          {loading ? 'Connecting…' : 'Sign in with Flowsta'}
        </span>
      </button>
      {error && (
        <div style={{ fontSize:12, color:'#f87171', background:'#2d0a0a',
          border:'1px solid #7f1d1d', borderRadius:8, padding:'10px 16px' }}>
          {error}
        </div>
      )}
      <div style={{ fontSize:10, color:'#1f2937', textAlign:'center' }}>
        Sovereign identity · No password stored · Built on Holochain
      </div>
    </div>
  );
}
