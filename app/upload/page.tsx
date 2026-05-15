'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    if (!resume.trim()) {
      setError('Please paste your CV first');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jobDescription }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data);
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Failed to rewrite CV. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadCV = () => {
    if (!result?.australianCV) return;
    const blob = new Blob([result.australianCV], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'australian-cv.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF5EC', color: '#1A1814', fontFamily: "'Inter', sans-serif", padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '3rem', fontWeight: 300, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Rewrite your CV
          </h1>
          <p style={{ color: '#6B635A', fontSize: '1.0625rem' }}>
            Paste your current CV below. We'll rewrite it for the Australian market in 60 seconds.
          </p>
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(26, 24, 20, 0.125)', marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
            Paste your CV
          </label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your full CV here..."
            disabled={loading}
            rows={14}
            style={{
              width: '100%',
              padding: '1rem',
              border: '1px solid rgba(26, 24, 20, 0.2)',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '1.5rem',
              background: '#FAFAFA',
            }}
          />

          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
            Target job description (optional)
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste a job ad from SEEK or LinkedIn to tailor your CV..."
            disabled={loading}
            rows={6}
            style={{
              width: '100%',
              padding: '1rem',
              border: '1px solid rgba(26, 24, 20, 0.2)',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '1.5rem',
              background: '#FAFAFA',
            }}
          />

          {error && (
            <div style={{ padding: '1rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '1.125rem',
              background: loading ? '#6B635A' : '#1A1814',
              color: '#FAF5EC',
              border: 'none',
              borderRadius: '999px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {loading ? 'Rewriting your CV... (this takes ~60 seconds)' : 'Rewrite my CV →'}
          </button>

          <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: '#6B635A', textAlign: 'center' }}>
            Powered by Claude AI. Your data stays private.
          </p>
        </div>

        {result && (
          <div id="result-section" style={{ marginTop: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#1A1814', color: '#FAF5EC', padding: '2rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: '0.5rem' }}>
                  ATS Score
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '4rem', fontWeight: 300, lineHeight: 1, color: '#E8C9B5' }}>
                  {result.atsScore || 0}<span style={{ fontSize: '1.5rem', opacity: 0.6 }}>/100</span>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
                  {result.atsScore >= 80 ? 'Excellent — ready to apply' : result.atsScore >= 60 ? 'Good — minor tweaks possible' : 'Needs work'}
                </p>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(26, 24, 20, 0.125)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B635A', marginBottom: '0.5rem' }}>
                  ANZSCO Match
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.3 }}>
                  {result.anzscoMatch || 'No specific match identified'}
                </div>
              </div>
            </div>

            {result.improvements && result.improvements.length > 0 && (
              <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(26, 24, 20, 0.125)', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>
                  What we improved
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {result.improvements.map((imp: string, i: number) => (
                    <li key={i} style={{ padding: '0.75rem 0', borderBottom: '1px solid rgba(26, 24, 20, 0.08)', display: 'flex', gap: '0.75rem', fontSize: '0.9375rem', color: '#3D3833' }}>
                      <span style={{ color: '#B8502A', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(26, 24, 20, 0.125)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 500 }}>
                  Your Australian CV
                </h3>
                <button
                  onClick={downloadCV}
                  style={{ padding: '0.625rem 1.25rem', background: '#1A1814', color: '#FAF5EC', border: 'none', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}
                >
                  Download .txt
                </button>
              </div>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', lineHeight: 1.6, color: '#1A1814', background: '#FAF5EC', padding: '1.5rem', borderRadius: '8px', maxHeight: 600, overflow: 'auto' }}>
                {result.australianCV}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
