import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6'
import logo from '../../assets/images/logo.png'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/cart', label: 'Cart' },
    { to: '/contact', label: 'Contact', cta: true }
  ]

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
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
        <Link to="/" aria-label="PN Digital home" className="site-drawer-logo" onClick={closeMenu}>
          <img src={logo} alt="PN Digital" className="site-drawer-logo-image" />
        </Link>

        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => [
              'site-nav-link',
              link.cta ? 'site-nav-cta' : '',
              isActive ? 'is-active' : ''
            ].filter(Boolean).join(' ')}
            onClick={closeMenu}
          >
            {link.label}
            {link.cta && <FaArrowRight />}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
