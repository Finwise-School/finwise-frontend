import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">📜 Terms & Conditions</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Finwise School – Beta App</h2>
        <p><strong>Effective Date:</strong> [Insert Date]</p>
        <p><strong>Version:</strong> Beta 1.0</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Finwise School, a mobile application operated by Finwise School Ltd, a company registered in Scotland.
          These Terms and Conditions (“Terms”) govern your access to and use of our mobile application (the “App”).
          By using or accessing the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Company Information</h2>
        <p><strong>Company Name:</strong> Finwise School Ltd</p>
        <p><strong>Registered in:</strong> Scotland, United Kingdom</p>
        <p><strong>Company Number:</strong> SC819264</p>
        <p><strong>Registered Office:</strong> Inspire Hub, Level 6, 50 Richmond St, Glasgow G1 1XU</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Educational Purpose – No Financial Advice</h2>
        <p>
          Finwise School provides educational content only. We do not offer financial advice, investment recommendations, or regulated financial services.
        </p>
        <p>
          We are not authorized or regulated by the UK’s Financial Conduct Authority (FCA).
        </p>
        <p>
          All in-app content, including games like Budget Boss, simulations, and admin messages, are for informational and educational purposes only.
        </p>
        <p>
          You must not rely on any content within the App to make personal, financial, investment, or professional decisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Who Can Use the App</h2>
        <p>This App is designed for individuals aged 15 to 22 residing in the United Kingdom. By registering, you confirm that:</p>
        <ul className="list-disc list-inside mt-2">
          <li>You meet the minimum age requirement.</li>
          <li>You reside in the United Kingdom.</li>
          <li>You agree to these Terms and our Privacy Policy.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Use the App for any unlawful purpose or violate any laws.</li>
          <li>Misuse or tamper with the App’s functionality.</li>
          <li>Submit false or misleading information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
        <p>
          All content in the App is owned or licensed by Finwise School Ltd. You may not reproduce, distribute, or create derivative works without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
        <p>
          We do not guarantee the accuracy or completeness of any content. Finwise School Ltd is not liable for any loss resulting from reliance on the App’s content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
        <p>
          We may suspend or terminate your access to the App at any time without notice for any breach of these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of the App means you accept the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          For questions about these Terms, contact us at <a href="mailto:contact@finwiseschool.com" className="underline text-blue-400">support@finwiseschool.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
