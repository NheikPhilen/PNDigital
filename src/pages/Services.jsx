import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullhorn, FaChartLine, FaCheck, FaLayerGroup, FaPlay, FaShieldHalved } from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import SiteHeader from '../components/SiteHeader'
import serviceHero from '../../assets/images/HeroBanner.jpg'
import pageVip from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'

export default function Services() {
  const services = [
    {
      title: 'សេវាកម្មប៊ូស',
      subtitle: 'Page and live boost support',
      icon: <FaBullhorn />,
      image: pageVip,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['Target audience setup', 'Live boost preparation', 'Post and video campaign support', 'Campaign report and next steps']
    },
    {
      title: 'លក់ផេកខ្មែរ',
      subtitle: 'Page selling and setup',
      icon: <FaLayerGroup />,
      image: client,
      description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
      features: ['Khmer follower page options', 'Cover and profile setup', 'Page name support', 'Boost-ready page guidance']
    },
    {
      title: 'លក់ TikTok',
      subtitle: 'Follower and content growth',
      icon: <SiTiktok />,
      image: feedback,
      description: 'TikTok follower packages and campaign guidance for creators, sellers, and service brands.',
      features: ['Follower packages from 1k to 500k', 'Cambodian follower support', 'Account name guidance', 'Content direction for growth']
    }
  ]

  const process = [
    { title: 'Review', text: 'We check your page, offer, target audience, and current digital setup.' },
    { title: 'Prepare', text: 'We improve the setup, choose the right service path, and clarify campaign requirements.' },
    { title: 'Launch', text: 'We run the service, monitor results, and share simple next steps.' }
  ]

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#101827' }}>
      <style>{`
        .services-wrap { max-width: 1200px; margin: 0 auto; }
        .services-pad { padding: 82px 40px; }
        .services-eyebrow { margin: 0 0 12px; color: #5eead4; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; }
        .services-title { margin: 0; font-size: clamp(34px, 5vw, 62px); line-height: 1.06; font-weight: 950; letter-spacing: 0; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .service-card { overflow: hidden; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; box-shadow: 0 18px 48px rgba(17,24,39,.08); transition: transform .2s ease, box-shadow .2s ease; }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 24px 68px rgba(17,24,39,.13); }
        .service-image { min-height: 260px; background-size: cover; background-position: center; }
        .service-icon { width: 54px; height: 54px; border-radius: 8px; background: #fdaf06; color: #101827; display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .detail-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(320px, 1.05fr); gap: 34px; align-items: center; }
        @media (max-width: 900px) {
          .services-pad { padding: 58px 18px; }
          .detail-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <SiteHeader />

      <main>
        <section
          className="services-pad"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(16,24,39,.88) 0%, rgba(16,24,39,.68) 56%, rgba(16,24,39,.34) 100%), url(${serviceHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="services-wrap" style={{ color: '#fff' }}>
            <p className="services-eyebrow">PN Digital services</p>
            <h1 className="services-title">សេវាកម្មសម្រាប់ជួយអាជីវកម្មលក់បានចំគោលដៅ</h1>
            <p style={{ margin: '22px 0 0', maxWidth: 700, color: '#dbeafe', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.8 }}>
              Choose page boosting, page selling, TikTok growth, or campaign support. Each service is prepared around your audience, offer, and expected customer action.
            </p>
            <Link to="/contact" style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 10, color: '#101827', background: '#fdaf06', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none' }}>
              Request service <FaArrowRight />
            </Link>
          </div>
        </section>

        <section className="services-pad" style={{ background: '#ffffff' }}>
          <div className="services-wrap">
            <div style={{ maxWidth: 760, marginBottom: 32 }}>
              <p className="services-eyebrow" style={{ color: '#0f766e' }}>Service details</p>
              <h2 className="services-title" style={{ color: '#101827' }}>What we can help with.</h2>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,24,39,0) 32%, rgba(16,24,39,.78) 100%), url(${service.image})` }} />
                  <div style={{ padding: 26 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: -54, marginBottom: 22 }}>
                      <div className="service-icon">{service.icon}</div>
                      <span style={{ background: '#fffbeb', color: '#9a5b00', border: '1px solid #fde68a', borderRadius: 8, padding: '8px 10px', fontSize: 12, fontWeight: 950, textTransform: 'uppercase' }}>
                        Detail
                      </span>
                    </div>
                    <h3 style={{ margin: '0 0 6px', fontSize: 28, fontWeight: 950 }}>{service.title}</h3>
                    <p style={{ margin: '0 0 14px', color: '#9a5b00', fontWeight: 900 }}>{service.subtitle}</p>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.75 }}>{service.description}</p>
                    <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
                      {service.features.map((feature) => (
                        <span key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#172033', fontWeight: 800, lineHeight: 1.45 }}>
                          <span style={{ width: 24, height: 24, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                            <FaCheck />
                          </span>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 10, color: '#101827', fontWeight: 950, textDecoration: 'none' }}>
                      Ask about this service <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-pad" style={{ background: '#f6f7fb' }}>
          <div className="services-wrap detail-grid">
            <div>
              <p className="services-eyebrow" style={{ color: '#9a5b00' }}>Process</p>
              <h2 className="services-title">Simple steps from request to launch.</h2>
              <p style={{ margin: '22px 0 0', color: '#4b5563', fontSize: 17, lineHeight: 1.85 }}>
                Every service starts with the business goal. We check whether the page, audience, and offer are ready before recommending the right growth path.
              </p>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {process.map((item, index) => (
                <article key={item.title} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 16, padding: 22, borderRadius: 8, background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 16px 42px rgba(17,24,39,.08)' }}>
                  <span style={{ width: 52, height: 52, borderRadius: 8, background: '#101827', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 950 }}>
                    {index + 1}
                  </span>
                  <span>
                    <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 950 }}>{item.title}</h3>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.75 }}>{item.text}</p>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-pad" style={{ background: '#101827', color: '#fff' }}>
          <div className="services-wrap detail-grid">
            <div>
              <p className="services-eyebrow">Support included</p>
              <h2 className="services-title">Built for sellers who need action, not just impressions.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
              {[
                { icon: <FaShieldHalved />, title: 'Quality check', text: 'We review page trust and campaign readiness.' },
                { icon: <FaPlay />, title: 'Live support', text: 'Live boost setup can be prepared for active sellers.' },
                { icon: <FaChartLine />, title: 'Growth focus', text: 'Reports point to what should improve next.' },
                { icon: <FaBullhorn />, title: 'Clear targeting', text: 'Campaigns are built around real audience intent.' }
              ].map((item) => (
                <article key={item.title} style={{ padding: 22, borderRadius: 8, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.06)' }}>
                  <div style={{ color: '#fdaf06', fontSize: 24, marginBottom: 14 }}>{item.icon}</div>
                  <h3 style={{ margin: '0 0 8px', fontSize: 19, fontWeight: 950 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7 }}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-pad" style={{ background: '#ffffff' }}>
          <div className="services-wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: 24, alignItems: 'center', padding: 32, borderRadius: 8, background: 'linear-gradient(135deg, #fff7ed 0%, #eef6ff 100%)', border: '1px solid #e5e7eb' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.12, fontWeight: 950 }}>Ready to choose the right service?</h2>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', background: '#101827', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Send request <FaArrowRight />
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
