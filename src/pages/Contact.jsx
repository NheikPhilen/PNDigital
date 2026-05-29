import React, { useState } from 'react'
import SiteHeader from '../components/SiteHeader'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'info@lndigital.com', href: 'mailto:info@lndigital.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: '📍', label: 'Address', value: '123 Digital Street, Tech City, TC 12345', href: '#' },
    { icon: '🕐', label: 'Hours', value: 'Mon-Fri: 9AM-6PM, Sat-Sun: Closed', href: '#' }
  ]

  return (
    <div style={{ fontFamily: "MIsansKhmer, system-ui, sans-serif", minHeight: '100vh', background: 'linear-gradient(135deg, #fef5e7 0%, #fdaf06 100%)' }}>
      <SiteHeader />

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 40px',
        background: 'linear-gradient(135deg, #fdaf06 0%, #f39c12 100%)',
      }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, margin: '0 0 20px 0', color: '#b45309' }}>Get in Touch</h1>
        <p style={{ fontSize: 18, color: '#92400e', maxWidth: 600, margin: '0 auto' }}>
          We'd love to hear from you. Let's discuss how we can help your business.
        </p>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 1200, margin: '60px auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60 }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#b45309', marginBottom: 25 }}>Send us a Message</h2>
            <form onSubmit={handleSubmit} style={{
              background: 'white',
              padding: 30,
              borderRadius: 12,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '2px solid #fdaf06'
            }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, color: '#b45309', marginBottom: 8 }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '2px solid #fdaf06',
                    borderRadius: 8,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, color: '#b45309', marginBottom: 8 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '2px solid #fdaf06',
                    borderRadius: 8,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="Your email"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontWeight: 600, color: '#b45309', marginBottom: 8 }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '2px solid #fdaf06',
                    borderRadius: 8,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="Your phone"
                />
              </div>

              <div style={{ marginBottom: 25 }}>
                <label style={{ display: 'block', fontWeight: 600, color: '#b45309', marginBottom: 8 }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '2px solid #fdaf06',
                    borderRadius: 8,
                    fontFamily: 'inherit',
                    fontSize: 14,
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#b45309',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#b45309', marginBottom: 25 }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  style={{
                    background: 'white',
                    padding: 25,
                    borderRadius: 12,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    border: '2px solid #fdaf06',
                    textDecoration: 'none',
                    transition: 'transform 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', gap: 15, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 28 }}>{info.icon}</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#b45309', margin: '0 0 5px 0' }}>{info.label}</h3>
                      <p style={{ color: '#6b7280', margin: 0, fontSize: 14 }}>{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div style={{ marginTop: 30 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#b45309', marginBottom: 15 }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: 15 }}>
                {[
                  { name: 'Facebook', icon: '👍', url: '#' },
                  { name: 'Twitter', icon: '🐦', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'Instagram', icon: '📷', url: '#' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      background: '#fdaf06',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      textDecoration: 'none',
                      transition: 'background 0.3s'
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
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
