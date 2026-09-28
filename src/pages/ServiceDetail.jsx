import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaBullhorn, FaCheck, FaLayerGroup, FaRobot, FaTelegram } from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import pageVip from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'
import { useLanguage } from '../LanguageContext'

const serviceDetails = {
  detail1: {
    title: 'សេវាកម្មប៊ូស Post',
    subtitle: 'សេវាកម្មBoost',
    icon: <FaBullhorn />,
    image: pageVip,
    description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
    points: [
      'អាចប៊ូសជារូបភាព រឺVideo',
      'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ',
      'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ'
    ]
  },
  detail2: {
    title: 'សេវាកម្មប៊ូស Live',
    subtitle: 'សេវាកម្មBoost',
    icon: <FaBullhorn />,
    image: pageVip,
    description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
    points: [
      'Free Page 2k',
      'អាចLiveម៉ោងណាក៏បានអាស្រ័យលើភ្ញៀវ',
      'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ',
      'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ'
    ]
  },
  detail3: {
    title: 'សេវាកម្មប៊ូស Tik Tok',
    subtitle: 'សេវាកម្មBoost',
    icon: <FaBullhorn />,
    image: pageVip,
    description: 'Boost posts, videos, and live sessions to reach the right audience and create more customer messages.',
    points: [
      'រៀបចំCaption និងCaptionសម្រាប់Post',
      'អាចប៊ូសម្ដង1Videoរឺច្រើនវីដេអូ(Compaign)',
      'ការប៊ូសមិនមានកំណត់ចំនួនពេញ១ខែ',
      'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ'
    ]
  },
  detail4: {
    title: 'លក់ផេកខ្មែរ',
    subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
    icon: <FaLayerGroup />,
    image: client,
    description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
    points: [
      'Free design cover page',
      'ប្ដូរឈ្មោះផេក',
      'ធានាជូនរយៈពេល១ខែ',
      'free ប៊ូសរយៈពេល១៥ថ្ងៃ'
    ]
  },
  detail5: {
    title: 'លក់ Instagram ',
    subtitle: 'ផេកខ្មែរធម្មតា & ផេក​VIPប៊ូសឡាយ',
    icon: <FaLayerGroup />,
    image: client,
    description: 'Ready page options and setup support for sellers that need stronger trust, followers, and page quality.',
    points: [
      'មានចាប់ពី 1k-500k',
      'ធានា followerខ្មែរ',
      'Freeដូរឈ្មោះ'
    ]
  },
  detail6: {
    title: 'លក់ TikTok',
    subtitle: 'អាចកម្មង់Contentបាន',
    icon: <SiTiktok />,
    image: feedback,
    description: 'TikTok follower packages and campaign guidance for creators, sellers, and service brands.',
    points: [
      'មានចាប់ពី 1k-500k',
      'ធានា followerខ្មែរ',
      'Freeដូរឈ្មោះ'
    ]
  },
  detail7: {
    title: 'លក់ Group Telegram',
    subtitle: 'Group Telegram',
    icon: <FaTelegram />,
    image: feedback,
    description: 'សេវាកម្មលក់ Group Telegram តាមតម្រូវការរបស់អតិថិជន។',
    points: [
      'ជ្រើសរើស Group តាមតម្រូវការ',
      'ពិភាក្សាព័ត៌មានមុនពេលកម្មង់'
    ]
  },
  detail8: {
    title: 'តម្លើង System Auto Reply',
    subtitle: 'ប្រព័ន្ធឆ្លើយតបស្វ័យប្រវត្តិ',
    icon: <FaRobot />,
    image: client,
    description: 'រៀបចំ និងតម្លើងប្រព័ន្ធឆ្លើយតបស្វ័យប្រវត្តិ ដើម្បីជួយឆ្លើយសារអតិថិជន។',
    points: [
      'រៀបចំសារឆ្លើយតបតាមតម្រូវការ',
      'តម្លើង និងសាកល្បងប្រព័ន្ធ'
    ]
  },
  detail9: {
    title: 'Verify Blue Tick on Page and Personal Account',
    subtitle: 'Page & Personal Account',
    icon: <FaCheck />,
    image: client,
    description: 'Guidance preparing verification requests for eligible Pages and personal accounts. Final approval is determined by the platform.',
    points: [
      'Review eligibility and requirements',
      'Prepare the verification request'
    ]
  }
}

export default function ServiceDetail() {
  const { t } = useLanguage()
  const { detailId } = useParams()
  const service = serviceDetails[detailId] || serviceDetails.detail1

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#101827' }}>
      <style>{`
        .service-detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, .9fr); gap: 30px; align-items: stretch; }
        @media (max-width: 860px) {
          .service-detail-grid { grid-template-columns: 1fr; }
          .service-detail-image { min-height: 300px!important; order: -1; }
        }
      `}</style>
      <main style={{ maxWidth: 1180, margin: '0 auto', padding: '58px 20px 72px' }}>
        <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#101827', fontWeight: 900, textDecoration: 'none', marginBottom: 22 }}>
          <FaArrowLeft /> Back to services
        </Link>

        <section className="service-detail-grid">
          <div style={{ background: '#fff', borderRadius: 8, padding: 30, border: '1px solid #e5e7eb', boxShadow: '0 18px 48px rgba(17,24,39,.08)' }}>
            <div style={{ width: 58, height: 58, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 22 }}>
              {service.icon}
            </div>
            <p style={{ margin: '0 0 10px', color: '#9a5b00', fontSize: 13, fontWeight: 950, textTransform: 'uppercase', letterSpacing: 1.2 }}>Service detail</p>
            <h1 style={{ margin: 0, fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, fontWeight: 950 }}>{t(service.title)}</h1>
            <p style={{ margin: '12px 0 0', color: '#9a5b00', fontSize: 18, fontWeight: 900 }}>{t(service.subtitle)}</p>
            <p style={{ margin: '22px 0 0', color: '#4b5563', fontSize: 17, lineHeight: 1.85 }}>{t(service.description)}</p>

            <div style={{ display: 'grid', gap: 12, marginTop: 26 }}>
              {service.points.map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#172033', fontWeight: 850, lineHeight: 1.5 }}>
                  <span style={{ width: 26, height: 26, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                    <FaCheck />
                  </span>
                  {t(point)}
                </div>
              ))}
            </div>

            <Link to="/contact" style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', background: '#101827', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none' }}>
              Contact for this service <FaArrowRight />
            </Link>
          </div>

          <div className="service-detail-image" style={{ minHeight: 420, borderRadius: 8, backgroundImage: `linear-gradient(180deg, rgba(16,24,39,0) 25%, rgba(16,24,39,.62) 100%), url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 24px 68px rgba(17,24,39,.16)' }} />
        </section>
      </main>
    </div>
  )
}
