export default function Home() {
  return (
    <main>
      <header style={{ padding: '2rem 2rem 0', position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10 }}>
        <nav style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: '500', letterSpacing: '-0.02em' }}>🔑 Project Key</div>
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem' }}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </nav>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <section style={{ padding: '8rem 0 6rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '4rem', letterSpacing: '-0.04em' }}>
            One Key to rule them all
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '4rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            Eliminate authentication friction in your end-to-end test automation, across local, staging, and production environments.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="#get-started" 
              style={{ 
                padding: '1rem 2.5rem', 
                background: 'var(--accent)', 
                color: 'var(--bg)', 
                borderRadius: '6px',
                display: 'inline-block',
                fontWeight: '500',
                fontSize: '1rem'
              }}
            >
              Get Started
            </a>
            <a 
              href="#docs" 
              style={{ 
                padding: '1rem 2.5rem', 
                border: '1px solid var(--border)', 
                borderRadius: '6px',
                display: 'inline-block',
                fontWeight: '500',
                fontSize: '1rem'
              }}
            >
              Documentation
            </a>
          </div>
        </section>

        <section style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1.5rem', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                Real Authentication, Never Mocked
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Always uses legitimate flows or tokens. Never mocked. Sessions are encrypted, short-lived, and environment-scoped.
              </p>
            </div>
            <div style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--bg)' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <div style={{ color: 'var(--text-muted)' }}>$ npx projectkey login github</div>
                <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}># Logs in via OAuth or API</div>
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>$ npx projectkey export --framework=x</div>
                <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}># Outputs session.json</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" style={{ padding: '6rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Framework Agnostic
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Works with any test automation framework. One tool for all your test automation needs.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Environment Consistency
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Identical auth handling locally, in staging, and in production. No more environment-specific hacks.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Security First
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                No plain-text tokens or cookies ever written to disk. Sessions auto-expire and are environment-scoped.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                Extensible by Design
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Developers can write new AuthProvider plugins easily. Customize authentication flows for your needs.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Ready to get started?
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
              Install Project Key and eliminate authentication friction in your test automation workflow.
            </p>
            <a 
              href="#get-started" 
              style={{ 
                padding: '1rem 2.5rem', 
                background: 'var(--accent)', 
                color: 'var(--bg)', 
                borderRadius: '6px',
                display: 'inline-block',
                fontWeight: '500',
                fontSize: '1rem'
              }}
            >
              Get Started
            </a>
          </div>
        </section>
      </div>

      <footer style={{ padding: '4rem 2rem 3rem', borderTop: '1px solid var(--border)', marginTop: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>© 2025 Project Key. Universal Authentication Orchestrator for Automation Frameworks.</p>
        </div>
      </footer>
    </main>
  )
}
