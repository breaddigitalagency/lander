'use client';

import { useEffect } from 'react';

const STYLES = `
:root {
  --cream: #F4EBDB;
  --cream-dark: #ECDFC8;
  --paper: #FAF5EC;
  --ink: #1A1814;
  --ink-soft: #3D3833;
  --ink-muted: #6B635A;
  --terracotta: #B8502A;
  --terracotta-deep: #8B3A1E;
  --terracotta-light: #E8C9B5;
  --navy: #1E2A44;
  --navy-soft: #2D3A56;
  --sage: #7A8B5C;
  --gold: #C9994A;
  --line: #1A181420;
  --line-strong: #1A181440;
}
.lander-page * { margin: 0; padding: 0; box-sizing: border-box; }
.lander-page { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden; scroll-behavior: smooth; }
.lander-page::before { content: ''; position: fixed; inset: 0; background-image: radial-gradient(circle at 20% 30%, rgba(184, 80, 42, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30, 42, 68, 0.03) 0%, transparent 50%); pointer-events: none; z-index: 1; }
.lander-page .container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 2; }
.lander-page nav { position: sticky; top: 0; background: rgba(250, 245, 236, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--line); z-index: 100; padding: 1.25rem 0; }
.lander-page .nav-inner { display: flex; justify-content: space-between; align-items: center; }
.lander-page .logo { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.5rem; letter-spacing: -0.02em; color: var(--ink); display: flex; align-items: center; gap: 0.5rem; }
.lander-page .logo-mark { width: 28px; height: 28px; background: var(--terracotta); border-radius: 50%; display: inline-block; position: relative; }
.lander-page .logo-mark::after { content: ''; position: absolute; inset: 6px; background: var(--cream); border-radius: 50%; }
.lander-page .nav-links { display: flex; gap: 2.5rem; align-items: center; }
.lander-page .nav-links a { color: var(--ink-soft); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
.lander-page .nav-links a:hover { color: var(--terracotta); }
.lander-page .btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.875rem 1.75rem; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 500; border-radius: 999px; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; border: none; letter-spacing: -0.01em; }
.lander-page .btn-primary { background: var(--ink); color: var(--paper); }
.lander-page .btn-primary:hover { background: var(--terracotta); transform: translateY(-2px); }
.lander-page .btn-secondary { background: transparent; color: var(--ink); border: 1px solid var(--line-strong); }
.lander-page .btn-secondary:hover { background: var(--ink); color: var(--paper); }
.lander-page .btn-lg { padding: 1.125rem 2.25rem; font-size: 1rem; }
.lander-page .hero { padding: 6rem 0 5rem; position: relative; overflow: hidden; }
.lander-page .hero-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 5rem; align-items: center; }
.lander-page .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--cream); border: 1px solid var(--line); border-radius: 999px; font-size: 0.8rem; color: var(--ink-soft); margin-bottom: 2rem; font-weight: 500; }
.lander-page .pulse { width: 8px; height: 8px; background: var(--terracotta); border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.lander-page h1 { font-family: 'Fraunces', serif; font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 300; line-height: 0.98; letter-spacing: -0.03em; color: var(--ink); margin-bottom: 2rem; }
.lander-page h1 em { font-style: italic; font-weight: 400; color: var(--terracotta); }
.lander-page h1 .underline { position: relative; display: inline-block; }
.lander-page h1 .underline::after { content: ''; position: absolute; bottom: 0.1em; left: -0.05em; right: -0.05em; height: 0.15em; background: var(--gold); z-index: -1; opacity: 0.5; }
.lander-page .hero-sub { font-size: 1.25rem; color: var(--ink-soft); line-height: 1.6; margin-bottom: 2.5rem; max-width: 520px; }
.lander-page .hero-ctas { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
.lander-page .trust-row { margin-top: 3rem; display: flex; align-items: center; gap: 1.25rem; }
.lander-page .avatars { display: flex; }
.lander-page .avatar { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--paper); margin-left: -10px; background: var(--cream-dark); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: var(--ink-soft); }
.lander-page .avatar:first-child { margin-left: 0; background: var(--terracotta-light); color: var(--terracotta-deep); }
.lander-page .avatar:nth-child(2) { background: #E5DDC8; }
.lander-page .avatar:nth-child(3) { background: #D5E0C8; }
.lander-page .avatar:nth-child(4) { background: #C8D5E0; }
.lander-page .trust-text { font-size: 0.875rem; color: var(--ink-muted); line-height: 1.4; }
.lander-page .trust-text strong { color: var(--ink); font-weight: 600; }
.lander-page .hero-visual { position: relative; height: 540px; }
.lander-page .cv-card { position: absolute; background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 25px 50px -12px rgba(26, 24, 20, 0.15), 0 0 0 1px var(--line); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.lander-page .cv-card.before { width: 280px; top: 0; left: 0; transform: rotate(-5deg); opacity: 0.7; }
.lander-page .cv-card.after { width: 320px; bottom: 0; right: 0; transform: rotate(3deg); z-index: 2; }
.lander-page .cv-card:hover { transform: rotate(0deg) scale(1.02); }
.lander-page .cv-header { border-bottom: 1px solid var(--line); padding-bottom: 0.75rem; margin-bottom: 0.75rem; }
.lander-page .cv-name { font-family: 'Fraunces', serif; font-size: 1.125rem; font-weight: 500; color: var(--ink); margin-bottom: 0.25rem; }
.lander-page .cv-role { font-size: 0.7rem; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.05em; }
.lander-page .cv-line { height: 6px; background: var(--cream); border-radius: 3px; margin: 0.4rem 0; }
.lander-page .cv-line.short { width: 60%; }
.lander-page .cv-line.medium { width: 80%; }
.lander-page .cv-line.highlight { background: var(--terracotta-light); }
.lander-page .cv-badge { display: inline-block; padding: 0.25rem 0.6rem; background: var(--cream); border-radius: 4px; font-size: 0.65rem; font-weight: 500; color: var(--ink-soft); margin: 0.15rem; }
.lander-page .cv-badge.success { background: #D5E5D0; color: #3D5A2F; }
.lander-page .stamp { position: absolute; top: 1.25rem; right: 1.25rem; background: var(--terracotta); color: var(--paper); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.lander-page .stamp.green { background: var(--sage); }
.lander-page section { padding: 6rem 0; position: relative; }
.lander-page .section-eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--terracotta); margin-bottom: 1.5rem; font-weight: 500; }
.lander-page h2 { font-family: 'Fraunces', serif; font-size: clamp(2.25rem, 4vw, 3.75rem); font-weight: 300; line-height: 1.05; letter-spacing: -0.025em; color: var(--ink); margin-bottom: 1.5rem; }
.lander-page h2 em { font-style: italic; font-weight: 400; }
.lander-page h3 { font-family: 'Fraunces', serif; font-size: 1.5rem; font-weight: 500; line-height: 1.3; color: var(--ink); margin-bottom: 0.75rem; }
.lander-page .section-sub { font-size: 1.125rem; color: var(--ink-soft); max-width: 600px; line-height: 1.6; }
.lander-page .problem-section { background: var(--cream); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.lander-page .problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.lander-page .quotes-stack { display: flex; flex-direction: column; gap: 1.25rem; }
.lander-page .quote { background: var(--paper); padding: 1.5rem 1.75rem; border-radius: 12px; border-left: 3px solid var(--terracotta); position: relative; }
.lander-page .quote:nth-child(2) { margin-left: 2rem; border-left-color: var(--navy); }
.lander-page .quote:nth-child(3) { margin-left: 4rem; border-left-color: var(--sage); }
.lander-page .quote-text { font-family: 'Fraunces', serif; font-style: italic; font-size: 1.0625rem; line-height: 1.5; color: var(--ink); margin-bottom: 0.75rem; }
.lander-page .quote-author { font-size: 0.8rem; color: var(--ink-muted); font-weight: 500; }
.lander-page .stats-section { background: var(--ink); color: var(--paper); padding: 4rem 0; }
.lander-page .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
.lander-page .stat { border-left: 1px solid rgba(244, 235, 219, 0.15); padding-left: 1.5rem; }
.lander-page .stat:first-child { border-left: none; padding-left: 0; }
.lander-page .stat-number { font-family: 'Fraunces', serif; font-size: 3rem; font-weight: 300; color: var(--terracotta-light); line-height: 1; margin-bottom: 0.5rem; }
.lander-page .stat-label { font-size: 0.875rem; color: rgba(244, 235, 219, 0.7); line-height: 1.4; }
.lander-page .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 4rem; }
.lander-page .step { position: relative; padding: 2rem; background: var(--cream); border-radius: 16px; border: 1px solid var(--line); transition: all 0.3s; }
.lander-page .step:hover { transform: translateY(-4px); border-color: var(--terracotta); }
.lander-page .step-number { position: absolute; top: -1rem; left: 2rem; background: var(--ink); color: var(--paper); width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 1.125rem; font-weight: 500; }
.lander-page .step-icon { width: 48px; height: 48px; margin-bottom: 1.5rem; color: var(--terracotta); }
.lander-page .features-section { background: var(--cream); border-top: 1px solid var(--line); }
.lander-page .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
.lander-page .feature { background: var(--paper); padding: 2rem; border-radius: 12px; border: 1px solid var(--line); transition: all 0.3s; }
.lander-page .feature:hover { transform: translateY(-2px); border-color: var(--ink); }
.lander-page .feature-icon { width: 32px; height: 32px; margin-bottom: 1.25rem; color: var(--terracotta); }
.lander-page .feature h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
.lander-page .feature p { color: var(--ink-soft); font-size: 0.9375rem; line-height: 1.5; }
.lander-page .pricing-section { background: var(--paper); }
.lander-page .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 4rem; }
.lander-page .price-card { background: var(--cream); padding: 2.5rem 2rem; border-radius: 16px; border: 1px solid var(--line); position: relative; transition: all 0.3s; }
.lander-page .price-card.featured { background: var(--ink); color: var(--paper); border: 2px solid var(--terracotta); transform: scale(1.05); }
.lander-page .price-card.featured h3, .lander-page .price-card.featured .price { color: var(--paper); }
.lander-page .price-card.featured .price-period { color: rgba(244, 235, 219, 0.7); }
.lander-page .price-card.featured ul li { color: rgba(244, 235, 219, 0.9); }
.lander-page .price-card.featured .btn { background: var(--terracotta); color: var(--paper); width: 100%; }
.lander-page .price-card.featured .btn:hover { background: var(--terracotta-deep); }
.lander-page .featured-tag { position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%); background: var(--terracotta); color: var(--paper); padding: 0.375rem 1rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.lander-page .price-name { font-family: 'Fraunces', serif; font-size: 1.5rem; font-weight: 500; margin-bottom: 0.5rem; }
.lander-page .price-desc { color: var(--ink-muted); font-size: 0.875rem; margin-bottom: 1.5rem; min-height: 2.5rem; }
.lander-page .price-card.featured .price-desc { color: rgba(244, 235, 219, 0.6); }
.lander-page .price { font-family: 'Fraunces', serif; font-size: 3rem; font-weight: 300; color: var(--ink); line-height: 1; margin-bottom: 0.25rem; }
.lander-page .price-period { color: var(--ink-muted); font-size: 0.875rem; margin-bottom: 2rem; }
.lander-page .price-card ul { list-style: none; margin-bottom: 2rem; }
.lander-page .price-card ul li { padding: 0.5rem 0; color: var(--ink-soft); font-size: 0.9375rem; display: flex; align-items: flex-start; gap: 0.75rem; }
.lander-page .price-card ul li::before { content: '✓'; color: var(--terracotta); font-weight: 600; flex-shrink: 0; }
.lander-page .price-card.featured ul li::before { color: var(--terracotta-light); }
.lander-page .price-card .btn { width: 100%; }
.lander-page .faq-section { background: var(--cream); border-top: 1px solid var(--line); }
.lander-page .faq-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
.lander-page .faq-list { display: flex; flex-direction: column; gap: 1rem; }
.lander-page .faq-item { background: var(--paper); border-radius: 12px; border: 1px solid var(--line); overflow: hidden; }
.lander-page .faq-question { padding: 1.5rem; font-weight: 500; color: var(--ink); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.0625rem; transition: color 0.2s; }
.lander-page .faq-question:hover { color: var(--terracotta); }
.lander-page .faq-toggle { font-size: 1.25rem; transition: transform 0.3s; color: var(--terracotta); }
.lander-page .faq-item.open .faq-toggle { transform: rotate(45deg); }
.lander-page .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.lander-page .faq-item.open .faq-answer { max-height: 300px; }
.lander-page .faq-answer-content { padding: 0 1.5rem 1.5rem; color: var(--ink-soft); line-height: 1.6; }
.lander-page .cta-section { background: var(--ink); color: var(--paper); padding: 8rem 0; text-align: center; position: relative; overflow: hidden; }
.lander-page .cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(184, 80, 42, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(122, 139, 92, 0.1) 0%, transparent 50%); z-index: 1; }
.lander-page .cta-section .container { position: relative; z-index: 2; }
.lander-page .cta-section h2 { color: var(--paper); max-width: 800px; margin: 0 auto 1.5rem; }
.lander-page .cta-section h2 em { color: var(--terracotta-light); }
.lander-page .cta-section .section-sub { color: rgba(244, 235, 219, 0.8); margin: 0 auto 2.5rem; }
.lander-page .cta-section .btn-primary { background: var(--terracotta); color: var(--paper); }
.lander-page .cta-section .btn-primary:hover { background: var(--paper); color: var(--ink); }
.lander-page footer { background: var(--paper); border-top: 1px solid var(--line); padding: 3rem 0 2rem; }
.lander-page .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
.lander-page .footer-brand p { color: var(--ink-muted); font-size: 0.9375rem; margin-top: 1rem; max-width: 320px; line-height: 1.5; }
.lander-page .footer-col h4 { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 1rem; font-weight: 500; }
.lander-page .footer-col ul { list-style: none; }
.lander-page .footer-col ul li { margin-bottom: 0.625rem; }
.lander-page .footer-col ul li a { color: var(--ink-soft); text-decoration: none; font-size: 0.9375rem; transition: color 0.2s; }
.lander-page .footer-col ul li a:hover { color: var(--terracotta); }
.lander-page .footer-bottom { border-top: 1px solid var(--line); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; color: var(--ink-muted); font-size: 0.875rem; }
@media (max-width: 968px) {
  .lander-page .container { padding: 0 1.5rem; }
  .lander-page .hero-grid, .lander-page .problem-grid, .lander-page .faq-grid { grid-template-columns: 1fr; gap: 3rem; }
  .lander-page .hero-visual { height: 400px; }
  .lander-page .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .lander-page .stat { border-left: none; padding-left: 0; border-top: 1px solid rgba(244, 235, 219, 0.15); padding-top: 1.5rem; }
  .lander-page .stat:first-child { border-top: none; padding-top: 0; }
  .lander-page .steps, .lander-page .features-grid, .lander-page .pricing-grid { grid-template-columns: 1fr; }
  .lander-page .price-card.featured { transform: none; }
  .lander-page .footer-grid { grid-template-columns: 1fr 1fr; }
  .lander-page .nav-links { display: none; }
  .lander-page section { padding: 4rem 0; }
}
`;

const BODY_HTML = `
<nav>
  <div class="container nav-inner">
    <div class="logo">
      <span class="logo-mark"></span>
      <span>Lander</span>
    </div>
    <div class="nav-links">
      <a href="#how">How it works</a>
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="/auth/signup" class="btn btn-secondary" style="padding: 0.625rem 1.25rem; font-size: 0.875rem;">Get started</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div>
        <div class="hero-eyebrow">
          <span class="pulse"></span>
          <span>Built for graduates on a 485 visa</span>
        </div>
        <h1>From international<br />experience to your<br /><em>Australian</em> <span class="underline">career</span>.</h1>
        <p class="hero-sub">The AI resume coach built specifically for international graduates in Australia. We rewrite your CV for the Aussie market, beat the ATS, and match you to jobs on the Skilled Occupation List.</p>
        <div class="hero-ctas">
          <a href="/auth/signup" class="btn btn-primary btn-lg">Land your skilled job &rarr;</a>
          <a href="#how" class="btn btn-secondary btn-lg">See how it works</a>
        </div>
        <div class="trust-row">
          <div class="avatars">
            <div class="avatar">PR</div>
            <div class="avatar">AK</div>
            <div class="avatar">MN</div>
            <div class="avatar">+</div>
          </div>
          <div class="trust-text">
            <strong>Joined by 200+ international graduates</strong><br />already on their pathway to PR
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="cv-card before">
          <div class="stamp">Generic</div>
          <div class="cv-header">
            <div class="cv-name">Priya Sharma</div>
            <div class="cv-role">Software Engineer &middot; Mumbai</div>
          </div>
          <div style="font-size: 0.7rem; color: var(--ink-muted); margin-bottom: 0.5rem;">SUMMARY</div>
          <div class="cv-line medium"></div>
          <div class="cv-line short"></div>
          <div style="font-size: 0.7rem; color: var(--ink-muted); margin: 0.75rem 0 0.5rem;">EXPERIENCE</div>
          <div class="cv-line"></div>
          <div class="cv-line short"></div>
          <div class="cv-line medium"></div>
        </div>
        <div class="cv-card after">
          <div class="stamp green">ATS 94/100</div>
          <div class="cv-header">
            <div class="cv-name">Priya Sharma</div>
            <div class="cv-role">Senior Software Engineer &middot; Sydney, NSW</div>
          </div>
          <div style="font-size: 0.7rem; color: var(--ink-muted); margin-bottom: 0.5rem;">PROFESSIONAL SUMMARY</div>
          <div class="cv-line medium highlight"></div>
          <div class="cv-line short"></div>
          <div style="font-size: 0.7rem; color: var(--ink-muted); margin: 0.75rem 0 0.5rem;">KEY SKILLS</div>
          <div>
            <span class="cv-badge success">Python</span>
            <span class="cv-badge success">AWS</span>
            <span class="cv-badge">React</span>
            <span class="cv-badge">SQL</span>
          </div>
          <div style="font-size: 0.7rem; color: var(--ink-muted); margin: 0.75rem 0 0.5rem;">PR PATHWAY</div>
          <div style="font-size: 0.75rem; color: var(--sage); font-weight: 600;">&check; ANZSCO 261313 &middot; Eligible</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="problem-section">
  <div class="container">
    <div class="problem-grid">
      <div>
        <div class="section-eyebrow">The problem</div>
        <h2>You've sent <em>100 applications.</em><br />Got two replies. <em>Sound familiar?</em></h2>
        <p class="section-sub" style="margin-top: 1.5rem;">You paid $4,600 for your graduate visa. You moved here, studied here, and built skills that should matter. But Australian recruiters won't even open your CV &mdash; because it's formatted for the wrong country.</p>
        <p class="section-sub" style="margin-top: 1rem;">The truth: <strong style="color: var(--ink);">75% of Australian employers use ATS systems</strong> that auto-reject international-style resumes before a human ever reads them. The clock on your 485 visa is ticking. We can help.</p>
      </div>
      <div class="quotes-stack">
        <div class="quote">
          <p class="quote-text">"I applied to 200+ jobs in three months. Got 4 interviews. I have a Masters from UNSW. What am I doing wrong?"</p>
          <p class="quote-author">&mdash; International graduate, r/AusFinance</p>
        </div>
        <div class="quote">
          <p class="quote-text">"My agent charged $3,000 just to review my CV. They changed three lines. I needed actual help."</p>
          <p class="quote-author">&mdash; Indian graduate, Sydney</p>
        </div>
        <div class="quote">
          <p class="quote-text">"Resume.io is built for Americans. Nothing matches the Australian format. I had no idea what was wrong with mine."</p>
          <p class="quote-author">&mdash; Nepali graduate, Melbourne</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat">
        <div class="stat-number">$4,600</div>
        <div class="stat-label">Cost of the 485 visa.<br />You can't afford to fail.</div>
      </div>
      <div class="stat">
        <div class="stat-number">75%</div>
        <div class="stat-label">Of resumes rejected by ATS<br />before reaching a human.</div>
      </div>
      <div class="stat">
        <div class="stat-number">42</div>
        <div class="stat-label">Average applications<br />before first interview.</div>
      </div>
      <div class="stat">
        <div class="stat-number">2.1x</div>
        <div class="stat-label">More interviews with a<br />properly tailored CV.</div>
      </div>
    </div>
  </div>
</section>

<section id="how">
  <div class="container">
    <div style="max-width: 720px;">
      <div class="section-eyebrow">How it works</div>
      <h2>Three steps from <em>rejected</em><br />to <em>recruited.</em></h2>
      <p class="section-sub" style="margin-top: 1.5rem;">We've stripped everything down to what actually moves the needle in Australia.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        <h3>Upload your CV</h3>
        <p style="color: var(--ink-soft);">Drop your international resume in. PDF, DOCX, or paste plain text. We extract everything &mdash; experience, skills, education, certifications.</p>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
        <h3>AI rewrites for Australia</h3>
        <p style="color: var(--ink-soft);">Our AI converts your CV to the Aussie 2-3 page format, swaps in local terminology, quantifies achievements, and aligns with ANZSCO codes.</p>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        <h3>Land skilled work</h3>
        <p style="color: var(--ink-soft);">Get an ATS-optimised CV, tailored cover letters, and job matches from the Skilled Occupation List &mdash; all in under 60 seconds.</p>
      </div>
    </div>
  </div>
</section>

<section id="features" class="features-section">
  <div class="container">
    <div style="max-width: 720px;">
      <div class="section-eyebrow">What you get</div>
      <h2>Built specifically for the <em>Australian market.</em></h2>
      <p class="section-sub" style="margin-top: 1.5rem;">Every feature is designed around one thing: getting you hired in Australia, faster.</p>
    </div>
    <div class="features-grid">
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <h3>Australian CV format</h3>
        <p>2-3 page layout, no photo, professional summary, skills-first &mdash; exactly what Aussie recruiters expect.</p>
      </div>
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <h3>SEEK &amp; ATS optimisation</h3>
        <p>Beat the ATS systems used by 90% of Australian employers. Real-time scoring with specific fixes.</p>
      </div>
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/><polyline points="12 11 12 2 8 6"/><polyline points="12 2 16 6"/></svg>
        <h3>PR pathway matching</h3>
        <p>Cross-references the Skilled Occupation List. Flags jobs that qualify for your visa pathway.</p>
      </div>
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        <h3>Experience translator</h3>
        <p>Converts foreign job titles to Australian equivalents. Adds AUD figures, local context, recognisable frameworks.</p>
      </div>
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <h3>Cover letter generator</h3>
        <p>Australian-style cover letters that don't sound like every other AI tool. Personalised, human, effective.</p>
      </div>
      <div class="feature">
        <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <h3>Visa status helper</h3>
        <p>Templates and guidance on how (and when) to mention your visa status. Stop getting filtered out unfairly.</p>
      </div>
    </div>
  </div>
</section>

<section id="pricing" class="pricing-section">
  <div class="container">
    <div style="max-width: 720px; margin: 0 auto; text-align: center;">
      <div class="section-eyebrow">Pricing</div>
      <h2>One-time payment.<br /><em>No subscription traps.</em></h2>
      <p class="section-sub" style="margin: 1.5rem auto 0;">You're already paying enough &mdash; visa fees, course fees, agent fees. Pay once, use it as long as you need.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card">
        <h3 class="price-name">Starter</h3>
        <p class="price-desc">For graduates just starting their job hunt.</p>
        <div class="price">$39</div>
        <div class="price-period">AUD &middot; one-time &middot; 30-day access</div>
        <ul>
          <li>Full Australian CV rewrite</li>
          <li>ATS score &amp; fixes</li>
          <li>3 tailored versions</li>
          <li>1 cover letter template</li>
          <li>Basic visa status guidance</li>
        </ul>
        <a href="/auth/signup" class="btn btn-secondary">Get started</a>
      </div>
      <div class="price-card featured">
        <span class="featured-tag">Most chosen</span>
        <h3 class="price-name">PR Pathway</h3>
        <p class="price-desc">For graduates pursuing permanent residency.</p>
        <div class="price">$79</div>
        <div class="price-period">AUD &middot; one-time &middot; 90-day access</div>
        <ul>
          <li>Everything in Starter</li>
          <li>Unlimited CV tailoring</li>
          <li>PR-pathway job matcher</li>
          <li>5 cover letter templates</li>
          <li>LinkedIn optimiser</li>
          <li>Skilled Occupation List crosscheck</li>
          <li>Australian interview prep</li>
        </ul>
        <a href="/auth/signup" class="btn btn-primary">Start landing interviews</a>
      </div>
      <div class="price-card">
        <h3 class="price-name">Skilled Migration</h3>
        <p class="price-desc">For graduates serious about staying long-term.</p>
        <div class="price">$149</div>
        <div class="price-period">AUD &middot; one-time &middot; 12-month access</div>
        <ul>
          <li>Everything in PR Pathway</li>
          <li>12-month full access</li>
          <li>Skills assessment guidance</li>
          <li>Salary negotiation scripts</li>
          <li>Migration agent network</li>
          <li>Priority email support</li>
        </ul>
        <a href="/auth/signup" class="btn btn-secondary">Get full access</a>
      </div>
    </div>
    <p style="text-align: center; margin-top: 2.5rem; color: var(--ink-muted); font-size: 0.875rem;">Secured by Stripe &middot; 7-day money-back guarantee &middot; No subscription, ever</p>
  </div>
</section>

<section id="faq" class="faq-section">
  <div class="container">
    <div class="faq-grid">
      <div>
        <div class="section-eyebrow">FAQ</div>
        <h2>Questions, <em>honestly</em> answered.</h2>
        <p class="section-sub" style="margin-top: 1.5rem;">Built by someone who watched friends struggle through this. If you have other questions, just email us.</p>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">Is this just another generic AI resume tool? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">No. Tools like Resume.io and Jobscan are built for Americans. We're built specifically for international graduates in Australia &mdash; Australian CV format, ANZSCO matching, visa status guidance, and Aussie recruiter preferences.</div></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Will this guarantee I get a job? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">No tool can guarantee that. But we can guarantee your CV will be Australian-formatted, ATS-optimised, and aligned with the Skilled Occupation List. The rest depends on your skills, market timing, and persistence.</div></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Why one-time payment instead of subscription? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">Because subscriptions are predatory for job seekers. You use the tool intensely for 2-3 months, then don't need it. We'd rather you pay once, succeed, and tell your friends.</div></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How is this different from a migration agent? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">Migration agents charge $3,000-10,000 and focus on visa paperwork. We focus on getting you hired with a CV that actually works in Australia. We're complementary &mdash; many users use both.</div></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">What if I'm not in Australia yet? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">You can still use it. If you're applying for skilled migration or already secured a 485 visa, having an Australian-ready CV before you arrive gives you a massive head start.</div></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">What's your refund policy? <span class="faq-toggle">+</span></div>
          <div class="faq-answer"><div class="faq-answer-content">If you're not satisfied within 7 days, email us and we'll refund you in full. No questions, no hoops.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="section-eyebrow" style="color: var(--terracotta-light);">Your move</div>
    <h2>You didn't come this far<br />to <em>only come this far.</em></h2>
    <p class="section-sub">Your visa is ticking. Your savings are draining. Your family is waiting. Stop wasting applications on a broken CV. Let's land you the job you actually deserve.</p>
    <a href="/auth/signup" class="btn btn-primary btn-lg">Start your Australian career &rarr;</a>
    <p style="margin-top: 1.5rem; color: rgba(244, 235, 219, 0.6); font-size: 0.875rem;">Join 200+ international graduates already on their pathway</p>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-mark"></span>
          <span>Lander</span>
        </div>
        <p>The AI resume coach built for international graduates in Australia. Made in Sydney.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Aussie CV guide</a></li>
          <li><a href="#">Skilled Occupation List</a></li>
          <li><a href="#">485 visa guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 Lander. Made in Sydney, Australia.</div>
      <div>support@lander.au</div>
    </div>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    if (!document.getElementById('lander-fonts')) {
      const link = document.createElement('link');
      link.id = 'lander-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
      document.head.appendChild(link);
    }

    const handlers: Array<{ el: Element; fn: () => void }> = [];
    document.querySelectorAll('.faq-question').forEach((q) => {
      const fn = () => q.parentElement?.classList.toggle('open');
      q.addEventListener('click', fn);
      handlers.push({ el: q, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn));
    };
  }, []);

  return (
    <div className="lander-page">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}
