// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

// 1. Импортируем ваш логотип из папки assets
import logoImage from '../assets/Logo.svg';

// Иконка телефона для кнопки
const IconPhone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* 2. Используем <img> для логотипа */}
        <Link to="/" className={styles.logo}>
          <img src={logoImage} alt="myappliancebos logo" />
        </Link>
        <nav className={styles.nav}>
          {/* 3. Добавляем ссылку "Home" и используем NavLink для активного состояния */}
          <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ''}>About</NavLink>
          <NavLink to="/brands" className={({ isActive }) => isActive ? styles.activeLink : ''}>Brands</NavLink>
          <NavLink to="/service-areas" className={({ isActive }) => isActive ? styles.activeLink : ''}>Service Areas</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ''}>Contact</NavLink>
        </nav>
        {/* 4. Заменяем кнопку на новую, с телефоном */}
        <a href="tel:+1 (603) 320-9578" className={styles.phoneBtn}>
          <IconPhone />
          <span>+1 (603) 320-9578</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
