// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import logoImage from '../assets/Logo.png';

// Иконки для футера
const IconLocation = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
const IconPhone = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
const IconEmail = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
const IconClock = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>;

const Footer = ({ theme }) => {
  // В зависимости от полученного 'theme', добавляем класс .blueTheme или ничего
  const footerClasses = `${styles.footer} ${theme === 'blue' ? styles.blueTheme : ''}`;

  return (
    <footer className={footerClasses}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Колонка 1: Лого и описание */}
        <div className={styles.footerColumn}>
          <Link to="/" className={styles.logo}>
            <img src={logoImage} alt="myappliancebos logo" />
          </Link>
          <p>Serving Greater Boston Area since 2010 with premium appliance repair services. We fix it right the first time with a satisfaction guarantee and industry-leading warranties on all repairs.</p>
          <div className={styles.contactItem}>
            <IconLocation />
            <span>123 Service Road, Boston, MA 02108</span>
          </div>
        </div>
        
        {/* Колонка 2: Быстрые ссылки */}
        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/service-areas">Service Areas</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Колонка 3: Услуги */}
        <div className={styles.footerColumn}>
          <h4>Our Services</h4>
          <ul>
            <li><Link to="#">Refrigerator Repair</Link></li>
            <li><Link to="#">Washer Repair</Link></li>
            <li><Link to="#">Dryer Repair</Link></li>
            <li><Link to="#">Oven & Stove Repair</Link></li>
            <li><Link to="#">Dishwasher Repair</Link></li>
            <li><Link to="#">Ice Maker Repair</Link></li>
          </ul>
        </div>

        {/* Колонка 4: Контакты */}
        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <ul>
            <li className={styles.contactItem}><IconPhone /><span>(617) 555-1234</span></li>
            <li className={styles.contactItem}><IconEmail /><span>service@myappliancebos.com</span></li>
            <li className={styles.contactItem}><IconClock /><span>Mon-Sat: 8:00 AM - 8:00 PM<br/>Sun: 9:00 AM - 5:00 PM</span></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <span>© 2025 myappliancebos. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
