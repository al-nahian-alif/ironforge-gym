import './globals.css'

export const metadata = {
  title: 'IronForge Gym — Forge Your Legacy',
  description: 'Premium gym with elite trainers, state-of-the-art equipment, and programs for every level. Join IronForge and forge your legacy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
