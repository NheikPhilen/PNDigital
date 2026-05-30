import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaBullhorn, FaCheck, FaLayerGroup } from 'react-icons/fa6'
import { SiTiktok } from 'react-icons/si'
import pageVip from '../../assets/images/product/PageVIP.jpg'
import feedback from '../../assets/images/product/Feedback.jpg'
import client from '../../assets/images/product/Client.jpg'

const serviceDetails = {
  detail1: {
    title: 'សេវាកម្មប៊ូស',
    subtitle: 'សេវាកម្ម Boost Post / Live / TikTok',
    icon: <FaBullhorn />,
    image: pageVip,
    description: 'Note: ផេកធម្មតាសម្រាប់Postលក់អាចប៊ូសបាន តែមិនអាចLiveបាន | ផេកVIPប៊ូសឡាយអាចប៊ូសនិងLiveបាន',
    points: [
      'បងៗមានផេកស្រាប់ក៏អាចប៊ូសបាន',
      'ប៊ូស video និង post មិនកំណត់ពេញ 1 ខែ',
      'តាមដានការLive រឺការប៊ូសរបស់ភ្ញៀវ',
      'ផ្ដល់ជូន report ជារៀងរាល់ថ្ងៃ',
      'ជួយពិនិត្យ audience និង campaign setup'
    ]
  },
  detail2: {
    title: 'លក់ផេកខ្មែរ',
    subtitle: 'ផេកខ្មែរធម្មតា និងផេក VIP ប៊ូសឡាយ',
    icon: <FaLayerGroup />,
    image: client,
    description: 'ផ្ដល់ជម្រើសផេកសម្រាប់អាជីវកម្មដែលចង់បានផេកមានទំនុកចិត្ត និងរួចរាល់សម្រាប់លក់ឬប៊ូស។',
    points: [
      'ធានាជូនរយៈពេល 1 ខែ',
      'Free ប៊ូសរយៈពេល 15 ថ្ងៃ'
    ]
  },
  detail3: {
    title: 'លក់ TikTok',
    subtitle: 'អាចកម្មង់ Content បាន',
    icon: <SiTiktok />,
    image: feedback,
    description: 'សេវាកម្មសម្រាប់ TikTok follower និងការរៀបចំមាតិកា ដើម្បីជួយគណនីមើលទៅមានសកម្មភាព និងទាក់ទាញជាងមុន។',
    points: [
      'មានចាប់ពី 1k-500k',
      'ធានា follower ខ្មែរ',
      'Free ដូរឈ្មោះ',
      'អាចពិភាក្សា content direction សម្រាប់ growth'
    ]
  }
}

export default function ServiceDetail() {
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
            <h1 style={{ margin: 0, fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, fontWeight: 950 }}>{service.title}</h1>
            <p style={{ margin: '12px 0 0', color: '#9a5b00', fontSize: 18, fontWeight: 900 }}>{service.subtitle}</p>
            <p style={{ margin: '22px 0 0', color: '#4b5563', fontSize: 17, lineHeight: 1.85 }}>{service.description}</p>

            <div style={{ display: 'grid', gap: 12, marginTop: 26 }}>
              {service.points.map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#172033', fontWeight: 850, lineHeight: 1.5 }}>
                  <span style={{ width: 26, height: 26, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: 12 }}>
                    <FaCheck />
                  </span>
                  {point}
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
