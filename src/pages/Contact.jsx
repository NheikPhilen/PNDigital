import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaFacebookF, FaLocationDot, FaPaperPlane, FaPhone, FaRegClock, FaTelegram } from 'react-icons/fa6'
import contactHero from '../../assets/images/HeroBanner.jpg'

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  service: 'Page boost',
  message: ''
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [submitState, setSubmitState] = useState('idle')

  const contactInfo = [
    { icon: <FaPhone />, label: 'Phone', value: '0979777420', href: 'tel:0979777420' },
    { icon: <FaTelegram />, label: 'Telegram', value: '@PhaNet0903', href: 'https://t.me/PhaNet0903' },
    { icon: <FaFacebookF />, label: 'Facebook Page', value: 'PN Digital', href: 'https://www.facebook.com/profile.php?id=61569384341081' }
  ]

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const buildTelegramMessage = () => [
    '<b>New PN Digital request</b>',
    '',
    `Name: ${formData.name.trim()}`,
    `Phone: ${formData.phone.trim()}`,
    `Email: ${formData.email.trim() || 'Not provided'}`,
    `Service: ${formData.service}`,
    '',
    `Message: ${formData.message.trim()}`
  ].join('\n')

  const sendTelegramAlert = async () => {
    const response = await fetch('/api/send-telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: buildTelegramMessage() })
    })

    if (!response.ok) {
      throw new Error('Telegram message failed')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState('sending')

    try {
      await sendTelegramAlert()
      setSubmitState('sent')
      setFormData(initialFormData)
    } catch (error) {
      console.error(error)
      setSubmitState('error')
    }
  }

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#101827' }}>
      <style>{`
        .contact-wrap { max-width: 1200px; margin: 0 auto; }
        .contact-pad { padding: 78px 40px; }
        .contact-hero { position: relative; overflow: hidden; min-height: calc(100vh - 74px); display: flex; align-items: center; }
        .contact-hero-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(360px, 1.1fr); gap: 34px; align-items: center; }
        .contact-eyebrow { margin: 0 0 12px; color: #5eead4; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; }
        .contact-title { margin: 0; font-size: clamp(34px, 5vw, 62px); line-height: 1.06; font-weight: 950; letter-spacing: 0; }
        .contact-card { border: 1px solid rgba(255,255,255,.82); border-radius: 8px; background: rgba(255,255,255,.96); box-shadow: 0 28px 80px rgba(0,0,0,.22); backdrop-filter: blur(14px); }
        .contact-form-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .contact-cta { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 24px; align-items: center; }
        .contact-field { display: grid; gap: 8px; }
        .contact-field label { color: #172033; font-size: 14px; font-weight: 900; }
        .contact-input { width: 100%; border: 1px solid #d8dee8; border-radius: 8px; background: #fff; color: #101827; padding: 14px 14px; font-size: 15px; outline: none; }
        .contact-input:focus { border-color: #fdaf06; box-shadow: 0 0 0 4px rgba(253,175,6,.16); }
        .contact-info-list { display: grid; gap: 12px; margin-top: 28px; }
        .contact-info-link { display: grid; grid-template-columns: 46px 1fr; gap: 14px; align-items: center; padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,.26); background: rgba(255,255,255,.12); text-decoration: none; backdrop-filter: blur(10px); }
        .contact-info-icon { width: 46px; height: 46px; border-radius: 8px; background: #fdaf06; color: #101827; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        @media (max-width: 900px) {
          .contact-pad { padding: 58px 18px; }
          .contact-hero { align-items: start; min-height: auto; }
          .contact-hero-grid { grid-template-columns: 1fr; }
          .contact-form-row, .contact-cta { grid-template-columns: 1fr; }
        }
      `}</style>

      <main>
        <section
          className="contact-pad contact-hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(16,24,39,.9) 0%, rgba(16,24,39,.72) 52%, rgba(16,24,39,.54) 100%), url(${contactHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="contact-wrap contact-hero-grid">
            <div style={{ color: '#fff' }}>
              <p className="contact-eyebrow">Contact PN Digital</p>
              <h1 className="contact-title">Tell us what you want to grow.</h1>

              <div className="contact-info-list">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href} className="contact-info-link">
                    <span className="contact-info-icon">{info.icon}</span>
                    <span>
                      <strong style={{ display: 'block', color: '#fff', fontSize: 16 }}>{info.label}</strong>
                      <span style={{ display: 'block', marginTop: 4, color: '#dbeafe', lineHeight: 1.5 }}>{info.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-card" style={{ padding: 28 }}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" className="contact-input" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" className="contact-input" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your phone" required />
                </div>
              </div>

              <div className="contact-form-row" style={{ marginTop: 16 }}>
                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" className="contact-input" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Optional email" />
                </div>
                <div className="contact-field">
                  <label htmlFor="service">Service</label>
                  <select id="service" className="contact-input" name="service" value={formData.service} onChange={handleInputChange}>
                    <option>Page boost</option>
                    <option>Page selling</option>
                    <option>TikTok growth</option>
                    <option>BM Ad Account</option>
                    <option>Other request</option>
                  </select>
                </div>
              </div>

              <div className="contact-field" style={{ marginTop: 16 }}>
                <label htmlFor="message">Message</label>
                <textarea id="message" className="contact-input" name="message" value={formData.message} onChange={handleInputChange} rows="6" placeholder="Tell us your page link, service goal, budget, or timeline" required style={{ resize: 'vertical' }} />
              </div>

              {submitState === 'sent' && (
                <p style={{ margin: '16px 0 0', color: '#047857', fontWeight: 800 }}>Request sent. Our team has been alerted.</p>
              )}
              {submitState === 'error' && (
                <p style={{ margin: '16px 0 0', color: '#b91c1c', fontWeight: 800 }}>Request could not be sent to Telegram. Check your Telegram settings.</p>
              )}

              <button
                type="submit"
                disabled={submitState === 'sending'}
                style={{
                  width: '100%',
                  marginTop: 22,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  border: 0,
                  borderRadius: 8,
                  background: '#101827',
                  color: '#fff',
                  padding: '15px 18px',
                  fontSize: 16,
                  fontWeight: 900,
                  cursor: submitState === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: submitState === 'sending' ? .72 : 1
                }}
              >
                {submitState === 'sending' ? 'Sending request...' : 'Send request'} {submitState === 'sending' ? null : <FaPaperPlane />}
              </button>
            </form>
          </div>
        </section>

        <section className="contact-pad" style={{ paddingTop: 0 }}>
          <div className="contact-wrap contact-cta" style={{ padding: 30, borderRadius: 8, background: 'linear-gradient(135deg, #fff7ed 0%, #eef6ff 100%)', border: '1px solid #e5e7eb' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.12, fontWeight: 950 }}>Need service details before sending?</h2>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#101827', background: '#fdaf06', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View services <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <footer style={{ background: '#0b1020', color: '#fff', padding: '30px 40px', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#cbd5e1' }}>© 2026 PN Digital. Helping business owners grow online since 2023.</p>
      </footer>
    </div>
  )
}
