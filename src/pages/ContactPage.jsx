// src/pages/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // Новые стили для этой страницы
import homePageStyles from '../pages/HomePage.module.css'; // Стили с HomePage для общих секций

// Импортируем наш ГОТОВЫЙ компонент
import GetInTouchSection from '../components/GetInTouchSection';
import mapImage from '../assets/map_service.png';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section для страницы Contact */}
      <section className={`${homePageStyles.hero} ${styles.contactHero}`}>
        <div className={`container ${homePageStyles.heroContent} ${styles.contactHeroContent}`}>
          <h1>Contact MyApplianceBos: Book Appliance Repair</h1>
          <p>We're here to help. Call, email, or book your repair online below.</p>
        </div>
      </section>

      {/* Используем наш готовый компонент для формы и контактов */}
      <GetInTouchSection />

      {/* Map Section */}
      <section className={styles.mapSection}>
        {/* Для этой карты можно использовать статичное изображение или встроить интерактивную карту */}
        <img 
          src={mapImage}
          alt="Map of the Greater Boston area we serve"
          loading="lazy" 
          className={styles.mapImage}
        />
      </section>
    </>
  );
};

export default ContactPage;
