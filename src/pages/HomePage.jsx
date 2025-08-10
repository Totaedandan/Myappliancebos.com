// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import styles from './HomePage.module.css';

// Импортируем наши новые переиспользуемые компоненты
import BrandsSection from '../components/BrandsSection';
import ReadySection from '../components/ReadySection';
import GetInTouchSection from '../components/GetInTouchSection';

// Иконки, которые используются ТОЛЬКО на главной странице
const IconLicense = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7V17C2 21 6 23 12 23C18 23 22 21 22 17V7L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="white"/></svg>;
const IconWarranty = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 12L20.56 9.22L20.9 5.54L17.29 4.72L15.4 1.54L12 3L8.6 1.54L6.71 4.72L3.1 5.53L3.44 9.21L1 12L3.44 14.78L3.1 18.46L6.71 19.28L8.6 22.46L12 21L15.4 22.46L17.29 19.28L20.9 18.47L20.56 14.79L23 12ZM10.09 16.09L6.5 12.5L7.91 11.08L10.09 13.27L16.08 7.29L17.5 8.7L10.09 16.09Z" fill="white"/></svg>;
const IconTechnician = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/></svg>;
const IconCalendar = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12H12V17H17V12ZM16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z" fill="white"/></svg>;
const IconPricing = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.78 11.95 21.41 11.58ZM7 7C6.45 7 6 6.55 6 6C6 5.45 6.45 5 7 5C7.55 5 8 5.45 8 6C8 6.55 7.55 7 7 7Z" fill="white"/></svg>;
const IconSpeed = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1H9V3H15V1ZM11 14.5V8.5H13V14.5H11ZM19.03 7.39L20.45 5.97C20.02 5.55 19.57 5.15 19.09 4.77L17.67 6.19C16.5 5.23 15.08 4.5 13.5 4.18V2H10.5V4.18C8.92 4.5 7.5 5.23 6.33 6.19L4.91 4.77C4.43 5.15 3.98 5.55 3.55 5.97L4.97 7.39C4.45 8.07 4 8.86 3.68 9.72H1V12.72H3.68C4 13.58 4.45 14.37 4.97 15.05L3.55 16.47C3.98 16.89 4.43 17.29 4.91 17.67L6.33 16.25C7.5 17.21 8.92 17.94 10.5 18.26V20.26H13.5V18.26C15.08 17.94 16.5 17.21 17.67 16.25L19.09 17.67C19.57 17.29 20.02 16.89 20.45 16.47L19.03 15.05C19.55 14.37 20 13.58 20.32 12.72H23V9.72H20.32C20 8.86 19.55 8.07 19.03 7.39Z" fill="white"/></svg>;
const IconGoogle = () => <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,5 12,5C14.5,5 16.22,6.17 17.06,6.96L19.25,4.78C17.2,2.91 14.83,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 21.7,17.52 21.7,12C21.7,11.71 21.5,11.4 21.35,11.1Z"/></svg>;
const IconYelp = () => <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#d32323" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.69 13.33h-2.12l-2.4-4.57-2.4 4.57H7.67l4.47-7.24-4.47-4.09h2.12l2.4 4.57 2.4-4.57h2.12l-4.47 7.24 4.47 4.09z"/></svg>;
const IconThumb = () => <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#0077B5" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 12.41c-.39.39-1.02.39-1.41 0L5.5 11.59V15H4v-6h6v1.5H6.91l3.79 3.79c.39.39.39 1.03 0 1.42zM18.5 15h-6v-1.5h4.09l-3.79-3.79c-.39-.39-.39-1.02 0-1.41L16.59 5H13V3.5h6v6h-1.5V6.91l-3.79 3.79c-.39.39-.39 1.03 0 1.42l3.29 3.29c.39.39.39 1.02 0 1.41z"/></svg>;

// Данные для уникальных секций HomePage
const appliances = [
    { name: "Refrigerators", description: "Expert repair for all refrigerator types and brands with same-day service available for urgent cases.", img: "https://images.unsplash.com/photo-1616464916566-236ef485a349?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" },
    { name: "Washers", description: "Front-load and top-load washer diagnostics and repair with genuine parts and 1-year warranty.", img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" },
    { name: "Dryers", description: "Gas and electric dryer troubleshooting and repair by certified technicians with 15+ years experience.", img: "https://images.unsplash.com/photo-1590212151007-3a1e048398de?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" },
    { name: "Ovens & Ranges", description: "Gas and electric oven and stove repair services with transparent pricing and no hidden fees.", img: "https://images.unsplash.com/photo-1577862529714-a55d045b4278?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" },
    { name: "Dishwashers", description: "Quiet, efficient dishwasher repair for all brands with leak detection and water efficiency optimization.", img: "https://images.unsplash.com/photo-1601412436009-d96440277a3b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" },
    { name: "Ice Makers", description: "Commercial and residential ice maker repair with emergency service and rapid response guarantee.", img: "https://images.unsplash.com/photo-1563223073-613e5a409559?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" }
];

const features = [
    { icon: <IconLicense />, title: "Licensed & Insured", description: "Our technicians are fully licensed, insured, and background-checked for your peace of mind." },
    { icon: <IconWarranty />, title: "Warranty on Repairs", description: "All our repairs come with a comprehensive 1-year warranty on parts and labor." },
    { icon: <IconTechnician />, title: "Certified Technicians", description: "Our team consists of factory-trained technicians with 10+ years of experience." },
    { icon: <IconCalendar />, title: "Flexible Scheduling", description: "We offer same-day appointments and service 7 days a week to fit your schedule." },
    { icon: <IconPricing />, title: "Affordable Pricing", description: "Upfront pricing with no hidden fees. We beat any written estimate by 10%." },
    { icon: <IconSpeed />, title: "Same-Day Service", description: "Most repairs completed on the first visit. Emergency service available 24/7." }
];

const faqs = [
    { q: "How quickly can you repair my appliance?", a: "We offer same-day service for most repairs and can often be at your home within hours of your call." },
    { q: "How much does appliance repair cost?", a: "The cost depends on the appliance type and the issue. We provide transparent, upfront pricing with no hidden fees after diagnostics." },
    { q: "What brands do you service?", a: "We service all major brands, including Samsung, LG, Whirlpool, Kenmore, GE, KitchenAid, and many more." },
    { q: "Are your technicians certified?", a: "Yes, all our technicians are factory-trained, certified, and have over 10 years of professional experience." },
    { q: "Do you offer a warranty on repairs?", a: "Absolutely. All our repairs come with a comprehensive 1-year warranty on both parts and labor for your peace of mind." },
    { q: "What areas do you service?", a: "We serve the entire Greater Boston area and surrounding neighborhoods. Contact us to confirm if you're in our service zone." }
];

const reviews = [
    { name: "Austin Potts", source: "G Google", sourceIcon: <IconGoogle />, text: "Great service! Very fast response. Fixed several appliances in my home all of which are good as new! Highly recommend.", stars: 5, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: "Sarah Johnson", source: "Yelp", sourceIcon: <IconYelp />, text: "My refrigerator stopped cooling on a Friday evening. Called Premier and they had a technician at my door in 90 minutes. Fixed the issue same day and saved hundreds in spoiled food. Amazing service!", stars: 5, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: "Michael Chen", source: "Thumbtack", sourceIcon: <IconThumb />, text: "Honest and knowledgeable technicians. They diagnosed my washer issue quickly, explained the problem in terms I could understand, and had it fixed at a reasonable price. Will definitely use them again.", stars: 5, avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { name: "Austin Potts", source: "G Google", sourceIcon: <IconGoogle />, text: "Great service! Very fast response. Fixed several appliances in my home all of which are good as new! Highly recommend.", stars: 5, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: "Sarah Johnson", source: "Yelp", sourceIcon: <IconYelp />, text: "My refrigerator stopped cooling on a Friday evening. Called Premier and they had a technician at my door in 90 minutes. Fixed the issue same day and saved hundreds in spoiled food. Amazing service!", stars: 5, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: "Michael Chen", source: "Thumbtack", sourceIcon: <IconThumb />, text: "Honest and knowledgeable technicians. They diagnosed my washer issue quickly, explained the problem in terms I could understand, and had it fixed at a reasonable price. Will definitely use them again.", stars: 5, avatar: 'https://randomuser.me/api/portraits/men/46.jpg' }
];

const HomePage = () => {
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
        document.body.removeChild(existingScript);
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
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Premium Appliance Repair in Greater Boston</h1>
          <p>Expert technicians providing fast, reliable solutions for all your kitchen & laundry appliances. Same-day service available with a 100% satisfaction guarantee.</p>
          <div className={styles.buttonGroup}>
            <button className={styles.heroBtn} onClick={openBookingModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>REQUEST SERVICE</span>
            </button>
            {/* --- ИЗМЕНЕНИЕ ЗДЕСЬ --- */}
            <a href="tel:+16033209578" className={`${styles.heroBtn} ${styles.ghostBtn}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>CALL NOW</span>
            </a>
          </div>
          <div className={styles.stats}>
            <div><strong>98%</strong><span>Customer Satisfaction</span></div>
            <div><strong>15,000+</strong><span>Appliances Repaired</span></div>
            <div><strong>24/7</strong><span>Emergency Service</span></div>
          </div>
        </div>
      </section>

      {/* Appliances We Repair */}
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-title">Appliances We Repair</h2>
          <p className="section-subtitle">Our certified technicians specialize in repairing all major brands and models with precision and expertise.</p>
          <div className={styles.appliancesGrid}>
            {appliances.map(item => (
              <div key={item.name} className={styles.applianceCard}>
                <img src={item.img} alt={item.name} className={styles.cardBgImage} />
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardContent}>
                  <span className={styles.brandTag}>ALL BRANDS</span>
                  <div className={styles.cardText}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href="#contact" className={styles.cardLink}>REQUEST SERVICE</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Используем компонент */}
      <BrandsSection />

      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChooseUsSection}`}>
        <div className="container">
          <h2 className={`${styles.lightTitle}`}>Why Choose Us</h2>
          <p className={`${"section-subtitle"} ${styles.lightSubtitle}`}>Experience the difference with our premium appliance repair service.</p>
          <div className={styles.featuresGrid}>
            {features.map(feature => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our appliance repair services.</p>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {faq.q}
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className={`${styles.section}`}>
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-subtitle">Don't just take our word for it. Here's what our customers have to say about our services.</p>
          <div className={styles.reviewsCarouselWrapper}>
            <div className={styles.reviewsGrid}>
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <img src={review.avatar} alt={review.name} className={styles.avatar} />
                    <div className={styles.authorInfo}>
                      <strong>{review.name}</strong>
                      <div className={styles.reviewStars}>{"★".repeat(review.stars)}</div>
                    </div>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.reviewFooter}>
                    <div className={styles.reviewSource}>
                      {review.sourceIcon}
                      <span>{review.source}</span>
                    </div>
                    <a href="#" className={styles.reviewLink}>See review</a>
                  </div>
                </div>
              ))}
              {reviews.map((review, index) => (
                <div key={`clone-${index}`} className={`${styles.reviewCard} ${styles.isClone}`}>
                  <div className={styles.reviewHeader}>
                    <img src={review.avatar} alt={review.name} className={styles.avatar} />
                    <div className={styles.authorInfo}>
                      <strong>{review.name}</strong>
                      <div className={styles.reviewStars}>{"★".repeat(review.stars)}</div>
                    </div>
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.reviewFooter}>
                    <div className={styles.reviewSource}>
                      {review.sourceIcon}
                      <span>{review.source}</span>
                    </div>
                    <a href="#" className={styles.reviewLink}>See review</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Используем компонент */}
      <ReadySection />

      {/* Используем компонент */}
      <GetInTouchSection />
    </>
  );
};

export default HomePage;
