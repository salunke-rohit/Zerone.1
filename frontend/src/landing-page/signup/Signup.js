import React, { useState } from 'react';

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || 'http://localhost:3002').replace(/\/+$/, '');
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'https://your-dashboard-url.vercel.app';

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const endpoint = isLogin ? '/signin' : '/signup';
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const response = await fetch(API_BASE_URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (isLogin && data.success) {
        window.location.href = DASHBOARD_URL;
        return;
      }
      setMessage(data.message || 'Request completed.');
    } catch (error) {
      setMessage('Network error. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '420px', border: '1px solid #ddd', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h3 style={{ marginBottom: '16px' }}>{isLogin ? 'Sign In' : 'Create Account'}</h3>
        {!isLogin && (
          <div style={{ marginBottom: '12px' }}>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '6px' }} />
          </div>
        )}
        <div style={{ marginBottom: '12px' }}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '6px' }} />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '6px' }} />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
          {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
        </button>
        <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ width: '100%', padding: '10px' }}>
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
        </button>
        {message && <p style={{ marginTop: '12px' }}>{message}</p>}
      </form>
    </div>
  );
}

export default Signup;