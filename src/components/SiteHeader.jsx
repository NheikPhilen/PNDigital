import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaArrowRight, FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import lightLogo from '../../assets/images/PN Digital Logo.png'
import darkLogo from '../../assets/images/PN Digital Logo2.png'
import { useLanguage } from '../LanguageContext'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('pn-digital-theme') === 'dark')
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const logo = isDarkMode ? darkLogo : lightLogo

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'ទំព័រដើម' },
    { to: '/about', label: 'អំពីយើង' },
    { to: '/services', label: 'សេវាកម្ម' },
    { to: '/contact', label: 'Contact Us', cta: true }
  ]

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pn-digital-theme', theme)
  }, [isDarkMode])

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

      <div className="site-header-actions">
        <div className="site-language-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={language === 'en' ? 'is-selected' : ''}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'km' ? 'is-selected' : ''}
            aria-pressed={language === 'km'}
            onClick={() => setLanguage('km')}
          >
            ខ្មែរ
          </button>
        </div>

        <button
          type="button"
          className="site-theme-toggle"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDarkMode}
          onClick={() => setIsDarkMode((darkMode) => !darkMode)}
        >
          {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
        </button>

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
      </div>

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
            {t(link.label)}
            {link.cta && <FaArrowRight />}
          </NavLink>
        ))}

      </nav>
    </header>
  )
}
