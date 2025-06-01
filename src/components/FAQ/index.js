import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'When will the first Gateway App launch?',
    answer: 'Payfast is now live on the App Marketplace.',
  },
  {
    question: 'Which payment gateways are coming next?',
    answer: 'We’re prioritizing additional gateways based on demand, with a focus on Africa, LATAM, and Southeast Asia.',
  },
  {
    question: 'Which countries are you integrating payments for first?',
    answer: 'We’re starting with South Africa, Nigeria, Kenya, and Ghana, with more countries to follow.',
  },
  {
    question: 'Can I create custom payment flows with automation?',
    answer: 'Yes, you can create logic-driven flows—from split payments to triggered invoices—fully integrated into your CRM.',
  },
  {
    question: 'Do these work inside CRMs like Dripcel and HubSpot?',
    answer: 'Yes. Everything works natively inside supported CRMs without iframes, redirects, or plugins.',
  },
  {
    question: 'What makes this different from Stripe or PayPal plugins?',
    answer: 'This solution is CRM-native, works locally (e.g., in Africa), and doesn’t require workarounds like embed codes or external checkout pages.',
  },
  {
    question: 'Is support available for custom gateway requests?',
    answer: 'Yes. You can contact us with your requirements—especially if your business operates in regions outside of our current roadmap.',
  },
];


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqWrapper}>
        <p className={styles.label}>Got Questions?</p>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggleIndex(index)}
              >
                <strong>{faq.question}</strong>
                <span>{activeIndex === index ? '▲' : '▼'}</span>
              </button>
              {activeIndex === index && (
                <div className={styles.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
