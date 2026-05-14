'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
export default function SignUpPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName }, emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` },
      });
      if (signUpError) { setError(signUpError.message); return; }
      router.push('/auth/login');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleSignUp = async () => {
    setError('');
    setLoading(true);
    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` },
      });
      if (googleError) { setError(googleError.message); }
    } catch (err: any) {
      setError(err.message || 'Google sign-up failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ minHeight: '100vh', background: '#FAF5EC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px', background: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid #1A181420' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.875rem', fontWeight: 300, color: '#1A1814', marginBottom: '0.5rem' }}>Start your journey</h1>
          <p style={{ color: '#6B635A', fontSize: '0.9375rem' }}>Join 200+ international graduates already landing jobs in Australia</p>
        </div>
        {error && <div style={{ background: '#FBEAF0', border: '1px solid #F4C0D1', color: '#993556', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}
        <button onClick={handleGoogleSignUp} disabled={loading} style={{ width: '100%', padding: '0.875rem', background: '#1A1814', color: '#FAF5EC', border: 'none', borderRadius: '8px', fontSize: '0.9375rem', fontWeight: 500, marginBottom: '1.5rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'inherit' }}>{loading ? 'Signing up...' : 'Sign up with Google'}</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}><div style={{ flex: 1, height: '1px', background: '#1A181420' }} /><span style={{ color: '#6B635A', fontSize: '0.875rem' }}>or</span><div style={{ flex: 1, height: '1px', background: '#1A181420' }} /></div>
        <form onSubmit={handleEmailSignUp}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1A1814' }}>Full name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Priya Sharma" style={{ width: '100%', padding: '0.75rem', border: '1px solid #1A181420', borderRadius: '8px', fontSize: '0.9375rem', fontFamily: 'inherit' }} required />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1A1814' }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="priya@example.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #1A181420', borderRadius: '8px', fontSize: '0.9375rem', fontFamily: 'inherit' }} required />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#1A1814' }}>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', border: '1px solid #1A181420', borderRadius: '8px', fontSize: '0.9375rem', fontFamily: 'inherit' }} required minLength={8} />
          </div>
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.875rem', background: '#1A1814', color: '#FAF5EC', border: 'none', borderRadius: '8px', fontSize: '0.9375rem', fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, fontFamily: 'inherit' }}>{loading ? 'Creating account...' : 'Create account'}</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: '#6B635A' }}>Already have an account? <a href="/auth/login" style={{ color: '#B8502A', textDecoration: 'none', fontWeight: 500 }}>Log in</a></p>
      </div>
    </div>
  );
}
