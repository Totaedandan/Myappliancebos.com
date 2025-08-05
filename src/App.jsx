// src/App.jsx
import React from 'react';
// Добавляем useLocation
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ContactPage from './pages/ContactPage';
import './index.css'; // Общий файл стилей

// Внутренний компонент для доступа к хуку useLocation
function AppContent() {
  const location = useLocation();
  
  // Проверяем, является ли текущая страница главной
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {<Route path="/brands" element={<BrandsPage />} />}
          {<Route path="/service-areas" element={<ServiceAreasPage />} />}
          {<Route path="/contact" element={<ContactPage />} />}
        </Routes>
      </main>
      {/* Передаем 'blue' для главной страницы, и ничего (будет серый по умолчанию) для остальных */}
      <Footer theme={isHomePage ? 'blue' : ''} />
    </div>
  );
}

// Главный компонент теперь просто оборачивает AppContent в Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
