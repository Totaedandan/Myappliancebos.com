// src/components/ReadySection.jsx
import React, { useEffect } from 'react';
import styles from '../pages/HomePage.module.css';

const ReadySection = () => {
  useEffect(() => {
    const scriptId = 'housecall-pro-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://online-booking.housecallpro.com/script.js?token=a255c4d3ed8e4a23950ac0aaeb98863a&orgName=KASSHomeServices";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        // Мы не удаляем скрипт, так как он может быть нужен другим компонентам на странице
        // Если бы этот компонент был единственным, кто использует скрипт, можно было бы его удалить:
        // document.body.removeChild(existingScript);
      }
    };
  }, []);

  const openBookingModal = () => {
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    } else {
      console.error("Housecall Pro Widget is not loaded yet.");
      alert("Booking service is loading, please try again in a moment.");
    }
  };


  return (
    <section className={`${styles.section} ${styles.readySection}`}>
      <div className="container">
        <h2>Ready to Repair Your Appliance?</h2>
        <p>Don't let a broken appliance disrupt your life. Contact us today for fast, reliable service you can trust.</p>
        <button className={styles.heroBtn} onClick={openBookingModal}>
          Schedule Service Now
        </button>
      </div>
    </section>
  );
};

export default ReadySection;