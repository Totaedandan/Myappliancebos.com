// src/components/HousecallProWidget.jsx
import React, { useEffect } from 'react';
import styles from '../pages/HomePage.module.css'; // Используем стили от HomePage для кнопки

// Иконка для кнопки
const IconPaperPlane = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/></svg>;

const HousecallProWidget = () => {
  useEffect(() => {
    // Эта функция будет выполняться один раз, когда компонент появится на странице
    const script = document.createElement('script');
    
    // Вставляем URL скрипта из вашего кода
    script.src = "https://online-booking.housecallpro.com/script.js?token=a255c4d3ed8e4a23950ac0aaeb98863a&orgName=KASSHomeServices";
    script.async = true;

    document.body.appendChild(script);

    // Эта функция очистки удалит скрипт, если вы перейдете на другую страницу
    return () => {
      // Ищем и удаляем скрипт, чтобы избежать дублирования
      const existingScript = document.querySelector(`script[src*="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  const openBookingModal = () => {
    // Проверяем, что виджет загрузился и доступен в window
    if (window.HCPWidget) {
      window.HCPWidget.openModal();
    } else {
      console.error("Housecall Pro Widget is not loaded.");
    }
  };

  // Возвращаем кнопку, стилизованную под наш дизайн,
  // которая при клике вызывает функцию виджета
  return (
    <button onClick={openBookingModal} className={styles.submitBtn}>
      <IconPaperPlane />
      <span>Book Online</span>
    </button>
  );
};

export default HousecallProWidget;
