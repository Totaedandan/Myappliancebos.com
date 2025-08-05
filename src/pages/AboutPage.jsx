// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css'; // Новые стили для этой страницы
import homePageStyles from '../pages/HomePage.module.css'; // Стили с HomePage для общих секций

// Импортируем наши ГОТОВЫЕ компоненты
import BrandsSection from '../components/BrandsSection';
import ReadySection from '../components/ReadySection';

// Иконки для секции Core Values
const IconProfessionalism = () => <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#2979FF" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const IconReliability = () => <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#2979FF" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.06L7.4 11.5l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.65 5.68z"/></svg>;
const IconSpeed = () => <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#2979FF" d="M4 11v2h8v-2H4zm14.8-5.24l-2.82 2.82-1.41-1.41-2.82-2.82-1.41 1.41 2.82 2.82 1.41 1.41 2.82-2.82 1.41-1.41zM12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/></svg>;
const IconQuality = () => <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#2979FF" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;

const coreValues = [
  { icon: <IconProfessionalism />, title: "Professionalism", description: "Uniformed technicians, on-time arrivals, and respectful service. We treat your home like our own." },
  { icon: <IconReliability />, title: "Reliability", description: "Same-day service, upfront pricing, and genuine parts. We do what we say we'll do, every time." },
  { icon: <IconSpeed />, title: "Speed", description: "Most repairs completed in under 2 hours. We know your time is valuable and your appliance is essential." },
  { icon: <IconQuality />, title: "Quality", description: "Factory-certified technicians using manufacturer-approved parts. We stand behind our work with a 2-year warranty." },
  { icon: <IconProfessionalism />, title: "Professionalism", description: "Uniformed technicians, on-time arrivals, and respectful service. We treat your home like our own." },
  { icon: <IconReliability />, title: "Reliability", description: "Same-day service, upfront pricing, and genuine parts. We do what we say we'll do, every time." },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero Section для страницы About */}
      <section className={`${homePageStyles.hero} ${styles.aboutHero}`}>
        <div className={homePageStyles.heroOverlay}></div>
        <div className={`container ${homePageStyles.heroContent} ${styles.aboutHeroContent}`}>
          <h1>About Premier Appliance Repair</h1>
          <p>Your trusted partner for fast and reliable appliance repair in Boston. With over 10 years of experience, our team of certified technicians delivers high-quality repairs with genuine parts and excellent customer service.</p>
          <button className={homePageStyles.heroBtn}>Schedule Service</button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={homePageStyles.section}>
        <div className={`container ${styles.ourStoryGrid}`}>
            <div className={styles.ourStoryText}>
                <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>Our Story</h2>
                <p>Founded in 2013, Premier Appliance Repair began with a simple mission: to provide Boston homeowners with appliance repair services they could truly rely on. What started as a one-man operation has grown into a team of certified technicians serving the entire metropolitan area.</p>
                <p>Over the past decade, we've repaired over 15,000 appliances, developing specialized expertise across all major brands. We pride ourselves on our transparent pricing, same-day service for most repairs, and the industry-leading 2-year warranty that comes with every repair.</p>
            </div>
            <div className={styles.ourStoryImage}>
                <img src="https://images.unsplash.com/photo-1579625481717-2c5253164969?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Appliance technician working"/>
            </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className={`${homePageStyles.section} ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">These principles guide every interaction we have with our customers and every repair we perform.</p>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expert Team Section */}
       <section className={homePageStyles.section}>
        <div className={`container ${styles.teamGrid}`}>
          <div className={styles.teamImage}>
            <img src="https://images.unsplash.com/photo-1556742059-43936a8a2357?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Our expert team"/>
          </div>
          <div className={styles.teamText}>
            <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>Our Expert Team</h2>
            <p>We're currently preparing professional photos of our skilled technicians who take pride in every repair. Each member of our team is a certified, experienced, and friendly professional dedicated to providing you with the best service possible.</p>
            <p>Check back soon to meet the faces behind Premier Appliance Repair!</p>
          </div>
        </div>
       </section>

      {/* Вставляем готовые переиспользуемые блоки */}
      <BrandsSection />
      <ReadySection />
    </>
  );
};

export default AboutPage;