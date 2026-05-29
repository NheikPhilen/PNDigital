import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function About() {
  return (
    <div style={{ fontFamily: "Kantumruy Pro, system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(135deg, #fef5e7 0%, #fdaf06 100%)' }}>
      {/* Navigation Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderBottom: '2px solid #fdaf06',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <Link to="/" style={{ display: 'flex', gap: 12, alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="PN Digital" style={{ height: 52, width: 'auto', display: 'block', objectFit: 'contain' }} />
        </Link>
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#b45309', fontWeight: 600 }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#b45309', fontWeight: 600 }}>About</Link>
          <Link to="/services" style={{ textDecoration: 'none', color: '#b45309', fontWeight: 600 }}>Services</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#fff', background: '#f39c12', padding: '10px 20px', borderRadius: 8, fontWeight: 600 }}>Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 40px',
        background: 'linear-gradient(135deg, #fdaf06 0%, #f39c12 100%)',
      }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, margin: '0 0 20px 0', color: '#b45309' }}>About PN Digital</h1>
        <p style={{ fontSize: 18, color: '#92400e', maxWidth: 600, margin: '0 auto' }}>
          Dedicated to providing innovative digital solutions and reliable information services.
        </p>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 1200, margin: '60px auto', padding: '0 40px' }}>
        <section style={{
          background: 'white',
          padding: 40,
          borderRadius: 12,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fdaf06',
          marginBottom: 40
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#b45309', marginTop: 0 }}>Our Story</h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8, marginBottom: 15 }}>
            PN Digital was founded with a vision to democratize access to quality digital solutions and information. We believe in the power of technology to transform businesses and improve lives.
          </p>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.8 }}>
            Over the years, we have built a reputation for reliability, innovation, and customer-centric solutions. Our team comprises industry experts who are passionate about delivering exceptional results.
          </p>
        </section>

        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 30,
          marginBottom: 40
        }}>
          <div style={{
            background: 'white',
            padding: 30,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #fdaf06'
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#b45309', marginBottom: 15 }}>✅ Our Mission</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
              To empower organizations and individuals with digital tools and knowledge that drive growth, innovation, and sustainable success.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: 30,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #fdaf06'
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#b45309', marginBottom: 15 }}>🎯 Our Vision</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
              To become a leading provider of digital solutions, recognized for our excellence, integrity, and commitment to customer success.
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: 30,
            borderRadius: 12,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            border: '2px solid #fdaf06'
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#b45309', marginBottom: 15 }}>💪 Our Values</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
              We value innovation, integrity, customer focus, and continuous improvement. These principles guide every decision we make.
            </p>
          </div>
        </section>

        <section style={{
          background: 'white',
          padding: 40,
          borderRadius: 12,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fdaf06'
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#b45309', marginTop: 0 }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 25, marginTop: 25 }}>
            {[
              { title: 'Expert Team', desc: 'Experienced professionals with proven track record' },
              { title: 'Quality Focus', desc: 'Commitment to delivering excellence in all services' },
              { title: 'Reliable Support', desc: '24/7 customer support and dedicated assistance' },
              { title: 'Cost Effective', desc: 'Competitive pricing without compromising quality' },
              { title: 'Customized Solutions', desc: 'Tailored approaches for unique business needs' },
              { title: 'Continuous Innovation', desc: 'Always staying ahead with latest technologies' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: '#b45309', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: '#6b7280', fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
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
