// src/pages/ServiceAreasPage.jsx
import React from 'react';
import styles from './ServiceAreasPage.module.css'; // Новые стили для этой страницы
import homePageStyles from '../pages/HomePage.module.css'; // Стили с HomePage для общих секций

// Импортируем карту из ассетов
import mapImage from '../assets/map_service.png';

// Иконки для карточек городов
const IconBuilding = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>;
const IconUniversity = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6.32L1 12.5V15l11 6 9-4.91v-6.38L23 9l-4-2.18v6.32L12 19.5 5 15.5v-3l7 3.82 7-3.82V10.5L12 14.32 5 10.5V8.2L12 5l7 3.82v2.68L12 14.32z"/></svg>;
const IconHome = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>;
const IconLocation = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>;

// Данные для карточек городов
const cities = [
  { icon: <IconBuilding />, name: "Boston", description: "All neighborhoods including Back Bay, Beacon Hill, South End, and Downtown.", tag: "HQ" },
  { icon: <IconUniversity />, name: "Cambridge", description: "Harvard Square, MIT area, Central Square, and all surrounding neighborhoods.", tag: "2 miles" },
  { icon: <IconHome />, name: "Brookline", description: "Coolidge Corner, Washington Square, and all residential areas.", tag: "3 miles" },
  { icon: <IconHome />, name: "Newton", description: "Newton Centre, Newtonville, and surrounding residential communities.", tag: "7 miles" },
  { icon: <IconUniversity />, name: "Somerville", description: "Davis Square, Union Square, and all surrounding neighborhoods.", tag: "3 miles" },
  { icon: <IconHome />, name: "Quincy", description: "Wollaston, North Quincy, and all residential areas.", tag: "8 miles" },
  { icon: <IconBuilding />, name: "Medford", description: "Medford Square, residential, and all surrounding neighborhoods.", tag: "5 miles" },
  { icon: <IconBuilding />, name: "Everett", description: "All residential and commercial areas throughout Everett.", tag: "4 miles" },
  { icon: <IconHome />, name: "Revere", description: "Beachmont, Revere Beach, and all residential areas.", tag: "6 miles" },
  { icon: <IconBuilding />, name: "Chelsea", description: "All neighborhoods throughout Chelsea.", tag: "3 miles" },
  { icon: <IconHome />, name: "Arlington", description: "Arlington Heights, East Arlington and surrounding residential areas.", tag: "6 miles" },
  { icon: <IconBuilding />, name: "Watertown", description: "East End, Watertown Square and all commercial areas.", tag: "5 miles" },
];

const ServiceAreasPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`${homePageStyles.hero} ${styles.areasHero}`}>
        <div className={`container ${homePageStyles.heroContent} ${styles.areasHeroContent}`}>
          <h1>Our Service Areas in Boston & Beyond</h1>
          <p>Fast, reliable appliance repair services across Greater Boston and surrounding areas.</p>
          <div className={homePageStyles.buttonGroup}>
            <button className={homePageStyles.heroBtn}>View Covered Cities</button>
            <button className={`${homePageStyles.heroBtn} ${homePageStyles.ghostBtn}`}>Check Your Area</button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`${homePageStyles.section} ${styles.mapSection}`}>
        <div className="container">
          <img src={mapImage} alt="Map of our service areas" className={styles.mapImage} />
        </div>
      </section>

      {/* Covered Cities Section */}
      <section className={homePageStyles.section}>
        <div className="container">
          <h2 className={`section-title ${styles.citiesTitle}`}>Covered Cities & Neighborhoods</h2>
          <p className="section-subtitle">We proudly serve the following areas in Greater Boston and surrounding regions</p>
          <div className={styles.citiesGrid}>
            {cities.map(city => (
              <div key={city.name} className={styles.cityCard}>
                <div className={styles.cityIcon}>{city.icon}</div>
                <h3>{city.name}</h3>
                <p>{city.description}</p>
                <span className={styles.cityTag}>{city.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Text Section */}
      <section className={`${homePageStyles.section} ${styles.infoSection}`}>
        <div className={styles.infoContainer}>
          <p>We're proud to provide same-day appliance repair services throughout Boston and neighboring communities. Our service area covers a 15-mile radius from downtown Boston, ensuring that residents throughout Greater Boston have access to reliable, professional appliance repair.</p>
          <p>Our technicians live and work in the communities we serve, allowing us to respond quickly to service calls throughout our coverage area. Whether you're in historic Beacon Hill or the residential neighborhoods of Newton, you can count on Premier Appliance Repair for fast, dependable service.</p>
          <p>Not sure if we service your specific neighborhood? Give us a call at (555) 123-4567 and we'll confirm immediately if you're within our service area. We're constantly expanding our coverage to serve more communities in the Boston metropolitan area.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${homePageStyles.section} ${styles.ctaSection}`}>
        <div className="container">
          <h2>Not sure if we service your area?</h2>
          <p>Call us now and we'll confirm immediately - plus answer any questions about our appliance repair services.</p>
          <div className={homePageStyles.buttonGroup} style={{justifyContent: 'center'}}>
            <button className={homePageStyles.heroBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>(555) 123-4567</span>
            </button>
            <button className={`${homePageStyles.heroBtn} ${homePageStyles.ghostBtn}`}>Email Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreasPage;
