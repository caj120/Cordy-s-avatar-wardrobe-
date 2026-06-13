import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Callback from './pages/Callback.jsx';
import Wardrobe from './pages/Wardrobe.jsx';

export default function App() {
  const [user,         setUser]         = useState(null);
  const [accessToken,  setAccessToken]  = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  function handleLogin(userData, access, refresh) {
    setUser(userData);
    setAccessToken(access);
    setRefreshToken(refresh);
  }

  function handleLogout() {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
  }

  return (
    <Routes>
      <Route path="/" element={
        user ? <Navigate to="/wardrobe" replace /> : <Login />
      }/>
      <Route path="/auth/callback" element={
        <Callback onLogin={handleLogin} />
      }/>
      <Route path="/wardrobe" element={
        user
          ? <Wardrobe user={user} accessToken={accessToken} onLogout={handleLogout}/>
          : <Navigate to="/" replace />
      }/>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}
