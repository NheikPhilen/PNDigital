import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CartPage from './pages/cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Orders from './pages/Orders'
import ServiceDetail from './pages/ServiceDetail'
import SiteHeader from './components/SiteHeader'
import promotionImage from '../assets/images/promotion.jpg'

export default function App(){
  const [isPromotionOpen, setIsPromotionOpen] = useState(true)
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 720,
      easing: 'ease-out-cubic',
      once: true,
      offset: 70,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
  }, [])

  useEffect(() => {
    const effects = ['slide-up', 'slide-left', 'slide-right', 'slide-down', 'slide-in', 'slide-out']
    const revealItems = document.querySelectorAll(
      '.page-motion main > *, .page-motion main article, .page-motion main .service-card'
    )

    revealItems.forEach((element, index) => {
      element.setAttribute('data-aos', effects[index % effects.length])
      element.setAttribute('data-aos-delay', String(Math.min(index * 70, 280)))
    })

    AOS.refreshHard()
  }, [location.pathname])

  const closePromotion = () => {
    setIsPromotionOpen(false)
  }

  return (
    <>
      {isPromotionOpen && (
        <div
          className="promotion-popup"
          role="dialog"
          aria-modal="true"
          aria-label="Promotion"
          onClick={closePromotion}
        >
          <div className="promotion-popup-panel" onClick={(event) => event.stopPropagation()}>
            <button
              className="promotion-popup-close"
              type="button"
              aria-label="Close promotion"
              onClick={closePromotion}
            >
              ×
            </button>
            <img src={promotionImage} alt="Promotion" className="promotion-popup-image" />
          </div>
        </div>
      )}

      <SiteHeader />

      <div className="page-motion" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services/:detailId" element={<ServiceDetail/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/order-confirmation" element={<OrderConfirmation/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </div>
    </>
  )
}
