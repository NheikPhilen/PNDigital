import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullhorn, FaCheck, FaLayerGroup } from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import pageVip from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'

export default function Services() {
  const services = [
    {
      title: 'សេវាកម្មប៊ូស Post',
      subtitle: 'សេវាកម្មBoost',
      icon: <FaBullhorn />,
      image: pageVip,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['អាចប៊ូសជារូបភាព រឺVideo', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', '\u1795\u17d2\u178a\u179b\u17cb\u1787\u17bc\u1793 report \u1787\u17b6\u179a\u17c0\u1784\u179a\u17b6\u179b\u17cb\u1790\u17d2\u1784\u17c3']
    },
    {
      title: 'សេវាកម្មប៊ូស Live',
      subtitle: 'សេវាកម្មBoost',
      icon: <FaBullhorn />,
      image: pageVip,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['Free Page 2k', 'អាចLiveម៉ោងណាក៏បានអាស្រ័យលើភ្ញៀវ', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', '\u1795\u17d2\u178a\u179b\u17cb\u1787\u17bc\u1793 report \u1787\u17b6\u179a\u17c0\u1784\u179a\u17b6\u179b\u17cb\u1790\u17d2\u1784\u17c3']
    },
    {
      title: 'សេវាកម្មប៊ូស Tik Tok',
      subtitle: 'សេវាកម្មBoost',
      icon: <FaBullhorn />,
      image: pageVip,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['រៀបចំCaption និងCaptionសម្រាប់Post', 'អាចប៊ូសម្ដង1Videoរឺច្រើនវីដេអូ(Compaign)', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', '\u1795\u17d2\u178a\u179b\u17cb\u1787\u17bc\u1793 report \u1787\u17b6\u179a\u17c0\u1784\u179a\u17b6\u179b\u17cb\u1790\u17d2\u1784\u17c3']
    },
    {
      title: 'លក់ផេកខ្មែរ',
      subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
      icon: <FaLayerGroup />,
      image: client,
      description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
      features: ['Free design cover page', '\u1794\u17d2\u178a\u17bc\u179a\u1788\u17d2\u1798\u17c4\u17c7\u1795\u17c1\u1780', '\u1792\u17b6\u1793\u17b6\u1787\u17bc\u1793\u179a\u1799\u17c8\u1796\u17c1\u179b\u17e1\u1781\u17c2', 'free \u1794\u17ca\u17bc\u179f\u179a\u1799\u17c8\u1796\u17c1\u179b\u17e1\u17e5\u1790\u17d2\u1784\u17c3']
    },
    {
      title: 'លក់ Instagram ',
      subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
      icon: <FaLayerGroup />,
      image: client,
      description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
      features: ['\u1798\u17b6\u1793\u1785\u17b6\u1794\u17cb\u1796\u17b8 1k-500k', '\u1792\u17b6\u1793\u17b6 follower\u1781\u17d2\u1798\u17c2\u179a', 'Free\u178a\u17bc\u179a\u1788\u17d2\u1798\u17c4\u17c7']
    },
    {
      title: 'លក់ TikTok',
      subtitle: 'អាចកម្មង់Contentបាន',
      icon: <SiTiktok />,
      image: feedback,
      description: 'TikTok follower packages and campaign guidance for creators, sellers, and service brands.',
      features: ['\u1798\u17b6\u1793\u1785\u17b6\u1794\u17cb\u1796\u17b8 1k-500k', '\u1792\u17b6\u1793\u17b6 follower\u1781\u17d2\u1798\u17c2\u179a', 'Free\u178a\u17bc\u179a\u1788\u17d2\u1798\u17c4\u17c7']
    }
  ]

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#101827' }}>
      <style>{`
        .services-wrap { max-width: 1200px; margin: 0 auto; }
        .services-pad { padding: 82px 40px; }
        .services-eyebrow { margin: 0 0 12px; color: #5eead4; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; }
        .services-title { margin: 0; font-size: clamp(34px, 5vw, 62px); line-height: 1.06; font-weight: 950; letter-spacing: 0; }
        .services-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
        .service-card { overflow: hidden; display: flex; flex-direction: column; min-height: 100%; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; box-shadow: 0 18px 48px rgba(17,24,39,.08); transition: transform .2s ease, box-shadow .2s ease; color: inherit; text-decoration: none; cursor: pointer; }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 24px 68px rgba(17,24,39,.13); }
        .service-image { min-height: 260px; background-size: cover; background-position: center; flex: 0 0 auto; }
        .service-content { display: flex; flex: 1; flex-direction: column; padding: 26px; }
        .service-features { display: grid; gap: 12px; margin-top: 22px; flex: 1; align-content: start; }
        .service-detail-link { margin-top: 22px; align-self: flex-start; }
        .service-icon { width: 54px; height: 54px; border-radius: 8px; background: #fdaf06; color: #101827; display: flex; align-items: center; justify-content: center; font-size: 22px; }
        .detail-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(320px, 1.05fr); gap: 34px; align-items: center; }
        @media (max-width: 900px) {
          .services-pad { padding: 58px 18px; }
          .services-grid { grid-template-columns: 1fr; }
          .detail-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <main>
        <section className="services-pad" style={{ background: '#ffffff' }}>
          <div className="services-wrap">
            <div style={{ maxWidth: 900, marginBottom: 32 }}>
              <p className="services-eyebrow" style={{ color: '#0f766e' }}>Service details</p>
              <h2 className="services-title" style={{ color: '#101827' }}>PN Digital មានសេវាកម្មដូចជា៖</h2>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <Link key={`${service.title}-${index}`} to={`/services/detail${index + 1}`} className="service-card">
                  <div className="service-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,24,39,0) 32%, rgba(16,24,39,.78) 100%), url(${service.image})` }} />
                  <div className="service-content">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: -54, marginBottom: 22 }}>
                      <div className="service-icon">{service.icon}</div>
                    </div>
                    <h3 style={{ margin: '0 0 6px', fontSize: 28, fontWeight: 950 }}>{service.title}</h3>
                    <p style={{ margin: '0 0 14px', color: '#9a5b00', fontWeight: 900 }}>{service.subtitle}</p>
                    <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.75 }}>{service.description}</p>
                    <div className="service-features">
                      {service.features.map((feature) => (
                        <span key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#172033', fontWeight: 800, lineHeight: 1.45 }}>
                          <span style={{ width: 24, height: 24, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                            <FaCheck />
                          </span>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="service-detail-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#101827', background: '#fdaf06', padding: '9px 12px', borderRadius: 8, fontSize: 13, fontWeight: 900, textDecoration: 'none' }}>
                      មើលព័ត៌មានលម្អិត <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="services-pad" style={{ background: '#ffffff' }}>
          <div className="services-wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: 24, alignItems: 'center', padding: 32, borderRadius: 8, background: 'linear-gradient(135deg, #fff7ed 0%, #eef6ff 100%)', border: '1px solid #e5e7eb' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.12, fontWeight: 950 }}>បងៗពេញចិត្តសេវាកម្មមួយណាអាចពិភាក្សាតាមរយៈ</h2>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', background: '#101827', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Telegram
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
