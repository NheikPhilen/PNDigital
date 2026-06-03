import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBullhorn,
  FaChartLine,
  FaCheck,
  FaFacebookF,
  FaLayerGroup,
  FaHouse,
  FaTelegram
} from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import heroBanner from '../../assets/images/HeroBanner.jpg'
import pageList from '../../assets/images/pagelist.jpg'
import logo from '../../assets/images/logo.png'
import logo2 from '../../assets/images/logo2.png'
import promotionImage from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'

export default function Home() {
  const coreServices = [
    {
      title: 'សេវាកម្មប៊ូស Post',
      subtitle: 'សេវាកម្មBoost',
      label: 'សេវាកម្មBoost',
      icon:<FaFacebookF />,
      image: promotionImage,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['អាចប៊ូសជារូបភាព រឺVideo', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', 'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ']
    },
    {
      title: 'សេវាកម្មប៊ូស Live',
      subtitle: 'សេវាកម្មBoost',
      label: 'សេវាកម្មBoost',
      icon: <FaFacebookF />,
      image: promotionImage,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['Free Page 2k', 'អាចLiveម៉ោងណាក៏បានអាស្រ័យលើភ្ញៀវ', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', 'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ']
    },
    {
      title: 'សេវាកម្មប៊ូស Tik Tok',
      subtitle: 'សេវាកម្មBoost',
      label: 'សេវាកម្មBoost',
      icon: <SiTiktok />,
      image: promotionImage,
      description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
      features: ['រៀបចំCaption និងCaptionសម្រាប់Post', 'អាចប៊ូសម្ដង1Videoរឺច្រើនវីដេអូ(Compaign)', 'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ', 'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ']
    },
    {
      title: 'លក់ផេកខ្មែរ',
      subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
      label: 'លក់ផេកខ្មែរ',
      icon: <FaFacebookF />,
      image: client,
      description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
      features: ['Free design cover page', 'ប្ដូរឈ្មោះផេក', 'ធានាជូនរយៈពេល១ខែ', 'free ប៊ូសរយៈពេល១៥ថ្ងៃ']
    },
    {
      title: 'លក់ Instagram ',
      subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
      label: 'លក់ Instagram',
      icon: <FaLayerGroup />,
      image: client,
      description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
      features: ['មានចាប់ពី 1k-500k', 'ធានា followerខ្មែរ', 'Freeដូរឈ្មោះ']
    },
    {
      title: 'លក់ TikTok',
      subtitle: 'អាចកម្មង់Contentបាន',
      label: 'លក់ TikTok',
      icon: <SiTiktok />,
      image: feedback,
      description: 'TikTok follower packages and campaign guidance for creators, sellers, and service brands.',
      features: ['មានចាប់ពី 1k-500k', 'ធានា followerខ្មែរ', 'Freeដូរឈ្មោះ']
    }
  ]

  const serviceList = [
    'លក់ផេកខ្មែរ100%',
    'លក់ Page VIP ប៊ូសឡាយ',
    'លក់ BM Ad Account',
    'លក់TikTok ចាប់ពី 1k-500k',
    'លក់ Group Telegram'
  ]

  const growthServiceList = [
    'គ្រប់គ្រងលើការប៊ូស និងថែទាំផេកប្រចាំខែ',
    'តម្លើងផេកធម្មតាទៅជាផេកប៊ូសឡាយបាន',
    'តម្លើងចំនួន Follower និងដាក់ Blue Tick',
    'ទទួលធ្វើ Poster Profile & Cover Page',
    'ទទួលដោះស្រាយបញ្ហាPageគ្រប់ប្រភេទ'
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
        
        /* Updated dynamic 3-column layout */
        .three-col-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        @media (max-width: 990px) {
          .three-col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

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
        @media (max-width: 640px) {
          .three-col-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 560px) {
          .hero-actions { width: 100%; }
          .hero-actions a { width: 100%; justify-content: center; }
          .footer-grid { grid-template-columns: 1fr!important; }
        }
      `}</style>

      <main>
        {/* Hero Section */}
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
                PN Digital
              </p>
              <h1 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.18, fontWeight: 950, letterSpacing: 0 }}>
                ភ្នាក់ងារជួយជម្រុញការលក់របស់ម្ចាស់អាជីវកម្មឲ្យចំអតិថិជនគោលដៅ!
              </h1>
              <p style={{ margin: '24px 0 0', maxWidth: 620, color: '#4b5563', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.75 }}>
                PN Digital boosts Live Streams to your target audience. Upgrade standard pages to support Live Boosting. Pre-made Live Boost pages for sale.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 34 }}>
                <Link
                  to="/services"
                  className="action-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: '#fdaf06', color: '#000000', padding: '14px 20px', borderRadius: 8, fontWeight: 900 }}
                >
                  មើលសេវាកម្ម <FaArrowRight />
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

        {/* Services Main Listing */}
        <section className="section-pad" style={{ padding: '82px 40px', background: '#ffffff' }}>
          <div className="section-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'end', flexWrap: 'wrap', marginBottom: 30 }}>
              <div style={{ maxWidth: 690 }}>
                <p className="section-eyebrow" style={{ color: '#0f766e' }}>Services</p>
                <h2 className="section-title">សេវាកម្មដែលបងប្អូននឹងទទួលបានពី PN Digital.</h2>
              </div>
              <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9a5b00', fontWeight: 900, textDecoration: 'none' }}>
                មើលសេវាកម្មទាំងអស់ <FaArrowRight />
              </Link>
            </div>

            {/* Changed from auto-fit to forced 3 columns layout via class */}
            <div className="three-col-grid">
              {coreServices.map((service, index) => (
                <Link
                  key={service.title}
                  to={`/services/detail${index + 1}`}
                  className="service-card"
                  style={{
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: '30px 24px',
                    minHeight: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 16px 38px rgba(17,24,39,.08)',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer'
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
                  <h3 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 950, color: '#101827' }}>{service.title}</h3>
                  <p style={{ margin: 0, color: '#4b5563', fontSize: 15, lineHeight: 1.75 }}>{service.description}</p>
                  <div style={{ display: 'grid', gap: 12, marginTop: 'auto', paddingTop: 28 }}>
                    {service.features.map((feature) => (
                      <span key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#172033', fontSize: 15, fontWeight: 850 }}>
                        <span style={{ width: 24, height: 24, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                          <FaCheck />
                        </span>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span style={{ marginTop: 22, alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, color: '#101827', background: '#fdaf06', padding: '9px 12px', borderRadius: 8, fontSize: 13, fontWeight: 900, textDecoration: 'none' }}>
                    មើលព័ត៌មានលម្អិត <FaArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Split Section 1 */}
        <section className="section-pad" style={{ padding: '76px 40px', background: '#f6f7fb' }}>
          <div className="section-wrap split-grid">
            <div>
              <p className="section-eyebrow" style={{ color: '#9a5b00' }}>ការលក់</p>
              <h2 className="section-title" style={{ color: '#000000' }}>PN Digital មានលក់ផេកខ្មែរ Followerខ្មែរសុទ្ធ 100%!</h2>
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

        {/* Feature Split Section 2 */}
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
              <h2 className="section-title">PN Digital មានផ្ដល់ជូននូវសេវាកម្មប៊ូសផេក ជួយជម្រុញការលក់!</h2>
              <p style={{ margin: '20px 0 0', color: '#4b5563', lineHeight: 1.8, fontSize: 17 }}>
                Boost your page, increase followers, improve engagement, and push more attention to your videos and live sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                      <FaChartLine />
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

        {/* Client Feedback Grid */}
        <section className="section-pad" style={{ padding: '88px 40px', background: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
          <div className="section-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'end', flexWrap: 'wrap', marginBottom: 30 }}>
              <div style={{ maxWidth: 1200 }}>
                <p className="section-eyebrow" style={{ color: '#9a5b00' }}>Client feedback</p>
                <h2 className="section-title">រូបភាពពីការផ្ដើ់លFeedbacksពីអតិថិជន និងការលក់ផ្សេងៗ</h2>
              </div>
            </div>

            {/* Changed from auto-fit to forced 3 columns layout via class */}
            <div className="three-col-grid">
              {clientFeedbackPhotos.map((feedbackItem, idx) => (
                <article
                  key={`${feedbackItem.title}-${idx}`}
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
                    src={feedbackItem.image}
                    alt={feedbackItem.title}
                    style={{ width: '100%', height: '100%', minHeight: 360, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,24,39,0) 42%, rgba(16,24,39,.86) 100%)' }} />
                  <div style={{ position: 'absolute', left: 18, right: 18, bottom: 18, color: '#fff' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fdaf06', color: '#101827', borderRadius: 8, padding: '8px 10px', fontSize: 12, fontWeight: 950, textTransform: 'uppercase' }}>
                      <FaCheck /> {feedbackItem.label}
                    </span>
                    <h3 style={{ margin: '12px 0 0', fontSize: 22, fontWeight: 950 }}>{feedbackItem.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Block */}
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
              <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.08, fontWeight: 950 }}>តើបងៗកំពុងតែចង់ចាប់ផ្ដើមអាជីវកម្មមែនទេ? អាចប្រឹក្សាយោបល់ជាមួយPN Digitalបាន!</h2>
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

      {/* Footer */}
      <footer style={{ background: '#0b1020', color: '#fff', padding: '48px 40px 22px' }}>
        <div className="section-wrap">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(3, minmax(140px, 1fr))', gap: 30 }}>
            <div>
              <img src={logo2} alt="PN Digital" style={{ height: 120, width: 'auto', display: 'block', objectFit: 'contain', marginBottom: 16 }} />
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
              <Link to="/about" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none', marginBottom: 10 }}>អំពីយើង</Link>
              <Link to="/contact" style={{ display: 'block', color: '#cbd5e1', textDecoration: 'none' }}>Contact</Link>
            </div>
            <div>
              <h4 style={{ margin: '0 0 14px', color: '#fdaf06', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Contact</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <a
                  href="https://t.me/PhaNet0903"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                  style={{ width: 42, height: 42, borderRadius: 8, background: '#008bde', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none' }}
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61569384341081"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  style={{ width: 42, height: 42, borderRadius: 8, background: '#1877f2', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none' }}
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 34, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', color: '#94a3b8', fontSize: 14 }}>
            <p style={{ margin: 0 }}>© 2026 PN Digital. 
              All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
