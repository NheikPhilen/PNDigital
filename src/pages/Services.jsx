import React from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'

export default function Services() {
  const services = [
    {
      title: 'Service Boost',
      icon: '⚡',
      description: 'Rapidly increase visibility and engagement for your services with our proven marketing strategies and targeted campaigns.',
      features: [
        'Organic growth strategies',
        'Engagement optimization',
        'Targeted audience reach',
        'Performance analytics',
        'Real-time monitoring',
        'Custom campaigns'
      ]
    },
    {
      title: 'Page Selling',
      icon: '📄',
      description: 'Monetize your content and pages effectively. We help you sell digital pages, courses, and products to a global audience.',
      features: [
        'Page setup & design',
        'Payment integration',
        'Marketing automation',
        'Customer management',
        'Sales funnel optimization',
        'Revenue tracking'
      ]
    },
    {
      title: 'TikTok Marketing',
      icon: '🎵',
      description: 'Leverage the power of TikTok to reach millions. Our expert strategies turn viewers into customers and build loyal communities.',
      features: [
        'Viral content creation',
        'Influencer partnerships',
        'Hashtag strategies',
        'Direct sales integration',
        'Follower growth',
        'Community management'
      ]
    }
  ]

  return (
    <div style={{ fontFamily: "MIsansKhmer, system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(135deg, #fef5e7 0%, #fdaf06 100%)' }}>
      <SiteHeader />

      {/* Hero Section */}
      <section style={{
        padding: '80px 40px',
        background: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, margin: '0 0 20px 0', color: '#1a1a1a' }}>Our Core Services</h1>
        <p style={{ fontSize: 18, color: '#666', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
          Three powerful ways to grow your business and dominate your niche. From service boosting to TikTok marketing, we have the expertise you need.
        </p>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 1200, margin: '60px auto', padding: '0 40px', marginBottom: 80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 40
        }}>
          {services.map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: 40,
              borderRadius: 16,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              border: '3px solid #fdaf06',
              transition: 'all 0.3s',
              position: 'relative'
            }}>
              <div style={{ fontSize: 50, marginBottom: 20 }}>{service.icon}</div>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: '#1a1a1a', margin: '0 0 15px 0' }}>{service.title}</h3>
              <p style={{ color: '#666', fontSize: 15, marginBottom: 25, lineHeight: 1.7 }}>{service.description}</p>
              <div style={{ background: '#fef5e7', padding: '20px', borderRadius: 12, borderLeft: '4px solid #fdaf06', marginBottom: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#b45309', margin: '0 0 12px 0', textTransform: 'uppercase' }}>What's Included:</p>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {service.features.map((feature, j) => (
                    <li key={j} style={{ color: '#666', fontSize: 14, marginBottom: 6, fontWeight: 500 }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button style={{
                width: '100%',
                padding: '12px',
                background: '#fdaf06',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(253, 175, 6, 0.3)'
              }}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #fdaf06 0%, #f39c12 100%)',
          padding: 50,
          borderRadius: 12,
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#b45309', marginTop: 0, marginBottom: 15 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 16, color: '#92400e', marginBottom: 30, maxWidth: 500, margin: '0 auto 30px' }}>
            Contact us today to discuss how we can help transform your business.
          </p>
          <Link to="/contact" style={{
            padding: '12px 30px',
            background: '#b45309',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            display: 'inline-block'
          }}>Get in Touch</Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#b45309',
        color: 'white',
        textAlign: 'center',
        padding: 30,
        marginTop: 60
      }}>
        <p style={{ margin: 10 }}>© 2026 PN Digital. All rights reserved.</p>
        <p style={{ margin: 10, fontSize: 14, opacity: 0.8 }}>Providing innovative digital solutions since 2024</p>
      </footer>
    </div>
  )
}
