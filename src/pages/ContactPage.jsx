// src/pages/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // Новые стили для этой страницы
import homePageStyles from '../pages/HomePage.module.css'; // Стили с HomePage для общих секций

// Импортируем наш ГОТОВЫЙ компонент
import GetInTouchSection from '../components/GetInTouchSection';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section для страницы Contact */}
      <section className={`${homePageStyles.hero} ${styles.contactHero}`}>
        <div className={`container ${homePageStyles.heroContent} ${styles.contactHeroContent}`}>
          <h1>Contact MyApplianceBOS</h1>
          <p>We're here to help. Reach out by phone, email, or fill out the form below.</p>
        </div>
      </section>

      {/* Используем наш готовый компонент для формы и контактов */}
      <GetInTouchSection />

      {/* Map Section */}
      <section className={styles.mapSection}>
        {/* Для этой карты можно использовать статичное изображение или встроить интерактивную карту */}
        <img 
          src="https://i.stack.imgur.com/g2V2g.png" 
          alt="Map of Boston service area" 
          className={styles.mapImage}
        />
      </section>
    </>
  );
};

export default ContactPage;
