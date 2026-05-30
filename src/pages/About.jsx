import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullseye, FaChartLine, FaCheck, FaHandshake, FaLayerGroup } from 'react-icons/fa6'
import aboutHero from '../../assets/images/HeroBanner.jpg'
import pageList from '../../assets/images/pagelist.jpg'

export default function About() {
  const stats = [
    { value: '300+', label: 'Clients since 2023' },
    { value: '3+', label: 'Years of campaign work' },
    { value: '24/7', label: 'Support for active clients' }
  ]

  const workStory = [
    {
      year: '2023',
      title: 'Started with page growth',
      text: 'PN Digital began by helping sellers prepare stronger Facebook pages, improve trust signals, and reach the right customers.'
    },
    {
      year: '2024',
      title: 'Built live boost support',
      text: 'The work expanded into Live Boosting, page setup, follower growth, and practical campaign support for daily sellers.'
    },
    {
      year: 'Now',
      title: 'Focused on measurable sales action',
      text: 'Today we support business owners with clearer offers, better page positioning, campaign reporting, and faster customer response.'
    }
  ]

  const strengths = [
    { icon: <FaBullseye />, title: 'Targeted promotion', text: 'Campaign setup focuses on the audience most likely to message, buy, or follow.' },
    { icon: <FaLayerGroup />, title: 'Page-ready service', text: 'We help with page quality, setup details, followers, and boost readiness.' },
    { icon: <FaChartLine />, title: 'Result tracking', text: 'Work is reviewed through reach, engagement, messages, and practical next steps.' },
    { icon: <FaHandshake />, title: 'Reliable support', text: 'Clients get direct communication before, during, and after campaign work.' }
  ]

  return (
    <div style={{ fontFamily: 'MIsansKhmer, system-ui, sans-serif', minHeight: '100vh', background: '#f6f7fb', color: '#111827' }}>
      <style>{`
        .about-wrap { max-width: 1200px; margin: 0 auto; }
        .about-eyebrow { margin: 0 0 12px; color: #0f766e; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.4px; }
        .about-title { margin: 0; font-size: clamp(34px, 5vw, 62px); line-height: 1.06; font-weight: 950; letter-spacing: 0; }
        .about-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(320px, .98fr); gap: 36px; align-items: center; }
        .about-card { border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; box-shadow: 0 18px 48px rgba(17,24,39,.08); }
        .about-stat-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 34px; }
        .about-stat { padding: 18px; border-radius: 8px; background: rgba(255,255,255,.92); border: 1px solid rgba(255,255,255,.78); }
        .story-line { position: relative; display: grid; gap: 18px; }
        .story-line::before { content: ''; position: absolute; left: 17px; top: 12px; bottom: 12px; width: 2px; background: #fde68a; }
        .story-item { position: relative; display: grid; grid-template-columns: 36px 1fr; gap: 16px; }
        .story-dot { width: 36px; height: 36px; border-radius: 8px; background: #fdaf06; color: #101827; display: flex; align-items: center; justify-content: center; font-size: 14px; z-index: 1; }
        @media (max-width: 900px) {
          .about-pad { padding: 58px 18px!important; }
          .about-grid { grid-template-columns: 1fr; }
          .about-stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <main>
        <section className="about-pad" style={{ padding: '82px 40px', background: '#f6f7fb' }}>
          <div className="about-wrap about-grid">
            <div className="about-card" style={{ padding: 28 }}>
              <div className="story-line">
                {workStory.map((item) => (
                  <div key={item.year} className="story-item">
                    <div className="story-dot"><FaCheck /></div>
                    <div style={{ paddingBottom: 12 }}>
                      <span style={{ display: 'inline-flex', marginBottom: 8, color: '#9a5b00', fontSize: 13, fontWeight: 950 }}>{item.year}</span>
                      <h3 style={{ margin: '0 0 8px', color: '#101827', fontSize: 22, fontWeight: 950 }}>{item.title}</h3>
                      <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.75 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="about-eyebrow" style={{ color: '#9a5b00' }}>How we work</p>
              <h2 className="about-title">Clear process, real support, better customer response.</h2>
              <p style={{ margin: '22px 0 0', color: '#4b5563', fontSize: 17, lineHeight: 1.85 }}>
                We do not treat every page the same. A page selling products, a service business, and a live seller each need a different message, target audience, and boost setup.
              </p>
            </div>
          </div>
        </section>

        <section className="about-pad" style={{ padding: '82px 40px', background: '#101827', color: '#fff' }}>
          <div className="about-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'end', flexWrap: 'wrap', marginBottom: 30 }}>
              <div style={{ maxWidth: 720 }}>
                <p className="about-eyebrow" style={{ color: '#5eead4' }}>Why clients choose us</p>
                <h2 className="about-title">A partner for daily digital growth.</h2>
              </div>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#101827', background: '#fdaf06', padding: '14px 18px', borderRadius: 8, fontWeight: 900, textDecoration: 'none' }}>
                Contact us <FaArrowRight />
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
              {strengths.map((item) => (
                <article key={item.title} style={{ padding: 26, borderRadius: 8, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.06)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 8, background: '#fdaf06', color: '#101827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 18 }}>
                    {item.icon}
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 21, fontWeight: 950 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.75 }}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: '#0b1020', color: '#fff', padding: '30px 40px', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#cbd5e1' }}>© 2026 PN Digital. Helping business owners grow online since 2023.</p>
      </footer>
    </div>
  )
}
