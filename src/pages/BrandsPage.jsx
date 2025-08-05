// src/pages/BrandsPage.jsx
import React from 'react';
import styles from './BrandsPage.module.css';
import homePageStyles from '../pages/HomePage.module.css';

import BrandsSection from '../components/BrandsSection';
import ReadySection from '../components/ReadySection';

// Иконки для секции Expertise
const IconCertification = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.09,8.59L17.5,10L11,16.5Z"></path></svg>;
const IconParts = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7,6H17V8H7V6M7,10H17V12H7V10M7,14H17V16H7V14M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"></path></svg>;
const IconTools = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19,7.41L12,5.22L9.81,7.41L8.4,6L12,2.41L15.6,6L14.19,7.41M12,21.59L8.4,18L9.81,16.59L12,18.78L14.19,16.59L15.6,18L12,21.59M18,9.81L16.59,8.4L18.78,6.22L16.59,4L18,2.59L21.59,6.22L18,9.81M6,9.81L2.41,6.22L6,2.59L7.41,4L5.22,6.22L7.41,8.4L6,9.81M19.78,14.19L18,12L16.59,13.41L18.78,15.6L16.59,17.79L18,19.21L21.59,15.6L19.78,14.19M7.41,15.6L5.22,17.79L7.41,19.21L6,20.62L2.41,17L6,13.41L7.41,14.82L5.22,17L7.41,15.6Z"></path></svg>;

const BrandsPage = () => {
  return (
    <>
      {/* Hero Section для страницы Brands */}
      <section className={`${homePageStyles.hero} ${styles.brandsHero}`}>
        <div className={`container ${homePageStyles.heroContent} ${styles.brandsHeroContent}`}>
          <h1>We Repair All Major Appliance Brands</h1>
          <p>From Sub-Zero to Samsung — we've got you covered. Our technicians are certified to service all major kitchen and laundry appliance brands.</p>
          <div className={homePageStyles.buttonGroup}>
            <button className={homePageStyles.heroBtn}>Schedule Repair</button>
            <button className={`${homePageStyles.heroBtn} ${homePageStyles.ghostBtn}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call Us Now</span>
            </button>
          </div>
        </div>
      </section>

      <BrandsSection 
        title="Brands We Service"
        subtitle="We repair all major appliance brands with genuine manufacturer parts."
      />

      {/* --- ИЗМЕНЕНИЯ ЗДЕСЬ --- */}
      {/* Секция Expertise + Статистика */}
      <section className={homePageStyles.section}>
        <div className="container">
          <h2 className="section-title">Our Brand Expertise</h2>
          <p className="section-subtitle">Why choose Premier for your brand-specific appliance repairs</p>

          <div className={styles.expertiseGrid}>
            {/* Левая колонка */}
            <div className={styles.expertiseContent}>
              <h3 className={styles.contentTitle}>Certified Repair for Premium Brands</h3>
              <p>At myappliancebos, we understand that each appliance brand has unique engineering and design. That's why our technicians receive specialized training on all major brands, from luxury Sub-Zero refrigeration to high-performance Viking ranges.</p>
              <p>We invest in continuous training and certification programs to ensure our technicians stay updated on the latest technologies and repair techniques for each manufacturer.</p>
              
              <div className={styles.expertiseFeatures}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><IconCertification /></div>
                  <div>
                    <h4>Brand-Specific Certification</h4>
                    <p>Technicians certified by major manufacturers for precise repairs.</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><IconParts /></div>
                  <div>
                    <h4>Genuine Parts</h4>
                    <p>We use only manufacturer-approved replacement parts.</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}><IconTools /></div>
                  <div>
                    <h4>Specialized Tools</h4>
                    <p>Proprietary diagnostic equipment for each brand.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
              <div className={styles.statCard}>
                <strong>40+</strong>
                <span>Brands Serviced</span>
              </div>
              <div className={styles.statCard}>
                <strong>98%</strong>
                <span>First-Time Fix Rate</span>
              </div>
              <div className={styles.statCard}>
                <strong>10k+</strong>
                <span>Appliances Repaired</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadySection />
    </>
  );
};

export default BrandsPage;
