import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullseye, FaChartLine, FaCheck, FaLayerGroup, FaMessage, FaPlay, FaTelegram } from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import heroBanner from '../../assets/images/HeroBanner.jpg'
import pageList from '../../assets/images/pagelist.jpg'
import logo from '../../assets/images/logo.png'
import promotionImage from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'

export default function Home() {
  const coreServices = [
    {
      title: '\u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798\u1794\u17ca\u17bc\u179f',
      label: '\u1794\u17d2\u179a\u1785\u17b6\u17c6\u1781\u17c2',
      icon: <FaChartLine />,
      description: 'Increase reach, engagement, and qualified inquiries with focused campaign support.',
      features: ['Free Page 2k', 'Free \u1794\u17ca\u17bc\u179f video \u1793\u17b7\u1784 post \u1798\u17b7\u1793\u1780\u17c6\u178e\u178f\u17cb\u1796\u17c1\u1789\u17e1\u1781\u17c2', '\u1795\u17d2\u178a\u179b\u17cb\u1787\u17bc\u1793 report \u1787\u17b6\u179a\u17c0\u1784\u179a\u17b6\u179b\u17cb\u1790\u17d2\u1784\u17c3']
    },
    {
      title: '\u179b\u1780\u17cb\u1795\u17c1\u1780\u1781\u17d2\u1798\u17c2\u179a',
      label: '\u1781\u17d2\u1798\u17c2\u179a\u179f\u17bb\u1791\u17d2\u1792 99%',
      icon: <FaLayerGroup />,
      description: 'Sell page follower packages and Page VIP boost live setup for businesses ready to grow faster.',
      features: ['Free design cover page', '\u1794\u17d2\u178a\u17bc\u179a\u1788\u17d2\u1798\u17c4\u17c7\u1795\u17c1\u1780', '\u1792\u17b6\u1793\u17b6\u1787\u17bc\u1793\u179a\u1799\u17c8\u1796\u17c1\u179b\u17e1\u1781\u17c2', 'free \u1794\u17ca\u17bc\u179f\u179a\u1799\u17c8\u1796\u17c1\u179b\u17e1\u17e5\u1790\u17d2\u1784\u17c3']
    },
    {
      title: '\u179b\u1780\u17cbTikTok',
      label: 'Content',
      icon: <SiTiktok />,
      description: 'Build TikTok campaigns that turn attention into followers, messages, and sales.',
      features: ['\u1798\u17b6\u1793\u1785\u17b6\u1794\u17cb\u1796\u17b8 1k-500k', '\u1792\u17b6\u1793\u17b6 follower\u1781\u17d2\u1798\u17c2\u179a', 'Free\u178a\u17bc\u179a\u1788\u17d2\u1798\u17c4\u17c7']
    }
  ]

  const serviceList = [
    '\u179b\u1780\u17cb\u1795\u17c1\u1780\u1781\u17d2\u1798\u17c2\u179a100%',
    '\u179b\u1780\u17cb\u200b\u200b Page VIP \u1794\u17ca\u17bc\u179f\u17a1\u17b6\u1799',
    '\u179b\u1780\u17cb BM Ad Account',
    '\u179b\u1780\u17cbTikTok \u1785\u17b6\u1794\u17cb\u1796\u17b8 1k-500k',
    '\u179b\u1780\u17cb Group Telegram'
  ]

  const growthServiceList = [
    '\u1782\u17d2\u179a\u1794\u17cb\u1782\u17d2\u179a\u1784\u179b\u17be\u1780\u17b6\u179a\u1794\u17ca\u17bc\u179f \u1793\u17b7\u1784\u1790\u17c2\u1791\u17b6\u17c6\u1795\u17c1\u1780\u1794\u17d2\u179a\u1785\u17b6\u17c6\u1781\u17c2',
    '\u178f\u1798\u17d2\u179b\u17be\u1784\u1795\u17c1\u1780\u1792\u1798\u17d2\u1798\u178f\u17b6\u1791\u17c5\u1787\u17b6\u1795\u17c1\u1780\u1794\u17ca\u17bc\u179f\u17a1\u17b6\u1799\u1794\u17b6\u1793',
    '\u178f\u1798\u17d2\u179b\u17be\u1784\u1785\u17c6\u1793\u17bd\u1793 Follower \u1793\u17b7\u1784\u178a\u17b6\u1780\u17cb Blue Tick',
    '\u1791\u1791\u17bd\u179b\u1792\u17d2\u179c\u17be Poster Profile & Cover\u200b Page',
    '\u1791\u1791\u17bd\u179b\u178a\u17c4\u17c7\u179f\u17d2\u179a\u17b6\u1799\u1794\u1789\u17d2\u17a0\u17b6Page\u1782\u17d2\u179a\u1794\u17cb\u1794\u17d2\u179a\u1797\u17c1\u1791'
  ]

  const clientFeedbackPhotos = [
    { image: promotionImage, title: 'Campaign result', label: 'Page boost feedback' },
    { image: feedback, title: 'Campaign result', label: 'Page boost feedback' },
    { image: client, title: 'Campaign result', label: 'Page boost feedback' }
  ]

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#111827' }}>
      <style>{`
        .hero-shell { min-height: calc(100vh - 76px); display: grid; align-items: center; }
        .hero-content { max-width: 760px; color: #101827; background: rgba(255,255,255,.94); border: 1px solid rgba(255,255,255,.78); border-radius: 8px; padding: clamp(26px, 4vw, 46px); box-shadow: 0 28px 70px rgba(9,13,23,.24); backdrop-filter: blur(10px); }
        .metric-strip { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 46px; max-width: 820px; }
        .metric-cell { border-top: 1px solid rgba(255,255,255,.28); padding-top: 18px; }
        .action-link, .service-card, .process-card, .feedback-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease; }
        .action-link:hover { transform: translateY(-2px); box-shadow: 0 16px 34px rgba(17,24,39,.18); }
        .service-card:hover, .process-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(17,24,39,.12)!important; border-color: rgba(253,175,6,.9)!important; }
        .feedback-card:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(17,24,39,.16)!important; }
        .section-wrap { max-width: 1200px; margin: 0 auto; }
        .section-eyebrow { margin: 0 0 10px; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; }
        .section-title { margin: 0; font-size: clamp(30px, 5vw, 52px); line-height: 1.05; font-weight: 950; letter-spacing: 0; }
        .split-grid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(320px, 1.05fr); gap: 34px; align-items: center; }
        .growth-list { order: 1; }
        .growth-copy { order: 2; }
        @media (max-width: 900px) {
          .hero-shell { min-height: auto; }
          .split-grid { grid-template-columns: 1fr; gap: 28px; }
          .section-pad { padding: 58px 18px!important; }
          .metric-strip { grid-template-columns: 1fr; margin-top: 34px; }
          .cta-grid { grid-template-columns: 1fr!important; }
          .footer-grid { grid-template-columns: 1fr 1fr!important; }
          .growth-copy { order: 1; }
          .growth-list { order: 2; }
        }
        @media (max-width: 560px) {
          .hero-actions { width: 100%; }
          .hero-actions a { width: 100%; justify-content: center; }
          .footer-grid { grid-template-columns: 1fr!important; }
        }
      `}</style>

      <main>
        <section
          className="section-pad hero-shell"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '84px 40px 64px',
            backgroundImage: `linear-gradient(90deg, rgba(9,13,23,.54) 0%, rgba(9,13,23,.34) 58%, rgba(9,13,23,.16) 100%), url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="section-wrap" style={{ width: '100%' }}>
            <div className="hero-content">
              <p style={{ margin: '0 0 18px', color: '#9a5b00', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1.8 }}>
                Digital growth studio
              </p>
              <h1 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.18, fontWeight: 950, letterSpacing: 0 }}>
                ភ្នាក់ងារជួយជម្រុញការលក់របស់ម្ចាស់អាជីវកម្មឲ្យចំអតិថិជនគោលដៅ!
              </h1>
              <p style={{ margin: '24px 0 0', maxWidth: 620, color: '#4b5563', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.75 }}>
                PN Digital boosts Live Streams to your target audience. Upgrade standard pages to support Live Boosting. Pre-made Live Boost pages for sale.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}>
                <Link
                  to="/contact"
                  className="action-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: '#fdaf06', color: '#101827', padding: '14px 20px', borderRadius: 8, fontWeight: 900 }}
                >
                  {'\u1798\u17be\u179b\u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798 '}<FaArrowRight />
                </Link>
                <a
                  href="https://t.me/PhaNet0903"
                  target="_blank"
                  rel="noreferrer"
                  className="action-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: '#008bde', color: '#fff', padding: '14px 20px', borderRadius: 8, fontWeight: 900 }}
                >
                  Telegram <FaTelegram />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ padding: '82px 40px', background: '#ffffff' }}>
          <div className="section-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'end', flexWrap: 'wrap', marginBottom: 30 }}>
              <div style={{ maxWidth: 690 }}>
                <p className="section-eyebrow" style={{ color: '#0f766e' }}>Services</p>
                <h2 className="section-title">{'\u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798\u178a\u17c2\u179b\u1794\u1784\u1794\u17d2\u17a2\u17bc\u1793\u1793\u17b9\u1784\u1791\u1791\u17bd\u179b\u1794\u17b6\u1793\u1796\u17b8 PN Digital.'}</h2>
              </div>
              <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9a5b00', fontWeight: 900, textDecoration: 'none' }}>
                {'\u1798\u17be\u179b\u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798\u1791\u17b6\u17c6\u1784\u17a2\u179f\u17cb'}<FaArrowRight />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {coreServices.map((service) => (
                <article
                  key={service.title}
                  className="service-card"
                  style={{
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: 40,
                    minHeight: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 16px 38px rgba(17,24,39,.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                    <div style={{ width: 58, height: 58, borderRadius: 8, background: '#fdaf06', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                      {service.icon}
                    </div>
                    <span style={{ background: '#fffbeb', color: '#9a5b00', border: '1px solid #fde68a', borderRadius: 8, padding: '8px 10px', fontSize: 12, fontWeight: 950, textTransform: 'uppercase' }}>
                      {service.label}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 28, fontWeight: 950, color: '#101827' }}>{service.title}</h3>
                  <p style={{ margin: 0, color: '#4b5563', fontSize: 15, lineHeight: 1.75 }}>{service.description}</p>
                  <div style={{ display: 'grid', gap: 12, marginTop: 'auto', paddingTop: 28 }}>
                    {service.features.map((feature) => (
                      <span key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#172033', fontSize: 16, fontWeight: 850 }}>
                        <span style={{ width: 24, height: 24, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                          <FaCheck />
                        </span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ padding: '76px 40px', background: '#f6f7fb' }}>
          <div className="section-wrap split-grid">
            <div>
              <p className="section-eyebrow" style={{ color: '#9a5b00' }}>ការលក់</p>
              <h2 className="section-title" style={{ color: '#000000' }}>{'Digital Digial \u1798\u17b6\u1793\u179b\u1780\u17cb\u1795\u17c1\u1780\u1781\u17d2\u1798\u17c2\u179a Follower\u1781\u17d2\u1798\u17c2\u179a\u179f\u17bb\u1791\u17d2\u1792 100%!'}</h2>
              <p style={{ margin: '20px 0 0', color: '#4b5563', lineHeight: 1.8, fontSize: 17 }}>
                Choose the service you need, then we help prepare the right setup for selling, boosting, live promotion, TikTok growth, or ad account use.
              </p>
            </div>

            <div className="growth-list" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 24, boxShadow: '0 16px 42px rgba(17,24,39,.08)' }}>
              <div style={{ display: 'grid', gap: 14 }}>
                {serviceList.map((service) => (
                  <div
                    key={service}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '38px 1fr',
                      gap: 14,
                      alignItems: 'center',
                      padding: '16px 0',
                      borderBottom: service === serviceList[serviceList.length - 1] ? 'none' : '1px solid #eef2f7'
                    }}
                  >
                    <span style={{ width: 38, height: 38, borderRadius: 8, background: '#fdaf06', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                      <FaCheck />
                    </span>
                    <span style={{ color: '#172033', fontSize: 18, fontWeight: 900 }}>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ padding: '76px 40px', background: '#ffffff' }}>
          <div className="section-wrap split-grid">
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 24, boxShadow: '0 16px 42px rgba(17,24,39,.08)' }}>
              <div style={{ display: 'grid', gap: 14 }}>
                {growthServiceList.map((service) => (
                  <div
                    key={service}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '38px 1fr',
                      gap: 14,
                      alignItems: 'center',
                      padding: '16px 0',
                      borderBottom: service === growthServiceList[growthServiceList.length - 1] ? 'none' : '1px solid #eef2f7'
                    }}
                  >
                    <span style={{ width: 38, height: 38, borderRadius: 8, background: '#fdaf06', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                      <FaCheck />
                    </span>
                    <span style={{ color: '#172033', fontSize: 18, fontWeight: 900 }}>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="growth-copy">
              <p className="section-eyebrow" style={{ color: '#0f766e' }}>សេវាកម្ម</p>
              <h2 className="section-title">{'PN Digital \u1798\u17b6\u1793\u1795\u17d2\u178a\u179b\u17cb\u1787\u17bc\u1793\u1793\u17bc\u179c\u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798\u1794\u17ca\u17bc\u179f\u1795\u17c1\u1780 \u1787\u17bd\u1799\u1787\u1798\u17d2\u179a\u17bb\u1789\u1780\u17b6\u179a\u179b\u1780\u17cb!'}</h2>
              <p style={{ margin: '20px 0 0', color: '#4b5563', lineHeight: 1.8, fontSize: 17 }}>
                Boost your page, increase followers, improve engagement, and push more attention to your videos and live sessions.
              </p>
            </div>
          </div>
        </section>
        <section className="section-pad" style={{ padding: '82px 40px', background: '#101827', color: '#fff' }}>
          <div className="section-wrap split-grid">
            <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: 8, overflow: 'hidden', background: `linear-gradient(180deg, rgba(16,24,39,0) 35%, rgba(16,24,39,.72) 100%), url(${pageList}) center / cover no-repeat`, boxShadow: '0 28px 74px rgba(0,0,0,.28)' }} />
            <div>
              <p className="section-eyebrow" style={{ color: '#ffffff' }}>Why Choose Us?</p>
              <h2 className="section-title">ហេតុអ្វីគួរជ្រើសរើសយក PN Digital?</h2>
              <div style={{ display: 'grid', gap: 18, marginTop: 28 }}>
                {[
                  ['គុណភាព', 'ផេកល្អគុណភាពធានាជូនអតិថិជ​ន ធានាជូន១ខែ និងធានាថាជាFollowerខ្មែរសុទ្ធ100%'],
                  ['បទពិសោធន៍', 'ក្រុមការងារមានបទពិសោធន៍ច្រើនឆ្នាំ និងមានតិចនិកប៊ូសច្បាស់លាស់ ចំគោលដៅ ជម្រុញការលក់របស់អាជីវករជាច្រើនអ្នក សុទ្ធតែជាបុគ្គលល្បីៗក្នុងវិស័យអាជីវកម្មOnline'],
                  ['ទំនួលខុសត្រូវ', 'ឆ្លើយតបឆាប់រហ័ស តាមដានការឡាយរបស់ភ្ញៀវ ដោះស្រាយបញ្ហាបានភ្លាមៗ និងផ្ញើReportជូនភ្ញៀវជារៀងរាល់ថ្ងៃ']
                ].map(([title, text]) => (
                  <div key={title} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                      {title === 'Offer first' ? <FaBullseye /> : title === 'Channel aware' ? <FaMessage /> : <FaChartLine />}
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 6px', fontSize: 19, fontWeight: 950 }}>{title}</h3>
                      <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ padding: '88px 40px', background: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
          <div className="section-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'end', flexWrap: 'wrap', marginBottom: 30 }}>
              <div style={{ maxWidth: 1200 }}>
                <p className="section-eyebrow" style={{ color: '#9a5b00' }}>Client feedback</p>
                <h2 className="section-title">{'រូបភាពពីការផ្ដល់់Feedbacksពីអតិថិជន និងការលក់ផ្សេងៗ'}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {clientFeedbackPhotos.map((feedback) => (
                <article
                  key={feedback.title}
                  className="feedback-card"
                  style={{
                    position: 'relative',
                    minHeight: 360,
                    borderRadius: 8,
                    overflow: 'hidden',
                    border: '1px solid #101827',
                    background: '#101827',
                    boxShadow: '0 16px 42px rgba(17,24,39,.1)'
                  }}
                >
                  <img
                    src={feedback.image}
                    alt={feedback.title}
                    style={{ width: '100%', height: '100%', minHeight: 360, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,24,39,0) 42%, rgba(16,24,39,.86) 100%)' }} />
                  <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, color: '#fff' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fdaf06', color: '#101827', borderRadius: 8, padding: '8px 10px', fontSize: 12, fontWeight: 950, textTransform: 'uppercase' }}>
                      <FaCheck /> {feedback.label}
                    </span>
                    <h3 style={{ margin: '12px 0 0', fontSize: 22, fontWeight: 950 }}>{feedback.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ padding: '72px 40px', background: '#ffffff' }}>
          <div
            className="section-wrap cta-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 28,
              alignItems: 'center',
              padding: 34,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #fff7ed 0%, #eef6ff 100%)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div>
              <p className="section-eyebrow" style={{ color: '#9a5b00' }}>Ready to move</p>
              <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.08, fontWeight: 950 }}>តើបងៗកំពុងតែចង់ចាប់ផ្ដើមអាជីវកម្មមែនទេ?  អាចប្រឹក្សាយោបល់ជាមួយPN Digitalបាន!</h2>
            </div>
            <Link
              to="/contact"
              className="action-link"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, textDecoration: 'none', background: '#fdaf06', color: '#000000', padding: '15px 22px', borderRadius: 8, fontWeight: 900, whiteSpace: 'nowrap' }}
            >
              ទំនាក់ទំនងឥឡូវនេះ <FaArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <footer style={{ background: '#0b1020', color: '#fff', padding: '48px 40px 22px' }}>
        <div className="section-wrap">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(3, minmax(140px, 1fr))', gap: 30 }}>
            <div>
              <img src={logo} alt="PN Digital" style={{ height: 54, width: 'auto', display: 'block', objectFit: 'contain', marginBottom: 16 }} />
              <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7, maxWidth: 360 }}>
                Digital growth services for sellers, creators, and service brands that want clearer campaigns and better customer response.
              </p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 14px', color: '#fdaf06', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Services</h4>
              <Link to="/services" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', marginBottom: 10 }}>Service Boost</Link>
              <Link to="/services" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', marginBottom: 10 }}>Page Selling</Link>
              <Link to="/services" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none' }}>TikTok Marketing</Link>
            </div>
            <div>
              <h4 style={{ margin: '0 0 14px', color: '#fdaf06', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Company</h4>
              <Link to="/about" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', marginBottom: 10 }}>About</Link>
              <Link to="/contact" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none' }}>Contact</Link>
            </div>
            <div>
              <h4 style={{ margin: '0 0 14px', color: '#fdaf06', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h4>
              <p style={{ margin: '0 0 10px', color: '#cbd5e1' }}>0979777420</p>
              <p style={{ margin: 0, color: '#cbd5e1' }}>Page: PN Digital</p>
            </div>
          </div>
          <div style={{ marginTop: 34, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', color: '#94a3b8', fontSize: 14 }}>
            <p style={{ margin: 0 }}>© 2026 PN Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

