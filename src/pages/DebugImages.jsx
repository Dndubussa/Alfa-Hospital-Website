import React from 'react'

const DebugImages = () => {
  const paths = [
    { label: 'Root-relative', src: '/images/alfa-logo.png' },
    { label: 'Public (same as root-relative)', src: '/images/hero-image.jpg' },
    { label: 'Relative from route (may fail)', src: 'images/alfa-logo.png' },
    { label: 'Absolute (domain placeholder)', src: 'https://alfasphospitals.com/images/alfa-logo.png' },
  ]

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <h1>Image Debug</h1>
        <p>Testing different image path strategies in production.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '24px' }}>
          {paths.map(({ label, src }) => (
            <div key={label} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16 }}>
              <p style={{ marginBottom: 12 }}><strong>{label}</strong></p>
              <code style={{ display: 'block', fontSize: 12, marginBottom: 12 }}>{src}</code>
              <div style={{ background: '#f9fafb', padding: 12, borderRadius: 8, textAlign: 'center' }}>
                <img src={src} alt={label} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DebugImages
