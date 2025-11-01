'use client';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Project Key',
    applicationCategory: 'DeveloperApplication',
    description: 'Universal authentication orchestrator for test automation frameworks',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Project Key',
    },
    keywords: 'authentication, testing, automation, e2e, playwright, cypress, puppeteer',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header style={{ padding: '1.5rem 0', position: 'sticky', top: 0, background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10 }}>
        <nav aria-label="Main navigation" className="responsive-nav" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: '500', letterSpacing: '-0.02em' }}>🔑 Project Key</div>
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem' }}>
            {/* <a href="#docs">Docs</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> */}
          </div>
        </nav>
      </header>

      <section className="responsive-padding" style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="responsive-title" style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
            One <span style={{ color: 'rgb(226 181 34)' }}>Key</span> to rule them all
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Eliminate authentication friction in your end-to-end test automation, across local, staging, and production environments.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <a 
              href="#get-started" 
              style={{ 
                padding: '0.75rem 1.5rem', 
                background: 'var(--accent)', 
                color: 'var(--bg)', 
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}
            >
              Coming Soon
            </a>
          </div>
        </div>
      </section>

      <section className="responsive-padding" style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Real Authentication, Never Mocked
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '3rem' }}>
          Unlike stubs or mocks that break production parity, <span style={{ color: 'rgb(226 181 34)' }}>Project Key</span> uses legitimate authentication flows.
        </p>
        <div className="responsive-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="feature-block">
            <div className="feature-header">
              <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Environment-Scoped</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Sessions match what users actually experience across local, staging, and production environments.
            </p>
          </div>
          <div className="feature-block">
            <div className="feature-header">
              <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Encrypted Sessions</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              All sessions are encrypted and stored securely, protecting your credentials.
            </p>
          </div>
          <div className="feature-block">
            <div className="feature-header">
              <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Framework Agnostic</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Designed to work with any test framework, keeping your authentication setup flexible across tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="responsive-padding" style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', lineHeight: '1.2', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          One Setup, Every Environment
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          <span style={{ color: 'rgb(226 181 34)' }}>Project Key</span> handles OAuth flows, token management, and session persistence so you can focus on writing tests.
        </p>
        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ padding: '1.25rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'monospace', lineHeight: '1.7' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}># Authenticates and stores session</div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>$ </span>
                <span style={{ color: '#ff79c6' }}>npx projectkey</span>
                <span style={{ color: '#50fa7b' }}> login provider</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '1.25rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontFamily: 'monospace', lineHeight: '1.7' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}># Exports session for your test framework</div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>$ </span>
                <span style={{ color: '#ff79c6' }}>npx projectkey</span>
                <span style={{ color: '#50fa7b' }}> export framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="responsive-padding" style={{ padding: '1.5rem 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2025 Project Key. All rights reserved.</p>
      </footer>
    </main>
  )
}

