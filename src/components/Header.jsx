// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { SITE } from '../config/site.js';

import logoImage from '../assets/Logo.svg';

const IconPhone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/brands', label: 'Brands' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/contact', label: 'Contact' },
];

const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : '');

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Закрываем мобильное меню при переходе на другую страницу
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Закрытие по Escape
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo}>
          <img src={logoImage} alt="MyApplianceBos - appliance repair in Greater Boston" width="237" height="50" />
        </Link>

        <nav
          id="main-nav"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <a href={SITE.phoneHref} className={styles.mobileMenuPhone}>
            <IconPhone />
            <span>Call {SITE.phone}</span>
          </a>
        </nav>

        <div className={styles.actions}>
          <a href={SITE.phoneHref} className={styles.phoneBtn} aria-label={`Call ${SITE.phone}`}>
            <IconPhone />
            <span className={styles.phoneText}>{SITE.phone}</span>
          </a>
          <button
            type="button"
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
