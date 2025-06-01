import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  const featuresTop = [
  {
    icon: '🧩',
    title: 'CRM-Integrated Payments',
    description: 'Enable seamless, native payment collection inside CRMs like HighLevel, Zoho, and HubSpot—no plugins or redirects needed.',
  },
  {
    icon: '🌍',
    title: 'Regional Payment Gateway Support',
    description: 'Launch locally with full support for trusted gateways like Payfast (SA), Peach Payments, and Paystack (Africa/Nigeria).',
  },
  {
    icon: '🛠️',
    title: 'Custom Payment Flows',
    description: 'Design unique workflows—from invoicing to split payments—fully integrated into your CRM’s logic engine and automation.',
  },
  {
    icon: '💳',
    title: 'Checkout, Links & Invoices',
    description: 'Use our unified API to create branded checkouts, payment links, and CRM-native invoices that sync across systems.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Transaction Sync',
    description: 'Track successful payments, declines, and statuses across all CRMs with webhook-driven updates and automation triggers.',
  },
  {
    icon: '🔒',
    title: 'Secure by Design',
    description: 'Built with PCI-DSS compliance, tokenization, and secure vaulting to meet the standards of global payment security.',
  },
];




  return (
    <section className={styles.featuresSection}>
      <p className={styles.sectionLabel}>Cutting-Edge Technologies</p>
      <h2 className={styles.sectionHeading}>
        Shaping the Future of Digital Commerce
      </h2>

      <div className={styles.featureGrid}>
        {featuresTop.map((item, index) => (
          <div key={index} className={styles.featureBox}>
            <div className={styles.featureIcon}>{item.icon}</div>
            <h3 className={styles.featureTitle}>{item.title}</h3>
            <p className={styles.featureDesc}>{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
