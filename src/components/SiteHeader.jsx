import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark, FaArrowRight } from 'react-icons/fa6'
import logo from '../../assets/images/logo.png'

export default function SiteHeader({ variant = 'default' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isHome = variant === 'home'

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact', cta: true }
  ]

  return (
    <header className={`site-header ${isHome ? 'site-header-home' : ''}`}>
      <Link to="/" aria-label="PN Digital home" className="site-logo" onClick={closeMenu}>
        <img src={logo} alt="PN Digital" className="site-logo-image" />
      </Link>

      <button
        type="button"
        className="site-menu-button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </button>

      <button
        type="button"
        className={`site-menu-backdrop ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Close menu"
        onClick={closeMenu}
      />

      <nav
        id="site-navigation"
        className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={link.cta ? 'site-nav-link site-nav-cta' : 'site-nav-link'}
            onClick={closeMenu}
          >
            {link.label}
            {link.cta && <FaArrowRight />}
          </Link>
        ))}
      </nav>
    </header>
  )
}
