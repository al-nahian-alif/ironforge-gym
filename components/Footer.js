export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.05em' }}>
              IRON<span style={{ color: 'var(--red)' }}>FORGE</span>
            </div>
            <p>
              The premier destination for serious athletes and fitness beginners alike.
              State-of-the-art equipment, world-class coaching, and a community that
              pushes you to be your best.
            </p>
            <div className="social-links">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <a key={i} href="#" className="social-link">{icon}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {['About Us', 'Classes', 'Trainers', 'Pricing', 'Blog', 'Contact'].map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Hours</div>
            <ul className="footer-links">
              <li><a href="#">Mon–Fri: 5am – 11pm</a></li>
              <li><a href="#">Saturday: 6am – 10pm</a></li>
              <li><a href="#">Sunday: 7am – 8pm</a></li>
              <li><a href="#">Holidays: 8am – 6pm</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Stay in the Zone</div>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Get weekly workout tips, nutrition hacks, and member-only offers.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe →</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 <span>IronForge Gym</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((link, i) => (
              <a key={i} href="#" style={{ fontSize: '0.85rem', color: 'var(--gray)', textDecoration: 'none' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
