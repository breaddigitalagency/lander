'use client';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAF5EC', padding: '4rem 1.5rem', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '3.5rem', fontWeight: 300, color: '#1A1814', marginBottom: '1rem' }}>
          Land your skilled job in Australia.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#6B635A', marginBottom: '2rem' }}>
          International CV → Australian CV. AI-powered. 60 seconds. $79.
        </p>
        <a href="/auth/signup" style={{ display: 'inline-block', padding: '1.25rem 2.5rem', background: '#1A1814', color: '#FAF5EC', borderRadius: '999px', textDecoration: 'none', fontWeight: 500, fontSize: '1.125rem' }}>
          Get started →
        </a>
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1A1814' }}>75%</p>
            <p style={{ color: '#6B635A' }}>of resumes rejected by ATS</p>
          </div>
          <div>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1A1814' }}>5.95%</p>
            <p style={{ color: '#6B635A' }}>interview rate for tailored CVs</p>
          </div>
          <div>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1A1814' }}>$4,600</p>
            <p style={{ color: '#6B635A' }}>visa cost (you've invested)</p>
          </div>
        </div>
      </div>
    </div>
  );
}