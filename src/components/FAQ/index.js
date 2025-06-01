import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'When will the first Gateway App be available?',
    answer:
      'Both Paystack and Payfast are available now on the HighLevel App Marketplace.',
  },
  {
    question: 'Which Gateways are going to be made available?',
    answer:
      'We are working on additional gateways based on market demand, including regional options in Africa, LATAM, and SE Asia.',
  },
  {
    question: 'Which Countries are you building Payment Integrations for?',
    answer:
      'We’re prioritizing South Africa, Nigeria, Kenya, and Ghana to start, with more countries coming soon.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
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
