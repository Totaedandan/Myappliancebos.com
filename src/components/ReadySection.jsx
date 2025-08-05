// src/components/ReadySection.jsx
import React from 'react';
import styles from '../pages/HomePage.module.css'; // Стили берем с HomePage

const ReadySection = () => {
  return (
    <section className={`${styles.section} ${styles.readySection}`}>
      <div className="container">
        <h2>Ready to Repair Your Appliance?</h2>
        <p>Don't let a broken appliance disrupt your life. Contact us today for fast, reliable service you can trust.</p>
        <button className={styles.heroBtn}>Schedule Service Now</button>
      </div>
    </section>
  );
};

export default ReadySection;