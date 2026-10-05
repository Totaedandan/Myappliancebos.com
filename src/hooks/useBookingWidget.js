// src/hooks/useBookingWidget.js
// Загружает скрипт онлайн-записи Housecall Pro один раз на всё приложение
// и возвращает функцию открытия окна записи.
import { useEffect } from 'react';
import { SITE } from '../config/site.js';

const SCRIPT_ID = 'housecall-pro-script';

const loadBookingScript = () => {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = SITE.bookingScriptSrc;
  script.async = true;
  document.body.appendChild(script);
};

const openBooking = () => {
  if (window.HCPWidget) {
    window.HCPWidget.openModal();
    return;
  }
  // Виджет ещё не загрузился: подгружаем скрипт и предлагаем позвонить.
  loadBookingScript();
  alert(`Online booking is loading, please try again in a moment or call us at ${SITE.phone}.`);
};

export const useBookingWidget = () => {
  useEffect(loadBookingScript, []);
  return openBooking;
};
