// src/components/GetInTouchSection.jsx
import React from 'react';
import styles from '../pages/HomePage.module.css'; // Стили берем с HomePage

// Все иконки для этого блока живут здесь
const IconPhone = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.76 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.24 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/></svg>;
const IconEmail = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/></svg>;
const IconLocation = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/></svg>;
const IconClock = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/></svg>;
const IconPaperPlane = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/></svg>;
const IconFacebook = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.67 21.22 10.44 22V14.4H7.88V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.28H15.24C14.01 8.28 13.56 9.09 13.56 10.12V12.06H16.34L15.89 14.4H13.56V22C18.33 21.22 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>;
const IconTwitter = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.09z"/></svg>;
const IconInstagram = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>;

const GetInTouchSection = () => {
    return (
        <section className={`${styles.section}`}>
            <div className="container">
                <h2 className="section-title">Schedule your Repair Today</h2>
                <p className="section-subtitle">Get in touch to schedule a service appointment or ask any questions about our repair services.</p>
                <div className={styles.getInTouchGrid}>
                    {/* Левая колонка */}
                    <div className={styles.contactDetails}>
                        <h3>Get In Touch</h3>
                        <p>We're here to help with all your appliance repair needs. Reach out to us through any of these channels.</p>
                        <ul>
                            <li>
                                <div className={styles.contactIcon}><IconPhone /></div>
                                <div>
                                    <strong>Phone</strong>
                                    <span>(555) 123-4567</span>
                                </div>
                            </li>
                            <li>
                                <div className={styles.contactIcon}><IconEmail /></div>
                                <div>
                                    <strong>Email</strong>
                                    <span>service@premierrepair.com</span>
                                </div>
                            </li>
                            <li>
                                <div className={styles.contactIcon}><IconLocation /></div>
                                <div>
                                    <strong>Service Area</strong>
                                    <span>Serving the greater metropolitan area with same-day service available.</span>
                                </div>
                            </li>
                            <li>
                                <div className={styles.contactIcon}><IconClock /></div>
                                <div>
                                    <strong>Hours</strong>
                                    <span>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm<br/>Emergency service available</span>
                                </div>
                            </li>
                        </ul>
                        <div className={styles.socialIcons}>
                            <a href="#"><IconFacebook /></a>
                            <a href="#"><IconTwitter /></a>
                            <a href="#"><IconInstagram /></a>
                        </div>
                    </div>
                    {/* Правая колонка */}
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" placeholder="John Smith" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="(617) 555-1234" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="applianceType">Appliance Type</label>
                            <select id="applianceType">
                                <option>Select an appliance</option>
                                <option>Refrigerator</option>
                                <option>Washer</option>
                                <option>Dryer</option>
                                <option>Oven & Range</option>
                                <option>Dishwasher</option>
                                <option>Ice Maker</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="issue">Describe the Issue</label>
                            <textarea id="issue" placeholder="Please describe the issue you're experiencing..." rows="4"></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            <IconPaperPlane />
                            <span>Request Service</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;