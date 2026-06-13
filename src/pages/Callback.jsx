import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI, TOKEN_URL, USERINFO_URL } from '../config.js';

export default function Callback({ onLogin }) {
  const [status, setStatus] = useState('Completing sign-in…');
  const navigate = useNavigate();

  useEffect(() => {
    async function exchange() {
      try {
        const params   = new URLSearchParams(window.location.search);
        const code     = params.get('code');
        const retState = params.get('state');
        const error    = params.get('error');
        if (error) throw new Error(params.get('error_description') || error);
        if (!code) throw new Error('No authorisation code in URL');
        const verifier   = sessionStorage.getItem('pkce_verifier');
        const origState  = sessionStorage.getItem('oauth_state');
        if (retState !== origState) throw new Error('State mismatch');
        setStatus('Exchanging code for token…');
        const tokenRes = await fetch(TOKEN_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            grant_type: 'authorization_code', code,
            redirect_uri: REDIRECT_URI, client_id: CLIENT_ID,
            code_verifier: verifier,
          }),
        });
        const tokens = await tokenRes.json();
        if (!tokens.access_token) throw new Error(tokens.error_description || 'Token exchange failed');
        setStatus('Loading your profile…');
        const userRes = await fetch(USERINFO_URL, {
          headers: { Authorization: `Bearer ${tokens.access_token}` },
        });
        const user = await userRes.json();
        sessionStorage.removeItem('pkce_verifier');
        sessionStorage.removeItem('oauth_state');
        onLogin(user, tokens.access_token, tokens.refresh_token);
        navigate('/wardrobe', { replace: true });
      } catch (e) {
        setStatus('Sign-in failed: ' + e.message);
      }
    }
    exchange();
  }, []);

  return (
    <div style={{
      minHeight:'100vh', background:'#090d15', color:'#f1f5f9',
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
      flexDirection:'column', gap:20,
    }}>
      <div style={{ fontSize:32, animation:'spin 1s linear infinite' }}>✦</div>
      <div style={{ fontSize:13, color:'#4b5563' }}>{status}</div>
    </div>
  );
}
