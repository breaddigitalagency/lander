'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) { setError(loginError.message); return; }
      router.push('/upload');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` } });
      if (googleError) { setError(googleError.message); }
    } catch (err: any) {
      setError(err.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ minHeight: '100vh', background: '#FAF5EC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px', background: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid #1A181420' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.875rem', fontWeight: 300, color: '#1A1814', marginBottom: '0.5rem' }}>Welcome back</h1>
          <p style={{ color: '#6B635A', fontSize: '0.9375rem' }}>Log in to rewrite your CV</p>
        </div>
        {error && <div style={{ background: '#FBEAF0', border: '1px solid #F4C0D1', color: '#993556', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}
        <button onClick={handleGoogleLogin} disabled={loading} style={{ width: '100%', padding: '0.875rem', background: '#1A1814', color: '#FAF5EC', border: 'none', borderRadius: '8px', fontSize: '0.9375rem', fontWeight: 500, marginBottom: '1.5rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'inherit' }}>{loading ? 'Logging in...' : 'Log in with Google'}</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}><div style={{ flex: 1, height: '1px', background: '#1A181420' }} /><span style={{ color: '#6B635A', fontSize: '0.875rem' }}>or</span><div style={{ flex: 1, height: '1px', background: '#1A181420' }} /></div>
        <form onSubmit={handleEmailLogin}>
          <div style={{ marginBottom: '1rem' }}><label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1A1814' }}>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="priya@example.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #1A181420', borderRadius: '8px', fontSize: '0.9375rem', fontFamily: 'inherit' }} required /></div>
          <div style={{ marginBottom: '1.5rem' }}><label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1A1814' }}>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', border: '1px solid #1A181420', borderRadius: '8px', fontSize: '0.9375rem', fontFamily: 'inherit' }} required /></div>
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.875rem', background: '#1A1814', color: '#FAF5EC', border: 'none', borderRadius: '8px', fontSize: '0.9375rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'inherit' }}>{loading ? 'Logging in...' : 'Log in'}</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: '#6B635A' }}>Don't have an account? <a href="/auth/signup" style={{ color: '#B8502A', textDecoration: 'none', fontWeight: 500 }}>Sign up</a></p>
      </div>
    </div>
  );
}
