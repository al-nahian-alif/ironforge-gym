import Image from 'next/image'

const trainers = [
  {
    name: 'Marcus Cole',
    role: 'Strength Coach',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', // Marcus
  },
  {
    name: 'Serena Blake',
    role: 'HIIT & Cardio',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', // Serena
  },
  {
    name: 'Raj Patel',
    role: 'CrossFit Specialist',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80', // Raj
  },
  {
    name: 'Zoe Hartley',
    role: 'Yoga & Recovery',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  },
]



export default function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '0' }}>
          <span className="section-label">Our Team</span>
          <h2 className="section-title">ELITE<br />TRAINERS.</h2>
          <p style={{ color: 'var(--gray)', fontSize: '1.05rem', maxWidth: '500px', margin: '1.5rem auto 0', lineHeight: '1.6' }}>
            Certified professionals with proven track records. Your success is their obsession.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((t, i) => (
            <div key={i} className="trainer-card">
              <div className="trainer-img-wrap">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={400}
                  height={533}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div className="trainer-overlay">
                  <div className="trainer-name">{t.name}</div>
                  <div className="trainer-role">{t.role}</div>
                </div>
              </div>

              <div className="trainer-social">
                <div className="social-dot">ig</div>
                <div className="social-dot">tw</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
