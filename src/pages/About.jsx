import React from 'react'
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
    { year: '2023', title: 'Started with a simple goal', text: 'PN Digital began by helping agencies build sales pages that make a strong first impression.' },
    { year: '2024', title: 'Built momentum with our clients', text: 'More businesses trusted us with their pages, campaigns, and customer conversations.' },
    { year: 'Today', title: 'A trusted digital partner', text: 'We now support online sellers and growing businesses with practical digital work that gets noticed.' }
  ]

  const strengths = [
    { icon: <FaBullseye />, title: 'Targeted promotion', text: 'Campaigns shaped around the people most likely to message, buy, or follow.' },
    { icon: <FaLayerGroup />, title: 'Page-ready service', text: 'Stronger page setup, clearer content, and a polished customer experience.' },
    { icon: <FaChartLine />, title: 'Result tracking', text: 'Decisions informed by reach, engagement, messages, and next steps.' },
    { icon: <FaHandshake />, title: 'Reliable support', text: 'Direct, friendly communication before, during, and after every campaign.' }
  ]

  return (
    <div className="about-page">
      <style>{`
        .about-page { --ink: #15233b; --muted: #64748b; --gold: #f5b21a; --cream: #fffaf0; min-height: 100vh; overflow: hidden; background: #fff; color: var(--ink); font-family: MIsansKhmer, Inter, system-ui, sans-serif; }
        .about-shell { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
        .about-hero { position: relative; min-height: 580px; display: grid; align-items: center; color: #fff; background: #101d34; isolation: isolate; }
        .about-hero::before { content: ''; position: absolute; inset: 0; z-index: -2; background: linear-gradient(90deg, rgba(9, 20, 39, .95) 0%, rgba(11, 24, 45, .78) 47%, rgba(11, 24, 45, .28) 100%), url('${aboutHero}') center/cover; }
        .about-hero::after { content: ''; position: absolute; z-index: -1; width: 490px; height: 490px; border: 1px solid rgba(255,255,255,.16); border-radius: 50%; right: -165px; top: -130px; box-shadow: 0 0 0 45px rgba(255,255,255,.04), 0 0 0 90px rgba(255,255,255,.025); }
        .about-kicker { display: inline-flex; align-items: center; gap: 9px; margin: 0 0 18px; color: #ffcf55; font-size: .73rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .about-kicker::before { content: ''; width: 28px; height: 2px; background: currentColor; }
        .about-hero h1 { max-width: 730px; margin: 0; font-size: clamp(2.8rem, 6vw, 5.7rem); line-height: .98; letter-spacing: -.06em; }
        .about-intro { max-width: 570px; margin: 25px 0 0; color: #d9e3f0; font-size: clamp(1rem, 1.8vw, 1.18rem); line-height: 1.8; }
        .about-scroll { display: inline-flex; align-items: center; gap: 10px; margin-top: 34px; color: #fff; font-size: .84rem; font-weight: 700; text-decoration: none; }
        .about-scroll span { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 50%; background: var(--gold); color: var(--ink); transition: transform .2s; }.about-scroll:hover span { transform: translateX(5px); }
        .about-stats { position: relative; z-index: 2; margin: -55px auto 0; display: grid; grid-template-columns: repeat(3, 1fr); border-radius: 16px; overflow: hidden; background: #fff; box-shadow: 0 24px 60px rgba(21,35,59,.16); }
        .about-stat { padding: 28px 32px; border-right: 1px solid #e6eaf0; }.about-stat:last-child { border: 0; }.about-stat-value { display: block; color: #d89000; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; letter-spacing: -.06em; }.about-stat-label { display: block; margin-top: 5px; color: var(--muted); font-size: .88rem; font-weight: 600; }
        .about-story { padding: 132px 0 110px; background: var(--cream); }.about-section-label { margin: 0 0 13px; color: #c47b00; font-size: .75rem; font-weight: 900; letter-spacing: .15em; text-transform: uppercase; }.about-section-title { max-width: 630px; margin: 0; font-size: clamp(2.1rem, 4vw, 3.7rem); line-height: 1.08; letter-spacing: -.05em; }.about-story-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: clamp(46px, 8vw, 110px); align-items: start; }.about-story-copy { margin: 22px 0 0; color: var(--muted); line-height: 1.85; }
        .about-timeline { position: relative; display: grid; gap: 30px; padding-left: 42px; }.about-timeline::before { content: ''; position: absolute; top: 11px; bottom: 11px; left: 11px; width: 1px; background: #e6c979; }.about-timeline-item { position: relative; }.about-timeline-dot { position: absolute; width: 23px; height: 23px; left: -42px; top: 0; display: grid; place-items: center; border-radius: 50%; background: var(--gold); color: #1f2937; font-size: .65rem; box-shadow: 0 0 0 7px var(--cream); }.about-timeline-year { display: block; margin-bottom: 5px; color: #bd7802; font-size: .76rem; font-weight: 900; letter-spacing: .1em; }.about-timeline h3 { margin: 0; font-size: 1.27rem; }.about-timeline p { margin: 8px 0 0; color: var(--muted); line-height: 1.7; }
        .about-services { padding: 110px 0; }.about-services-heading { display: flex; justify-content: space-between; gap: 30px; align-items: end; margin-bottom: 42px; }.about-services-heading p:last-child { max-width: 385px; margin: 0; color: var(--muted); line-height: 1.75; }.about-strengths { display: grid; grid-template-columns: repeat(4, 1fr); gap: 17px; }.about-strength { padding: 28px 23px 25px; border: 1px solid #e8edf3; border-radius: 14px; background: #fff; transition: transform .2s, box-shadow .2s; }.about-strength:hover { transform: translateY(-6px); box-shadow: 0 18px 34px rgba(21,35,59,.1); }.about-strength-icon { display: grid; width: 43px; height: 43px; place-items: center; margin-bottom: 26px; border-radius: 12px; background: #fff3d5; color: #be7900; font-size: 1.1rem; }.about-strength h3 { margin: 0; font-size: 1.08rem; }.about-strength p { margin: 10px 0 0; color: var(--muted); font-size: .92rem; line-height: 1.7; }
        .about-image-panel { position: relative; min-height: 380px; display: grid; align-items: end; padding: 42px; color: #fff; background: #15233b url('${pageList}') center/cover; }.about-image-panel::before { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(9,19,37,.89), rgba(9,19,37,.08)); }.about-image-content { position: relative; max-width: 580px; }.about-image-content h2 { margin: 0; font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.08; letter-spacing: -.05em; }.about-image-content p { max-width: 460px; margin: 15px 0 0; color: #dce5f1; line-height: 1.75; }
        .about-footer { padding: 28px 20px; background: #0c172a; color: #aebbd0; text-align: center; font-size: .87rem; }
        @media (max-width: 800px) { .about-hero { min-height: 545px; }.about-stats { grid-template-columns: 1fr; margin-top: -32px; }.about-stat { padding: 20px 24px; border-right: 0; border-bottom: 1px solid #e6eaf0; }.about-story { padding: 86px 0; }.about-story-grid { grid-template-columns: 1fr; gap: 48px; }.about-services { padding: 80px 0; }.about-services-heading { display: block; }.about-services-heading p:last-child { margin-top: 18px; }.about-strengths { grid-template-columns: repeat(2, 1fr); }.about-image-panel { min-height: 330px; padding: 28px; } }
        @media (max-width: 500px) { .about-shell { width: min(100% - 32px, 1160px); }.about-hero h1 { letter-spacing: -.05em; }.about-strengths { grid-template-columns: 1fr; }.about-timeline { padding-left: 36px; }.about-timeline-dot { left: -36px; }.about-hero::after { opacity: .5; } }
      `}</style>

      <main>
        <section className="about-hero">
          <div className="about-shell">
            <p className="about-kicker">About PN Digital</p>
            <h1>We turn digital attention into real business growth.</h1>
            <p className="about-intro">A hands-on digital partner for businesses ready to be seen, trusted, and chosen online.</p>
            <a className="about-scroll" href="#our-story">Discover our story <span><FaArrowRight /></span></a>
          </div>
        </section>

        <section className="about-shell about-stats" aria-label="PN Digital at a glance">
          {stats.map((stat) => <div className="about-stat" key={stat.label}><strong className="about-stat-value">{stat.value}</strong><span className="about-stat-label">{stat.label}</span></div>)}
        </section>

        <section className="about-story" id="our-story"><div className="about-shell about-story-grid">
          <div><p className="about-section-label">Our journey</p><h2 className="about-section-title">Built by listening, growing through results.</h2><p className="about-story-copy">Every business has a different audience and a different goal. That is why we begin with what matters to your customers, then build a clearer path to reach them.</p></div>
          <div className="about-timeline">{workStory.map((item) => <article className="about-timeline-item" key={item.year}><span className="about-timeline-dot"><FaCheck /></span><span className="about-timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div></section>

        <section className="about-services"><div className="about-shell"><div className="about-services-heading"><div><p className="about-section-label">How we help</p><h2 className="about-section-title">Good work should feel personal.</h2></div><p>Clear strategy, thoughtful execution, and support that stays focused on your next opportunity.</p></div><div className="about-strengths">{strengths.map((item) => <article className="about-strength" key={item.title}><div className="about-strength-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

        <section className="about-image-panel"><div className="about-shell about-image-content"><p className="about-kicker">Our promise</p><h2>Make every customer interaction count.</h2><p>From the first scroll to the final message, we help your business show up with confidence and clarity.</p></div></section>
      </main>
      <footer className="about-footer">© 2026 PN Digital. Helping business owners grow online since 2023.</footer>
    </div>
  )
}
