// File: src/components/CuttingEdgeFeatures.js
import React from 'react';
import styles from './CuttingEdgeFeatures.module.css';

export default function CuttingEdgeFeatures() {
  const features = [
    {
      icon: '📄',
      title: 'Advanced Web Systems',
      desc: 'Design scalable, high-performance systems for seamless integration.',
    },
    {
      icon: '✨',
      title: 'Optimized Marketing Solutions',
      desc: 'Utilize AI to enhance lead generation and conversion rates.',
    },
    {
      icon: '💬',
      title: 'Secure Payment Platforms',
      desc: 'Develop flexible, secure payment solutions for global reach.',
    },
    {
      icon: '⚙️',
      title: 'Smart Workflow Automation',
      desc: 'Enhance efficiency with intelligent, automated workflows.',
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <p className={styles.sectionLabel}>Smarter Payment Solutions for Modern CRMs</p>
      <h2 className={styles.limitedWidth}>
  Seamless payment integrations for GHL, Dripcel, Zoho, HubSpot with Payfast, Peach Payments & Paystack. 
</h2>
      <div className={styles.featureGrid}>
        {features.map((item, index) => (
          <div key={index} className={styles.featureBox}>
            <div className={styles.featureIcon}>{item.icon}</div>
            <h3 className={styles.featureTitle}>{item.title}</h3>
            <p className={styles.featureDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.featureButtonWrap}>
      <a className={styles.featureCtaButton} href="mailto:accounts@dripexlab.com">
  Contact Us
</a>

      </div>
    </section>
  );
}
