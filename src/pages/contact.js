import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';
import CustomFooter from '@site/src/components/CustomFooter';

export default function Contact() {
  return (
    <Layout title="Contact Us" description="Reach out to Dripex Lab">
      <main className={styles.contactPage}>
        <section className={styles.contactSection}>
          <div className={styles.contactDetails}>
            <p className={styles.getInTouch}>GET IN TOUCH</p>
            <h2 className={styles.heading}>Contact Our Team</h2>
            <p className={styles.subtitle}>Our specialists are here to support you.</p>

            <div className={styles.infoBlock}>
              <span className={styles.icon}>📧</span>
              <div>
                <strong className={styles.label}>Email Assistance</strong>
                <p className={styles.text}>Solutions tailored to your needs.</p>
                <a href="mailto:support@dripexlab.com" className={styles.link}>support@dripexlab.com</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.icon}>📞</span>
              <div>
                <strong className={styles.label}>Phone Support</strong>
                <p className={styles.text}>Available weekdays, 8am – 5pm.</p>
                <a href="tel:+15559876543" className={styles.link}>+1 (555) 987-6543</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong className={styles.label}>Office Location</strong>
                <p className={styles.text}>Visit our main office.</p>
                <p className={styles.address}>101 Web Lane, San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className={styles.contactImage}>
            <img src="/img/contact_us.png" alt="Office" />
          </div>
        </section>
      </main>
      <CustomFooter />
    </Layout>
  );
}
