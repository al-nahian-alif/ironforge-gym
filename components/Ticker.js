const ITEMS = [
  'Strength Training', 'HIIT', 'CrossFit', 'Yoga & Mobility',
  'Boxing', 'Cycling', 'Nutrition Plans', 'Personal Training',
  'Strength Training', 'HIIT', 'CrossFit', 'Yoga & Mobility',
  'Boxing', 'Cycling', 'Nutrition Plans', 'Personal Training',
]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {ITEMS.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
