const plans = [
  {
    label: 'Starter',
    name: 'BASIC',
    price: '29',
    features: [
      'Gym Floor Access',
      '2 Group Classes / Month',
      'Locker Room Access',
      'Basic App Features',
    ],
    btnClass: 'plan-btn-outline',
    featured: false,
  },
  {
    label: 'Most Popular',
    name: 'ELITE',
    price: '59',
    features: [
      'Unlimited Gym Access',
      'Unlimited Group Classes',
      'Monthly PT Session',
      'Nutrition Guidance',
      'Premium App + Tracking',
    ],
    btnClass: 'plan-btn-solid',
    featured: true,
    badge: 'Most Popular',
  },
  {
    label: 'Ultimate',
    name: 'BEAST',
    price: '99',
    features: [
      'Everything in Elite',
      '4 PT Sessions / Month',
      'Custom Meal Plan',
      'Body Composition Scans',
      'Priority Class Booking',
    ],
    btnClass: 'plan-btn-outline',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Membership</span>
          <h2 className="section-title">CHOOSE YOUR<br />BATTLEFIELD.</h2>
          <p style={{ color: 'var(--gray)', fontSize: '1.05rem', maxWidth: '450px', margin: '1.5rem auto 0', lineHeight: '1.6' }}>
            All plans include no joining fee in March. Cancel anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.badge && <div className="popular-badge">🔥 {plan.badge}</div>}
              <div className="plan-label">{plan.label}</div>
              <div className="plan-name">{plan.name}</div>

              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">/ mo</span>
              </div>

              <div className="plan-divider" />

              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <div className="check-icon">✓</div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#" className={`plan-btn ${plan.btnClass}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
