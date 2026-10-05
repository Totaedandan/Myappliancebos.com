// src/App.jsx
// Роутер подключается снаружи: BrowserRouter в main.jsx (браузер)
// и StaticRouter в entry-server.jsx (пререндер HTML для поисковиков).
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Seo from './components/Seo';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

function App() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className="App">
      <Seo />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* Синий футер на главной, серый на остальных страницах */}
      <Footer theme={isHomePage ? 'blue' : ''} />
    </div>
  );
}

export default App;
