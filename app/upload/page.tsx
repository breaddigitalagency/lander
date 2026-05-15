'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const router = useRouter();
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!resume.trim()) {
      setError('Please paste your resume');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume, jobDescription }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      const data = await res.json();
      if (data.id) {
        router.push(`/result/${data.id}`);
      } else {
        throw new Error('No result returned');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to rewrite resume');
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/extract', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to extract text from file');
      }

      const data = await res.json();
      setResume(data.text || '');
    } catch (err: any) {
      setError(err.message || 'Failed to read file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF5EC', color: '#1A1814', fontFamily: "'Inter', sans-serif", padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '3rem', fontWeight: 300, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Rewrite your CV
          </h1>
          <p style={{ color: '#6B635A', fontSize: '1.0625rem' }}>
            Paste your current CV below or upload a file. We'll rewrite it for the Australian market in 60 seconds.
          </p>
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(26, 24, 20, 0.125)', marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
            Upload a PDF or DOCX
          </label>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleFileUpload}
            disabled={loading}
            style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}
          />

          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
            Or paste your CV text
          </label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your full resume here..."
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
            rows={5}
            style={{
              width: '100%',
              padding: '1rem',
              border: '1px solid rgba(26, 24, 20, 0.2)',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '1.5rem',
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
            {loading ? 'Rewriting your CV...' : 'Rewrite my CV →'}
          </button>

          <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: '#6B635A', textAlign: 'center' }}>
            Takes about 60 seconds. Powered by Claude AI.
          </p>
        </div>
      </div>
    </div>
  );
}
