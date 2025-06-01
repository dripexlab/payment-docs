import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CustomFooter.module.css';

export default function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksRow}>
        <div className={styles.linkItem}>
  <a href="mailto:accounts@dripexlab.com">
    <span role="img" aria-label="email">📧</span> Contact support
  </a>
</div>

        <div className={styles.linkItem}>
          <Link to="/docs/intro">Docs</Link> {/* ✅ Updated to use Docusaurus Link */}
        </div>
      </div>

      <div className={styles.copy}>
        Copyrights 2025 | Dripex Lab | All Rights Reserved
      </div>
    </footer>
  );
}
