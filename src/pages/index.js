import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CuttingEdgeFeatures from '@site/src/components/CuttingEdgeFeatures';
import EnterprisePlusPricing from '@site/src/components/EnterprisePlusPricing';
import FAQ from '@site/src/components/FAQ';
import CustomFooter from '@site/src/components/CustomFooter';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <p className={styles.heroLabel}>Custom Payments API Solutions</p>
        <h1 className={styles.heroTitle}>
          Powering What's Next
        </h1>
        <p className={styles.heroSupportText}>
          Seamlessly power your Sales Funnels, Checkouts, Invoices, Order Forms, and Payment Links directly within any CRM of your choice - no hacks, no embedded links, no awkward workarounds.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.ctaButton} to="/docs/intro">
            Visit Docs and Product Updates
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Dripex Lab"
      description="Dripex Lab builds advanced online payment solutions for CRMs, enabling seamless integration and optimized customer workflows"
    >
      <HomepageHeader />
      <main>
        <CuttingEdgeFeatures />
        <HomepageFeatures />
        <EnterprisePlusPricing />
        <FAQ />
        <CustomFooter />
      </main>
    </Layout>
  );
}
