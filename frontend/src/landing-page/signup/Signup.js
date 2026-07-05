import React, { useState } from 'react';

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || 'https://zerone-1-auu4.onrender.com').replace(/\/+$/, '');
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || (typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : '');

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
    const requestUrl = API_BASE_URL + endpoint;

    try {
      // Log request details to help diagnose network failures in deployed builds
      console.log('Signup request ->', { requestUrl, payload });
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Try to parse JSON if available, otherwise build a fallback
      let data = null;
      try {
        data = await response.json();
      } catch (parseErr) {
        // not a JSON response
        data = null;
      }

      if (!response.ok) {
        // Try to include raw text when JSON isn't available — helps diagnose 400/500 HTML responses
        let rawText = '';
        try {
          rawText = await response.text();
        } catch (tErr) {
          rawText = '';
        }
        const errMsg = (data && data.message) || `Request failed with status ${response.status}`;
        const detailed = rawText ? `${errMsg} — response body: ${rawText}` : errMsg;
        console.error('Signup failed:', { status: response.status, data, rawText });
        setMessage(detailed);
        return;
      }

      if (data && data.success) {
        if (DASHBOARD_URL) {
          window.location.assign(DASHBOARD_URL);
        } else {
          setMessage('Signed in successfully. Please set REACT_APP_DASHBOARD_URL in your deployment settings to redirect to the dashboard app.');
        }
        return;
      }

      setMessage((data && data.message) || 'Request completed.');
    } catch (error) {
      console.error('Signup request failed:', error, requestUrl);
      // Show the actual error message from the fetch exception to help debugging (CORS/connectivity/etc.)
      setMessage(
        `Network error: ${error && error.message ? error.message : 'unknown'}. Ensure backend is running and REACT_APP_API_BASE_URL is correct. Request URL: ${requestUrl}`
      );
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