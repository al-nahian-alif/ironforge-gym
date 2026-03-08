import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>Est. 2015 · Premium Fitness</span>
          </div>

          <h1 className="hero-title">
            FORGE
            <span className="accent">YOUR</span>
          </h1>
          <p className="hero-subtitle">LEGACY.</p>

          <p className="hero-desc">
            No excuses. No limits. Just iron, sweat, and the relentless pursuit of the best version of yourself.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">
              Start Today
              <span>→</span>
            </a>
            <a href="#classes" className="btn-outline">
              Explore Classes
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">12K+</div>
          <div className="stat-label">Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">48</div>
          <div className="stat-label">Classes / Week</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">30+</div>
          <div className="stat-label">Elite Trainers</div>
        </div>
      </div>
    </section>
  )
}
