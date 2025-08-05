// src/components/BrandsSection.jsx
import React from 'react';
import styles from '../pages/HomePage.module.css'; // Стили по-прежнему берем с HomePage
import brandsImage1 from '../assets/service_brands.png';
import brandsImage2 from '../assets/service_brands2.png';

// Компонент теперь принимает title и subtitle как параметры
// Мы также задаем значения по умолчанию, чтобы не сломать другие страницы
const BrandsSection = ({ 
  title = "We Service All Major Brands", 
  subtitle = "Trusted by homeowners throughout the Greater Boston area for over a decade." 
}) => {
  return (
    <section className={`${styles.section} ${styles.brandsSection}`}>
      <div className="container">
        {/* Используем полученные параметры вместо жестко заданного текста */}
        <h2 className={`${"section-title"} ${styles.brandsTitle}`}>{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className={styles.brandsGrid}>
          <img src={brandsImage1} alt="Samsung, Kenmore, LG and other brands" />
          <img src={brandsImage2} alt="GE, Thermador, Panasonic and other brands" />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
