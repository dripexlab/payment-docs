import React from 'react';
import clsx from 'clsx';
import styles from './EnterprisePlusPricing.module.css';
import Link from '@docusaurus/Link';

export default function EnterprisePlusPricing() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.headerWrapper}>
        <p className={styles.sectionLabel}>Pricing Plans</p>
        <h2 className={styles.sectionTitle}>Your CRM, Your Flow, Your Pricing</h2>
        <p className={styles.sectionSubtitle}>
          Connect to Payfast, Paystack, Peach Payments and beyond with tailored solutions that match your team’s exact needs.
        </p>
      </div>

      <div className={styles.pricingGrid}>
        <div className={clsx(styles.pricingCard, styles.starterCard)}>
          <div className={styles.pricingHeader}>
            <h3>Starter</h3>
            <p className={styles.price}>
              Custom Build <span className={styles.perMonth}>(from $2K/mo)</span>
            </p>
          </div>
          <p className={styles.planDescription}>
            Best for small teams starting their online payments journey.
          </p>
          <ul className={styles.featuresList}>
            <li>🌐 Checkout, Links & Invoices</li>
            <li>🔄 Real-Time Transaction Sync</li>
            <li>🔐 Secure by Design</li>
          </ul>
          <div className={styles.cta}>
 <Link to="/contact" className={styles.customSolutionBtn}>
  Contact Sales
</Link>
          </div>
        </div>

        <div className={clsx(styles.pricingCard, styles.proCard)}>
          <div className={styles.pricingHeader}>
            <h3>Pro</h3>
            <p className={styles.price}>
              Custom Build <span className={styles.perMonth}>(from $3K/mo)</span>
            </p>
          </div>
          <p className={styles.planDescription}>
            Designed for growing businesses ready to scale payment automation.
          </p>
          <ul className={styles.featuresList}>
            <li>📈 Enhanced Insights & Reports</li>
            <li>⚙️ CRM-Native Integrations (Dripcel, GHL, Zoho)</li>
            <li>🧩 Customizable Branding</li>
          </ul>
          <div className={styles.cta}>
 <Link to="/contact" className={styles.customSolutionBtn}>
  Contact Sales
</Link>
          </div>
        </div>

        <div className={clsx(styles.pricingCard, styles.enterpriseCard)}>
          <div className={styles.pricingHeader}>
            <h3>Enterprise Plus</h3>
            <p className={styles.price}>
              Custom Build <span className={styles.perMonth}>(from $5K/mo)</span>
            </p>
          </div>
          <p className={styles.planDescription}>
            Perfect for payment-heavy businesses and CRM-first teams needing tailor-made solutions.
          </p>
          <ul className={styles.featuresList}>
            <li>🔌 CRM-Native Integrations (Dripcel, GHL, Zoho, HubSpot)</li>
            <li>🌐 Gateway Customization (Payfast, Paystack, Peach Payments)</li>
            <li>🔁 Webhook & API Automation Engine</li>
            <li>🧠 Strategy & Onboarding Support</li>
            <li>🔒 Enterprise-Grade Security (PCI-compliant)</li>
          </ul>
          <div className={styles.cta}>
 <Link to="/contact" className={styles.customSolutionBtn}>
  Contact Sales
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
