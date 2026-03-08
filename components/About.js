import Image from 'next/image'

const features = [
  { icon: '🏋️', title: 'Elite Equipment', text: 'State-of-the-art machines and free weights from leading brands.' },
  { icon: '🔥', title: 'Proven Programs', text: 'Science-backed training systems designed for real results.' },
  { icon: '🧬', title: 'Custom Nutrition', text: 'Personalized meal plans crafted by certified nutritionists.' },
  { icon: '📊', title: 'Progress Tracking', text: 'Advanced metrics and weekly check-ins to keep you on target.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" // main
              alt="Gym interior"
              width={500}
              height={480}
              className="about-img-main"
            />
            <Image
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80"  // secondary
              alt="Weight training"
              width={380}
              height={330}
              className="about-img-secondary"
            />
            <div className="about-badge">
              <div className="about-badge-num">10</div>
              <div className="about-badge-text">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="section-label">Why IronForge</span>
            <h2 className="section-title">
              WE BUILD<br />CHAMPIONS.
            </h2>
            <p style={{ color: 'var(--gray-light)', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1.5rem' }}>
              At IronForge, we believe every body has untapped potential. 
              Our world-class facility, expert trainers, and proven programs 
              have helped over 12,000 members transform their lives.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-text">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
