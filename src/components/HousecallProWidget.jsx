// src/components/HousecallProWidget.jsx
// Кнопка онлайн-записи через Housecall Pro.
import React from 'react';
import styles from '../pages/HomePage.module.css';
import { useBookingWidget } from '../hooks/useBookingWidget';

const IconPaperPlane = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/></svg>;

const HousecallProWidget = () => {
  const openBookingModal = useBookingWidget();

  return (
    <button type="button" onClick={openBookingModal} className={styles.submitBtn}>
      <IconPaperPlane />
      <span>Book Online</span>
    </button>
  );
};

export default HousecallProWidget;
