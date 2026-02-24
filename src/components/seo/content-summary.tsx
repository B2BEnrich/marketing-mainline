import * as React from "react";

interface ContentSummaryProps {
  title: string;
  description: string;
  keyPoints: string[];
  className?: string;
}

export function ContentSummary({
  title,
  description,
  keyPoints,
  className = "",
}: ContentSummaryProps): React.JSX.Element {
  return (
    <section className={`sr-only ${className}`} aria-label="Page Summary">
      <h2>Summary: {title}</h2>
      <p>{description}</p>
      <h3>Key Features and Benefits:</h3>
      <ul>
        {keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

interface FAQSummaryProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
  className?: string;
}

export function FAQSummary({
  questions,
  className = "",
}: FAQSummaryProps): React.JSX.Element {
  return (
    <section className={`sr-only ${className}`} aria-label="FAQ Summary">
      <h2>Frequently Asked Questions Summary</h2>
      <p>Common questions and answers about B2BEnrich data enrichment API:</p>
      <dl>
        {questions.slice(0, 5).map((faq, index) => (
          <React.Fragment key={index}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}
