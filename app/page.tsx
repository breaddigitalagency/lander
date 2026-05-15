'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Is this just another generic AI resume tool?',
      a: 'No. Tools like Resume.io and Jobscan are built for Americans. We\'re built specifically for international graduates in Australia — Australian CV format, ANZSCO matching, visa status guidance, and Aussie recruiter preferences.'
    },
    {
      q: 'Will this guarantee I get a job?',
      a: 'No tool can guarantee that. But we can guarantee your CV will be Australian-formatted, ATS-optimised, and aligned with the Skilled Occupation List. The rest depends on your skills, market timing, and persistence.'
    },
    {
      q: 'Why one-time payment instead of subscription?',
      a: 'Because subscriptions are predatory for job seekers. You use the tool intensely for 2-3 months, then don\'t need it. We\'d rather you pay once, succeed, and tell your friends.'
    },
    {
      q: 'How is this different from a migration agent?',
      a: 'Migration agents charge $3,000-10,000 and focus on visa paperwork. We focus on getting you hired with a CV that actually works in Australia. We\'re complementary — many users use both.'
    },
    {
      q: 'What if I\'m not in Australia yet?',
      a: 'You can still use it. If you\'re applying for skilled migration or already secured a 485 visa, having an Australian-ready CV before you arrive gives you a massive head start.'
    },
    {
      q: 'What\'s your refund policy?',
      a: 'If you\'re not satisfied within 7 days, email us and we\'ll refund you in full. No questions, no hoops.'
    }
  ];

  return (
    <div style={{ background: '#FAF5EC', color: '#1A1814', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(250, 245, 236, 0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(26, 24, 20, 0.125)', zIndex: 100, padding: '1.25rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: '1.5rem', letterSpacing: '-0.02em', color: '#1A1814', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 28, height: 28, background: '#B8502A', borderRadius: '50%', position: 'relative', display: 'inline-block' }} />
            Lander
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#how" style={{ color: '#3D3833', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}>How it works</a>
            <a href="#features" style={{ color: '#3D3833', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}>Features</a>
            <a href="#pricing" style={{ color: '#3D3833', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}>Pricing</a>
            <Link href="/auth/signup" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', fontSize: '0.95rem', fontWeight: 500, borderRadius: '999px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', border: 'none', background: '#1A1814', color: '#FAF5EC' }}>
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '6rem 0 5rem', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#ECDFC8', border: '1px solid rgba(26, 24, 20, 0.125)', borderRadius: '999px', fontSize: '0.8rem', color: '#3D3833', marginBottom: '2rem', fontWeight: 500 }}>
              <span style={{ width: 8, height: 8, background: '#B8502A', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              Now available in Australia
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, lineHeight: 0.98, letterSpacing: '-0.03em', color: '#1A1814', marginBottom: '2rem' }}>
              Land your <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#B8502A' }}>skilled job</em> in Australia
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6B635A', marginBottom: '2rem', lineHeight: 1.6 }}>
              International CV → Australian CV. AI-powered. 60 seconds. $79.
            </p>
            <p style={{ fontSize: '1rem', color: '#6B635A', marginBottom: '2rem', maxWidth: 600 }}>
              Stop applying blindly. Your CV format is costing you interviews. We rewrite it for Australian recruiters, beat ATS systems, and match you to Skilled Occupation List jobs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/auth/signup" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1.125rem 2.25rem', fontSize: '1rem', fontWeight: 500, borderRadius: '999px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', border: 'none', background: '#1A1814', color: '#FAF5EC' }}>
                Start rewriting →
              </Link>
              <a href="#how" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1.125rem 2.25rem', fontSize: '1rem', fontWeight: 500, borderRadius: '999px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', border: '1px solid rgba(26, 24, 20, 0.25)', background: 'transparent', color: '#1A1814' }}>
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(26, 24, 20, 0.125)', borderBottom: '1px solid rgba(26, 24, 20, 0.125)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1A1814', marginBottom: '0.5rem' }}>75%</div>
            <p style={{ color: '#6B635A' }}>of resumes rejected by ATS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1A1814', marginBottom: '0.5rem' }}>5.95%</div>
            <p style={{ color: '#6B635A' }}>interview rate for tailored CVs</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1A1814', marginBottom: '0.5rem' }}>$4,600</div>
            <p style={{ color: '#6B635A' }}>visa cost (you've invested)</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: 720, marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#ECDFC8', borderRadius: '999px', fontSize: '0.8rem', color: '#3D3833', marginBottom: '1.5rem', fontWeight: 500 }}>How it works</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1A1814', marginBottom: '1rem' }}>
              Three steps to <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#B8502A' }}>landing interviews</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { num: '1', title: 'Upload your CV', desc: 'Paste your current CV or upload a PDF. Tell us your target role (optional).' },
              { num: '2', title: 'AI rewrites instantly', desc: 'Our Claude-powered engine transforms it for Australian recruiters in 60 seconds.' },
              { num: '3', title: 'Download & apply', desc: 'Get ATS score, apply to jobs, land interviews. Access for 30-90 days.' }
            ].map((step, i) => (
              <div key={i} style={{ padding: '2rem', background: 'rgba(184, 80, 42, 0.05)', borderRadius: '12px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#B8502A', marginBottom: '1rem' }}>{step.num}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1A1814', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: '#6B635A', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '6rem 0', background: '#ECDFC8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: 720, marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(26, 24, 20, 0.1)', borderRadius: '999px', fontSize: '0.8rem', color: '#3D3833', marginBottom: '1.5rem', fontWeight: 500 }}>Features</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1A1814', marginBottom: '1rem' }}>
              Built for your <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#B8502A' }}>Australian journey</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {[
              { title: 'SEEK & ATS optimisation', desc: 'Beat the ATS systems used by 90% of Australian employers. Real-time scoring with specific fixes.' },
              { title: 'PR pathway matching', desc: 'Cross-references the Skilled Occupation List. Flags jobs that qualify for your visa pathway.' },
              { title: 'Experience translator', desc: 'Converts foreign job titles to Australian equivalents. Adds AUD figures, local context, recognisable frameworks.' },
              { title: 'Cover letter generator', desc: 'Australian-style cover letters that don\'t sound like every other AI tool. Personalised, human, effective.' },
              { title: 'Visa status helper', desc: 'Templates and guidance on how (and when) to mention your visa status. Stop getting filtered out unfairly.' }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1A1814', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{feature.title}</h3>
                <p style={{ color: '#6B635A', fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#ECDFC8', borderRadius: '999px', fontSize: '0.8rem', color: '#3D3833', marginBottom: '1.5rem', fontWeight: 500 }}>Pricing</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1A1814', marginBottom: '1rem' }}>
              One-time payment. <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#B8502A' }}>No subscription traps.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B635A', marginTop: '1.5rem' }}>
              You're already paying enough — visa fees, course fees, agent fees. Pay once, use it as long as you need.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
            {[
              { name: 'Starter', price: '$39', period: 'AUD · one-time · 30-day access', features: ['Full Australian CV rewrite', 'ATS score & fixes', '3 tailored versions', '1 cover letter template', 'Basic visa status guidance'] },
              { name: 'PR Pathway', price: '$79', period: 'AUD · one-time · 90-day access', featured: true, features: ['Everything in Starter', 'Unlimited CV tailoring', 'PR-pathway job matcher', '5 cover letter templates', 'LinkedIn optimiser', 'Skilled Occupation List crosscheck', 'Australian interview prep'] },
              { name: 'Skilled Migration', price: '$149', period: 'AUD · one-time · 12-month access', features: ['Everything in PR Pathway', '12-month full access', 'Skills assessment guidance', 'Salary negotiation scripts', 'Migration agent network', 'Priority email support'] }
            ].map((plan, i) => (
              <div key={i} style={{ padding: '2rem', background: plan.featured ? '#B8502A' : 'rgba(26, 24, 20, 0.05)', borderRadius: '12px', border: plan.featured ? 'none' : '1px solid rgba(26, 24, 20, 0.1)', position: 'relative', color: plan.featured ? '#FAF5EC' : '#1A1814' }}>
                {plan.featured && <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.75rem', background: '#FAF5EC', color: '#B8502A', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: 600 }}>Most chosen</div>}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{plan.price}</div>
                <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '1.5rem' }}>{plan.period}</p>
                <ul style={{ listStyle: 'none', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signup" style={{ display: 'block', textAlign: 'center', padding: '0.875rem 1.75rem', background: plan.featured ? '#FAF5EC' : '#1A1814', color: plan.featured ? '#B8502A' : '#FAF5EC', border: 'none', borderRadius: '999px', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#6B635A', fontSize: '0.875rem' }}>
            💳 Secured by Stripe · 7-day money-back guarantee · No subscription, ever
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '6rem 0', background: '#ECDFC8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(26, 24, 20, 0.1)', borderRadius: '999px', fontSize: '0.8rem', color: '#3D3833', marginBottom: '1.5rem', fontWeight: 500 }}>FAQ</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1A1814', marginBottom: '1rem' }}>
                Questions, <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#B8502A' }}>honestly</em> answered.
              </h2>
              <p style={{ color: '#6B635A', marginTop: '1.5rem' }}>
                Built by someone who watched friends struggle through this. If you have other questions, just email us.
              </p>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: '1rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '12px', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#1A1814', fontWeight: 500 }}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1.5rem' }}>{openFaq === i ? '−' : '+'}</span>
                  </div>
                  {openFaq === i && (
                    <div style={{ marginTop: '1rem', color: '#6B635A', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 0', background: '#1E2A44', color: '#FAF5EC', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(232, 201, 181, 0.2)', borderRadius: '999px', fontSize: '0.8rem', color: '#E8C9B5', marginBottom: '1.5rem', fontWeight: 500 }}>Your move</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            You didn't come this far <em style={{ fontStyle: 'italic', fontWeight: 400 }}>to only come this far.</em>
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', maxWidth: 600, margin: '0 auto 2rem' }}>
            Your visa is ticking. Your savings are draining. Your family is waiting. Stop wasting applications on a broken CV. Let's land you the job you actually deserve.
          </p>
          <Link href="/auth/signup" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1.125rem 2.25rem', fontSize: '1rem', fontWeight: 500, borderRadius: '999px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', border: 'none', background: '#B8502A', color: '#FAF5EC' }}>
            Start your Australian career →
          </Link>
          <p style={{ marginTop: '1.5rem', color: 'rgba(244, 235, 219, 0.6)', fontSize: '0.875rem' }}>
            Join 200+ international graduates already on their pathway
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1A1814', color: '#FAF5EC', padding: '4rem 0 2rem', borderTop: '1px solid rgba(244, 235, 219, 0.1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: 24, height: 24, background: '#B8502A', borderRadius: '50%' }} />
                Lander
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6B635A' }}>The AI resume coach built for international graduates in Australia. Made in Sydney.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Product</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#how" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>How it works</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Features</a></li>
                <li><a href="#pricing" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Aussie CV guide</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Skilled Occupation List</a></li>
                <li><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>485 visa guide</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>About</a></li>
                <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</a></li>
                <li><a href="#" style={{ color: '#6B635A', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(244, 235, 219, 0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#6B635A' }}>
            <div>© 2026 Lander. Made in Sydney, Australia. 🇦🇺</div>
            <div>support@lander.au</div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
