import Image from 'next/image'





const classes = [
  {
    tag: 'Strength',
    name: 'Power Lift',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
    duration: '60 min',
    level: 'All Levels',
  },
  {
    tag: 'Cardio',
    name: 'HIIT Blast',
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2171073a4?w=600&q=80',
    duration: '45 min',
    level: 'Intermediate',
  },
  {
    tag: 'Combat',
    name: 'Boxing',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80', // Boxing
    duration: '60 min',
    level: 'Beginner+',
  },
  {
    tag: 'Recovery',
    name: 'Yoga Flow',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80', // Yoga
    duration: '75 min',
    level: 'All Levels',
  },
  {
    tag: 'Functional',
    name: 'CrossFit',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80',
    duration: '60 min',
    level: 'Advanced',
  },
  {
    tag: 'Cardio',
    name: 'Spin Cycle',
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2171073a4?w=600&q=80', // Spin
    duration: '45 min',
    level: 'All Levels',
  },
]

export default function Classes() {
  return (
    <section className="classes" id="classes">
      <div className="container">
        <div className="classes-header">
          <div>
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">FIND YOUR<br />WEAPON.</h2>
          </div>
          <a href="#pricing" className="btn-primary">View Full Schedule →</a>
        </div>
      </div>

      <div className="classes-grid">
        {classes.map((cls, i) => (
          <div key={i} className="class-card">
            <Image
              src={cls.img}
              alt={cls.name}
              width={600}
              height={800}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="class-overlay">
              <div className="class-tag">{cls.tag}</div>
              <div className="class-name">{cls.name}</div>
              <div className="class-info">
                <span>⏱ {cls.duration}</span>
                <span>📊 {cls.level}</span>
              </div>
              <div className="class-cta">Book Class →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
