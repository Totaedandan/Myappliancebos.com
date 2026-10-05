// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import homePageStyles from './HomePage.module.css';
import { SITE } from '../config/site.js';

const NotFoundPage = () => (
  <section className={homePageStyles.section}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h1 className="section-title">Page Not Found</h1>
      <p className="section-subtitle">
        Sorry, we couldn't find that page. Need a repair? Call us at{' '}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
      <Link to="/" className={homePageStyles.heroBtn}>Back to Home</Link>
    </div>
  </section>
);

export default NotFoundPage;
